"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"

const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="about" className="py-20 bg-black relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <div className="font-mono text-gray-400 flex items-center">
            <span className="text-green-500 mr-2">{">"}</span> cat about.txt
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto font-mono">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-400 mb-6 leading-relaxed">
              I&apos;m a cybersecurity enthusiast with a focus on penetration testing and vulnerability assessment.
              Currently studying Computer Science at GIU, I spend my free time participating in CTF competitions,
              researching security vulnerabilities, and documenting my findings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-400 mb-6 leading-relaxed">
              My approach to security is both methodical and creative - finding the unconventional paths that others
              might miss. I believe in responsible disclosure and helping organizations improve their security
              posture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="p-4 border border-red-500/30 bg-red-500/5 text-red-400">
              &ldquo;The quieter you become, the more you are able to hear.&rdquo; — Kali Linux
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"

export default About 