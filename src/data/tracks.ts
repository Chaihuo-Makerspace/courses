import type { ModuleId } from './modules';

export interface Track {
  /** 翻译 key 前缀 `track.<id>.*`。 */
  id: 'make-with-ai' | 'build-ai-products' | 'solutions';
  name: string;
  goal: string;
  moduleIds: ModuleId[];
  description: string;
}

// 三个课程方向按目标分组，不是固定的学习顺序：M0 是零基础入口，M1–M6 可以单独学。
export const tracks: Track[] = [
  {
    id: 'make-with-ai',
    name: '用 AI 造物',
    goal: '不会编程，也能用 AI 写代码做出硬件作品',
    moduleIds: ['m0'],
    description:
      'M0 一门课走完三套硬件：用 Grove 做感知，用 Wio Terminal 做交互，用 XIAO ESP32S3 Sense 做图像分类。代码由 AI 写，学生负责把需求说清楚、把作品调通。',
  },
  {
    id: 'build-ai-products',
    name: '造 AI 的物',
    goal: '做出带 AI 能力的终端和设备',
    moduleIds: ['m2', 'm4', 'm6'],
    description:
      'M2 让终端听懂话、看得见，M4 让摄像头识别目标并告警，M6 让机械臂按视觉结果抓取。三个模块分别对应语音交互、视觉检测和机器人控制。',
  },
  {
    id: 'solutions',
    name: '解决方案',
    goal: '把多种设备和网络集成进一个现场',
    moduleIds: ['m1', 'm3', 'm5'],
    description:
      'M1 把多品牌设备接进一个本地平台，M3 在没有公网的地方组网，M5 把野外传感器数据传回来。适合做楼宇、应急、农业和环保项目的集成团队。',
  },
];

export const getTracksForModule = (id: ModuleId): Track[] =>
  tracks.filter((t) => t.moduleIds.includes(id));
