"use client"

import { useState, useEffect } from "react"
import Header from "@/components/shared/header"
import Hero from "@/components/modes/hacker/sections/hero"
import About from "@/components/modes/hacker/sections/about"
import Timeline from "@/components/modes/hacker/sections/timeline"
import Projects from "@/components/modes/hacker/sections/projects"
import Achievements from "@/components/modes/hacker/sections/achievements"
import Blog from "@/components/modes/hacker/sections/blog"
import { useSectionTracker } from "@/components/shared/hooks/use-section-tracker"
import { ThemeProvider } from "@/components/shared/context/theme-context"

export default function HackerMode() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Track if section refs have been initialized
  const [refsInitialized, setRefsInitialized] = useState(false)
  const { sections, scrollToSection } = useSectionTracker()
  
  // Force section IDs to be available for direct DOM access
  useEffect(() => {
    // Add IDs to all sections for direct DOM access
    const addSectionIds = () => {
      const sectionElements = document.querySelectorAll('section');
      sectionElements.forEach(section => {
        if (section.getAttribute('ref') && !section.id) {
          const refName = section.getAttribute('ref');
          if (refName) section.id = refName;
        }
      });
      setRefsInitialized(true);
    };
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      addSectionIds();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [])

  return (
    <ThemeProvider initialTheme="hacker">
      <div className={`min-h-screen bg-black text-green-500 relative overflow-hidden pt-16 ${refsInitialized ? 'sections-ready' : ''}`}>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />
        <main className="relative">
          <Hero ref={(el) => { if (el) sections.current.hero = el }} />
          <About ref={(el) => { if (el) sections.current.about = el }} />
          <Timeline ref={(el) => { if (el) sections.current.timeline = el }} />
          <Projects ref={(el) => { if (el) sections.current.projects = el }} />
          <Achievements ref={(el) => { if (el) sections.current.achievements = el }} />
          <Blog ref={(el) => { if (el) sections.current.blog = el }} />
        </main>
      </div>
    </ThemeProvider>
  )
}

