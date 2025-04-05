import { ReactNode, cloneElement, isValidElement, Children, useState } from "react"
import { SectionId, useSectionTracker, SectionRefs } from "./hooks/use-section-tracker"

interface HeaderProps {
  activeSection: SectionId
  sections: React.MutableRefObject<SectionRefs>
  refsReady: boolean
  scrollToSection: (sectionId: SectionId) => void
  isMenuOpen?: boolean
  setIsMenuOpen?: (isOpen: boolean) => void
}

interface LayoutProps {
  children: ReactNode
  header: ReactNode
  className?: string
  initialSection?: SectionId
}

export function Layout({ children, header, className = "", initialSection = "hero" }: LayoutProps) {
  const { activeSection, sections, scrollToSection } = useSectionTracker({ initialSection })
  const [localRefsReady, setLocalRefsReady] = useState(false)

  const headerWithProps = isValidElement(header)
    ? cloneElement(header, {
        activeSection,
        sections,
        refsReady: localRefsReady,
        scrollToSection,
      } as HeaderProps)
    : header

  const childrenWithRefs = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const sectionId = (child.props as { id?: SectionId }).id
      if (sectionId && sections.current[sectionId] === null) {
        return cloneElement(child, {
          ref: (el: HTMLElement | null) => {
            if (el) {
              sections.current[sectionId] = el
              const allRefsSet = Object.values(sections.current).every(ref => ref !== null)
              if (allRefsSet) {
                setLocalRefsReady(true)
              }
            }
          }
        } as { ref: (el: HTMLElement | null) => void })
      }
    }
    return child
  })

  return (
    <div className={`min-h-screen ${className}`}>
      {headerWithProps}
      <main className="relative">
        {childrenWithRefs}
      </main>
    </div>
  )
} 