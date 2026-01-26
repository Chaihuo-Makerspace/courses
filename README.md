# 柴火创客学院 AIoT 培训课程体系

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

详细文档请参考 [AGENTS.md](./AGENTS.md)。

## 🚀 开发与部署

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 类型检查
pnpm check
```

### Docker 部署

使用 Docker 容器化部署，确保开发与生产环境一致性：

```bash
# 配置环境变量
cp .env.example .env
# 编辑 .env 设置 GITHUB_REPOSITORY

# 一键部署
./deploy.sh
```

详细的生产环境部署指南请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)。

## 📖 相关文档

- [AGENTS.md](./AGENTS.md) - AI 协作指南与项目架构
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Docker 部署指南
