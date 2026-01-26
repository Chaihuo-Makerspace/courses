# Docker 自动部署指南

本文档详细说明如何在生产服务器上配置和使用 Docker 自动部署系统，实现柴火创客学院课程网站的一键式部署和更新。

## 📋 前置要求

在开始部署前，请确保满足以下条件：

### 服务器要求

- **操作系统**：Ubuntu 20.04+ / Debian 10+ / CentOS 7+ / RHEL 8+
- **内存**：至少 512MB（建议 1GB 以上）
- **磁盘空间**：至少 5GB（Docker 镜像和日志）
- **网络**：互联网连接，能访问 GitHub Container Registry（ghcr.io）

### 必需软件

- **Docker**：版本 20.10 或更高
- **Docker Compose**：版本 1.29 或更高
- **curl**：用于健康检查（通常已预装）
- **git**：用于克隆仓库（可选，可直接下载配置文件）

### 身份验证

- **GitHub 账户**：用于从 GitHub Container Registry (GHCR) 拉取 Docker 镜像
  - 如果仓库是公开的，可无需登录
  - 如果仓库是私有的，需要个人访问令牌 (Personal Access Token)

### 目录结构

部署后将使用以下目录结构：

```
/opt/seeed-course/                    # 建议部署目录
├── docker-compose.yml                # Docker 编排配置
├── deploy.sh                          # 自动部署脚本
├── .env                               # 环境变量配置（不提交到 git）
└── .env.example                       # 环境变量模板
```

---

## 🔧 服务器配置

按以下步骤在服务器上完成初始化配置。

### 1. 安装 Docker

#### Ubuntu / Debian

```bash
# 更新包列表
sudo apt update

# 安装必要依赖
sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release

# 添加 Docker 官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 添加 Docker 官方软件源
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装 Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 验证安装
docker --version
docker-compose --version
```

#### CentOS / RHEL

```bash
# 安装依赖
sudo yum install -y yum-utils

# 添加 Docker 官方软件源
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# 安装 Docker
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 启动 Docker 服务
sudo systemctl start docker
sudo systemctl enable docker

# 验证安装
docker --version
docker-compose --version
```

### 2. 配置 Docker（允许非 root 用户使用）

```bash
# 创建 docker 用户组（如果不存在）
sudo groupadd docker

# 将当前用户添加到 docker 组
sudo usermod -aG docker $USER

# 应用新的用户组（选择其一）
# 选项 A：注销并重新登录
exit

# 选项 B：激活新组（临时，不用重新登录）
newgrp docker

# 验证配置
docker ps

# 预期输出：
# CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
# （空表示成功）
```

### 3. 登录 GitHub Container Registry（GHCR）

如果拉取的镜像来自私有仓库，需要进行身份验证：

```bash
# 使用 Personal Access Token 登录
# 首先在 GitHub 上创建 Token：https://github.com/settings/tokens
# 需要权限：read:packages

echo "YOUR_GITHUB_TOKEN" | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin

# 预期输出：
# Login Succeeded
```

如果使用公开仓库，可跳过此步骤。

### 4. 克隆或下载配置文件

#### 方式 A：使用 git（推荐）

```bash
# 创建部署目录
mkdir -p /opt/seeed-course
cd /opt/seeed-course

# 克隆仓库（或仅指定目录）
git clone https://github.com/seeed-studio/seeed-2026-course.git .
cd website

# 或者如果你只想部署 website 目录
git clone --sparse https://github.com/seeed-studio/seeed-2026-course.git .
git sparse-checkout set website
cd website
```

#### 方式 B：直接下载配置文件

```bash
# 创建部署目录
mkdir -p /opt/seeed-course
cd /opt/seeed-course

# 下载必要文件
wget https://raw.githubusercontent.com/seeed-studio/seeed-2026-course/main/website/docker-compose.yml
wget https://raw.githubusercontent.com/seeed-studio/seeed-2026-course/main/website/deploy.sh
wget https://raw.githubusercontent.com/seeed-studio/seeed-2026-course/main/website/.env.example

# 赋予脚本执行权限
chmod +x deploy.sh
```

