"use client"

import { motion } from "framer-motion"
import { Terminal, Shield, AlertTriangle, Award } from "lucide-react"
import { forwardRef } from "react"
import TimelineItem from "@/components/shared/timeline-item"

const Timeline = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="timeline" className="py-20 bg-gray-900 relative" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <div className="font-mono text-gray-400 flex items-center">
            <span className="text-green-500 mr-2">{">"}</span> ./view_timeline.sh
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-white font-mono relative inline-block">
            Security Journey
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-red-500"></div>
          </h2>
        </motion.div>

        <div className="relative text-gray-400">
          <TimelineItem
            date="2021"
            title="First CTF Competition"
            description="Participated in my first Capture The Flag competition and discovered my passion for cybersecurity."
            icon={<Terminal className="h-6 w-6 text-green-500" />}
            iconClassName="bg-green-900/30 border border-green-500/30"
            isLeft={true}
            isFirst={true}
          />

          <TimelineItem
            date="2022"
            title="Security Fundamentals"
            description="Completed comprehensive training in network security, web vulnerabilities, and penetration testing basics."
            icon={<Shield className="h-6 w-6 text-red-500" />}
            iconClassName="bg-red-900/30 border border-red-500/30"
            isLeft={false}
          />

          <TimelineItem
            date="2022"
            title="First Vulnerability Discovery"
            description="Discovered and responsibly disclosed my first XSS vulnerability in a web application."
            icon={<AlertTriangle className="h-6 w-6 text-yellow-500" />}
            iconClassName="bg-yellow-900/30 border border-yellow-500/30"
            isLeft={true}
          />

          <TimelineItem
            date="2023"
            title="CTF Competition Finalist"
            description="Reached the finals in a national Capture The Flag cybersecurity competition."
            icon={<Award className="h-6 w-6 text-green-500" />}
            iconClassName="bg-green-900/30 border border-green-500/30"
            isLeft={false}
          />
        </div>
      </div>
    </section>
  )
})

Timeline.displayName = "Timeline"

export default Timeline 