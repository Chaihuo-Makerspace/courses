# Jenkins Webhook 自动部署配置指南

## 概述

本指南详细说明如何配置 Jenkins，使其能够接收 GitHub Actions 的 webhook 触发，并自动执行部署脚本。整个工作流程如下：

1. **GitHub Actions 触发**：在 GitHub Actions 工作流完成后，发送包含构建信息的 JSON payload 到 Jenkins
2. **Webhook 接收**：Jenkins 通过 Generic Webhook Trigger 插件接收 webhook 请求
3. **参数解析**：插件从 payload 中提取关键参数（镜像标签、commit SHA 等）
4. **自动构建**：触发 Jenkins Job 执行，传递提取的参数
5. **执行部署**：Job 运行 `deploy.sh` 脚本完成自动部署

**优势**：
- 无需人工干预，自动化完整 CI/CD 流程
- 实时响应代码提交
- 集中日志和监控
- 便于故障追踪和回滚

---

## 前置要求

### 软件版本要求
- **Jenkins**: 2.190 及以上
- **Java Runtime**: JRE 11 或以上
- **Generic Webhook Trigger 插件**: 1.72 或以上

### 系统要求
- Jenkins 服务器可从 GitHub 网络访问（允许入站 HTTPS 请求）
- 服务器已部署 `/opt/seeed-course/website/deploy.sh` 脚本
- 服务器已部署 `docker-compose.yml` 配置文件
- Jenkins 运行用户拥有部署目录的读写权限

### 网络准备
- Jenkins 绑定域名或固定 IP（GitHub 需要能访问）
- 防火墙允许 443 端口入站（webhook 请求）
- Jenkins 服务配置了 SSL/TLS 证书（强烈推荐，GitHub 要求 HTTPS）

---

## Jenkins 配置

### 1. 安装 Generic Webhook Trigger 插件

#### 方法一：通过 Jenkins Web UI 安装

1. 打开 Jenkins 首页：`https://your-jenkins-domain.com`
2. 左侧导航栏点击 **「Manage Jenkins」**（系统管理）
3. 选择 **「Manage Plugins」**（管理插件）
4. 切换到 **「Available plugins」**（可用插件）标签
5. 在搜索框输入：`Generic Webhook Trigger`
6. 找到对应插件，勾选复选框
7. 点击页面底部 **「Install without restart」**（不重启安装）
   - 或选择 **「Download now and install after restart」**（重启后安装）
8. 等待安装完成（页面会显示进度）

#### 方法二：通过 Jenkins CLI 安装

```bash
# 登录 Jenkins 所在服务器
ssh admin@jenkins-server

# 下载插件
wget https://plugins.jenkins.io/generic-webhook-trigger/latest/generic-webhook-trigger.hpi

# 放入插件目录
mv generic-webhook-trigger.hpi /var/jenkins_home/plugins/

# 重启 Jenkins
systemctl restart jenkins
# 或
docker restart jenkins
```

**验证安装**：重启后进入 **Manage Plugins > Installed plugins**，搜索 `Generic Webhook Trigger`，确认已列出。

---

### 2. 创建 Jenkins Job

#### 步骤 A：创建新 Job

1. 在 Jenkins 首页点击 **「+ New Item」**（新建任务）
2. 输入 Job 名称：`deploy-seeed-course-website`
3. 选择 **「Pipeline」**（流水线）或 **「Freestyle job」**（自由风格）
   - 推荐选择 **Freestyle job**（本指南基于此）
4. 点击 **「OK」** 确认创建

#### 步骤 B：配置 General 选项

1. 在 Job 配置页面，找到 **「General」** 部分
2. 勾选 **「This project is parameterized」**（参数化构建）
3. 点击 **「Add Parameter」**，选择 **「String Parameter」**
4. 配置以下参数：

| 参数名称 | 默认值 | 描述 |
|---------|--------|------|
| `IMAGE_TAGS` | `ghcr.io/owner/repo:latest` | Docker 镜像地址 |
| `COMMIT_SHA` | `unknown` | Commit 哈希值 |
| `COMMIT_MESSAGE` | `webhook triggered` | Commit 消息 |
| `REPOSITORY` | `owner/repo` | 仓库全名 |
| `WORKFLOW_RUN_ID` | `0` | GitHub Actions 运行 ID |

**配置示例**（对于 IMAGE_TAGS 参数）：
```
名称: IMAGE_TAGS
默认值: ghcr.io/owner/repo:latest
描述: Docker image tag from GitHub Actions
```

---

### 3. 配置 Webhook Trigger

1. 在 Job 配置页面，找到 **「Build Triggers」** 部分
2. 勾选 **「Generic Webhook Trigger」**
3. 在展开的配置区域中设置：

#### 3.1 生成并配置 Token

在 **「Token」** 字段输入一个安全的令牌（用于验证请求来源）：

```
seeed-course-webhook-token-2026
```

**Token 生成建议**（使用强密码生成器）：
```bash
openssl rand -hex 24
# 输出示例: a3f8e1d2c5b9f7a4e6d9c2b8f1a5e7d3c6b9f2a4e8d1c5b
```

#### 3.2 配置 Request Header 验证（可选但推荐）

为了增强安全性，配置 GitHub Actions 在请求头中发送验证信息。

在 **「Token location」** 选择 **「HTTP Header」**，并设置：
- **Header name**: `X-Webhook-Token`
- **Regex pattern**: `.*` （接受任何值）

#### 3.3 配置 Post content parameters

此配置让 Jenkins 从 webhook payload 中提取参数值。

1. 在 **「Post content parameters」** 区域，点击 **「Add」**
2. 配置每个参数的提取规则：

**参数 1 - IMAGE_TAGS**
```
JSONPath: $.image_tags
Variable name: IMAGE_TAGS
```

**参数 2 - COMMIT_SHA**
```
JSONPath: $.commit_sha
Variable name: COMMIT_SHA
```

**参数 3 - COMMIT_MESSAGE**
```
JSONPath: $.commit_message
Variable name: COMMIT_MESSAGE
```

**参数 4 - REPOSITORY**
```
JSONPath: $.repository
Variable name: REPOSITORY
```

**参数 5 - WORKFLOW_RUN_ID**
```
JSONPath: $.run_id
Variable name: WORKFLOW_RUN_ID
```

**JSONPath 说明**：
- JSONPath 是一种从 JSON 结构中提取值的查询语言
- `$` 表示 JSON 根对象
- `$.field_name` 表示提取顶级字段
- 例如 `$.image_tags` 从 payload 的 `image_tags` 字段提取值

#### 3.4 Webhook URL 说明

配置完成后，Jenkins 会显示 webhook URL，格式为：

```
https://your-jenkins-domain.com/generic-webhook-trigger/invoke?token=seeed-course-webhook-token-2026
```

**URL 组成**：
- `https://your-jenkins-domain.com` — Jenkins 服务器地址
- `/generic-webhook-trigger/invoke` — 固定路径
- `?token=YOUR_TOKEN` — 安全令牌参数

**记录此 URL**（稍后在 GitHub Secrets 中配置）

---

### 4. 配置构建脚本

#### 步骤 A：在 Build 部分添加脚本

1. 向下滚动到 **「Build」** 部分
2. 点击 **「Add build step」**
3. 选择 **「Execute shell」**（执行 Shell 脚本）

#### 步骤 B：编写部署脚本

在 Shell 脚本编辑区域输入以下内容：

```bash
#!/bin/bash
set -e  # 任何命令失败立即退出

echo "=========================================="
echo "开始部署 Seeed Course Website"
echo "=========================================="

# 打印接收到的参数
echo "镜像地址: $IMAGE_TAGS"
echo "Commit SHA: $COMMIT_SHA"
echo "Commit 消息: $COMMIT_MESSAGE"
echo "仓库: $REPOSITORY"
echo "Workflow Run ID: $WORKFLOW_RUN_ID"

# 切换到部署目录
cd /opt/seeed-course/website || exit 1

# 执行部署脚本
echo "执行部署脚本..."
./deploy.sh "$IMAGE_TAGS"

# 验证部署结果
if [ $? -eq 0 ]; then
    echo "=========================================="
    echo "✅ 部署成功！"
    echo "=========================================="
    exit 0
else
    echo "=========================================="
    echo "❌ 部署失败！"
    echo "=========================================="
    exit 1
fi
```

**脚本说明**：
- `set -e` — 遇到错误立即停止执行，防止继续进行失败的操作
- `echo` — 输出日志信息，便于查看 Jenkins 构建日志
- `cd /opt/seeed-course/website` — 切换到部署目录
- `./deploy.sh "$IMAGE_TAGS"` — 执行部署脚本，传递镜像地址参数
- 最后检查返回状态码，决定构建成功或失败

#### 步骤 C：添加日志收集（可选）

为了便于故障排查，可以配置构建后收集日志：

1. 向下滚动到 **「Post-build Actions」** 部分
2. 点击 **「Add post-build action」**
3. 选择 **「Archive the artifacts」**（归档制品）
4. 在 **「Files to archive」** 输入：
   ```
   deploy-logs/**/*.log
   ```

---

### 5. 保存 Job 配置

1. 点击页面底部 **「Save」** 按钮
2. 将重定向到 Job 首页
3. 验证左侧菜单显示了 webhook URL 信息

**记录 Webhook URL**（格式如下）：
```
https://your-jenkins-domain.com/generic-webhook-trigger/invoke?token=seeed-course-webhook-token-2026
```

---

## GitHub 配置

### 1. 获取 Webhook URL

从上一步的 Jenkins Job 配置中获取完整的 webhook URL：

```
https://your-jenkins-domain.com/generic-webhook-trigger/invoke?token=seeed-course-webhook-token-2026
```

### 2. 在 GitHub 仓库中添加 Secret

1. 打开 GitHub 仓库页面
2. 进入 **「Settings」**（设置）> **「Secrets and variables」** > **「Actions」**
3. 点击 **「New repository secret」**（新建仓库密钥）
4. 配置以下信息：
   - **Name**: `DEPLOY_WEBHOOK_URL`
   - **Value**: 粘贴上一步获得的完整 webhook URL
5. 点击 **「Add secret」** 保存

**验证**：返回 Secrets 列表，应该看到 `DEPLOY_WEBHOOK_URL` 已列出（值被隐藏）

### 3. 在 GitHub Actions 工作流中调用 Webhook

编辑 `.github/workflows/docker-build.yml`（或你的构建工作流文件），在最后添加一个 webhook 调用步骤：

```yaml
name: Docker Build and Publish

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      # ... 其他构建步骤 ...
      
      - name: Build and push Docker image
        run: |
          docker build -t ghcr.io/${{ github.repository }}:latest .
          echo "${{ secrets.GHCR_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin
          docker push ghcr.io/${{ github.repository }}:latest
      
      # 新增：触发 Jenkins webhook
      - name: Trigger Jenkins Deploy
        run: |
          curl -X POST \
            -H "Content-Type: application/json" \
            -d '{
              "image_tags": "ghcr.io/${{ github.repository }}:latest",
              "commit_sha": "${{ github.sha }}",
              "commit_message": "${{ github.event.head_commit.message }}",
              "repository": "${{ github.repository }}",
              "ref": "${{ github.ref }}",
              "actor": "${{ github.actor }}",
              "workflow": "${{ github.workflow }}",
              "run_id": "${{ github.run_id }}"
            }' \
            "${{ secrets.DEPLOY_WEBHOOK_URL }}"
        if: success()  # 仅在构建成功时触发
```

**YAML 说明**：
- `curl -X POST` — 发送 POST 请求到 Jenkins
- `-H "Content-Type: application/json"` — 设置请求头为 JSON
- `-d '{...}'` — 指定请求体（JSON payload）
- `${{ github.repository }}` — GitHub 上下文变量，自动替换为 `owner/repo`
- `${{ secrets.DEPLOY_WEBHOOK_URL }}` — 从 Secrets 读取 webhook URL
- `if: success()` — 仅在前面步骤全部成功时执行

### 4. 推送工作流更新

```bash
git add .github/workflows/docker-build.yml
git commit -m "feat: add Jenkins webhook trigger for automated deployment"
git push origin main
```