### 5. 验证服务器配置

```bash
# 检查 Docker 是否正常运行
docker ps

# 检查 Docker Compose 版本
docker-compose --version

# 检查网络连接（能否拉取镜像）
docker pull hello-world
docker run --rm hello-world

# 清理测试镜像
docker rmi hello-world

# 预期输出：
# Hello from Docker!
# This message shows that your installation appears to be working correctly.
```

---

## 🚀 首次部署

完成服务器配置后，按以下步骤进行首次部署。

### 1. 准备环境变量配置

```bash
cd /opt/seeed-course

# 复制 .env.example 到 .env
cp .env.example .env

# 编辑 .env 文件
nano .env
```

编辑内容示例：

```env
# GitHub 仓库路径（必填）
GITHUB_REPOSITORY=seeed-studio/seeed-2026-course

# 容器端口映射（可选，默认 3000）
PORT=3000

# Docker 镜像标签（可选，默认 latest）
# 可用值：latest, main, v1.0.0, 或特定的 commit SHA
IMAGE_TAG=latest

# Node.js 运行环境（可选，默认 production）
NODE_ENV=production
```

**配置说明**：

| 变量 | 说明 | 示例 | 必填 |
|------|------|------|------|
| `GITHUB_REPOSITORY` | GitHub 仓库路径 | `seeed-studio/seeed-2026-course` | ✅ |
| `PORT` | 宿主机端口 | `3000`, `8080` | ❌ 默认 3000 |
| `IMAGE_TAG` | 镜像版本标签 | `latest`, `v1.0.0` | ❌ 默认 latest |
| `NODE_ENV` | Node 环境 | `production`, `development` | ❌ 默认 production |

### 2. 拉取镜像并启动容器

```bash
cd /opt/seeed-course

# 方式 A：使用自动部署脚本（推荐）
./deploy.sh

# 预期输出：
# [2026-01-26 10:30:00] 🚀 开始部署...
# [2026-01-26 10:30:01] ✓ Docker 已安装
# [2026-01-26 10:30:02] ✓ docker-compose 已安装
# ...
# [2026-01-26 10:30:15] 🎉 部署完成！
# ===== 部署总结 =====
# 部署时间: 2026-01-26 10:30:15
# 服务目录: /opt/seeed-course
# 状态: 运行中
```

或者，如果要手动运行：

```bash
# 方式 B：手动使用 Docker Compose
docker-compose pull                    # 拉取最新镜像
docker-compose up -d                  # 启动服务
docker-compose ps                      # 查看状态
```

### 3. 验证部署成功

```bash
# 检查容器运行状态
docker-compose ps

# 预期输出：
# NAME              COMMAND              SERVICE   STATUS      PORTS
# seeed-website     "pnpm start"         website   Up 3 seconds 0.0.0.0:3000->3000/tcp

# 查看容器日志
docker-compose logs -f

# 预期输出最后几行包含：
# > seeed-2026-course-website@1.0.0 start
# > node dist/server/entry.mjs
# Server running at http://localhost:3000/
```

### 4. 访问应用

在浏览器中访问：

```
http://YOUR_SERVER_IP:3000
```

或者在服务器本地测试：

```bash
# 使用 curl 测试
curl -I http://localhost:3000

# 预期输出：
# HTTP/1.1 200 OK
# Content-Type: text/html
# ...
```

如果响应正常，部署成功！

### 5. 配置反向代理（可选但推荐）

如果要通过标准 HTTP/HTTPS 端口（80/443）访问，建议配置反向代理。

#### Nginx 配置示例

```bash
# 安装 Nginx
sudo apt install -y nginx

# 创建配置文件
sudo nano /etc/nginx/sites-available/seeed-course
```

配置内容：

