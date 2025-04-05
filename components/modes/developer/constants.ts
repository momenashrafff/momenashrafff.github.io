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
    iconClassName: "h-10 w-10 text-yellow-500",
    title: "Hackathon Winner",
    description: "Won 1st place in the annual university hackathon with a team of 4 members.",
    year: "2023",
  },
  {
    icon: Award,
    iconClassName: "h-10 w-10 text-purple-500",
    title: "Best Project Award",
    description: "Received recognition for developing an innovative web application.",
    year: "2022",
  },
  {
    icon: Medal,
    iconClassName: "h-10 w-10 text-blue-500",
    title: "CTF Competition",
    description: "Ranked in the top 10% of participants in a national cybersecurity competition.",
    year: "2023",
  },
  {
    icon: Star,
    iconClassName: "h-10 w-10 text-indigo-500",
    title: "Open Source Contributor",
    description: "Contributed to multiple open-source projects with significant impact.",
    year: "2022",
  },
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