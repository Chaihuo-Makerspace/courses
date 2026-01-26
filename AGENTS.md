# AGENTS.md

## 项目定位

**柴火创客学院课程体系**：课程模块、更新记录、授课历史与工具入口的展示站点。

- 官网落地页：课程模块卡片 + 最近更新 + 最近授课
- 课程详情页：能力路径 + 授课记录 + 相关工具
- 工具入口页：工具目录与工具详情
- 培训文档：托管在语雀（官网仅提供外链）

---

## 数据架构（website/src/data）

所有课程/工具/更新数据维护在 `website/src/data/`：

| 文件 | 内容 | 格式 |
|------|------|------|
| `schema.ts` | TypeScript 类型定义 | 导出 `Module`, `Tool`, `CourseRun`, `ChangelogEntry` 等 |
| `modules.ts` | 课程模块元数据 | `Module[]` + `getModule(id)` |
| `tools.ts` | 工具目录 | `Tool[]` + `getTool(id)` |
| `runs.ts` | 历史授课记录 | `CourseRun[]` |
| `changelog.ts` | 课程更新记录 | `ChangelogEntry[]` |
| `index.ts` | 统一导出入口 | Re-export all |

### 数据更新规则

- **课程内容更新**：编辑 `modules.ts`（标题/tagline/stack/能力层级等）
- **新增授课记录**：在 `runs.ts` 追加条目（含日期/公司/社区/模块 ID）
- **发布更新 changelog**：在 `changelog.ts` 追加条目（含 scope/moduleId/toolId）
- **新增工具**：在 `tools.ts` 追加 + 更新相关模块的 `tools[]` 字段
- **外部工具链接**：写入模块的 `externalTools` 字段（仅外链，不当作课程体系工具）

---

## 路由与数据源

| 路由 | 页面 | 数据源 |
|------|------|--------|
| `/` | 首页（模块卡片 + 最近更新 + 最近授课 + 工具） | `modules`, `changelog`, `runs`, `tools` |
| `/modules` | 所有课程模块列表 | `modules` |
| `/modules/[id]` | 课程详情（能力路径 + 授课记录 + 更新 + 相关工具） | `getModule(id)`, `runs`, `changelog`, `tools` |
| `/runs` | 授课记录时间线 | `runs` |
| `/changelog` | 全站更新聚合 | `changelog` |
| `/tools` | 工具目录 | `tools` |
| `/tools/[id]` | 工具详情（适用模块 + 更新记录） | `getTool(id)`, `changelog` |

---

## 内容维护指南

### 新增课程模块（例如 M6）

1. **更新数据注册表**：编辑 `src/data/modules.ts`

   ```ts
   {
     id: 'm6',
     title: '新模块名称',
     tagline: '一句话定位',
     status: 'planned',
     stack: ['关键技术'],
     scenarios: ['适用场景'],
     capability: { l1: '...', l2: '...', l3: '...' },
     docs: { yuque: { overviewUrl: 'https://...' } },
     slides: { kind: 'none' }, // 或 slidev / external
     tools: [],
   }
   ```

2. **（可选）创建课件**：若需 Slidev 课件，在 `apps/` 下创建 `slides-m6/`，配置 base path 为 `/slides/m6/`

3. **（可选）更新相关工具**：若某工具适用于 M6，在 `tools.ts` 的 `relatedModules` 添加 `'m6'`

### 记录授课历史

编辑 `src/data/runs.ts`：

```ts
{
  id: '2026-02-company-m1-m2',
  dateRange: { start: '2026-02-10', end: '2026-02-12' },
  type: 'company',
  orgName: '某某科技',
  location: '深圳',
  modules: ['m1', 'm2'],
  summary: '企业定制培训：侧重能源管理与 AI 交互结合场景',
}
```

### 发布课程更新

编辑 `src/data/changelog.ts`：

```ts
{
  id: '2026-02-15-m1-content',
  date: '2026-02-15',
  scope: 'module',
  moduleId: 'm1',
  title: 'M1：补充工业协议案例',
  summary: '新增 Modbus TCP 与 BACnet 对接实操案例',
  changes: [
    '新增 Modbus TCP 配置模板',
    '补充 BACnet 设备接入步骤',
    '更新设备清单（新增网关硬件）',
  ],
}
```

---

## 开发工作流

```bash
# 安装依赖（仅首次或依赖变更后）
pnpm install

# 启动官网（Astro）
pnpm dev

# 构建官网
pnpm build
```

---

## 注意事项

- **单一数据源**：只编辑 `website/src/data/*.ts`，不要修改根目录课程文档。
- **模块/工具一致性**：`runs.ts`, `changelog.ts`, `tools.ts` 中引用的 `moduleId/toolId` 必须与 `modules.ts`/`tools.ts` 中的 id 保持一致。
- **外部工具**：不要在 `tools.ts` 中登记课程体系外的工具，改用 `externalTools`。

## 相关文档

- 根目录 `/CLAUDE.md` — 整个培训课程项目的 AI 指南（覆盖根目录模块内容与 Obsidian 规范）
