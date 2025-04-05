"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/shared/section"
import { TerminalHeader } from "../ui/terminal-header"

const Timeline = forwardRef<HTMLDivElement>((_, ref) => {
  const timelineItems = [
    {
      year: "Sep. 2023 - June 2024",
      title: "Teaching Assistant, Junior",
      company: "German International University",
      location: "Cairo, Egypt",
      description: "Supported teaching assistants in Java OOP, Data Structures, and Algorithms, along with C++, assisting a total of 70 students and contributing to improved overall grades."
    }
  ]

  return (
    <Section id="timeline" className="py-20 bg-black border-b border-green-500" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TerminalHeader title="experience" className="mb-8" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gray-400 font-mono">
              <span className="text-green-500">$</span> cat experience.log
            </p>
            
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-green-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500" />
                  <div className="space-y-2">
                    <p className="text-green-500 font-mono">{item.year}</p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <span>{item.company}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
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

Timeline.displayName = "Timeline"

export default Timeline 