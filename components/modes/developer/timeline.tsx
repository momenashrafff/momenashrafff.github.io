"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import TimelineItem from "@/components/timeline-item"
import { GraduationCap, Briefcase, Award, Shield, Github, Code } from "lucide-react"

const Timeline = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="relative text-gray-700">
          <TimelineItem
            date="2021"
            title="Started Computer Science at GIU"
            description="Began my academic journey in Computer Science at German International University."
            icon={<GraduationCap className="h-6 w-6 text-purple-500" />}
            iconClassName="bg-purple-100 border border-purple-200"
            isLeft={true}
            isFirst={true}
          />

          <TimelineItem
            date="2022"
            title="First Hackathon"
            description="Participated in my first hackathon and won 2nd place with a team project."
            icon={<Award className="h-6 w-6 text-indigo-500" />}
            iconClassName="bg-indigo-100 border border-indigo-200"
            isLeft={false}
          />

          <TimelineItem
            date="2022"
            title="Web Development Internship"
            description="Completed a 3-month internship focusing on frontend development with React."
            icon={<Briefcase className="h-6 w-6 text-blue-500" />}
            iconClassName="bg-blue-100 border border-blue-200"
            isLeft={true}
          />

          <TimelineItem
            date="2023"
            title="CTF Competition Finalist"
            description="Reached the finals in a Capture The Flag cybersecurity competition."
            icon={<Shield className="h-6 w-6 text-green-500" />}
            iconClassName="bg-green-100 border border-green-200"
            isLeft={false}
          />

          <TimelineItem
            date="2023"
            title="Open Source Contributions"
            description="Started contributing to open source projects with over 50 contributions."
            icon={<Github className="h-6 w-6 text-gray-700" />}
            iconClassName="bg-gray-100 border border-gray-200"
            isLeft={true}
          />

          <TimelineItem
            date="Present"
            title="Expanding Skills"
            description="Currently focusing on full-stack development and cybersecurity."
            icon={<Code className="h-6 w-6 text-purple-500" />}
            iconClassName="bg-purple-100 border border-purple-200"
            isLeft={false}
            isLast={true}
          />
        </div>
      </div>
    </section>
  )
})

Timeline.displayName = "Timeline"

export default Timeline 