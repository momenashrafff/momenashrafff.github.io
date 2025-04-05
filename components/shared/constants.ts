import { Code, Server, Database, Trophy, Award, Medal, Star, Github, Linkedin, Mail } from "lucide-react"
import { SkillCategory, Project, Achievement, SocialLink } from "./types"

export const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    iconClassName: "h-10 w-10 mb-2 text-purple-600",
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Flutter", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaFX", level: 75 },
      { name: "Unity 3D", level: 70 },
    ],
  },
  {
    icon: Server,
    iconClassName: "h-10 w-10 mb-2 text-indigo-600",
    title: "Backend Development",
    skills: [
      { name: "Nest.js", level: 85 },
      { name: "Node.js", level: 85 },
      { name: ".NET Core", level: 80 },
      { name: "Java", level: 80 },
      { name: "C#", level: 75 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    icon: Database,
    iconClassName: "h-10 w-10 mb-2 text-blue-600",
    title: "Database & Security",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MSSQL", level: 80 },
      { name: "MPC", level: 75 },
      { name: "Zero-Knowledge Proofs", level: 70 },
      { name: "Homomorphic Encryption", level: 70 },
      { name: "GDPR Compliance", level: 75 },
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
    title: "70% Scholarship at GIU",
    description: "Awarded 70% scholarship at The German International University, ranked 2nd out of 350+ students.",
    year: "2022"
  },
  {
    icon: Award,
    iconClassName: "text-blue-500",
    title: "21st Place in ECPC",
    description: "Secured 21st place at the Egyptian Collegiate Programming Contest (ECPC).",
    year: "2023"
  },
  {
    icon: Medal,
    iconClassName: "text-green-500",
    title: "2nd Place in GIU Programming Contest",
    description: "Achieved second place at the German International University Programming Contest.",
    year: "2023"
  },
  {
    icon: Star,
    iconClassName: "text-purple-500",
    title: "1st Place in Hack App Hackathon",
    description: "Won first place at Ulm University's Hack App Hackathon with privacy-preserving Dijkstra's using MP-SPDZ.",
    year: "2024"
  },
  {
    icon: Trophy,
    iconClassName: "text-red-500",
    title: "3rd Place in IEEE Hackathon",
    description: "Secured third place at Exceed Hackathon (IEEE) for a VR Physics Education App.",
    year: "2023"
  },
  {
    icon: Star,
    iconClassName: "text-indigo-500",
    title: "Arlo Security Hall of Fame",
    description: "Recognized in Arlo Security Hall of Fame via Bugcrowd for identifying a vulnerability.",
    year: "2023"
  }
]

export const socialLinks: SocialLink[] = [
  {
    icon: Github,
    iconClassName: "h-6 w-6",
    label: "GitHub",
    url: "https://github.com/momenashrafff",
  },
  {
    icon: Linkedin,
    iconClassName: "h-6 w-6",
    label: "LinkedIn",
    url: "https://linkedin.com/in/momenashrafff",
  },
  {
    icon: Mail,
    iconClassName: "h-6 w-6",
    label: "Email",
    url: "mailto:momenashraf@proton.me",
  },
] 