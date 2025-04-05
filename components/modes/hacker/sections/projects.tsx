"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/shared/section"
import { TerminalHeader } from "../ui/terminal-header"
import { Github, Lock, Shield, Key } from "lucide-react"

const Projects = forwardRef<HTMLElement>((_, ref) => {
  const projects = [
    {
      title: "Privacy-Preserving Dijkstra",
      tech: ["MP-SPDZ", "Python", "MPC"],
      description: "Implemented a privacy-preserving version of Dijkstra's algorithm using secure multi-party computation, ensuring path computation without revealing sensitive node information.",
      icon: <Lock className="h-5 w-5" />
    },
    {
      title: "LINDDUN Privacy Analysis Tool",
      tech: ["TypeScript", "React", "Node.js"],
      description: "Developed a tool to automate LINDDUN privacy threat analysis, helping identify and mitigate privacy threats in software systems.",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Zero-Knowledge Authentication",
      tech: ["ZK Proofs", "Rust", "WebAssembly"],
      description: "Built a proof-of-concept authentication system using zero-knowledge proofs, allowing users to prove their identity without revealing sensitive information.",
      icon: <Key className="h-5 w-5" />
    }
  ]

  return (
    <Section id="projects" className="py-20 bg-black border-b border-green-500" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TerminalHeader title="security-projects" className="mb-8" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gray-400 font-mono">
              <span className="text-green-500">$</span> ls -la security-projects/
            </p>
            
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                        <span>{project.title}</span>
                        <div className="text-green-500">
                          {project.icon}
                        </div>
                        <Github className="h-5 w-5 text-green-500 cursor-pointer hover:text-green-400 transition-colors" />
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-green-500/10 text-green-500 rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
})

Projects.displayName = "Projects"

export default Projects 