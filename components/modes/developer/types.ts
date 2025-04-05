import { LucideIcon } from "lucide-react"

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

export interface SectionProps {
  ref?: React.Ref<HTMLDivElement>
}

export interface HeaderProps extends SectionProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export interface HeroProps extends SectionProps {
  opacity: number
  scale: number
  y: number
}

export interface TimelineItem {
  year: string
  title: string
  description: string
  icon: LucideIcon
} 