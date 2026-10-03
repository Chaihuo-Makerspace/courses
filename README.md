# 柴火创客学院 · 官网

柴火创客学院隶属于柴火创客空间（2011 年在深圳成立），课程使用 Seeed Studio
在售的硬件。我们培养人掌握新技术整合能力，让机构自己的团队能把
解决方案部署落地：提供的是课程、硬件套件和讲师培训。

这个仓库是学院的招生招商站，面向院校、集成商和企业。

## 课程矩阵 · M0–M6 × L1/L2/L3

七个模块，每个模块三档深度。M0 是零基础入口，M1–M6 可以单独开课。

| 模块 | 方向 | 主要技术 |
| :--- | :--- | :--- |
| **M0** | 零基础智能硬件入门 | Grove 套件 · Wio Terminal · XIAO ESP32S3 Sense |
| **M1** | 设备互联与智能管控 | Home Assistant OS · ESPHome · Node-RED · Modbus RTU/TCP |
| **M2** | 多模态 AI 交互 | SenseCraft AI · SenseCAP Watcher · MCP 协议 · Jetson Orin NX |
| **M3** | 自组网与韧性通信（仅海外交付） | LoRa · Meshtastic · Wio Tracker L1 Pro · Node-RED |
| **M4** | 边缘视觉 AI | reCamera · Jetson Orin NX · Frigate NVR · YOLO · TensorRT |
| **M5** | 环境感知与数据采集 | Modbus RTU · 4G · LoRaWAN · SenseCraft Data · Node-RED |
| **M6** | 机器人控制与具身智能 | SenseCraft Robotics · Pinocchio · Motorbridge SDK · LeRobot |

三档深度：**L1 展示层**（1 天）· **L2 顾问层**（2–3 天）· **L3 设计层**（3–5 天）。
M0 按硬件平台分 A / B / C 三层，完整版 16–20 小时。

三个方向按目标分组，不是固定顺序：

- **用 AI 造物** — M0
- **造 AI 的物** — M2 · M4 · M6
- **解决方案** — M1 · M3 · M5

## 合作 · 三类对象 × 四种形态

| | A 裸硬件套件 | B 标准教学套件 | C 全托交付套件 | D 师资培训套件 |
| :--- | :---: | :---: | :---: | :---: |
| **高校 · 职业院校** | ✓ | ✓ | ✓ | ✓ |
| **集成商 · 方案商** | ✓ | ✓ | ✓ | ✓ |
| **企业 · 产业端** |  | ✓ | ✓ |  |

按班型与规模报价，站内不写价格。合作意向发邮件到 business@chaihuo.org。

以上内容的唯一来源是 `src/data/*.ts`；这里只是摘要，以数据文件为准。

## 开发与部署

本站基于 **Astro 6 + Tailwind CSS v4 + Preline UI v4** 构建，服务端输出模式（`@astrojs/node` standalone），课程详情页按请求渲染（SSR，以适配请求语言）。

### 本地开发

```bash
pnpm install
pnpm dev          # 开发服务器 :3001
pnpm check        # TypeScript 校验
pnpm build        # 生产构建
```

### Docker 部署

```bash
cd deploy
./deploy.sh
```

完整部署说明见 [deploy/DEPLOYMENT.md](./deploy/DEPLOYMENT.md)。

## 相关文档

- [AGENTS.md](./AGENTS.md) — 协作规则与命令
- [ARCHITECTURE.md](./ARCHITECTURE.md) — 仓库地图与数据流
- [docs/DESIGN.md](./docs/DESIGN.md) — 设计系统与每页契约