```nginx
upstream seeed_course {
    server localhost:3000;
}

server {
    listen 80;
    server_name your-domain.com;

    # 日志文件
    access_log /var/log/nginx/seeed-course-access.log;
    error_log /var/log/nginx/seeed-course-error.log;

    # 反向代理
    location / {
        proxy_pass http://seeed_course;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

启用配置：

```bash
# 创建软链接到 sites-enabled
sudo ln -s /etc/nginx/sites-available/seeed-course /etc/nginx/sites-enabled/

# 测试 Nginx 配置
sudo nginx -t

# 重新加载 Nginx
sudo systemctl reload nginx
```

#### 配置 HTTPS（使用 Let's Encrypt）

```bash
# 安装 Certbot
sudo apt install -y certbot python3-certbot-nginx

# 获取证书（自动配置 Nginx）
sudo certbot --nginx -d your-domain.com

# 自动续期证书
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

---

## 📦 更新部署

每当代码有更新时，可以通过以下方式重新部署。

### 方式 1：手动更新（推荐）

```bash
cd /opt/seeed-course

# 运行部署脚本
./deploy.sh

# 脚本会自动：
# 1. 检查前置条件（Docker、docker-compose 等）
# 2. 拉取最新镜像
# 3. 停止旧容器
# 4. 启动新容器
# 5. 清理旧镜像
# 6. 显示部署状态和日志
```

### 方式 2：手动使用 Docker Compose

```bash
cd /opt/seeed-course

# 拉取最新镜像
docker-compose pull

# 停止并移除旧容器
docker-compose down

# 启动新容器
docker-compose up -d

# 查看日志
docker-compose logs -f
```

### 方式 3：自动更新（webhook）

如果想在代码推送到 GitHub 后自动部署，可以配置 webhook。

#### 步骤 1：创建 webhook 处理脚本

创建文件 `/opt/seeed-course/webhook-handler.sh`：

```bash
#!/bin/bash

# Webhook 处理脚本
# 接收 GitHub 推送事件，触发自动部署

DEPLOY_DIR="/opt/seeed-course"
LOG_FILE="/var/log/seeed-course-webhook.log"

# 记录日志
log() {
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

log "=== Webhook 触发 ==="
log "时间: $(date)"
log "事件: GitHub push"

# 进入部署目录
cd "$DEPLOY_DIR" || exit 1

# 拉取最新代码（如果使用 git）
if [ -d .git ]; then
    git pull origin main >> "$LOG_FILE" 2>&1
    log "Git 拉取完成"
fi

# 执行部署
"$DEPLOY_DIR/deploy.sh" >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    log "✓ 部署成功"
else
    log "✗ 部署失败"
fi

log "=== Webhook 处理完成 ==="
echo ""
```

赋予执行权限：

```bash
sudo chmod +x /opt/seeed-course/webhook-handler.sh
```

#### 步骤 2：创建 webhook 监听服务（使用 Node.js）

创建文件 `/opt/seeed-course/webhook-server.js`：

```javascript
const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');

const SECRET = process.env.WEBHOOK_SECRET || 'your-secret-key';
const PORT = process.env.WEBHOOK_PORT || 9000;

http.createServer((req, res) => {
    if (req.method !== 'POST' || req.url !== '/webhook') {
        res.writeHead(404);
        res.end('Not found');
        return;
    }

    let data = '';
    req.on('data', chunk => {
        data += chunk;
    });

    req.on('end', () => {
        // 验证 GitHub webhook 签名
        const signature = req.headers['x-hub-signature-256'];
        const hmac = crypto.createHmac('sha256', SECRET);
        hmac.update(data);
        const digest = 'sha256=' + hmac.digest('hex');

        if (signature !== digest) {
            console.log('[', new Date().toISOString(), '] ✗ Webhook 签名验证失败');
            res.writeHead(401);
            res.end('Unauthorized');
            return;
        }

        console.log('[', new Date().toISOString(), '] ✓ Webhook 签名验证成功，开始部署...');

        // 触发部署脚本
        exec('/opt/seeed-course/webhook-handler.sh', (error, stdout, stderr) => {
            if (error) {
                console.error('部署失败:', error);
            } else {
                console.log('部署完成');
            }
        });

        res.writeHead(200);
        res.end('Webhook received');
    });
}).listen(PORT, () => {
    console.log(`Webhook 服务运行在 http://localhost:${PORT}`);
});
```

使用 PM2 后台运行：

```bash
# 安装 PM2
sudo npm install -g pm2

