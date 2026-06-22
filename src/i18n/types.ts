export interface EducationItem {
  school: string
  location: string
  degree: string
  details?: string
  url?: string
  url_text?: string
  years?: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
  stack: string[]
}

export interface FeaturedSkill {
  name: string
  level: string
  description: string
  points: string[]
  tags: string[]
}

export interface ProjectItem {
  title: string
  description: string
  objective?: string
  url?: string
  tags: string[]
  status?: 'incoming'
}

/**
 * Schéma de traduction unique partagé par toutes les locales.
 * Garantit que `fr` et `en` exposent exactement les mêmes clés.
 */
export interface MessageSchema {
  nav: {
    home: string
    skills: string
    projects: string
  }
  meta: {
    base: string
    home: string
    skills: string
    projects: string
  }
  language: {
    label: string
  }
  hero: {
    greeting: string
    titleLead: string
    intro: string
    ctaSkills: string
    ctaProjects: string
  }
  education: {
    eyebrow: string
    title: string
    items: EducationItem[]
  }
  experience: {
    eyebrow: string
    title: string
    subtitle: string
    items: ExperienceItem[]
  }
  skills: {
    eyebrow: string
    title: string
    subtitle: string
    levelLabel: string
    featured: FeaturedSkill[]
    toolsTitle: string
    toolsSubtitle: string
    tools: string[]
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    openInNewTab: string
    objectiveLabel: string
    comingSoon: string
    items: ProjectItem[]
  }
  footer: {
    copyright: string
    built: string
  }
}
