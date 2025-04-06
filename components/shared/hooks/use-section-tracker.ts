import { useEffect, useRef, useState } from "react"
import { SectionRefs } from "../types"

export type SectionId = keyof SectionRefs

export function useSectionTracker(initialSection = "hero") {
  const [activeSection, setActiveSection] = useState(initialSection)
  const [refsReady, setRefsReady] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const sections = useRef<SectionRefs>({
    hero: null,
    about: null,
    timeline: null,
    skills: null,
    projects: null,
    achievements: null,
    contact: null,
    blog: null,
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
      if (isScrolling) return

      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Find the current active section
      let currentSection = initialSection
      let minDistance = Infinity

      Object.entries(sections.current).forEach(([id, element]) => {
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.pageYOffset
          const elementBottom = elementTop + element.offsetHeight
          const elementCenter = (elementTop + elementBottom) / 2
          const distance = Math.abs(scrollPosition - elementCenter)
          
          if (distance < minDistance) {
            minDistance = distance
            currentSection = id
          }
        }
      })

      setActiveSection(currentSection)
    }

    const handleScrollEnd = () => {
      setIsScrolling(false)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scrollend", handleScrollEnd)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scrollend", handleScrollEnd)
    }
  }, [initialSection, isScrolling])

  const scrollToSection = (sectionId: string) => {
    const section = sections.current[sectionId as keyof SectionRefs]
    if (section) {
      setIsScrolling(true)
      
      // Get the target element's position
      const targetElement = section
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
      
      // Calculate the final position with header offset
      // Use a smaller offset for mobile devices
      const isMobile = window.innerWidth < 768
      const headerOffset = isMobile ? 60 : 80 // Smaller offset for mobile
      const finalPosition = targetPosition - headerOffset
      
      // Scroll to the position with smooth behavior
      window.scrollTo({
        top: finalPosition,
        behavior: "smooth"
      })

      // Update active section immediately
      setActiveSection(sectionId)

      // Close any open mobile menu if applicable
      const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]')
      if (isMobile && mobileMenuButton) {
        // This is a fallback in case the menu doesn't close automatically
        setTimeout(() => {
          const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
          })
          mobileMenuButton.dispatchEvent(event)
        }, 100)
      }

      // Reset isScrolling after animation
      const scrollDuration = 1000 // ms
      setTimeout(() => {
        setIsScrolling(false)
      }, scrollDuration)
    }
  }

  const refs = {
    about: { current: sections.current.about },
    timeline: { current: sections.current.timeline },
    skills: { current: sections.current.skills },
    projects: { current: sections.current.projects },
    achievements: { current: sections.current.achievements },
    contact: { current: sections.current.contact },
    blog: { current: sections.current.blog },
  }

  return { activeSection, sections, refs, refsReady, scrollToSection }
} 