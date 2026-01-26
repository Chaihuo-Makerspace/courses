# Docker 部署指南

柴火创客学院课程网站的 Docker 部署说明。

## 前置要求

- Docker 20.10+
- Docker Compose 1.29+
- Git（用于克隆仓库）

## 快速开始

### 1. 准备配置文件

```bash
# 克隆仓库
git clone https://github.com/Chaihuo-Makerspace/courses.git
cd courses/website

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，设置 GITHUB_REPOSITORY
nano .env
```

### 2. 登录 GitHub Container Registry

如果仓库是私有的，需要先登录：

```bash
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
```

### 3. 部署

```bash
# 一键部署
./deploy.sh
```

脚本会自动：
- 拉取最新镜像
- 停止旧容器
- 启动新容器
- 清理旧镜像
- 显示部署状态

## 环境变量

在 `.env` 文件中配置：

| 变量 | 说明 | 默认值 | 必需 |
|------|------|--------|------|
| `GITHUB_REPOSITORY` | GitHub 仓库路径（格式：owner/repo） | - | 是 |
| `PORT` | 主机端口 | 3000 | 否 |
| `IMAGE_TAG` | Docker 镜像标签 | latest | 否 |
| `NODE_ENV` | Node.js 运行环境 | production | 否 |

## 常用命令

```bash
# 查看日志
docker-compose logs -f

# 查看状态
docker-compose ps

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 更新部署
./deploy.sh
```

## 手动部署

如果不使用 `deploy.sh` 脚本：

```bash
# 拉取最新镜像
docker-compose pull

# 启动服务
docker-compose up -d

# 查看状态
docker-compose ps
```

## 故障排查

### 容器无法启动

检查日志：
```bash
docker-compose logs
```

### 端口冲突

修改 `.env` 文件中的 `PORT` 变量。

### 镜像拉取失败

确认已登录 GitHub Container Registry：
```bash
docker login ghcr.io
```

### 健康检查失败

等待 5-10 秒让应用启动完成，然后检查：
```bash
curl http://localhost:3000
```

## 自动更新

当 GitHub 仓库有新代码推送时：

1. GitHub Actions 自动构建新镜像
2. 镜像推送到 ghcr.io
3. 在服务器上运行 `./deploy.sh` 更新

## 技术支持

- GitHub Issues: https://github.com/Chaihuo-Makerspace/courses/issues
- 文档：README.md
