export type WorkKind = 'frontend' | 'mobile' | 'developer-tools' | 'experimental'

export interface Work {
  id: number
  title: string
  description: string
  tools: string[]
  /** Public project site or related resource. */
  url?: string
  urlLabel?: string
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
  links?: { label: string; url: string }[]
  /** Short, factual highlights. No overclaiming. */
  highlights: string[]
}
