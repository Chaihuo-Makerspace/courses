# 柴火创客学院 · AIoT 实战培训体系

> **让新技术为你所用 — 掌握 AIoT 实战技能，解决真实场景问题**
>
> 柴火创客学院是柴火创客生态的技术赋能平台，背靠 Seeed Studio（全球开源硬件领导者）与柴火创客空间（2011 年成立的中国创客先驱）。我们不提供解决方案——我们培养人掌握新技术整合能力，让每一个个体都能拥有"一个人也能上场"的全栈交付能力。

## 📚 课程矩阵 · M0–M5 × L1/L2/L3

6 个模块 × 3 个层级的二维课程体系。M0 是所有人的起点；M1–M5 按方向各自独立，也可与 M0/M5 组合成完整交付路径。

| 模块 | 方向 | 关键技术栈 |
| :--- | :--- | :--- |
| **M0** | 零基础智能硬件入门 · Smart Hardware Fundamentals | Grove 套件 · Wio Terminal · XIAO ESP32S3 Sense |
| **M1** | 设备互联与智能管控 · Device Integration & Intelligent Control | Home Assistant 智能中枢 · ESPHome · Modbus 网关 |
| **M2** | 多模态 AI 交互 · Multimodal AI Interaction | Watcher · 麦克风阵列 · 边缘 AI 主机 |
| **M3** | 自组网与韧性通信 · Mesh Networking & Resilient Communication | Mission Pack · Meshtastic · LoRa 模块 |
| **M4** | 边缘视觉 AI · Edge Visual AI | reCamera · reComputer Jetson · 网络摄像头 |
| **M5** | 环境感知与数据采集 · Environmental Sensing & Data Acquisition | SenseCAP 传感器 · 数据采集网关 · 4G 回传模块 |

每个模块内部再按 **L1 入门 → L2 进阶 → L3 实战** 三阶递进：L1 跑通 demo，L2 独立完成小项目，L3 具备可交付的系统能力。

### 🎯 推荐学习路径 (Tracks)

- **用 AI 造物** — `M0`（零基础旗舰入口）
- **造 AI 的物** — `M2 → M4`（多模态 AI 交互 → 边缘视觉 AI）
- **解决方案** — `M1 · M3 · M5`（设备互联 · 自组网通信 · 环境感知）

## 🤝 合作体系 · 3 类场景 × 4 种形态

| | A · 标准课程授权 | B · 联合课程共建 | C · 企业定制内训 | D · 战略联合交付 |
| :--- | :---: | :---: | :---: | :---: |
| **高校 · 职业院校** | ✓ | ✓ |  | ✓ |
| **集成商 · 方案商** |  | ✓ | ✓ |  |
| **企业 · 产业端** |  |  | ✓ | ✓ |

## 🚀 开发与部署

本站基于 **Astro 6 + Tailwind CSS v4 + Preline UI v4** 构建，服务端输出模式（`@astrojs/node` standalone），课程详情页静态预渲染。

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

## 📖 相关文档

- [CLAUDE.md](./CLAUDE.md) — AI 协作指南 · 架构速览
- [docs/design-system/MASTER.md](./docs/design-system/MASTER.md) — 完整视觉设计规范（配色、字体、组件）
- [docs/design-system/QUICK-REFERENCE.md](./docs/design-system/QUICK-REFERENCE.md) — 开发速查卡
- [AGENTS.md](./AGENTS.md) — AI 协作补充说明
