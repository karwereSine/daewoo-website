#!/bin/bash
set -e

# DAEWOO Website 阿里云 OSS 静态网页同步脚本
# 线上访问地址: https://deawoo.tgripon.com/index.html

OSSUTIL_BIN="/Users/sin/bin/ossutil"
BUCKET="oss://daewoo"
ENDPOINT="oss-cn-beijing.aliyuncs.com"
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

if [ ! -x "$OSSUTIL_BIN" ]; then
    echo "错误: 未找到 ossutil 工具，请检查路径: $OSSUTIL_BIN"
    exit 1
fi

echo "=========================================="
echo "开始同步静态网站到阿里云 OSS ($BUCKET)"
echo "目标域名: https://deawoo.tgripon.com"
echo "=========================================="

cd "$PROJECT_DIR"

# 执行增量上传 (-u: 仅上传新增或修改过的文件, -r: 递归目录)
"$OSSUTIL_BIN" cp -r -u ./ "$BUCKET/" \
    -e "$ENDPOINT" \
    --exclude ".git*" \
    --exclude ".idea*" \
    --exclude ".DS_Store" \
    --exclude "target*" \
    --exclude "src*" \
    --exclude "deploy*" \
    --exclude "documents*" \
    --exclude "node_modules*" \
    --exclude "*.sh" \
    --exclude "pom.xml" \
    --exclude "webpack*" \
    --exclude "package*.json"

echo "=========================================="
echo "同步完成！"
echo "线上站点: https://deawoo.tgripon.com/index.html"
echo "产品中心: https://deawoo.tgripon.com/product-center.html"
echo "=========================================="
