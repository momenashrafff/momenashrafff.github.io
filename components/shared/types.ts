import { LucideIcon } from "lucide-react"
import { RefObject } from "react"

// Common Types
export interface SectionProps {
  ref?: React.Ref<HTMLDivElement>
}

export interface HeaderProps extends SectionProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  activeSection?: string
  refs?: {
    about: RefObject<HTMLDivElement>
    timeline: RefObject<HTMLDivElement>
    skills: RefObject<HTMLDivElement>
    projects: RefObject<HTMLDivElement>
    achievements: RefObject<HTMLDivElement>
    contact: RefObject<HTMLDivElement>
  }
  refsReady?: boolean
  scrollToSection?: (sectionId: string) => void
}

// Developer Mode Types
export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  icon: LucideIcon
  iconClassName: string
  title: string
  skills: Skill[]
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  links: {
    github: string
    demo: string
  }
}

export interface Achievement {
  icon: LucideIcon
  iconClassName: string
  title: string
  description: string
  year: string
}

export interface SocialLink {
  icon: LucideIcon
  iconClassName: string
  label: string
  url: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  icon: LucideIcon
}

// Hacker Mode Types
export interface SectionRefs {
  hero: HTMLDivElement | null
  about: HTMLDivElement | null
  timeline: HTMLDivElement | null
  skills?: HTMLDivElement | null
  projects?: HTMLDivElement | null
  blog?: HTMLDivElement | null
  achievements?: HTMLDivElement | null
  contact?: HTMLDivElement | null
} 