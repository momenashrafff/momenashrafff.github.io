"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/shared/section"
import { TerminalHeader } from "../ui/terminal-header"
import Image from "next/image"
import Link from "next/link"
import { Github, Mail, Linkedin, Shield } from "lucide-react"

const Hero = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Section id="hero" className="py-20 bg-black border-b border-green-500" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TerminalHeader title="whoami" className="mb-8" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Momen Elkhouli
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-gray-400 font-mono">
                  <span className="text-green-500">$</span> cat role.txt
                </p>
                <div className="space-y-2">
                  <p className="text-xl text-green-500">Security Researcher & Privacy Enthusiast</p>
                  <p className="text-gray-300 font-mono">
                    <Shield className="inline-block h-4 w-4 mr-2" />
                    Focusing on Privacy-Preserving Technologies & Security Research
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-4"
              >
                <p className="text-gray-400 font-mono">
                  <span className="text-green-500">$</span> cat contact.txt
                </p>
                <div className="flex flex-col space-y-2 text-gray-300 font-mono">
                  <Link href="mailto:momenashraf@proton.me" className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>momenashraf@proton.me</span>
                  </Link>
                  <Link href="https://linkedin.com/in/momenashrafff" target="_blank" className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                    <Linkedin className="h-4 w-4" />
                    <span>linkedin.com/in/momenashrafff</span>
                  </Link>
                  <Link href="https://github.com/momenashrafff" target="_blank" className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                    <Github className="h-4 w-4" />
                    <span>github.com/momenashrafff</span>
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-500">
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
          </motion.div>
        </div>
      </div>
    </Section>
  )
})

Hero.displayName = "Hero"

export default Hero 