提交后，GitHub Actions 会重新运行，构建完成后将自动调用 Jenkins webhook。

---

## Webhook Payload 说明

### JSON 结构

GitHub Actions 发送给 Jenkins 的完整 payload：

```json
{
  "image_tags": "ghcr.io/owner/repo:latest",
  "commit_sha": "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  "commit_message": "feat: add new feature",
  "repository": "owner/repo",
  "ref": "refs/heads/main",
  "actor": "username",
  "workflow": "Docker Build and Publish",
  "run_id": "1234567890"
}
```

### 字段详解

| 字段 | 类型 | 说明 | 示例 |
|------|------|------|------|
| `image_tags` | string | Docker 镜像完整地址和标签 | `ghcr.io/owner/repo:latest` |
| `commit_sha` | string | Commit 的完整 SHA 哈希值 | `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6` |
| `commit_message` | string | Commit 提交信息 | `feat: add new feature` |
| `repository` | string | GitHub 仓库全名 | `owner/repo` |
| `ref` | string | 分支引用 | `refs/heads/main` |
| `actor` | string | 触发构建的用户名 | `username` |
| `workflow` | string | GitHub Actions 工作流名称 | `Docker Build and Publish` |
| `run_id` | string | GitHub Actions 运行 ID，用于关联日志 | `1234567890` |

### 如何在 Jenkins 中使用这些字段

在 Job 配置中，这些字段会被提取为环境变量，可在构建脚本中引用：

```bash
echo "Image: $IMAGE_TAGS"
echo "SHA: $COMMIT_SHA"
echo "Message: $COMMIT_MESSAGE"
```

---

## 测试验证

### 1. 手动测试 Webhook（不通过 GitHub Actions）

使用 `curl` 命令直接发送测试 payload 到 Jenkins：

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "image_tags": "ghcr.io/owner/repo:test-manual",
    "commit_sha": "test-commit-sha-12345",
    "commit_message": "test: manual webhook trigger",
    "repository": "owner/repo",
    "ref": "refs/heads/main",
    "actor": "testuser",
    "workflow": "Manual Test",
    "run_id": "0"
  }' \
  "https://your-jenkins-domain.com/generic-webhook-trigger/invoke?token=seeed-course-webhook-token-2026"
```

**预期响应**：
```
{"jobs":["deploy-seeed-course-website"],"message":"Triggered jobs."}
```

如果收到此响应，表示 webhook 成功到达 Jenkins 并触发了 Job。

### 2. 检查 Jenkins 构建日志

1. 打开 Jenkins Job 页面：`https://your-jenkins-domain.com/job/deploy-seeed-course-website/`
2. 找到最新的构建（通常显示在左侧 **「Build History」**）
3. 点击该构建，进入构建详情页面
4. 点击 **「Console Output」**（控制台输出），查看完整日志
5. 查找以下信息验证：
   - ✅ 参数是否正确解析（`镜像地址: ghcr.io/...`）
   - ✅ 是否成功切换到部署目录
   - ✅ 是否执行了 `deploy.sh` 脚本
   - ✅ 部署脚本的输出信息
   - ✅ 最终的成功或失败状态

**日志示例**：
```
Started by user ...
Running as SYSTEM
Building in workspace /var/jenkins_home/workspace/deploy-seeed-course-website
==========================================
开始部署 Seeed Course Website
==========================================
镜像地址: ghcr.io/owner/repo:latest
Commit SHA: a1b2c3d4...
Commit 消息: feat: add new feature
仓库: owner/repo
Workflow Run ID: 1234567890
执行部署脚本...
[deploy.sh 输出信息...]
==========================================
✅ 部署成功！
==========================================
Finished: SUCCESS
```

### 3. 端到端测试（通过 GitHub Actions）

1. 修改代码并推送到 main 分支
2. 打开 GitHub 仓库的 **「Actions」** 标签
3. 查看 **「Docker Build and Publish」** 工作流的运行情况
4. 等待构建完成，查看 **「Trigger Jenkins Deploy」** 步骤的输出
5. 同时检查 Jenkins Job 是否被触发并完成部署

