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

export type ProjectStatus = 'inProgress' | 'incoming'

export interface ProjectImage {
  src: string
  srcSm: string
  alt: string
}

export interface ProjectItem {
  title: string
  /** Ligne affichée sous le titre (cadre de la mission, par exemple). */
  context?: string
  description: string
  objective?: string
  highlights?: string[]
  url?: string
  tags: string[]
  status?: ProjectStatus
  featured?: boolean
  cover?: ProjectImage
  /** Slug de l'étude de cas associée (clé de `caseStudies`). */
  caseStudy?: string
}

export interface CaseFigure extends ProjectImage {
  caption: string
  mobile?: boolean
}

export interface CaseSection {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  figures?: CaseFigure[]
}

export interface CaseStudy {
  title: string
  context: string
  period: string
  intro: string
  sections: CaseSection[]
  stack: string[]
  note: string
  cta: {
    text: string
    linkLabel: string
    url: string
  }
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
  common: {
    newTab: string
  }
  hero: {
    greeting: string
    titleLead: string
    intro: string
    ctaSkills: string
    ctaProjects: string
  }
  education: {
    title: string
    items: EducationItem[]
  }
  experience: {
    title: string
    subtitle: string
    items: ExperienceItem[]
  }
  skills: {
    title: string
    subtitle: string
    levelLabel: string
    featured: FeaturedSkill[]
    toolsTitle: string
    toolsSubtitle: string
    tools: string[]
  }
  projects: {
    title: string
    subtitle: string
    objectiveLabel: string
    stackLabel: string
    viewCode: string
    viewCaseStudy: string
    status: Record<ProjectStatus, string>
    items: ProjectItem[]
  }
  caseStudy: {
    back: string
    stackLabel: string
    enlarge: string
    notFound: string
  }
  caseStudies: Record<string, CaseStudy>
  footer: {
    copyright: string
    built: string
  }
}
