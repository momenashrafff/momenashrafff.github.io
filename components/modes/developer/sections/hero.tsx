"use client"

import { forwardRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/shared/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<React.CSSProperties>>([])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 50 }).map(() => ({
      "--x": `${Math.random() * 100}%`,
      "--y": `${Math.random() * 100}%`,
      "--duration": `${Math.random() * 20 + 10}s`,
      "--delay": `${Math.random() * 5}s`,
      "--size": `${Math.random() * 8 + 2}px`,
      "--color": `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.3 + 0.1})`,
    } as React.CSSProperties))
    setParticles(generatedParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="particles-container">
        {particles.map((style, i) => (
          <div key={i} className="particle" style={style} />
        ))}
      </div>
    </div>
  )
}

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-white"
    >
      <ParticleBackground />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-transparent bg-clip-text">
                Hi, I&apos;m Momen
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
                <span className="text-purple-600 font-normal">Software Developer</span> & Computer Science Student
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                I&apos;m a third-year Computer Science student at GIU with a passion for building clean, efficient, and
                user-friendly applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full px-8 py-6 text-lg shadow-lg shadow-purple-200 transition-all hover:shadow-xl">
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full px-8 py-6 text-lg border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center items-center max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-[300px]">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full bg-white overflow-hidden">
                <Image
                  src="/assets/MomenAshraf-Picture.jpeg"
                  alt="Momen Elkhouli"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-purple-500" />
        </motion.div>
      </div>

      {/* Custom cursor styles */}
      <style jsx global>{`
        .cursor-dot,
        .cursor-outline {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          z-index: 9999;
          transition: opacity 0.3s ease-in-out;
        }
        
        .cursor-dot {
          width: 8px;
          height: 8px;
          background-color: rgb(124, 58, 237);
        }
        
        .cursor-outline {
          width: 40px;
          height: 40px;
          border: 2px solid rgba(124, 58, 237, 0.5);
          transition: all 0.2s ease-out;
        }
        
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          left: var(--x);
          top: var(--y);
          width: var(--size);
          height: var(--size);
          background-color: var(--color);
          border-radius: 50%;
          animation: float var(--duration) infinite;
          animation-delay: var(--delay);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(50px, -50px);
          }
          50% {
            transform: translate(100px, 0);
          }
          75% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero 