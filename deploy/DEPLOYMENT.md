# Docker 部署指南

柴火创客学院课程网站的 Docker 部署说明。

## 前置要求

- Docker 20.10+ & Docker Compose 1.29+
- Git

## 快速部署

```bash
git clone https://github.com/Chaihuo-Makerspace/courses.git
cd courses/website/deploy
./deploy.sh
```

## 配置

### 端口

默认端口 `3000`。修改 `docker-compose.yml`：

```yaml
ports:
  - "8080:3000"
```

### 环境

生产模式配置已集成在 `docker-compose.yml`。

## 更新部署

使用 Git 拉取最新代码后，重新运行 `./deploy.sh` 即可。
