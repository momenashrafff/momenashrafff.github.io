"use client"

import { useRef, useState, useEffect } from "react"
import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Timeline from "./timeline"
import Skills from "./skills"
import Projects from "./projects"
import Achievements from "./achievements"
import Contact from "./contact"

export default function DeveloperMode() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [refsReady, setRefsReady] = useState(false)
  const sections = useRef<Record<string, HTMLDivElement | null>>({
    hero: null,
    about: null,
    timeline: null,
    skills: null,
    projects: null,
    achievements: null,
    contact: null,
  })

  // Wait for refs to be initialized
  useEffect(() => {
    const checkRefs = () => {
      const allRefsSet = Object.values(sections.current).every(ref => ref !== null)
      if (allRefsSet) {
        setRefsReady(true)
      }
    }

    // Check immediately after mount
    checkRefs()

    // Also check after a short delay to ensure all components have mounted
    const timeoutId = setTimeout(checkRefs, 100)
    return () => clearTimeout(timeoutId)
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

  return (
    <div className="min-h-screen bg-white">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        refs={{
          about: { current: sections.current.about as HTMLDivElement },
          timeline: { current: sections.current.timeline as HTMLDivElement },
          skills: { current: sections.current.skills as HTMLDivElement },
          projects: { current: sections.current.projects as HTMLDivElement },
          achievements: { current: sections.current.achievements as HTMLDivElement },
          contact: { current: sections.current.contact as HTMLDivElement },
        }}
        refsReady={refsReady}
      />
      <main className="relative">
        <Hero ref={(el) => { sections.current.hero = el }} />
        <About ref={(el) => { sections.current.about = el }} />
        <Timeline ref={(el) => { sections.current.timeline = el }} />
        <Skills ref={(el) => { sections.current.skills = el }} />
        <Projects ref={(el) => { sections.current.projects = el }} />
        <Achievements ref={(el) => { sections.current.achievements = el }} />
        <Contact ref={(el) => { sections.current.contact = el }} />
      </main>
    </div>
  )
} 