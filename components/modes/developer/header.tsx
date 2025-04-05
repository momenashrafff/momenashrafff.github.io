"use client"

import { forwardRef, RefObject } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  refsReady: boolean
  refs: {
    about: RefObject<HTMLDivElement>
    timeline: RefObject<HTMLDivElement>
    skills: RefObject<HTMLDivElement>
    projects: RefObject<HTMLDivElement>
    achievements: RefObject<HTMLDivElement>
    contact: RefObject<HTMLDivElement>
  }
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ isMenuOpen, setIsMenuOpen, refs, refsReady }, ref) => {
  const scrollToSection = (sectionRef: RefObject<HTMLDivElement>) => {
    if (!refsReady) return
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header ref={ref} className="sticky top-0 z-30 backdrop-blur-md bg-white/80 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Momen Elkhouli
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection(refs.about)}
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.timeline)}
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Timeline
          </button>
          <button
            onClick={() => scrollToSection(refs.skills)}
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection(refs.projects)}
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(refs.achievements)}
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Achievements
          </button>
          <button
            onClick={() => scrollToSection(refs.contact)}
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-purple-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection(refs.about)}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(refs.timeline)}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Timeline
              </button>
              <button
                onClick={() => scrollToSection(refs.skills)}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection(refs.projects)}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection(refs.achievements)}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Achievements
              </button>
              <button
                onClick={() => scrollToSection(refs.contact)}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
})

Header.displayName = "Header"

export default Header 