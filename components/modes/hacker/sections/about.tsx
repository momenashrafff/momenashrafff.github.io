"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/shared/section"
import { TerminalHeader } from "../ui/terminal-header"

const About = forwardRef<HTMLDivElement>((_, ref) => {
  const securitySkills = [
    "Privacy-Preserving Technologies",
    "MPC (Multi-Party Computation)",
    "Homomorphic Encryption",
    "Zero-Knowledge Proofs",
    "LINDDUN Privacy Analysis",
    "GDPR Compliance",
    "Web Application Security",
    "Vulnerability Assessment"
  ]

  return (
    <Section id="about" className="py-20 bg-black border-b border-green-500" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TerminalHeader title="security" className="mb-8" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-gray-400 font-mono">
                <span className="text-green-500">$</span> cat workshop.txt
              </p>
              <div className="border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Private-Eye Workshop</h3>
                <p className="text-green-500 mb-2">Ulm University, Germany</p>
                <p className="text-gray-400 mb-2">Jan. 2024 - Feb. 2024</p>
                <p className="text-gray-300">
                  Engaged in sessions on MPC, Homomorphic Encryption, and Zero-Knowledge Proofs in AI security, while
                  exploring LINDDUN privacy strategies, challenges, and GDPR compliance to balance privacy and security.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 font-mono">
                <span className="text-green-500">$</span> ls -la skills/
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securitySkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-green-500">-</span>
                    <span className="text-gray-300 font-mono">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 font-mono">
                <span className="text-green-500">$</span> cat achievements.txt
              </p>
              <div className="border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-bold">Arlo Security Hall of Fame</h4>
                    <p className="text-gray-300">Recognized for identifying and responsibly disclosing a security vulnerability through Bugcrowd.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Privacy-Preserving Algorithms</h4>
                    <p className="text-gray-300">Implemented privacy-preserving Dijkstra&apos;s algorithm using MP-SPDZ at Ulm University&apos;s Hack App Hackathon.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
})

About.displayName = "About"

export default About 