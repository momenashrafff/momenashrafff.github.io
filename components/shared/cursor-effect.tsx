"use client"

import { useEffect, useRef } from "react"

export default function CursorEffect() {
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorOutlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorDotRef.current || !cursorOutlineRef.current) return

      const x = e.clientX
      const y = e.clientY

      // Update cursor dot position
      requestAnimationFrame(() => {
        if (cursorDotRef.current) {
          cursorDotRef.current.style.left = `${x}px`
          cursorDotRef.current.style.top = `${y}px`
        }
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.style.left = `${x}px`
          cursorOutlineRef.current.style.top = `${y}px`
        }
      })
    }

    const handleMouseEnter = () => {
      if (!cursorDotRef.current || !cursorOutlineRef.current) return
      cursorDotRef.current.style.opacity = "1"
      cursorOutlineRef.current.style.opacity = "1"
    }

    const handleMouseLeave = () => {
      if (!cursorDotRef.current || !cursorOutlineRef.current) return
      cursorDotRef.current.style.opacity = "0"
      cursorOutlineRef.current.style.opacity = "0"
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorDotRef}
        className="cursor-dot"
      />
      <div
        ref={cursorOutlineRef}
        className="cursor-outline"
      />
    </>
  )
} 