# 启动 webhook 服务
pm2 start webhook-server.js --name "seeed-webhook"

# 开机自启
pm2 startup
pm2 save
```

#### 步骤 3：在 GitHub 上配置 Webhook

1. 访问 GitHub 仓库设置：`https://github.com/seeed-studio/seeed-2026-course/settings/hooks`
2. 点击 "Add webhook"
3. 填写配置：
   - **Payload URL**：`http://your-server-ip:9000/webhook`
   - **Content type**：`application/json`
   - **Secret**：与 webhook-server.js 中 `WEBHOOK_SECRET` 相同
   - **Events**：选择 "Push events"
   - **Active**：✅ 勾选

### 更新时的检查清单

部署前检查：

- [ ] 代码已合并到 main 分支
- [ ] GitHub Actions 构建成功（镜像已推送到 GHCR）
- [ ] 服务器磁盘空间充足（`df -h`）
- [ ] 网络连接正常（`ping ghcr.io`）

部署后验证：

- [ ] 容器运行状态正常（`docker-compose ps`）
- [ ] 应用可访问（`curl http://localhost:3000`）
- [ ] 日志无错误（`docker-compose logs`）
- [ ] 功能测试通过（在浏览器中检查）

---

## 🛠️ 常用命令

### 查看状态和日志

```bash
cd /opt/seeed-course

# 查看容器运行状态
docker-compose ps

# 查看实时日志（最后 50 行）
docker-compose logs --tail=50 -f

# 查看完整日志
docker-compose logs

# 查看特定行数的日志
docker-compose logs --tail=100

# 只查看错误
docker-compose logs | grep -i error
```

### 启动/停止/重启服务

```bash
cd /opt/seeed-course

# 启动服务
docker-compose up -d

# 停止服务（容器继续保留）
docker-compose stop

# 停止并移除容器
docker-compose down

# 重启服务
docker-compose restart

# 重新构建镜像（需要 Dockerfile）
docker-compose build --no-cache
```

### 查看容器信息

```bash
cd /opt/seeed-course

# 查看容器详细信息
docker-compose ps

# 检查容器内部运行的进程
docker-compose exec website ps aux

# 进入容器交互式 shell
docker-compose exec website sh

# 查看容器资源使用情况
docker stats seeed-website
```

### 镜像管理

```bash
# 列出所有镜像
docker images

# 查看镜像大小
docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"

# 删除镜像
docker rmi ghcr.io/seeed-studio/seeed-2026-course:latest

# 删除未使用的镜像
docker image prune -f

# 删除所有未使用的镜像和悬挂镜像
docker image prune -a -f
```

### 备份和恢复

```bash
# 备份当前容器
docker-compose exec website tar czf /tmp/backup.tar.gz /app/

# 导出容器
docker export seeed-website > seeed-website-backup.tar

# 导出镜像
docker save ghcr.io/seeed-studio/seeed-2026-course:latest | gzip > seeed-image-backup.tar.gz

# 恢复镜像
gunzip -c seeed-image-backup.tar.gz | docker load
```

### 网络诊断

```bash
# 测试容器到外网连接
docker-compose exec website ping -c 3 ghcr.io

# 查看 DNS 解析
docker-compose exec website nslookup ghcr.io

# 测试应用端口
curl http://localhost:3000

# 测试健康检查
curl -I http://localhost:3000
```

---

## 🐛 故障排查

### 常见问题

#### 1. Docker 未安装或未运行

**错误信息**：
```
Cannot connect to Docker daemon
```

**解决方案**：

