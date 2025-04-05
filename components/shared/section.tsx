import { forwardRef, ReactNode } from "react"
import { SectionId } from "./hooks/use-section-tracker"

interface SectionProps {
  children: ReactNode
  id: SectionId
  className?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ children, id, className = "" }, ref) => {
  return (
    <section
      ref={ref}
      id={id}
      className={className}
      data-section-id={id}
    >
      {children}
    </section>
  )
})

Section.displayName = "Section" 