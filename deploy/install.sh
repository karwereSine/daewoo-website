#!/bin/bash

# 서버 초기 설정 스크립트
# 서버에서 직접 실행: bash install.sh

set -e

APP_NAME="daewoo-website"
APP_DIR="/opt/applications/${APP_NAME}"
SERVICE_NAME="${APP_NAME}"
JAR_FILE="${APP_NAME}-1.0.0.jar"
SERVICE_USER="daewoo"

echo "=========================================="
echo "DAEWOO Website 서버 초기 설정"
echo "=========================================="

# 1. Java 설치 확인
echo "[1/7] Java 설치 확인 중..."
if ! command -v java &> /dev/null; then
    echo "Java가 설치되어 있지 않습니다. 설치 중..."
    apt-get update
    apt-get install -y openjdk-17-jdk
fi
java -version

# 2. 애플리케이션 디렉토리 생성
echo "[2/7] 애플리케이션 디렉토리 생성 중..."
mkdir -p ${APP_DIR}
mkdir -p ${APP_DIR}/logs
mkdir -p ${APP_DIR}/backup

# 3. Systemd 서비스 파일 생성
echo "[3/7] Systemd 서비스 파일 생성 중..."
cat > /etc/systemd/system/${SERVICE_NAME}.service << EOF
[Unit]
Description=DAEWOO Website Spring Boot Application
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=${APP_DIR}
ExecStart=/usr/bin/java -jar \\
    -Xms256m \\
    -Xmx512m \\
    -XX:+UseG1GC \\
    -XX:MaxGCPauseMillis=200 \\
    -Djava.security.egd=file:/dev/./urandom \\
    ${APP_DIR}/${JAR_FILE}
Restart=always
RestartSec=10
StandardOutput=append:${APP_DIR}/logs/application.log
StandardError=append:${APP_DIR}/logs/application.log

[Install]
WantedBy=multi-user.target
EOF

# 4. Nginx 설치
echo "[4/7] Nginx 설치 중..."
if ! command -v nginx &> /dev/null; then
    apt-get update
    apt-get install -y nginx
fi

# 5. SSL 인증서 생성 (self-signed)
echo "[5/7] SSL 인증서 생성 중..."
SSL_DIR="/etc/nginx/ssl"
mkdir -p ${SSL_DIR}

if [ ! -f "${SSL_DIR}/${APP_NAME}.crt" ]; then
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout ${SSL_DIR}/${APP_NAME}.key \
        -out ${SSL_DIR}/${APP_NAME}.crt \
        -subj "/C=KR/ST=Seoul/L=Seoul/O=DAEWOO/CN=158.247.239.66"
    echo "Self-signed SSL 인증서가 생성되었습니다."
    echo "주의: 도메인 연결 후 Let's Encrypt 인증서로 교체해야 합니다."
fi

# 6. Nginx 설정
echo "[6/7] Nginx 설정 중..."
cat > /etc/nginx/sites-available/${APP_NAME} << 'NGINX_EOF'
# HTTP to HTTPS 리다이렉트
server {
    listen 80;
    server_name 158.247.239.66;
    
    # Let's Encrypt 인증서 갱신을 위한 경로
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    # 모든 HTTP 요청을 HTTPS로 리다이렉트
    location / {
        return 301 https://$host$request_uri;
    }
}

# HTTPS 서버
server {
    listen 443 ssl http2;
    server_name 158.247.239.66;
    
    # SSL 인증서 설정
    ssl_certificate /etc/nginx/ssl/daewoo-website.crt;
    ssl_certificate_key /etc/nginx/ssl/daewoo-website.key;
    
    # SSL 보안 설정
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # 보안 헤더
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # 로그 설정
    access_log /var/log/nginx/daewoo-website_access.log;
    error_log /var/log/nginx/daewoo-website_error.log;
    
    # 정적 파일 캐싱
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        root /opt/applications/daewoo-website;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
    
    # Spring Boot 애플리케이션으로 프록시
    location / {
        proxy_pass http://localhost:8081;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Port $server_port;
        
        # 타임아웃 설정
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # 버퍼 설정
        proxy_buffering off;
        proxy_request_buffering off;
    }
}
NGINX_EOF

# 기존 설정 비활성화 및 새 설정 활성화
ln -sf /etc/nginx/sites-available/${APP_NAME} /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Nginx 설정 테스트
nginx -t

# 7. 방화벽 설정
echo "[7/7] 방화벽 설정 중..."
if command -v ufw &> /dev/null; then
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw allow 8081/tcp
fi

# Systemd 리로드
systemctl daemon-reload

echo "=========================================="
echo "초기 설정 완료!"
echo "=========================================="
echo "다음 단계:"
echo "1. JAR 파일을 ${APP_DIR}/ 에 업로드하세요"
echo "2. systemctl start ${SERVICE_NAME} 로 서비스를 시작하세요"
echo "3. systemctl restart nginx 로 Nginx를 재시작하세요"
echo ""
echo "도메인 연결 후 Let's Encrypt 인증서로 교체:"
echo "  certbot --nginx -d yourdomain.com"

