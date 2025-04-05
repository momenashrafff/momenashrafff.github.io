"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/shared/button"
import { X, ChevronRight, Loader2, TerminalIcon, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

interface TerminalProps {
  onClose: () => void
  onModeChange: (mode: "developer" | "hacker") => void
}

interface TerminalLine {
  type: "input" | "output" | "error" | "success" | "warning" | "loading" | "system" | "tip"
  content: string
}

export default function Terminal({ onClose, onModeChange }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "system", content: "Terminal v2.0.1 initialized" },
    { type: "success", content: "Connection established to momenelkhouli.me" },
    { type: "output", content: "Welcome to Momen Elkhouli's Terminal Interface" },
    { type: "output", content: "Type 'help' to see available commands" },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Focus input when terminal opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const typeEffect = (text: string, type: TerminalLine["type"] = "output", delay = 30) => {
    setIsTyping(true)
    let i = 0
    const tempText = ""

    // Add an empty line first
    setHistory((prev) => [...prev, { type, content: tempText }])

    const typing = setInterval(() => {
      i++
      setHistory((prev) => {
        const newHistory = [...prev]
        newHistory[newHistory.length - 1] = {
          type,
          content: text.substring(0, i),
        }
        return newHistory
      })

      if (i >= text.length) {
        clearInterval(typing)
        setIsTyping(false)
      }
    }, delay)

    return () => clearInterval(typing)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isTyping) return

    // Add user input to history
    const newHistory: TerminalLine[] = [...history, { type: "input", content: input }]
    setHistory(newHistory)

    // Add to command history
    if (input.trim() && !commandHistory.includes(input)) {
      setCommandHistory((prev) => [input, ...prev].slice(0, 10))
    }
    setHistoryIndex(-1)

    // Process command
    const command = input.trim().toLowerCase()
    setInput("")

    // Process different commands
    processCommand(command)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      // Simple tab completion
      const commands = [
        "help",
        "clear",
        "about",
        "skills",
        "projects",
        "achievements",
        "contact",
        "scan",
        "access",
        "exit",
      ]
      const matchingCommands = commands.filter((cmd) => cmd.startsWith(input.toLowerCase()))

      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0])
      } else if (matchingCommands.length > 1) {
        setHistory((prev) => [...prev, { type: "output", content: matchingCommands.join("  ") }])
      }
    }
  }

  const processCommand = (command: string) => {
    switch (command) {
      case "help":
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "system", content: "Available commands:" } as TerminalLine,
            { type: "output", content: "help - Show this help message" } as TerminalLine,
            { type: "output", content: "clear - Clear the terminal" } as TerminalLine,
            { type: "output", content: "about - About Momen Elkhouli" } as TerminalLine,
            { type: "output", content: "skills - List my skills" } as TerminalLine,
            { type: "output", content: "projects - List my projects" } as TerminalLine,
            { type: "output", content: "achievements - View my achievements" } as TerminalLine,
            { type: "output", content: "contact - Show contact information" } as TerminalLine,
            { type: "output", content: "scan - Scan for vulnerabilities" } as TerminalLine,
            { type: "output", content: "access --override - Switch to Hacker Mode" } as TerminalLine,
            { type: "output", content: "undercover - Switch back to Developer Mode" } as TerminalLine,
            { type: "output", content: "exit - Close the terminal" } as TerminalLine,
          ])
        }, 200)
        break

      case "clear":
        setHistory([])
        break

      case "about":
        setTimeout(() => {
          typeEffect(
            "Momen Elkhouli - Third-year Computer Science student at GIU with a passion for software development and cybersecurity.",
          )
        }, 200)
        break

      case "skills":
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "system", content: "Skills:" },
            { type: "output", content: "- Programming: JavaScript, TypeScript, React, Next.js" },
            { type: "output", content: "- Cybersecurity: Penetration Testing, Vulnerability Assessment" },
            { type: "output", content: "- Tools: Git, Docker, Linux" },
            { type: "output", content: "- Languages: Python, Java, C++" },
          ])
        }, 200)
        break

      case "projects":
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "system", content: "Projects:" },
            { type: "output", content: "- Personal Website (You're looking at it!)" },
            { type: "output", content: "- E-commerce Platform - Full-stack application with React and Node.js" },
            { type: "output", content: "- Security Scanner - Automated vulnerability detection tool" },
            { type: "output", content: "Type 'project [name]' for more details" },
          ])
        }, 200)
        break

      case "achievements":
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "system", content: "Achievements:" },
            { type: "success", content: "- Dean's List - 3 consecutive semesters" },
            { type: "success", content: "- 2nd Place - GIU Hackathon 2023" },
            { type: "success", content: "- CTF Competition Finalist - CyberSec Conference" },
            { type: "success", content: "- Open Source Contributor - 50+ contributions" },
          ])
        }, 200)
        break

      case "contact":
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "system", content: "Contact Information:" },
            { type: "output", content: "- Email: your-email@example.com" },
            { type: "output", content: "- GitHub: github.com/yourusername" },
            { type: "output", content: "- LinkedIn: linkedin.com/in/yourusername" },
            { type: "output", content: "- Twitter: @yourusername" },
          ])
        }, 200)
        break

      case "exit":
        onClose()
        break

      case "scan":
        // Nmap scan
        setHistory((prev) => [...prev, { type: "loading", content: "Running Nmap scan..." }])

        setTimeout(() => {
          setHistory((prev) => {
            const newHistory = [...prev]
            newHistory[newHistory.length - 1] = { type: "output", content: "Running Nmap scan..." }
            return [...newHistory, { type: "loading", content: "Open ports detected: 22(ssh), 80(http), 443(https)" }]
          })
        }, 2000)

        setTimeout(() => {
          setHistory((prev) => {
            const newHistory = [...prev]
            newHistory[newHistory.length - 1] = { type: "output", content: "Open ports detected: 22(ssh), 80(http), 443(https)" }
            return [...newHistory, { type: "loading", content: "Running Nuclei scan..." }]
          })
        }, 4000)

        setTimeout(() => {
          setHistory((prev) => {
            const newHistory = [...prev]
            newHistory[newHistory.length - 1] = { type: "output", content: "Running Nuclei scan..." }
            return [
              ...newHistory,
              { type: "error", content: "VULNERABILITY DETECTED!" },
              { type: "error", content: "Security breach possible in authentication module" },
              { type: "warning", content: "Use 'access --override' to exploit vulnerability" },
            ]
          })
        }, 6000)
        break

      case "access --override":
        // Add responses with delay
        setHistory((prev) => [...prev, { type: "success", content: "ACCESS GRANTED" }])

        setTimeout(() => typeEffect("Switching to Hacker Mode...", "warning"), 500)
        setTimeout(() => typeEffect("Initializing secure connection...", "output"), 1500)
        setTimeout(() => typeEffect("Bypassing security protocols...", "output"), 2500)
        setTimeout(() => typeEffect("Override successful!", "success"), 3500)

        // Switch to hacker mode and close terminal after messages complete
        setTimeout(() => {
          onModeChange("hacker")
          onClose()
        }, 4500)
        break

      case "undercover":
        setHistory((prev) => [...prev, { type: "system", content: "Initiating mode switch..." }])
        setTimeout(() => {
          setHistory((prev) => [...prev, { type: "success", content: "Reverting to developer mode" }])
          onModeChange("developer")
          onClose()
        }, 1000)
        break

      default:
        if (command.startsWith("project ")) {
          const projectName = command.substring(8).toLowerCase()

          if (projectName.includes("e-commerce") || projectName.includes("ecommerce")) {
            setTimeout(() => {
              setHistory((prev) => [
                ...prev,
                { type: "system", content: "E-commerce Platform:" },
                {
                  type: "output",
                  content: "A full-stack e-commerce application built with React, Node.js, and MongoDB.",
                },
                {
                  type: "output",
                  content:
                    "Features include user authentication, product catalog, shopping cart, and payment processing.",
                },
                { type: "output", content: "Technologies: React, Redux, Node.js, Express, MongoDB, Stripe API" },
                { type: "output", content: "GitHub: github.com/yourusername/ecommerce-platform" },
              ])
            }, 200)
          } else if (projectName.includes("security") || projectName.includes("scanner")) {
            setTimeout(() => {
              setHistory((prev) => [
                ...prev,
                { type: "system", content: "Security Scanner:" },
                { type: "output", content: "An automated tool for detecting common web vulnerabilities." },
                {
                  type: "output",
                  content: "Scans for XSS, SQL injection, CSRF, and other OWASP Top 10 vulnerabilities.",
                },
                { type: "output", content: "Technologies: Python, BeautifulSoup, Requests, SQLAlchemy" },
                { type: "output", content: "GitHub: github.com/yourusername/security-scanner" },
              ])
            }, 200)
          } else if (projectName.includes("personal") || projectName.includes("website")) {
            setTimeout(() => {
              setHistory((prev) => [
                ...prev,
                { type: "system", content: "Personal Website:" },
                { type: "output", content: "My personal portfolio website with dual-mode interface." },
                { type: "output", content: "Features a timeline-based design and interactive terminal." },
                { type: "output", content: "Technologies: Next.js, React, TypeScript, Framer Motion, Tailwind CSS" },
                { type: "output", content: "GitHub: github.com/yourusername/personal-website" },
              ])
            }, 200)
          } else {
            setTimeout(() => {
              setHistory((prev) => [
                ...prev,
                { type: "error", content: `Project "${command.substring(8)}" not found.` },
                {
                  type: "output",
                  content: "Available projects: Personal Website, E-commerce Platform, Security Scanner",
                },
              ])
            }, 200)
          }
        } else {
          setTimeout(() => {
            setHistory((prev) => [
              ...prev,
              {
                type: "error",
                content: `Command not found: ${command}. Type 'help' for available commands.`,
              },
            ])
          }, 200)
        }
    }
  }

  const getLineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "input":
        return "text-white"
      case "output":
        return "text-green-500"
      case "error":
        return "text-red-500"
      case "success":
        return "text-emerald-400"
      case "warning":
        return "text-yellow-400"
      case "loading":
        return "text-blue-400"
      case "system":
        return "text-purple-400"
      case "tip":
        return "text-gray-400"
      default:
        return "text-green-500"
    }
  }

  const getLineIcon = (type: TerminalLine["type"]) => {
    switch (type) {
      case "error":
        return <AlertTriangle className="h-3 w-3 mr-2 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-3 w-3 mr-2 text-yellow-400" />
      case "loading":
        return <Loader2 className="h-3 w-3 mr-2 animate-spin text-blue-400" />
      case "system":
        return <TerminalIcon className="h-3 w-3 mr-2 text-purple-400" />
      default:
        return null
    }
  }

  const renderLine = (line: TerminalLine, index: number) => {
    const icon = getLineIcon(line.type)
    return (
      <div key={index} className="flex items-center">
        {icon}
        <span className={getLineColor(line.type)}>{line.content}</span>
      </div>
    )
  }

  return (
    <motion.div
      className="bg-[#0d1117] text-green-500 font-mono rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl border border-green-500 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-3 bg-[#161b22] border-b border-green-500">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs bg-[#0d1117] px-3 py-1 rounded-md border border-green-500/30">momenelkhouli.me:~</div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-6 w-6 p-0 text-green-500 hover:text-white hover:bg-red-500/20 rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div ref={terminalRef} className="flex-1 p-4 overflow-y-auto bg-[#0d1117] bg-opacity-95 backdrop-blur-sm">
        {history.map((line, index) => (
          <div key={index} className="mb-1.5">
            {line.type === "input" ? (
              <div className="flex items-center">
                <span className="text-emerald-400 mr-2 flex items-center">
                  <ChevronRight className="h-3 w-3 mr-1" />$
                </span>
                {renderLine(line, index)}
              </div>
            ) : (
              <div
                className={`flex items-start ${getLineColor(line.type)} ${line.type === "error" ? "font-bold" : ""}`}
              >
                {renderLine(line, index)}
              </div>
            )}
          </div>
        ))}
        {isTyping && <div className="inline-block w-2 h-4 bg-green-500 animate-pulse ml-1"></div>}
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t border-green-500 flex items-center bg-[#161b22]">
        <span className="text-emerald-400 mr-2 flex items-center">
          <ChevronRight className="h-3 w-3 mr-1" />$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-white outline-none"
          autoFocus
          disabled={isTyping}
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </motion.div>
  )
}

