# 柴火创客学院课程体系

> **开放技术赋能 · 解决真问题 · 更易学 · 更有用**
>
> 柴火创客学院打造的 AIoT 实战培训体系，面向高校师生、企业技术人员与创客爱好者，提供从零基础入门、设备接入、边缘计算到 AI 智能体的全链路技术赋能能力。我们不纠结底层怎么画，专注问题怎么解。

## 📚 核心课程模块

课程体系包含 **6 大核心模块**：以 **M0 零基础智能硬件入门**为旗舰入口，叠加 M1–M5 五大行业方向。

| 模块 | 课程名称 | 英文名称 | L1 | L2 | L3 | 主要技术栈 |
| :--- | :--- | :--- | :-: | :-: | :-: | :--- |
| **M0** | **零基础智能硬件入门** | Smart Hardware Fundamentals | A | B | C | Codecraft / aily-blockly / Grove · Wio · XIAO / BMAD / NLHD |
| **M1** | **设备互联与智能管控** | Device Integration & Intelligent Control | ✓ | ✓ | ✓ | Home Assistant / ESPHome / Node-RED / Modbus |
| **M2** | **多模态 AI 交互** | Multimodal AI Interaction | ✓ | ✓ | ✓ | SenseCraft AI / Watcher / LLM / MCP |
| **M3** | **自组网与韧性通信** | Mesh Networking & Resilient Communication | ✓ | ✓ | ✓ | Mission Pack / Meshtastic / LoRa / GPS |
| **M4** | **边缘视觉 AI** | Edge Visual AI | ✓ | ✓ | ✓ | reCamera / Jetson / Frigate |
| **M5** | **环境感知与数据采集** | Environmental Sensing & Data Acquisition | ✓ | ✓ | — | SenseCAP / Modbus / MQTT / 4G |

> **M0 分层说明**：M0 按硬件平台分层（A: Grove / B: Wio Terminal / C: XIAO ESP32S3 Sense），而非 L1/L2/L3。三个子套件可独立使用也可组合开课。

## 🎯 三大课程方向

| 🎨 用 AI 造物 | 🤖 造 AI 的物 | 🔧 解决方案 |
| :--- | :--- | :--- |
| 用 AI 工具辅助创作，零编程基础即可上手 | 开发具备 AI 能力的产品 | 系统集成与场景落地 |
| **M0**、AI 当程序员我当创客 | M2 多模态 AI 交互、M4 边缘视觉 AI | M1 设备互联、M3 自组网、M5 环境感知 |

## 🪜 能力分级体系（L1 / L2 / L3）

| 级别 | 定位 | 核心能力 | 适合人群 |
| :--- | :--- | :--- | :--- |
| **L1 展示层** | 单点体验 | 3 分钟演示"魔法时刻"，看得懂、能讲解、能演示 | 销售/决策者/公众/零基础 |
| **L2 顾问层** | 场景联动 | 独立配置可用系统，交付体验工作坊 | 售前支持/技术顾问/集成商 |
| **L3 设计层** | 业务集成 | 商业闭环与深度定制（API 对接、模型训练、私有化部署） | 售后工程师/高级技术支持 |

## 📦 四种销售形态

| 形态 | 定义 | 目标客户 |
| :--- | :--- | :--- |
| **A. 裸硬件套件** | 仅硬件 + 配件 | 有自研课程能力的高校/机构 |
| **B. 标准教学套件** | 硬件 + 完整课程资源包 | 大多数客户 |
| **C. 全托交付套件** | 硬件 + 课程 + 柴火讲师授课 | 首次采购客户 |
| **D. 师资培训套件** | 硬件 + 课程 + Train-the-Trainer | 高校教师/机构讲师 |

## 🚀 开发与部署

### 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### Docker 部署

```bash
# 进入部署目录
cd deploy

# 一键部署
./deploy.sh
```

## 📖 相关文档

- [AGENTS.md](./AGENTS.md) - AI 协作指南与项目架构
- [DEPLOYMENT.md](./deploy/DEPLOYMENT.md) - 部署指南
