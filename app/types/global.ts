/** How a project should be presented. Drives the "two AI registers" rule. */
export type WorkKind = 'frontend' | 'ai-product' | 'experimental' |  'under-development'

export interface Work {
  id: number
  title: string
  description: string
  tools: string[]
  /** Live site URL. Optional: some work has no public link. */
  url?: string
  image?: string
  /** One-line terminal-row summary. */
  summary?: string
  /** Public repo link. Only public, recent repos — never old/private. */
  gitUrl?: string
  /** Presentation register. Defaults to 'frontend' when omitted. */
  kind?: WorkKind
  /** Badge for experimental work, e.g. "Experimental · V0 · ongoing". */
  label?: string
  /** Headline metric, e.g. "100 SEO score", "Lighthouse 70→95". */
  metric?: string
}

export interface SkillGroup {
  /** Category name, e.g. "Frameworks", "AI Workflow". */
  name: string
  items: string[]
}

export interface ExperienceRole {
  role: string
  org: string
  period: string
  /** Short, factual highlights. No overclaiming. */
  highlights: string[]
}
