# DAEWOO Website 部署指南 (中文)

## 目录
1. [概述](#概述)
2. [前置要求](#前置要求)
3. [服务器初始设置](#服务器初始设置)
4. [SSL证书设置](#ssl证书设置)
5. [应用程序部署](#应用程序部署)
6. [服务管理](#服务管理)
7. [故障排除](#故障排除)
8. [域名连接后SSL证书更换](#域名连接后ssl证书更换)

## 概述

本文档说明如何将DAEWOO Website部署到Vultr云服务器。

**服务器信息:**
- 服务器IP: 158.247.239.66
- 运行端口: 8080, 9000 (现有服务)
- 新应用程序端口: 8081 (内部), 80/443 (Nginx代理)

## 前置要求

### 本地环境
- Java 17 或更高版本
- Maven 3.6 或更高版本
- SSH客户端
- SSH密钥文件 (`key/vultr-gpg-portal`)

### 服务器环境
- 基于Ubuntu/Debian的Linux
- Root访问权限
- 端口80, 443, 8081可用

## 服务器初始设置

### 1. 连接到服务器

```bash
ssh -i key/vultr-gpg-portal root@158.247.239.66
```

### 2. 运行初始设置脚本

将 `deploy/install.sh` 文件上传到服务器并执行:

```bash
# 从本地上传文件
scp -i key/vultr-gpg-portal deploy/install.sh root@158.247.239.66:/root/

# 在服务器上执行
ssh -i key/vultr-gpg-portal root@158.247.239.66
chmod +x /root/install.sh
/root/install.sh
```

此脚本将执行以下操作:
- 检查/安装Java 17
- 创建应用程序目录 (`/opt/applications/daewoo-website`)
- 创建Systemd服务文件
- 安装和配置Nginx
- 生成Self-signed SSL证书
- 配置防火墙

### 3. 验证设置

```bash
# 测试Nginx配置
nginx -t

# 检查服务文件
cat /etc/systemd/system/daewoo-website.service
```

## SSL证书设置

### 当前状态: Self-signed证书

初始设置时会自动生成self-signed SSL证书:
- 证书: `/etc/nginx/ssl/daewoo-website.crt`
- 私钥: `/etc/nginx/ssl/daewoo-website.key`

**注意:** Self-signed证书会在浏览器中显示安全警告。生产环境应使用Let's Encrypt证书。

### 域名连接后更换为Let's Encrypt证书

连接域名后，请按照以下步骤操作:

1. **安装Certbot**
```bash
apt-get update
apt-get install -y certbot python3-certbot-nginx
```

2. **申请证书**
```bash
certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

3. **设置自动续期**
```bash
certbot renew --dry-run
```

证书将自动续期，Nginx配置也会自动更新。

## 应用程序部署

### 方法1: 使用部署脚本 (推荐)

```bash
# 在本地执行
chmod +x deploy.sh
./deploy.sh
```

此脚本将执行以下操作:
1. 在本地进行Maven构建
2. 将JAR文件上传到服务器
3. 备份现有文件
4. 重启服务

### 方法2: 手动部署

1. **在本地构建**
```bash
mvn clean package -DskipTests
```

2. **上传到服务器**
```bash
scp -i key/vultr-gpg-portal target/daewoo-website-1.0.0.jar root@158.247.239.66:/opt/applications/daewoo-website/
```

3. **重启服务**
```bash
ssh -i key/vultr-gpg-portal root@158.247.239.66
systemctl restart daewoo-website
```

## 服务管理

### 启动/停止/重启服务

```bash
# 启动服务
systemctl start daewoo-website

# 停止服务
systemctl stop daewoo-website

# 重启服务
systemctl restart daewoo-website

# 检查服务状态
systemctl status daewoo-website

# 设置开机自启
systemctl enable daewoo-website
```

### 查看日志

```bash
# 实时查看日志
tail -f /opt/applications/daewoo-website/logs/application.log

# Nginx访问日志
tail -f /var/log/nginx/daewoo-website_access.log

# Nginx错误日志
tail -f /var/log/nginx/daewoo-website_error.log

# Systemd日志
journalctl -u daewoo-website -f
```

### Nginx管理

```bash
# 重启Nginx
systemctl restart nginx

# 测试Nginx配置
nginx -t

# 检查Nginx状态
systemctl status nginx
```

## 故障排除

### 检查端口冲突

```bash
# 检查端口使用情况
netstat -tlnp | grep -E ':80|:443|:8081'

# 检查进程
ps aux | grep java
```

### 服务无法启动时

1. **查看日志**
```bash
journalctl -u daewoo-website -n 50
```

2. **检查JAR文件**
```bash
ls -lh /opt/applications/daewoo-website/
java -jar /opt/applications/daewoo-website/daewoo-website-1.0.0.jar
```

3. **检查端口**
```bash
# 确认应用程序是否在8081端口运行
curl http://localhost:8081
```

### SSL证书错误

1. **检查证书文件**
```bash
ls -lh /etc/nginx/ssl/
openssl x509 -in /etc/nginx/ssl/daewoo-website.crt -text -noout
```

2. **检查Nginx SSL配置**
```bash
nginx -t
cat /etc/nginx/sites-available/daewoo-website
```

### Nginx 502 Bad Gateway错误

1. **检查Spring Boot应用程序**
```bash
curl http://localhost:8081
systemctl status daewoo-website
```

2. **检查代理设置**
```bash
cat /etc/nginx/sites-available/daewoo-website | grep proxy_pass
```

## 域名连接后SSL证书更换

连接域名后，请按照以下步骤更换为Let's Encrypt证书:

### 1. DNS设置

将域名的A记录设置为服务器IP(158.247.239.66)。

### 2. 安装Certbot并申请证书

```bash
# 安装Certbot
apt-get update
apt-get install -y certbot python3-certbot-nginx

# 申请证书 (将yourdomain.com替换为实际域名)
certbot --nginx -d yourdomain.com -d www.yourdomain.com

# 测试证书自动续期
certbot renew --dry-run
```

### 3. 更新Nginx配置

Certbot会自动更新Nginx配置。手动检查:

```bash
cat /etc/nginx/sites-available/daewoo-website
```

### 4. 证书自动续期

Let's Encrypt证书需要每90天续期一次。Certbot会设置自动续期:

```bash
# 检查自动续期设置
systemctl status certbot.timer

# 手动续期
certbot renew
```

## 访问信息

部署完成后，可通过以下URL访问:

- **HTTP**: http://158.247.239.66 (自动重定向到HTTPS)
- **HTTPS**: https://158.247.239.66
- **直接访问**: http://158.247.239.66:8081 (绕过Nginx)

## 其他注意事项

### 避免与现有服务冲突

- 端口8080, 9000: 现有服务使用中 (不更改)
- 端口8081: 新的DAEWOO Website应用程序
- 端口80, 443: Nginx (代理所有服务)

### 安全建议

1. 检查防火墙设置
2. 使用SSH密钥认证
3. 定期安全更新
4. 监控日志
5. 使用最新版本的SSL/TLS

### 性能优化

1. 调整JVM堆内存 (`-Xms`, `-Xmx`)
2. Nginx缓存设置
3. 考虑使用CDN提供静态文件
4. 优化数据库连接池

## 支持

如遇问题，请检查:
1. 日志文件
2. 服务状态
3. 网络连接
4. 防火墙设置

