"use client"

import { useState } from "react"
import Hero from "@/components/modes/hacker/sections/hero"
import About from "@/components/modes/hacker/sections/about"
import Timeline from "@/components/modes/hacker/sections/timeline"
import Header from "@/components/modes/hacker/ui/header"
import MatrixRain from "@/components/modes/hacker/ui/matrix-rain"
import GlitchText from "@/components/modes/hacker/ui/glitch-text"
import { useSectionTracker } from "@/components/shared/hooks/use-section-tracker"

export default function HackerMode() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { activeSection, sections, refs, refsReady, scrollToSection } = useSectionTracker()

  return (
    <div className="min-h-screen bg-black text-green-500 relative overflow-hidden">
      <MatrixRain />
      <GlitchText />

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
      </main>
    </div>
  )
}

