"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/shared/button"
import { forwardRef } from "react"

const Hero = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="hero"
      className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900 border-b border-green-500 relative overflow-hidden"
      ref={ref}
    >
      {/* Animated circuit lines */}
      <div className="absolute inset-0 circuit-board opacity-20"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10 h-full">
        <motion.div
          className="md:w-1/2 mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono mb-4">
            <p className="text-gray-400 glitch-text">{">"} ./introduce.sh</p>
            <div className="mt-4">
              <div className="glitch-wrapper">
                <div className="glitch text-4xl md:text-5xl font-bold mb-4 text-white" data-text="Momen Elkhouli">
                  Momen Elkhouli
                </div>
              </div>
            </div>
          </div>
          <motion.h2
            className="text-2xl md:text-3xl text-red-500 mb-6 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Penetration Tester & Security Enthusiast
          </motion.h2>
          <motion.p
            className="text-gray-400 mb-8 max-w-lg font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {">"} Finding vulnerabilities and securing systems one exploit at a time.
            <span className="animate-pulse">_</span>
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white border-none group relative overflow-hidden">
              <span className="relative z-10">View Write-ups</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 group-hover:opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/10 group relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-300"></span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-red-500 rounded-full blur opacity-75 animate-pulse"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-black border-2 border-green-500 flex items-center justify-center text-green-400 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-green-900/30 flex items-center justify-center overflow-hidden"
                  >
                    {Math.random() > 0.9 && (
                      <div className="text-[8px] text-green-500 opacity-70">{Math.random() > 0.5 ? "1" : "0"}</div>
                    )}
                  </div>
                ))}
              </div>
              <span className="text-sm font-mono relative z-20">[PROFILE IMAGE]</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-green-500" />
        </motion.div>
      </div>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero 