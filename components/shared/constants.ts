import { Code, Server, Database, Trophy, Award, Medal, Star, Github, Linkedin, Mail } from "lucide-react"
import { SkillCategory, Project, Achievement, SocialLink } from "./types"

export const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    iconClassName: "h-10 w-10 mb-2 text-purple-600",
    title: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    icon: Server,
    iconClassName: "h-10 w-10 mb-2 text-indigo-600",
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Python", level: 70 },
      { name: "Java", level: 65 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 60 },
    ],
  },
  {
    icon: Database,
    iconClassName: "h-10 w-10 mb-2 text-blue-600",
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 65 },
      { name: "Linux", level: 70 },
    ],
  },
]

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "My personal website with dual-mode interface and interactive terminal.",
    image: "bg-gradient-to-br from-purple-400 to-indigo-600",
    tags: ["Next.js", "React", "TypeScript"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication and payment processing.",
    image: "bg-gradient-to-br from-indigo-400 to-blue-600",
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "#",
      demo: "#",
    },
  },
  {
    title: "Security Scanner",
    description: "An automated tool for detecting common web vulnerabilities and security issues.",
    image: "bg-gradient-to-br from-blue-400 to-cyan-600",
    tags: ["Python", "Flask", "SQLAlchemy"],
    links: {
      github: "#",
      demo: "#",
    },
  },
]

export const achievements: Achievement[] = [
  {
    icon: Trophy,
    iconClassName: "text-yellow-500",
    title: "First Place in Hackathon",
    description: "Won first place in the annual university hackathon with a revolutionary AI-powered application.",
    year: "2023"
  },
  {
    icon: Award,
    iconClassName: "text-blue-500",
    title: "Best Developer Award",
    description: "Recognized as the best developer in the company for outstanding contributions to multiple projects.",
    year: "2022"
  },
  {
    icon: Medal,
    iconClassName: "text-green-500",
    title: "Open Source Contributor",
    description: "Active contributor to multiple open-source projects with significant impact on the community.",
    year: "2021"
  },
  {
    icon: Star,
    iconClassName: "text-purple-500",
    title: "Innovation Award",
    description: "Received innovation award for developing a groundbreaking solution to a complex problem.",
    year: "2020"
  }
]

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    iconClassName: "h-6 w-6",
    label: "GitHub",
    url: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    iconClassName: "h-6 w-6",
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
  },
  {
    icon: Mail,
    iconClassName: "h-6 w-6",
    label: "Email",
    url: "mailto:your.email@example.com",
  },
] 