**调试技巧**：
- GitHub Actions 日志中如果显示 `curl` 命令失败，检查 webhook URL 是否正确
- Jenkins 日志中如果参数为空，检查 JSONPath 配置是否正确
- 如果 `deploy.sh` 失败，检查权限和路径是否正确

---

## 故障排查

### 问题 1：Webhook 请求未到达 Jenkins

**症状**：
- 发送 curl 命令后无响应或收到 404 错误
- Jenkins Job History 中没有新的构建记录

**排查步骤**：

1. **验证 Jenkins 是否在线**
   ```bash
   curl -I https://your-jenkins-domain.com
   ```
   应该返回 `HTTP/1.1 200 OK` 或 `403 Forbidden`（若需认证）

2. **验证 webhook URL 格式**
   - 检查 URL 中是否有拼写错误
   - 确保 token 与 Jenkins Job 配置中的 token 完全一致
   - 确保 URL 使用 HTTPS（不是 HTTP）

3. **检查防火墙规则**
   ```bash
   # 在 Jenkins 服务器上测试
   sudo iptables -L -n | grep 443  # 查看 443 端口是否开放
   ```

4. **检查 Jenkins 日志**
   ```bash
   # 在 Jenkins 服务器上查看日志
   tail -f /var/log/jenkins/jenkins.log
   # 或（Docker 部署）
   docker logs jenkins
   ```
   查找是否有 Generic Webhook Trigger 的日志记录

### 问题 2：参数未被正确解析

**症状**：
- Jenkins 构建日志显示 `IMAGE_TAGS: (empty)` 或其他参数为空
- 构建执行但参数值不正确

**排查步骤**：

1. **验证 JSON payload 格式**
   ```bash
   # 创建测试 payload 文件
   cat > payload.json << 'EOF'
   {
     "image_tags": "ghcr.io/test/repo:latest",
     "commit_sha": "abc123",
     "commit_message": "test",
     "repository": "test/repo",
     "ref": "refs/heads/main",
     "actor": "testuser",
     "workflow": "test",
     "run_id": "123"
   }
   EOF
   
   # 验证 JSON 格式
   jq . payload.json
   ```

2. **检查 JSONPath 配置**
   - 进入 Jenkins Job 配置页面
   - 在 **「Generic Webhook Trigger」** 部分，验证每个 JSONPath 是否正确
   - 示例：`$.image_tags` 用于提取 `"image_tags"` 字段

3. **启用 Debug 日志**
   - 在 Jenkins 管理页面进入 **「System Log」**
   - 搜索 `com.cloudbees.plugins.genricwebhooktrigger`（注意拼写）
   - 设置日志级别为 DEBUG
   - 重新发送 webhook 请求
   - 查看详细日志输出

### 问题 3：Deploy 脚本执行失败

**症状**：
- Jenkins 日志显示 `Finished: FAILURE`
- `deploy.sh` 输出错误信息

**排查步骤**：

1. **检查 deploy.sh 权限**
   ```bash
   # 在部署服务器上
   ls -la /opt/seeed-course/website/deploy.sh
   # 应该显示可执行权限 (rwxr-xr-x)
   
   # 如果缺少执行权限
   chmod +x /opt/seeed-course/website/deploy.sh
   ```

2. **检查 Jenkins 用户权限**
   ```bash
   # 检查 Jenkins 进程运行的用户
   ps aux | grep jenkins
   
   # 检查部署目录权限
   ls -la /opt/seeed-course/website
   
   # 如果权限不足，添加 Jenkins 用户到相应组
   sudo usermod -a -G docker jenkins
   ```

3. **手动运行 deploy.sh**
   ```bash
   # 以 Jenkins 用户身份运行（模拟 Jenkins 执行）
   sudo -u jenkins /opt/seeed-course/website/deploy.sh ghcr.io/owner/repo:latest
   
   # 查看是否有错误输出
   ```

4. **检查 docker-compose 文件**
   ```bash
   cd /opt/seeed-course/website
   docker-compose config  # 验证配置文件语法
   docker-compose ps      # 查看容器状态
   ```

### 问题 4：GitHub Actions 工作流中 curl 命令超时

