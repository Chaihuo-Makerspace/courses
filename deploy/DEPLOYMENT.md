# Docker 部署指南

柴火创客学院课程网站的 Docker 部署说明。

## 前置要求

- Docker 20.10+
- Docker Compose 1.29+
- Git（用于克隆仓库）

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/Chaihuo-Makerspace/courses.git
cd courses/website/deploy
```

### 2. 部署

```bash
# 一键部署
./deploy.sh
```

脚本会自动：
- 构建 Docker 镜像
- 停止旧容器
- 启动新容器
- 清理旧镜像
- 显示部署状态

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
# 构建并启动服务
docker-compose up -d --build

# 查看状态
docker-compose ps
```

## 配置说明

### 端口配置

默认端口为 3000。如需修改，编辑 `docker-compose.yml`：

```yaml
ports:
  - "8080:3000"  # 将主机端口改为 8080
```

### 环境配置

应用运行在生产模式（`NODE_ENV=production`），已在 `docker-compose.yml` 中配置。

## 故障排查

### 容器无法启动

检查日志：
```bash
docker-compose logs
```

### 端口冲突

修改 `docker-compose.yml` 中的端口映射。

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
