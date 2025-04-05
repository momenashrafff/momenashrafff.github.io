"use client"

import { useState } from "react"
import Header from "@/components/modes/developer/ui/header"
import Hero from "@/components/modes/developer/sections/hero"
import About from "@/components/modes/developer/sections/about"
import Timeline from "@/components/modes/developer/sections/timeline"
import Skills from "@/components/modes/developer/sections/skills"
import Projects from "@/components/modes/developer/sections/projects"
import Achievements from "@/components/modes/developer/sections/achievements"
import Contact from "@/components/modes/developer/sections/contact"
import { useSectionTracker } from "@/components/shared/hooks/use-section-tracker"

export default function DeveloperMode() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { activeSection, sections, refs, refsReady, scrollToSection } = useSectionTracker()

  return (
    <div className="min-h-screen bg-white">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        refs={refs}
        refsReady={refsReady}
        scrollToSection={scrollToSection}
      />
      <main className="relative">
        <Hero ref={(el) => { if (el) sections.current.hero = el }} />
        <About ref={(el) => { if (el) sections.current.about = el }} />
        <Timeline ref={(el) => { if (el) sections.current.timeline = el }} />
        <Skills ref={(el) => { if (el) sections.current.skills = el }} />
        <Projects ref={(el) => { if (el) sections.current.projects = el }} />
        <Achievements ref={(el) => { if (el) sections.current.achievements = el }} />
        <Contact ref={(el) => { if (el) sections.current.contact = el }} />
      </main>
    </div>
  )
} 