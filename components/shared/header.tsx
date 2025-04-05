"use client"

import { Button } from "@/components/shared/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./context/theme-context"
import { useSectionTracker } from "./hooks/use-section-tracker"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  scrollToSection?: (sectionId: string) => void
}

export default function Header({ isMenuOpen, setIsMenuOpen, scrollToSection }: HeaderProps) {
  const { theme, styles } = useTheme()
  const { activeSection } = useSectionTracker()

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (sectionId: string) => {
    if (scrollToSection) {
      scrollToSection(sectionId)
    }
  }

  return (
    <header className={`sticky top-0 z-30 ${styles.bg.primary}/80 backdrop-blur-md border-b ${styles.border.primary}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xl"
        >
          {theme === "hacker" ? (
            <>
              <span className="text-white">{">"}</span> <span className="text-red-500">Momen_Elkhouli</span>
            </>
          ) : (
            <span className={styles.text.primary}>Momen Elkhouli</span>
          )}
        </motion.div>

        <nav className="hidden md:flex space-x-6 font-mono">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href.substring(1))}
              className={`relative py-1 px-2 transition-colors ${
                activeSection === item.href.substring(1)
                  ? styles.text.accent
                  : `${styles.text.secondary} hover:${styles.text.primary}`
              }`}
            >
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeSection"
                  className={`absolute inset-0 ${styles.bg.accent}/10 border ${styles.border.secondary}/30 rounded-sm -z-10`}
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              {item.name}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.text.secondary}
          >
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
            className={`md:hidden ${styles.bg.primary} border-t ${styles.border.primary}/50`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.href.substring(1))
                    setIsMenuOpen(false)
                  }}
                  className={`py-2 px-4 border ${
                    activeSection === item.href.substring(1)
                      ? `${styles.border.secondary} ${styles.text.accent}`
                      : `${styles.border.primary}/30 ${styles.text.secondary}`
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 