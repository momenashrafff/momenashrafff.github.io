"use client"

import { useState } from "react"
import Terminal from "@/components/terminal"
import DeveloperMode from "@/components/modes/developer"
import { Button } from "@/components/ui/button"
import { TerminalIcon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import CursorEffect from "@/components/modes/developer/cursor-effect"
import HackerMode from "@/components/hacker-mode"

export default function Home() {
  const [mode, setMode] = useState<"developer" | "hacker">("developer")
  const [showTerminal, setShowTerminal] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Function to handle mode change from terminal
  const handleModeChange = (newMode: "developer" | "hacker") => {
    setIsTransitioning(true)
    setMode(newMode)

    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Cursor effect only in developer mode */}
      {mode === "developer" && <CursorEffect />}

      {/* Transition overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-center"
            >
              <div className="text-2xl md:text-4xl font-mono mb-4">
                {mode === "developer" ? (
                  <span className="text-purple-500">Initializing Developer Environment...</span>
                ) : (
                  <span className="text-red-500">Activating Hacker Protocol...</span>
                )}
              </div>
              <div className="w-64 h-1 mx-auto bg-gradient-to-r from-transparent via-white to-transparent">
                <motion.div
                  className={`h-full ${mode === "developer" ? "bg-purple-500" : "bg-red-500"}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          {mode === "developer" ? <DeveloperMode /> : <HackerMode />}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1,
        }}
      >
        <Button
          onClick={() => setShowTerminal(!showTerminal)}
          variant={mode === "hacker" ? "destructive" : "default"}
          className={`rounded-full px-6 py-4 shadow-lg flex items-center gap-2 ${
            mode === "hacker"
              ? "bg-red-600 hover:bg-red-700 border-2 border-red-400 relative overflow-hidden"
              : "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 border-none"
          }`}
        >
          {mode === "hacker" && <div className="absolute inset-0 bg-red-600 opacity-50 animate-pulse"></div>}
          <span className="relative z-10 flex items-center gap-2">
            <TerminalIcon className="h-6 w-6" />
            <span className="text-sm font-medium">Open Terminal</span>
          </span>
        </Button>
      </motion.div>

      <AnimatePresence>
        {showTerminal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <Terminal onClose={() => setShowTerminal(false)} onModeChange={handleModeChange} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

