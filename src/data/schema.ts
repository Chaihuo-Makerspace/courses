export type ModuleId = 'm1' | 'm2' | 'm3' | 'm4' | 'm5'

export type ModuleStatus = 'active' | 'wip' | 'planned'

export type SlideKind = 'slidev' | 'external' | 'none'

export type Module = {
  id: ModuleId
  title: string
  titleEn?: string
  tagline: string
  description?: string
  status: 'released' | 'wip' | 'planned'
  stack: string[]
  scenarios: string[]
  capability: {
    l1: string
    l2: string
    l3: string
  }
  docs: {
    yuque: {
      overviewUrl: string
      detailUrl?: string
    }
  }
  slides: {
    kind: SlideKind
    url?: string
    embed?: boolean
  }
  tools: string[]
  externalTools?: {
    name: string
    url: string
    description?: string
  }[]
}

export type RunType = 'company' | 'community'

export type CourseRun = {
  id: string
  dateRange: {
    start: string
    end?: string
  }
  type: RunType
  orgName?: string
  location?: string
  modules: ModuleId[]
  summary: string
}

export type ChangelogScope = 'site' | 'module' | 'tool'

export type ChangelogEntry = {
  id: string
  date: string
  scope: ChangelogScope
  moduleId?: ModuleId
  toolId?: string
  title: string
  summary: string
  changes: string[]
  relatedLinks?: string[]
}

export type ToolStatus = 'active' | 'beta' | 'planned'

export type LaunchMode = 'link' | 'embed'

export type Tool = {
  id: string
  name: string
  description: string
  status: ToolStatus
  url: string
  launchMode: LaunchMode
  relatedModules: ModuleId[]
  stack: string[]
}
