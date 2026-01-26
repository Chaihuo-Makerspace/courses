# 柴火创客学院 AIoT 培训课程体系 (Course Curriculum)

> **开放技术赋能 · 解决真问题 · 有用易学**
>
> 柴火创客学院打造的 AIoT 实战培训体系，面向系统集成商、高校与行业开发者，提供从硬件接入、边缘计算到 AI 智能体的全链路技术交付能力。

## 📚 核心课程模块

本课程体系包含 5 大核心技术模块，覆盖空间智能、边缘 AI 与行业应用场景。

| 模块 | 课程名称 | 核心价值 | 关键技术栈 |
| :--- | :--- | :--- | :--- |
| **M1** | **空间智能与能源管理** | 跨品牌/跨代际设备统一管控，打破数据孤岛 | Home Assistant, ESPHome, XIAO ESP32 |
| **M2** | **空间交互智能体** | 打造能听懂业务、能看见需求的 AI 空间助理 | SenseCraft AI, Watcher (XIAOZHI), MCP |
| **M3** | **离网通信网络** | 断网也能跑：面向野外与弱网的低成本自组网通信 | LoRa, LoRa Mesh, Meshtastic |
| **M4** | **视觉 AI 安防** | 可落地的视觉安防：检测、联动与本地化部署 | reCamera, Frigate, RTSP |
| **M5** | **智慧城市与农业** | 数据驱动的城市与农业场景：采集、建模与联动 | SenseHub, Industrial Sensors, Data Platform |

## 🎯 课程方向

课程体系围绕三大维度构建：

1. **💡 用 AI 造物 (Make with AI)**：利用 AI 工具快速实现创意原型。
2. **📦 造 AI 的物 (Make for AI)**：构建承载 AI 能力的智能硬件与物理载体。
3. **🧩 解决方案 (Solutions)**：系统集成与真实场景的商业落地。

## 🛠️ 内容维护指南

本网站作为课程内容的展示窗口，所有数据均结构化维护在 `src/data` 目录中。

- **课程信息**：修改 `src/data/modules.ts`（更新标题、大纲、技术栈）
- **授课记录**：更新 `src/data/runs.ts`（添加新的培训场次）
- **更新日志**：维护 `src/data/changelog.ts`（发布课程迭代记录）
- **工具入口**：管理 `src/data/tools.ts`（课程配套工具链）

详细文档请参考 [AGENTS.md](./AGENTS.md) 或 [CLAUDE.md](../CLAUDE.md)。

## 🚀 开发与部署

本项目使用 Astro 构建，支持部署到 Cloudflare Workers 或本地 Node.js 服务器。

```bash
# 安装依赖
pnpm install

# 启动本地开发
pnpm dev
```

### Cloudflare 部署

```bash
pnpm build        # 构建
pnpm deploy       # 部署到 Cloudflare Workers
```

> 首次部署需运行 `npx wrangler login` 进行授权。详细配置请查看 `wrangler.toml`。

### 本地服务器部署

#### Node.js 服务器

```bash
pnpm build:node                    # 使用 Node.js 适配器构建
node dist/server/entry.mjs         # 运行 (默认端口 3000)
```

> 可使用 PM2 管理进程：`pm2 start dist/server/entry.mjs --name chaihuo-course`

#### Docker 部署

使用 Docker 容器化部署，确保开发与生产环境一致性：

```bash
# 构建 Docker 镜像
docker build -t chaihuo-course .

# 运行容器（默认端口 3000）
docker run -d -p 3000:3000 --name chaihuo-course chaihuo-course

# 访问应用
# http://localhost:3000
```

> 容器运行时自动设置 `HOST=0.0.0.0 PORT=3000`，支持来自任何网络接口的连接。
