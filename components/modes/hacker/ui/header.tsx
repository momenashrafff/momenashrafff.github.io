"use client"

import { Button } from "@/components/shared/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { HeaderProps } from "../../../shared/types"

const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, refs, scrollToSection }: HeaderProps) => {
  return (
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
            <button
              key={item.name}
              onClick={() => scrollToSection?.(item.href.substring(1))}
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
            </button>
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
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection?.(item.href.substring(1))
                    setIsMenuOpen(false)
                  }}
                  className={`py-2 px-4 border ${
                    activeSection === item.href.substring(1)
                      ? "border-red-500 text-red-500"
                      : "border-green-500/30 text-green-500"
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

export default Header 