# DAEWOO Website 배포 가이드 (한국어)

## 목차
1. [개요](#개요)
2. [사전 요구사항](#사전-요구사항)
3. [서버 초기 설정](#서버-초기-설정)
4. [SSL 인증서 설정](#ssl-인증서-설정)
5. [애플리케이션 배포](#애플리케이션-배포)
6. [서비스 관리](#서비스-관리)
7. [문제 해결](#문제-해결)
8. [도메인 연결 후 SSL 인증서 교체](#도메인-연결-후-ssl-인증서-교체)

## 개요

이 문서는 DAEWOO Website를 Vultr 클라우드 서버에 배포하는 방법을 설명합니다.

**서버 정보:**
- 서버 IP: 158.247.239.66
- 운영 포트: 8080, 9000 (기존 서비스)
- 새 애플리케이션 포트: 8081 (내부), 80/443 (Nginx 프록시)

## 사전 요구사항

### 로컬 환경
- Java 17 이상
- Maven 3.6 이상
- SSH 클라이언트
- SSH 키 파일 (`key/vultr-gpg-portal`)

### 서버 환경
- Ubuntu/Debian 기반 Linux
- Root 접근 권한
- 포트 80, 443, 8081 사용 가능

## 서버 초기 설정

### 1. 서버에 접속

```bash
ssh -i key/vultr-gpg-portal root@158.247.239.66
```

### 2. 초기 설정 스크립트 실행

서버에 `deploy/install.sh` 파일을 업로드하고 실행합니다:

```bash
# 로컬에서 파일 업로드
scp -i key/vultr-gpg-portal deploy/install.sh root@158.247.239.66:/root/

# 서버에서 실행
ssh -i key/vultr-gpg-portal root@158.247.239.66
chmod +x /root/install.sh
/root/install.sh
```

이 스크립트는 다음 작업을 수행합니다:
- Java 17 설치 확인/설치
- 애플리케이션 디렉토리 생성 (`/opt/applications/daewoo-website`)
- Systemd 서비스 파일 생성
- Nginx 설치 및 설정
- Self-signed SSL 인증서 생성
- 방화벽 설정

### 3. 설정 확인

```bash
# Nginx 설정 테스트
nginx -t

# 서비스 파일 확인
cat /etc/systemd/system/daewoo-website.service
```

## SSL 인증서 설정

### 현재 상태: Self-signed 인증서

초기 설정 시 self-signed SSL 인증서가 자동으로 생성됩니다:
- 인증서: `/etc/nginx/ssl/daewoo-website.crt`
- 개인키: `/etc/nginx/ssl/daewoo-website.key`

**주의:** Self-signed 인증서는 브라우저에서 보안 경고를 표시합니다. 프로덕션 환경에서는 Let's Encrypt 인증서를 사용해야 합니다.

### 도메인 연결 후 Let's Encrypt 인증서로 교체

도메인을 연결한 후 다음 단계를 따르세요:

1. **Certbot 설치**
```bash
apt-get update
apt-get install -y certbot python3-certbot-nginx
```

2. **인증서 발급**
```bash
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

3. **자동 갱신 설정**
```bash
certbot renew --dry-run
```

인증서는 자동으로 갱신되며, Nginx 설정도 자동으로 업데이트됩니다.

## 애플리케이션 배포

### 방법 1: 배포 스크립트 사용 (권장)

```bash
# 로컬에서 실행
chmod +x deploy.sh
./deploy.sh
```

이 스크립트는 다음을 수행합니다:
1. 로컬에서 Maven 빌드
2. 서버에 JAR 파일 업로드
3. 기존 파일 백업
4. 서비스 재시작

### 방법 2: 수동 배포

1. **로컬에서 빌드**
```bash
mvn clean package -DskipTests
```

2. **서버에 업로드**
```bash
scp -i key/vultr-gpg-portal target/daewoo-website-1.0.0.jar root@158.247.239.66:/opt/applications/daewoo-website/
```

3. **서비스 재시작**
```bash
ssh -i key/vultr-gpg-portal root@158.247.239.66
systemctl restart daewoo-website
```

## 서비스 관리

### 서비스 시작/중지/재시작

```bash
# 서비스 시작
systemctl start daewoo-website

# 서비스 중지
systemctl stop daewoo-website

# 서비스 재시작
systemctl restart daewoo-website

# 서비스 상태 확인
systemctl status daewoo-website

# 부팅 시 자동 시작 설정
systemctl enable daewoo-website
```

### 로그 확인

```bash
# 실시간 로그 확인
tail -f /opt/applications/daewoo-website/logs/application.log

# Nginx 액세스 로그
tail -f /var/log/nginx/daewoo-website_access.log

# Nginx 에러 로그
tail -f /var/log/nginx/daewoo-website_error.log

# Systemd 로그
journalctl -u daewoo-website -f
```

### Nginx 관리

```bash
# Nginx 재시작
systemctl restart nginx

# Nginx 설정 테스트
nginx -t

# Nginx 상태 확인
systemctl status nginx
```

## 문제 해결

### 포트 충돌 확인

```bash
# 포트 사용 확인
netstat -tlnp | grep -E ':80|:443|:8081'

# 프로세스 확인
ps aux | grep java
```

### 서비스가 시작되지 않는 경우

1. **로그 확인**
```bash
journalctl -u daewoo-website -n 50
```

2. **JAR 파일 확인**
```bash
ls -lh /opt/applications/daewoo-website/
java -jar /opt/applications/daewoo-website/daewoo-website-1.0.0.jar
```

3. **포트 확인**
```bash
# 애플리케이션이 8081 포트에서 실행 중인지 확인
curl http://localhost:8081
```

### SSL 인증서 오류

1. **인증서 파일 확인**
```bash
ls -lh /etc/nginx/ssl/
openssl x509 -in /etc/nginx/ssl/daewoo-website.crt -text -noout
```

2. **Nginx SSL 설정 확인**
```bash
nginx -t
cat /etc/nginx/sites-available/daewoo-website
```

### Nginx 502 Bad Gateway 오류

1. **Spring Boot 애플리케이션 확인**
```bash
curl http://localhost:8081
systemctl status daewoo-website
```

2. **프록시 설정 확인**
```bash
cat /etc/nginx/sites-available/daewoo-website | grep proxy_pass
```

## 도메인 연결 후 SSL 인증서 교체

도메인을 연결한 후 다음 단계를 따라 Let's Encrypt 인증서로 교체하세요:

### 1. DNS 설정

도메인의 A 레코드를 서버 IP(158.247.239.66)로 설정합니다.

### 2. Certbot 설치 및 인증서 발급

```bash
# Certbot 설치
apt-get update
apt-get install -y certbot python3-certbot-nginx

# 인증서 발급 (yourdomain.com을 실제 도메인으로 변경)
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 인증서 자동 갱신 테스트
certbot renew --dry-run
```

### 3. Nginx 설정 업데이트

Certbot이 자동으로 Nginx 설정을 업데이트합니다. 수동으로 확인하려면:

```bash
cat /etc/nginx/sites-available/daewoo-website
```

### 4. 인증서 자동 갱신

Let's Encrypt 인증서는 90일마다 갱신되어야 합니다. Certbot은 자동 갱신을 설정합니다:

```bash
# 자동 갱신 설정 확인
systemctl status certbot.timer

# 수동 갱신
certbot renew
```

## 접속 정보

배포 완료 후 다음 URL로 접속할 수 있습니다:

- **HTTP**: http://158.247.239.66 (자동으로 HTTPS로 리다이렉트)
- **HTTPS**: https://158.247.239.66
- **직접 접속**: http://158.247.239.66:8081 (Nginx 우회)

## 추가 참고사항

### 기존 서비스와의 충돌 방지

- 포트 8080, 9000: 기존 서비스 사용 중 (변경하지 않음)
- 포트 8081: 새 DAEWOO Website 애플리케이션
- 포트 80, 443: Nginx (모든 서비스를 프록시)

### 보안 권장사항

1. 방화벽 설정 확인
2. SSH 키 기반 인증 사용
3. 정기적인 보안 업데이트
4. 로그 모니터링
5. SSL/TLS 최신 버전 사용

### 성능 최적화

1. JVM 힙 메모리 조정 (`-Xms`, `-Xmx`)
2. Nginx 캐싱 설정
3. 정적 파일 CDN 사용 고려
4. 데이터베이스 연결 풀 최적화

## 지원

문제가 발생하면 다음을 확인하세요:
1. 로그 파일
2. 서비스 상태
3. 네트워크 연결
4. 방화벽 설정

