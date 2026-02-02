# 部署指南

本文档说明如何使用 Docker 部署 new-course-site 网站。

## 前置条件

- Docker 20.10+
- Docker Compose 1.29+ (或 Docker Compose V2)
- Git

## 快速部署

```bash
cd deploy
chmod +x deploy.sh
./deploy.sh
```

## 端口配置

默认端口为 `3001`，如需修改：

1. 编辑 `docker-compose.yml` 中的端口映射
2. 编辑 `../package.json` 中的 `start` 脚本端口
3. 重新运行 `./deploy.sh`

## 更新部署

```bash
git pull
cd deploy
./deploy.sh
```

## 常用命令

```bash
# 查看服务状态
docker compose ps

# 查看实时日志
docker compose logs -f

# 停止服务
docker compose down

# 重启服务
docker compose restart

# 重新构建并部署
docker compose up -d --build
```

## 目录结构

```
deploy/
├── docker-compose.yml  # Docker Compose 配置
├── deploy.sh           # 一键部署脚本
└── DEPLOYMENT.md       # 本文档
```

## 切换到 SSR 模式

如需切换到服务端渲染 (SSR)：

1. 安装 Node.js 适配器：
   ```bash
   pnpm add @astrojs/node
   ```

2. 修改 `astro.config.mjs`：
   ```javascript
   import node from '@astrojs/node';

   export default defineConfig({
     output: 'server',
     adapter: node({
       mode: 'standalone'
     }),
     // ... 其他配置
   });
   ```

3. 重新部署：
   ```bash
   ./deploy.sh
   ```

Dockerfile 无需修改。