```bash
# 检查 Docker 是否已安装
docker --version

# 启动 Docker 服务
sudo systemctl start docker

# 设置 Docker 开机自启
sudo systemctl enable docker

# 检查 Docker 守护进程状态
sudo systemctl status docker
```

#### 2. 镜像拉取失败

**错误信息**：
```
failed to pull image: manifest not found
```

**原因和解决方案**：

```bash
# 检查网络连接
ping ghcr.io

# 检查 IMAGE_TAG 是否正确
grep IMAGE_TAG .env

# 重新登录 GHCR（如果是私有仓库）
echo "YOUR_TOKEN" | docker login ghcr.io -u USERNAME --password-stdin

# 手动拉取镜像测试
docker pull ghcr.io/seeed-studio/seeed-2026-course:latest

# 查看可用的镜像标签
curl -s https://ghcr.io/v2/seeed-studio/seeed-2026-course/tags/list | jq '.tags'
```

#### 3. 端口冲突

**错误信息**：
```
Error response from daemon: driver failed programming external connectivity on endpoint
```

**原因和解决方案**：

```bash
# 查看哪个进程占用了 3000 端口
sudo lsof -i :3000
# 或
sudo netstat -tlnp | grep 3000

# 修改 .env 中的 PORT 为其他端口
sed -i 's/PORT=3000/PORT=8080/' .env

# 重新部署
docker-compose down
docker-compose up -d
```

#### 4. 容器启动后立即退出

**错误信息**：
```
exited with code 1
```

**排查步骤**：

```bash
# 查看容器退出日志
docker-compose logs seeed-website

# 常见原因：
# 1. 依赖安装失败
# 2. 环境变量配置错误
# 3. 磁盘空间不足

# 检查磁盘空间
df -h

# 检查可用内存
free -h

# 重新拉取镜像并重启
docker-compose pull
docker-compose up -d
```

#### 5. 容器运行但网站无法访问

**排查步骤**：

```bash
# 检查容器运行状态
docker-compose ps

# 查看容器日志
docker-compose logs --tail=100

# 测试容器内部应用
docker-compose exec website curl http://localhost:3000

# 检查端口映射
docker port seeed-website

# 检查防火墙规则
sudo ufw status
sudo ufw allow 3000

# 验证健康检查状态
docker inspect seeed-website | grep -A 10 '"Health"'
```

#### 6. 高内存或 CPU 使用率

**排查和优化**：

```bash
# 查看容器资源使用
docker stats seeed-website

# 查看进程详情
docker-compose exec website top

# 在 docker-compose.yml 中添加资源限制
# 参考：docker-compose.yml 中的 resources 部分

# 重新部署以应用限制
docker-compose down
docker-compose up -d
```

### 日志查看方法

```bash
cd /opt/seeed-course

# 实时跟踪日志
docker-compose logs -f

# 查看最后 N 行
docker-compose logs --tail=50

# 查看特定时间范围内的日志
docker-compose logs --since 2026-01-26T10:00:00 --until 2026-01-26T11:00:00

# 导出日志到文件
docker-compose logs > deployment.log

# 查看系统日志（如果使用 systemd）
journalctl -u docker -n 100
```

### 调试技巧

```bash
# 进入容器调试
docker-compose exec website sh

# 在容器内查看环境变量
docker-compose exec website env

# 在容器内测试应用
docker-compose exec website curl http://localhost:3000 -v

# 查看容器内的文件结构
docker-compose exec website ls -la /app

# 检查容器网络配置
docker network inspect seeed-course_default

# 实时监控容器性能
watch -n 1 'docker stats --no-stream seeed-website'
```

### 健康检查状态

```bash
# 查看健康检查详情
docker inspect seeed-website | grep -A 15 '"Health"'

# 预期输出（健康状态）：
# "Health": {
#     "Status": "healthy",
#     "FailingStreak": 0,
#     "Log": [...]
# }

# 预期输出（不健康状态）：
# "Health": {
#     "Status": "unhealthy",
#     "FailingStreak": 3,
#     "Log": [...]
# }
```

---

## 📖 附录

### 相关文件说明

