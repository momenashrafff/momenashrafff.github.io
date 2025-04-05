"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import TimelineItem from "@/components/shared/timeline-item"
import { GraduationCap, Briefcase, Award, Shield, Code } from "lucide-react"

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
            date="2022 - 2026"
            title="BSc. in Computer Science at GIU"
            description="Pursuing Computer Science at German International University with a GPA of 3.8/4.0, ranked 2nd highest in the major."
            icon={<GraduationCap className="h-6 w-6 text-purple-500" />}
            iconClassName="bg-purple-100 border border-purple-200"
            isLeft={true}
            isFirst={true}
          />

          <TimelineItem
            date="Jan 2024 - Feb 2024"
            title="Private-Eye Workshop at Ulm University"
            description="Engaged in sessions on MPC, Homomorphic Encryption, and Zero-Knowledge Proofs in AI security, exploring LINDDUN privacy strategies."
            icon={<Shield className="h-6 w-6 text-indigo-500" />}
            iconClassName="bg-indigo-100 border border-indigo-200"
            isLeft={false}
          />

          <TimelineItem
            date="Sep 2023 - June 2024"
            title="Teaching Assistant at GIU"
            description="Supported teaching in Java OOP, Data Structures, and Algorithms, along with C++, assisting 70+ students."
            icon={<Briefcase className="h-6 w-6 text-blue-500" />}
            iconClassName="bg-blue-100 border border-blue-200"
            isLeft={true}
          />

          <TimelineItem
            date="2024"
            title="Hack App Hackathon Winner"
            description="Won 1st place at Ulm University's Hackathon with privacy-preserving Dijkstra's using MP-SPDZ."
            icon={<Award className="h-6 w-6 text-green-500" />}
            iconClassName="bg-green-100 border border-green-200"
            isLeft={false}
          />

          <TimelineItem
            date="2023"
            title="Security Achievement"
            description="Recognized in Arlo Security Hall of Fame via Bugcrowd for identifying a vulnerability."
            icon={<Shield className="h-6 w-6 text-gray-700" />}
            iconClassName="bg-gray-100 border border-gray-200"
            isLeft={true}
          />

          <TimelineItem
            date="2023 - Present"
            title="Programming Coach at GIUCPC"
            description="Training over 35 students for the Egyptian Collegiate Programming Contest (ACM-ECPC)."
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