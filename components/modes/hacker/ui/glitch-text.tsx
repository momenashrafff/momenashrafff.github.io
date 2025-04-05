import { useEffect, useState } from "react"

export default function GlitchText() {
  const [glitchText, setGlitchText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const characters = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`"
      let result = ""
      for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
      }
      setGlitchText(result)

      // Reset after a short time
      setTimeout(() => {
        setGlitchText("")
      }, 100)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!glitchText) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50 text-red-500 font-mono text-4xl font-bold opacity-30">
      {glitchText}
    </div>
  )
} 