**症状**：
- GitHub Actions 日志显示 `curl: (28) Operation timed out`
- Jenkins 没有接收到 webhook

**排查步骤**：

1. **验证 Jenkins 外网可访问**
   ```bash
   # 在 GitHub Actions 运行器上测试（或本地模拟）
   curl -I https://your-jenkins-domain.com
   ```

2. **增加 curl 超时时间**
   修改 GitHub Actions 工作流中的 curl 命令：
   ```yaml
   - name: Trigger Jenkins Deploy
     run: |
       curl -X POST \
         --max-time 30 \
         -H "Content-Type: application/json" \
         -d '{...}' \
         "${{ secrets.DEPLOY_WEBHOOK_URL }}"
   ```

3. **检查 Jenkins 响应时间**
   ```bash
   time curl -X POST \
     -H "Content-Type: application/json" \
     -d '{...}' \
     "https://your-jenkins-domain.com/..."
   ```
   如果响应时间很长，可能是 Jenkins 负载过高或磁盘满

### 问题 5：Token 验证失败

**症状**：
- curl 命令返回 `403 Forbidden` 或 `401 Unauthorized`
- Jenkins 日志中有 token 相关错误

**排查步骤**：

1. **验证 token 是否正确**
   - 复制 Jenkins Job 配置中的 token
   - 确保完全匹配（区分大小写）
   - URL 中的 token 参数应与配置一致

2. **检查 header-based token 配置**
   如果配置了 header 验证，确保 GitHub Actions 发送了对应的请求头：
   ```yaml
   - name: Trigger Jenkins Deploy
     run: |
       curl -X POST \
         -H "Content-Type: application/json" \
         -H "X-Webhook-Token: your-token" \  # 如果配置了 header 验证
         -d '{...}' \
         "${{ secrets.DEPLOY_WEBHOOK_URL }}"
   ```

### 问题 6：部署后容器未更新

**症状**：
- Jenkins 构建成功，但 `deploy.sh` 执行后容器仍使用旧镜像
- 访问网站显示旧版本内容

**排查步骤**：

1. **检查 deploy.sh 脚本内容**
   ```bash
   cat /opt/seeed-course/website/deploy.sh
   ```
   确保脚本包含以下步骤：
   ```bash
   docker-compose pull                   # 拉取最新镜像
   docker-compose up -d website          # 重启容器
   docker-compose logs -f website        # 查看容器日志
   ```

2. **检查镜像是否已推送**
   ```bash
   # 验证镜像是否在 registry 中
   curl https://ghcr.io/v2/owner/repo/tags/list
   ```

3. **手动重启容器**
   ```bash
   cd /opt/seeed-course/website
   docker-compose pull
   docker-compose up -d website
   docker-compose ps  # 确认容器正在运行
   ```

### 问题 7：Cannot connect to Docker daemon

**症状**：
- Jenkins 构建日志显示 `Cannot connect to the Docker daemon`
- `docker-compose` 命令失败

**排查步骤**：

1. **检查 Docker daemon 是否运行**
   ```bash
   sudo systemctl status docker
   # 如果未运行
   sudo systemctl start docker
   ```

2. **检查 Jenkins 用户 Docker 权限**
   ```bash
   # 检查 docker group 中的用户
   getent group docker
   
   # 将 jenkins 用户添加到 docker group
   sudo usermod -a -G docker jenkins
   
   # 应用新组权限（需重启 Jenkins）
   sudo systemctl restart jenkins
   ```

3. **检查 Docker socket 权限**
   ```bash
   ls -la /var/run/docker.sock
   # 应该显示 docker group 有读写权限
   ```

---

## 安全建议

### 1. Token 管理

**生成强 Token**：
```bash
# 使用 OpenSSL 生成 32 字节的随机 token
openssl rand -hex 32

# 使用 /dev/urandom 生成
python3 -c "import secrets; print(secrets.token_urlsafe(32))"
```

**Token 轮换**：
- 定期更换 token（建议每 3-6 个月）
- 更换时：
  1. 在 Jenkins 生成新 token
  2. 更新 GitHub Secret
  3. 推送工作流更新
  4. 观察几次构建成功后删除旧 token

