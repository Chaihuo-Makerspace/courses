import type { Tool } from './schema'

export const tools: Tool[] = []

export function getTool(id: string) {
  return tools.find((t) => t.id === id)
}