| 文件 | 用途 |
|------|------|
| `docker-compose.yml` | Docker 容器编排配置，定义服务、端口、健康检查等 |
| `deploy.sh` | 自动部署脚本，自动化拉取镜像、启停容器的过程 |
| `.env` | 环境变量配置文件（部署时创建，不提交到 git） |
| `.env.example` | 环境变量模板，用于初始化 .env |
| `Dockerfile` | Docker 镜像构建配置（CI/CD 自动使用） |
| `.github/workflows/docker-publish.yml` | GitHub Actions CI/CD 工作流，自动构建和推送镜像 |

### 重要概念

**镜像（Image）**
- Docker 镜像是应用的打包形式，包含代码、依赖和运行环境
- 例如：`ghcr.io/seeed-studio/seeed-2026-course:latest`
- 镜像是不可变的，每次更新都会生成新镜像

**容器（Container）**
- 容器是镜像运行的实例
- 例如：`seeed-website`
- 容器可以启动、停止、重启或删除

**GHCR（GitHub Container Registry）**
- GitHub 提供的容器镜像仓库
- 支持公开和私有镜像
- 地址：`ghcr.io`

**健康检查（Health Check）**
- 定期检测应用是否正常运行
- 失败次数达到阈值时，Docker 会标记容器为不健康
- 有助于自动故障转移和监控

**重启策略（Restart Policy）**
- `unless-stopped`：容器异常停止时自动重启，手动停止则保持停止状态
- `always`：总是重启
- `on-failure`：失败时重启（可指定最大重试次数）

### 监控和告警建议

在生产环境中，建议配置以下监控：

```bash
# 1. 使用 cron 定期检查容器状态
# 编辑 crontab
sudo crontab -e

# 添加以下行（每 5 分钟检查一次）
*/5 * * * * /opt/seeed-course/health-check.sh
```

创建 `/opt/seeed-course/health-check.sh`：

```bash
#!/bin/bash

CONTAINER_NAME="seeed-website"
LOG_FILE="/var/log/seeed-course-health.log"

# 检查容器状态
STATUS=$(docker inspect --format='{{.State.Health.Status}}' $CONTAINER_NAME 2>/dev/null || echo "unknown")

if [ "$STATUS" != "healthy" ]; then
    echo "[$(date +'%Y-%m-%d %H:%M:%S')] ⚠ 容器状态异常: $STATUS" >> "$LOG_FILE"
    
    # 可选：发送告警通知（邮件、Slack 等）
    # send_alert "容器 $CONTAINER_NAME 不健康"
fi
```

### 性能优化建议

1. **启用资源限制**：在 docker-compose.yml 中配置 `deploy.resources`
2. **优化日志轮转**：配置 `logging` 选项防止日志占满磁盘
3. **使用多阶段构建**：Dockerfile 已使用，可减小镜像大小
4. **定期清理**：`docker image prune` 和 `docker container prune`

### 安全建议

1. **定期更新**：及时更新 Docker、镜像和系统补丁
2. **限制权限**：不要以 root 身份运行容器（Dockerfile 已配置）
3. **秘密管理**：不在 .env 中存储敏感信息，使用 Docker Secrets
4. **防火墙配置**：只开放必要的端口
5. **定期备份**：备份容器数据和配置

---

## 📞 技术支持

如遇问题，请按以下步骤反馈：

1. **收集信息**：
   ```bash
   docker-compose ps > info.txt
   docker-compose logs --tail=100 >> info.txt
   df -h >> info.txt
   ```

2. **查阅文档**：
   - 本文档的故障排查部分
   - [Docker 官方文档](https://docs.docker.com/)
   - [GitHub 仓库 Issues](https://github.com/seeed-studio/seeed-2026-course/issues)

3. **提交 Issue**：
   - 说明问题现象
   - 附加上述收集的信息
   - 描述已尝试的解决方案

---

**最后更新**：2026-01-26  
**文档版本**：1.0  
**适用范围**：柴火创客学院课程网站 Docker 部署
