import type { Module } from './schema'

export const modules: Module[] = [
  {
    id: 'm1',
    title: '空间智能与能源管理',
    titleEn: 'Spatial Intelligence & Energy Management',
    tagline: '跨品牌/跨代际设备统一管控，打破数据孤岛，构建全场景智能中枢',
    description: 'Home Assistant 跨品牌集成 / 能源可视化',
    status: 'wip',
    stack: ['Home Assistant', 'ESPHome', 'XIAO ESP32', 'RS485/Modbus'],
    scenarios: ['商业建筑与园区节能', '老旧系统利旧改造', '楼宇集成商交付提效'],
    capability: {
      l1: '单点体验：设备接入 + Demo 演示',
      l2: '场景联动：RS485/工业设备接入 + 能源看板',
      l3: '业务集成：对接第三方系统 + 自定义组件/流程',
    },
    docs: {
      yuque: {
        overviewUrl: 'https://www.yuque.com/chaihuo-mcv/home',
      },
    },
    slides: {
      kind: 'slidev',
      url: '/slides/m1/',
      embed: false,
    },
    tools: [],
    externalTools: [
      {
        name: 'ESPHome 配置生成器',
        description: '面向 XIAO ESP32 的声明式编程工具：积木式选择组件，实时生成 ESPHome YAML。',
        url: 'https://example.com/config-generator',
      },
    ],
  },
  {
    id: 'm2',
    title: '空间交互智能体',
    titleEn: 'Spatial Interactive AI Agent',
    tagline: '解放双手，主动服务：打造能听懂业务、能看见需求的 AI 空间助理',
    description: '多模态 AI 主动服务 / 语音视觉交互',
    status: 'planned',
    stack: ['SenseCraft AI', 'Watcher (XIAOZHI)', 'MCP', 'LLM'],
    scenarios: ['展厅/博物馆导览', '智能前台与接待', '工业现场交互助手'],
    capability: {
      l1: '单点体验：零代码体验语音/视觉交互',
      l2: '场景联动：本地部署 AI 后端 + 工具联动',
      l3: '业务集成：私有化 LLM + 自定义 MCP 工具闭环',
    },
    docs: {
      yuque: {
        overviewUrl: 'https://www.yuque.com/',
      },
    },
    slides: {
      kind: 'none',
    },
    tools: [],
  },
  {
    id: 'm3',
    title: '离网通信网络',
    titleEn: 'Off-grid Communication Network',
    tagline: '断网也能跑：面向野外与弱网的低成本自组网通信方案',
    description: 'LoRa Mesh 应急响应 / 去中心化',
    status: 'planned',
    stack: ['LoRa', 'LoRa Mesh', 'Meshtastic'],
    scenarios: ['野外/矿区/工地通信', '应急/救援联络', '弱网区域数据回传'],
    capability: {
      l1: '单点体验：LoRa 点对点与基础节点配置',
      l2: '场景联动：Mesh 组网 + 路由与网关',
      l3: '业务集成：与业务系统/数据平台对接',
    },
    docs: {
      yuque: {
        overviewUrl: 'https://www.yuque.com/',
      },
    },
    slides: {
      kind: 'none',
    },
    tools: [],
  },
  {
    id: 'm4',
    title: '视觉 AI 安防',
    titleEn: 'Visual AI Security',
    tagline: '可落地的视觉安防：检测、联动与本地化部署',
    description: '边缘计算 / 实时告警 / 跨系统联动',
    status: 'planned',
    stack: ['reCamera', 'Frigate', 'RTSP', 'Edge AI'],
    scenarios: ['园区安防', '仓储周界', '门禁与访客管理'],
    capability: {
      l1: '单点体验：视频接入 + 基础检测',
      l2: '场景联动：告警联动 + 规则与区域配置',
      l3: '业务集成：与安防/工单/门禁系统对接',
    },
    docs: {
      yuque: {
        overviewUrl: 'https://www.yuque.com/',
      },
    },
    slides: {
      kind: 'none',
    },
    tools: [],
  },
  {
    id: 'm5',
    title: '智慧城市与农业',
    titleEn: 'Smart-City & Agriculture',
    tagline: '数据驱动的城市与农业场景：采集、建模与联动',
    description: '全域感知 / 户外传输 / 数据看板',
    status: 'planned',
    stack: ['SenseHub', 'RS485 Sensors', 'Data Platform'],
    scenarios: ['农业环境监测', '城市微气象', '园区多源传感'],
    capability: {
      l1: '单点体验：传感器采集与看板展示',
      l2: '场景联动：阈值/联动策略与告警',
      l3: '业务集成：数据平台对接与行业应用落地',
    },
    docs: {
      yuque: {
        overviewUrl: 'https://www.yuque.com/',
      },
    },
    slides: {
      kind: 'none',
    },
    tools: [],
    externalTools: [
      {
        name: 'ESPHome 配置生成器',
        description: '面向 XIAO ESP32 的声明式编程工具：积木式选择组件，实时生成 ESPHome YAML。',
        url: 'https://example.com/config-generator',
      },
    ],
  },
]

export function getModule(id: string) {
  return modules.find((m) => m.id === id)
}
