# 部署文件

本目录包含所有 Docker 部署相关的配置文件和脚本。

## 文件说明

| 文件 | 说明 |
|------|------|
| `docker-compose.yml` | Docker Compose 配置文件 |
| `deploy.sh` | 自动部署脚本 |
| `.env.example` | 环境变量配置模板 |
| `DEPLOYMENT.md` | 详细部署文档 |

## 快速开始

```bash
# 1. 配置环境变量
cp .env.example .env
# 编辑 .env 文件，设置 GITHUB_REPOSITORY

# 2. 一键部署
./deploy.sh
```

## 详细文档

请参考 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取完整的部署指南。
