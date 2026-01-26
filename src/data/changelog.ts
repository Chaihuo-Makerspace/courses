import type { ChangelogEntry } from './schema'

export const changelog: ChangelogEntry[] = [
  {
    id: '2026-01-24-m1-slides',
    date: '2026-01-24',
    scope: 'module',
    moduleId: 'm1',
    title: 'M1：更新课件与实操节奏',
    summary: '补齐 L1 演示路径，并根据试讲反馈调整章节顺序。',
    changes: ['新增交互演示页', '调整 L1/L2 时长分配', '补充设备接入注意事项'],
  },
]
