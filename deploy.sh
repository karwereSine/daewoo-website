#!/bin/bash

# DAEWOO Website 배포 스크립트
# 사용법: ./deploy.sh

set -e

SERVER_IP="158.247.239.66"
SERVER_USER="root"
SSH_KEY="key/vultr-gpg-portal"
APP_NAME="daewoo-website"
APP_DIR="/opt/applications/${APP_NAME}"
SERVICE_NAME="${APP_NAME}"
JAR_FILE="${APP_NAME}-1.0.0.jar"
LOCAL_JAR="target/${JAR_FILE}"

echo "=========================================="
echo "DAEWOO Website 배포 시작"
echo "=========================================="

# 1. 로컬에서 빌드
echo "[1/5] 로컬에서 빌드 중..."
mvn clean package -DskipTests

# 2. JAR 파일이 생성되었는지 확인
if [ ! -f "$LOCAL_JAR" ]; then
    echo "오류: JAR 파일을 찾을 수 없습니다: $LOCAL_JAR"
    exit 1
fi

# 3. 서버에 디렉토리 생성
echo "[2/5] 서버에 디렉토리 생성 중..."
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "${SERVER_USER}@${SERVER_IP}" << EOF
    mkdir -p ${APP_DIR}
    mkdir -p ${APP_DIR}/logs
    mkdir -p ${APP_DIR}/backup
EOF

# 4. 기존 JAR 파일 백업
echo "[3/5] 기존 JAR 파일 백업 중..."
ssh -i "$SSH_KEY" "${SERVER_USER}@${SERVER_IP}" << EOF
    if [ -f "${APP_DIR}/${JAR_FILE}" ]; then
        cp "${APP_DIR}/${JAR_FILE}" "${APP_DIR}/backup/${JAR_FILE}.$(date +%Y%m%d_%H%M%S)"
    fi
EOF

# 5. JAR 파일 업로드
echo "[4/5] JAR 파일 업로드 중..."
scp -i "$SSH_KEY" "$LOCAL_JAR" "${SERVER_USER}@${SERVER_IP}:${APP_DIR}/"

# 6. 서비스 재시작
echo "[5/5] 서비스 재시작 중..."
ssh -i "$SSH_KEY" "${SERVER_USER}@${SERVER_IP}" << EOF
    systemctl restart ${SERVICE_NAME} || systemctl start ${SERVICE_NAME}
    sleep 3
    systemctl status ${SERVICE_NAME} --no-pager
EOF

echo "=========================================="
echo "배포 완료!"
echo "=========================================="
echo "애플리케이션 URL: http://${SERVER_IP}:8081"
echo "로그 확인: ssh -i ${SSH_KEY} ${SERVER_USER}@${SERVER_IP} 'tail -f ${APP_DIR}/logs/application.log'"

