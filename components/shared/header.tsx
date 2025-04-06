"use client"

import { useRef } from "react"
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
  // Add a ref to track if we're in the process of closing the menu
  const isClosingMenu = useRef(false);
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

  // Function to handle closing the menu
  const closeMenu = () => {
    if (isMenuOpen && !isClosingMenu.current) {
      isClosingMenu.current = true;
      setIsMenuOpen(false);
      
      // Reset the closing flag after a delay
      setTimeout(() => {
        isClosingMenu.current = false;
      }, 300); // Longer than animation duration
    }
  };
  
  // Function to handle navigation clicks
  const handleNavClick = (sectionId: string) => {
    // Close the menu first if it's open
    closeMenu();
    
    // Wait for menu to close before scrolling
    setTimeout(() => {
      // Try to find the section by ID first (direct DOM access)
      let section = document.getElementById(sectionId);
      
      // If not found by ID, try to find by section attribute
      if (!section) {
        const allSections = document.querySelectorAll('section');
        allSections.forEach(el => {
          // Check if this is the section we're looking for
          if (el.getAttribute('data-section') === sectionId) {
            section = el as HTMLElement;
          }
        });
      }
      
      // If still not found, try to find the first section with a matching ref attribute
      if (!section) {
        const potentialSections = document.querySelectorAll(`section[ref="${sectionId}"]`);
        if (potentialSections.length > 0) {
          section = potentialSections[0] as HTMLElement;
        }
      }
      
      if (section) {
        // Add ID to the section for future reference
        if (!section.id) section.id = sectionId;
        
        // Calculate position with offset for header
        const isMobile = window.innerWidth < 768
        const headerOffset = isMobile ? -60 : -80 // Adjust based on header height
        const y = section.getBoundingClientRect().top + window.scrollY + headerOffset
        
        // Scroll with smooth behavior
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else if (scrollToSection) {
        // Fallback to the provided scrollToSection function
        scrollToSection(sectionId);
      }
    }, 150); // Delay scrolling until after menu closes
  }

  return (
    <header className={`fixed w-full top-0 z-30 ${styles.bg.primary}${theme === "hacker" ? "" : "/80"} ${theme === "hacker" ? "bg-black" : "backdrop-blur-md"} border-b ${styles.border.primary}`}>
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              
              // Only toggle if we're not in the process of closing
              if (!isClosingMenu.current) {
                setIsMenuOpen(!isMenuOpen);
              }
            }}
            className={styles.text.secondary}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu - Fixed position overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-x-0 top-[61px] z-50 md:hidden ${styles.bg.primary} border-t ${styles.border.primary}/50`}
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="container mx-auto px-4 py-4 flex flex-col space-y-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent event bubbling
                    
                    // Use the handleNavClick function which handles closing and scrolling
                    handleNavClick(item.href.substring(1));
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 