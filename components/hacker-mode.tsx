"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Shield,
  Terminal,
  Cpu,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Award,
  BookOpen,
  FileText,
  AlertTriangle,
} from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import TimelineItem from "@/components/timeline-item"

export default function HackerMode() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const sections = useRef<Record<string, HTMLElement | null>>({
    hero: null,
    about: null,
    timeline: null,
    skills: null,
    projects: null,
    blog: null,
    achievements: null,
    contact: null,
  })

  // Glitch effect for text
  const [glitchInterval, setGlitchInterval] = useState<NodeJS.Timeout | null>(null)
  const [glitchText, setGlitchText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`"
      let result = ""
      for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      setGlitchText(result)

      // Reset after a short time
      setTimeout(() => {
        setGlitchText("")
      }, 100)
    }, 3000)

    setGlitchInterval(interval)

    return () => {
      if (glitchInterval) clearInterval(glitchInterval)
    }
  }, [])

  // Matrix rain effect
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#0f0"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      // Find the current active section
      let currentSection = "hero"
      Object.entries(sections.current).forEach(([id, element]) => {
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Glitch text effect
  const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
    return (
      <div className={`glitch-wrapper ${className}`}>
        <div className="glitch" data-text={text}>
          {text}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      {/* Matrix rain background */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full opacity-20 pointer-events-none" />

      {/* Random glitch text overlay */}
      {glitchText && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 text-red-500 font-mono text-4xl font-bold opacity-30">
          {glitchText}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-green-500">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xl"
          >
            <span className="text-white">{">"}</span> <span className="text-red-500">Momen_Elkhouli</span>
          </motion.div>

          <nav className="hidden md:flex space-x-6 font-mono">
            {[
              { name: "About", href: "#about" },
              { name: "Timeline", href: "#timeline" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Blog", href: "#blog" },
              { name: "Achievements", href: "#achievements" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-1 px-2 transition-colors ${
                  activeSection === item.href.substring(1) ? "text-red-500" : "text-green-500 hover:text-white"
                }`}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeHackerSection"
                    className="absolute inset-0 bg-red-500/10 border border-red-500/30 rounded-sm -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-500">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-green-500/50"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {[
                  { name: "About", href: "#about" },
                  { name: "Timeline", href: "#timeline" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Blog", href: "#blog" },
                  { name: "Achievements", href: "#achievements" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-2 px-4 border ${
                      activeSection === item.href.substring(1)
                        ? "border-red-500 text-red-500"
                        : "border-green-500/30 text-green-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 border-b border-green-500 relative overflow-hidden"
        ref={(el) => (sections.current.hero = el)}
      >
        {/* Animated circuit lines */}
        <div className="absolute inset-0 circuit-board opacity-20"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 h-full">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono mb-4">
              <p className="text-gray-400 glitch-text">{">"} ./introduce.sh</p>
              <div className="mt-4">
                <GlitchText text="Momen Elkhouli" className="text-4xl md:text-5xl font-bold mb-4 text-white" />
              </div>
            </div>
            <motion.h2
              className="text-2xl md:text-3xl text-red-500 mb-6 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Penetration Tester & Security Enthusiast
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-8 max-w-lg font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {">"} Finding vulnerabilities and securing systems one exploit at a time.
              <span className="animate-pulse">_</span>
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Button className="bg-red-600 hover:bg-red-700 text-white border-none group relative overflow-hidden">
                <span className="relative z-10">View Write-ups</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 group-hover:opacity-0 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 group relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-300"></span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-red-500 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-black border-2 border-green-500 flex items-center justify-center text-green-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div
                      key={i}
                      className="border border-green-900/30 flex items-center justify-center overflow-hidden"
                    >
                      {Math.random() > 0.9 && (
                        <div className="text-[8px] text-green-500 opacity-70">{Math.random() > 0.5 ? "1" : "0"}</div>
                      )}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-mono relative z-20">[PROFILE IMAGE]</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          >
            <ChevronDown className="h-8 w-8 text-green-500" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black relative" ref={(el) => (sections.current.about = el)}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <div className="font-mono text-gray-400 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> cat about.txt
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
              About Me
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto font-mono">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-gray-400 mb-6 leading-relaxed">
                I'm a cybersecurity enthusiast with a focus on penetration testing and vulnerability assessment.
                Currently studying Computer Science at GIU, I spend my free time participating in CTF competitions,
                researching security vulnerabilities, and documenting my findings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-gray-400 mb-6 leading-relaxed">
                My approach to security is both methodical and creative - finding the unconventional paths that others
                might miss. I believe in responsible disclosure and helping organizations improve their security
                posture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="p-4 border border-red-500/30 bg-red-500/5 text-red-400">
                "The quieter you become, the more you are able to hear." — Kali Linux
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-900 relative" ref={(el) => (sections.current.timeline = el)}>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <div className="font-mono text-gray-400 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> ./view_timeline.sh
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
              Security Journey
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
            </h2>
          </motion.div>

          <div className="relative text-gray-400">
            <TimelineItem
              date="2021"
              title="First CTF Competition"
              description="Participated in my first Capture The Flag competition and discovered my passion for cybersecurity."
              icon={<Terminal className="h-6 w-6 text-green-500" />}
              iconClassName="bg-green-900/30 border border-green-500/30"
              isLeft={true}
              isFirst={true}
            />

            <TimelineItem
              date="2022"
              title="Security Fundamentals"
              description="Completed comprehensive training in network security, web vulnerabilities, and penetration testing basics."
              icon={<Shield className="h-6 w-6 text-red-500" />}
              iconClassName="bg-red-900/30 border border-red-500/30"
              isLeft={false}
            />

            <TimelineItem
              date="2022"
              title="First Vulnerability Discovery"
              description="Discovered and responsibly disclosed my first XSS vulnerability in a web application."
              icon={<AlertTriangle className="h-6 w-6 text-yellow-500" />}
              iconClassName="bg-yellow-900/30 border border-yellow-500/30"
              isLeft={true}
            />

            <TimelineItem
              date="2023"
              title="CTF Competition Finalist"
              description="Reached the finals in a national Capture The Flag cybersecurity competition."
              icon={<Award className="h-6 w-6 text-green-500" />}
              iconClassName="bg-green-900/30 border border-green-500/30"
              isLeft={false}
            />

            <TimelineItem
              date="2023"
              title="Security Blog Launch"
              description="Started my security blog to document vulnerabilities, exploits, and security research."
              icon={<BookOpen className="h-6 w-6 text-red-500" />}
              iconClassName="bg-red-900/30 border border-red-500/30"
              isLeft={true}
            />

            <TimelineItem
              date="Present"
              title="Continuous Learning"
              description="Currently focusing on advanced penetration testing techniques and exploit development."
              icon={<Terminal className="h-6 w-6 text-green-500" />}
              iconClassName="bg-green-900/30 border border-green-500/30"
              isLeft={false}
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black relative" ref={(el) => (sections.current.skills = el)}>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <div className="font-mono text-gray-400 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> ./list_skills.sh
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
              Skill Set
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Penetration Testing",
                icon: <Shield className="h-10 w-10 mb-2 text-red-500" />,
                skills: [
                  { name: "Web App Security", level: 85 },
                  { name: "Network Security", level: 80 },
                  { name: "OWASP Top 10", level: 90 },
                  { name: "Burp Suite", level: 85 },
                  { name: "Metasploit", level: 75 },
                ],
              },
              {
                title: "Tools & Systems",
                icon: <Terminal className="h-10 w-10 mb-2 text-red-500" />,
                skills: [
                  { name: "Kali Linux", level: 85 },
                  { name: "Wireshark", level: 80 },
                  { name: "Nmap", level: 90 },
                  { name: "SQLmap", level: 75 },
                  { name: "John the Ripper", level: 70 },
                ],
              },
              {
                title: "Programming",
                icon: <Cpu className="h-10 w-10 mb-2 text-red-500" />,
                skills: [
                  { name: "Python", level: 85 },
                  { name: "Bash", level: 80 },
                  { name: "JavaScript", level: 75 },
                  { name: "SQL", level: 70 },
                  { name: "C/C++", level: 65 },
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-black border-green-500 hover:border-red-500 transition-colors duration-300 group">
                  <CardHeader>
                    <div className="group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <CardTitle className="text-white font-mono group-hover:text-red-500 transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-red-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 * i }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900 relative" ref={(el) => (sections.current.projects = el)}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <div className="font-mono text-gray-400 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> ls -la ./projects
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
              Security Projects
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Web Vulnerability Scanner",
                description: "An automated tool for detecting common web vulnerabilities like XSS, SQLi, and CSRF.",
                tags: ["Python", "BeautifulSoup", "SQLAlchemy"],
                severity: "High",
              },
              {
                title: "Network Traffic Analyzer",
                description:
                  "A tool for analyzing network traffic and detecting suspicious patterns and potential threats.",
                tags: ["Python", "Scapy", "Machine Learning"],
                severity: "Medium",
              },
              {
                title: "Password Cracking Tool",
                description: "A tool for testing password strength and demonstrating common cracking techniques.",
                tags: ["C++", "OpenCL", "Cryptography"],
                severity: "Critical",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-black border-green-500 overflow-hidden group hover:border-red-500 transition-colors duration-300 h-full">
                  <div className="h-48 bg-green-500/10 flex items-center justify-center text-green-400 border-b border-green-500 group-hover:border-red-500 group-hover:bg-red-500/10 group-hover:text-red-400 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-30">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div
                          key={i}
                          className="border border-green-900/30 group-hover:border-red-900/30 transition-colors duration-300"
                        >
                          {Math.random() > 0.9 && (
                            <div className="text-[8px] text-green-500 group-hover:text-red-500 transition-colors duration-300 flex items-center justify-center h-full">
                              {Math.random() > 0.5 ? "1" : "0"}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-mono relative z-10">[PROJECT SCREENSHOT]</span>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white font-mono group-hover:text-red-500 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge
                        className={`
                        ${
                          project.severity === "Critical"
                            ? "bg-red-500/20 text-red-500 border-red-500/30"
                            : project.severity === "High"
                              ? "bg-orange-500/20 text-orange-500 border-orange-500/30"
                              : "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
                        }
                      `}
                      >
                        {project.severity}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-400 font-mono">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          className="bg-green-500/20 text-green-500 hover:bg-red-500/20 hover:text-red-500 hover:border-red-500 transition-colors duration-300 border border-green-500/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-500 text-green-500 hover:bg-green-500/10 flex items-center gap-1 group-hover:border-red-500 group-hover:text-red-500 group-hover:hover:bg-red-500/10 transition-colors duration-300"
                    >
                      <Github className="h-4 w-4" /> Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-1 relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" /> Details
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 group-hover:opacity-0 transition-opacity duration-300"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-black relative" ref={(el) => (sections.current.blog = el)}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <div className="font-mono text-gray-400 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> cat ./blog/recent.md
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
              Security Write-ups
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Exploiting XSS in Modern Web Applications",
                date: "2023-05-15",
                excerpt:
                  "In this write-up, I explore a cross-site scripting vulnerability I discovered in a popular web application. The attack vector involved bypassing client-side validation and exploiting a lack of proper output encoding...",
                tags: ["XSS", "Web Security", "JavaScript"],
              },
              {
                title: "SQL Injection: Beyond the Basics",
                date: "2023-07-22",
                excerpt:
                  "A deep dive into advanced SQL injection techniques that go beyond the typical examples. This post covers blind SQL injection, time-based attacks, and how to bypass modern WAF protections...",
                tags: ["SQLi", "Database", "Pentesting"],
              },
              {
                title: "Reverse Engineering Mobile Apps for Vulnerabilities",
                date: "2023-09-10",
                excerpt:
                  "This guide walks through the process of decompiling and analyzing mobile applications to identify security flaws. Using both static and dynamic analysis techniques to uncover hidden API keys and insecure data storage...",
                tags: ["Mobile", "Reverse Engineering", "Android"],
              },
              {
                title: "Building a Home Security Lab",
                date: "2023-11-05",
                excerpt:
                  "A comprehensive guide to setting up your own cybersecurity lab environment for practicing ethical hacking skills. Includes virtualization setup, vulnerable machine configurations, and network isolation techniques...",
                tags: ["Lab Setup", "Virtualization", "Training"],
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="bg-black border-green-500 hover:border-red-500 transition-colors duration-300 group h-full">
                  <CardHeader>
                    <div className="text-xs text-gray-400 font-mono mb-2 flex items-center">
                      <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                      {post.date}
                    </div>
                    <CardTitle className="text-white font-mono group-hover:text-red-500 transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <p className="text-gray-400 font-mono mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          className="bg-green-500/20 text-green-500 hover:bg-red-500/20 hover:text-red-500 transition-colors duration-300 border border-green-500/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-green-500 text-green-500 hover:bg-green-500/10 group-hover:border-red-500 group-hover:text-red-500 group-hover:hover:bg-red-500/10 transition-colors duration-300 mt-auto"
                    >
                      Read Full Write-up
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white relative overflow-hidden group">
              <span className="relative z-10">View All Write-ups</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 group-hover:opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section
        id="achievements"
        className="py-20 bg-gray-900 relative"
        ref={(el) => (sections.current.achievements = el)}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <div className="font-mono text-gray-400 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> ./list_achievements.sh
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
              Security Achievements
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "CTF Competition Finalist",
                description: "Reached the finals in a national Capture The Flag cybersecurity competition.",
                icon: <Award className="h-10 w-10 text-red-500" />,
                date: "2023",
              },
              {
                title: "Bug Bounty Recognition",
                description:
                  "Discovered and responsibly disclosed multiple security vulnerabilities in web applications.",
                icon: <AlertTriangle className="h-10 w-10 text-yellow-500" />,
                date: "2022-2023",
              },
              {
                title: "Security Certification",
                description: "Completed advanced certification in penetration testing and ethical hacking.",
                icon: <FileText className="h-10 w-10 text-green-500" />,
                date: "2022",
              },
              {
                title: "Open Source Security Contributions",
                description: "Contributed security improvements to multiple open source projects.",
                icon: <Github className="h-10 w-10 text-white" />,
                date: "2021-Present",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="bg-black border-green-500 hover:border-red-500 transition-colors duration-300 group">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-gray-900 p-3 rounded-full border border-green-500/30 group-hover:border-red-500/30 transition-colors duration-300">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                      <div className="text-sm text-gray-400 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" /> {achievement.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black relative" ref={(el) => (sections.current.contact = el)}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <div className="font-mono text-gray-400 flex items-center">
              <span className="text-green-500 mr-2">{">"}</span> ./contact.sh
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
              Secure Channel
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-black border-green-500 hover:border-red-500 transition-colors duration-300 group">
              <CardContent className="pt-6">
                <div className="flex gap-6 mb-8 justify-center">
                  <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-red-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Github className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-red-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Linkedin className="h-8 w-8" />
                  </motion.a>
                  <motion.a
                    href="mailto:your-email@example.com"
                    className="text-green-500 hover:text-red-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Mail className="h-8 w-8" />
                  </motion.a>
                </div>

                <p className="text-center text-gray-400 mb-8 font-mono">
                  For secure communications, you can reach me through these channels or use my PGP key.
                </p>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white relative overflow-hidden group">
                  <span className="relative z-10">Establish Connection</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 group-hover:opacity-0 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-green-500 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-mono">
              <span className="text-green-500">root@momenelkhouli:~#</span> echo "© {new Date().getFullYear()} All
              rights reserved."
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 font-mono">
              <Link href="#" className="text-gray-400 hover:text-white">
                Security
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Glitch effect styles */}
      <style jsx global>{`
        .glitch-wrapper {
          position: relative;
          display: inline-block;
        }
        
        .glitch {
          position: relative;
          display: inline-block;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          left: 2px;
          text-shadow: -1px 0 red;
          animation: glitch-animation 2s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        
        .glitch::after {
          left: -2px;
          text-shadow: 1px 0 blue;
          animation: glitch-animation 3s infinite linear alternate-reverse;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }
        
        @keyframes glitch-animation {
          0% {
            transform: translateX(0);
          }
          80% {
            transform: translateX(0);
          }
          85% {
            transform: translateX(2px);
          }
          90% {
            transform: translateX(-2px);
          }
          95% {
            transform: translateX(2px);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .circuit-board {
          background-image: 
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px);
          background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
          background-position: -1px -1px, -1px -1px, -1px -1px, -1px -1px;
        }
        
        .glitch-text {
          animation: glitch-text 3s infinite;
        }
        
        @keyframes glitch-text {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          85% {
            opacity: 0.8;
          }
          86% {
            opacity: 1;
          }
          87% {
            opacity: 0.8;
          }
          88% {
            opacity: 1;
          }
          89% {
            opacity: 0.8;
          }
          90% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