**Token 存储**：
- ❌ 不要在代码中硬编码 token
- ❌ 不要在日志文件中记录 token
- ✅ 使用 GitHub Secrets 安全存储
- ✅ 使用 Jenkins Credentials 安全存储

### 2. 网络安全

**HTTPS 配置**：
- ✅ Jenkins 务必配置 SSL/TLS 证书
- ✅ 使用 Let's Encrypt 免费证书
- ❌ 不要在生产环境使用 HTTP

**防火墙规则**：
- 仅开放 443 端口（HTTPS）给 GitHub
- 限制 webhook 接收 IP 范围（GitHub IP 列表）
- 配置 Jenkins 反向代理（nginx/Apache），添加速率限制

**GitHub IP 白名单**（可选）：
```bash
# 获取 GitHub Actions IP 范围
curl https://api.github.com/meta | jq '.actions[]'

# 在防火墙中配置 iptables 规则
sudo iptables -A INPUT -p tcp --dport 443 -s GITHUB_IP_RANGE -j ACCEPT
```

### 3. 日志安全

**隐藏敏感信息**：
在 GitHub Actions 中使用 `::add-mask::`：
```yaml
- name: Trigger Jenkins Deploy
  run: |
    echo "::add-mask::${{ secrets.DEPLOY_WEBHOOK_URL }}"
    curl -X POST \
      -d '{...}' \
      "${{ secrets.DEPLOY_WEBHOOK_URL }}"
```

**Jenkins 日志过滤**：
- 安装 **Log Parser Plugin**
- 配置规则隐藏 token 和密钥
- 定期清理旧日志（避免磁盘满）

### 4. 访问控制

**Jenkins 用户权限**：
- 配置 Jenkins 认证方式（LDAP/OAuth/本地用户）
- 限制 Job 访问权限（只允许需要的用户/群组）
- 不要使用匿名用户访问

**GitHub Secret 访问**：
- 限制能够读取 Secret 的用户
- 定期审计 Secret 访问日志
- 分离开发环境和生产环境的 Secret

### 5. 监控和告警

**监控 webhook 活动**：
```bash
# 在 Jenkins 日志中搜索 webhook 事件
sudo journalctl -u jenkins -f | grep "generic-webhook-trigger"
```

**配置失败告警**：
1. 在 Jenkins Job 配置中，选择 **「Post-build Actions」**
2. 添加 **「Email Notification」** 或其他通知插件
3. 配置失败时发送邮件/Slack 通知

**定期测试**：
- 每月手动触发一次 webhook，验证流程正常
- 测试 token 轮换流程
- 测试网络隔离场景

---

## 总结与最佳实践

| 方面 | 最佳实践 |
|------|--------|
| **部署流程** | 使用 Generic Webhook Trigger，避免手动维护 |
| **参数管理** | 通过 JSONPath 动态提取，不硬编码参数 |
| **日志记录** | 在 deploy.sh 中添加充分的日志，便于故障排查 |
| **错误处理** | 使用 `set -e` 和 `$?` 检查命令返回状态 |
| **安全性** | 定期轮换 token，使用 HTTPS，最小化权限 |
| **监控告警** | 配置失败通知，定期测试流程 |
| **文档维护** | 更新本文档，记录所有自定义配置 |

---

## 相关资源

- [Generic Webhook Trigger 官方文档](https://plugins.jenkins.io/generic-webhook-trigger/)
- [Jenkins 官方文档](https://www.jenkins.io/doc/)
- [GitHub Actions 官方文档](https://docs.github.com/en/actions)
- [Docker Compose 官方文档](https://docs.docker.com/compose/)

---

## 支持和反馈

如遇到本指南未覆盖的问题：

1. **查看 Jenkins 日志**：`Manage Jenkins > System Log`
2. **查看 Generic Webhook Trigger 插件日志**
3. **检查 GitHub Actions 运行日志**
4. **参考故障排查部分**（本文档第 9 章）

有任何改进建议，欢迎提交 Pull Request 更新本文档。

---

**最后更新**：2026 年 1 月
**维护者**：Seeed Course Team
