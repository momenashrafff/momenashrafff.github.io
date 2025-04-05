"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/shared/section"
import { TerminalHeader } from "../ui/terminal-header"
import { Award, Trophy, Medal } from "lucide-react"

const Achievements = forwardRef<HTMLDivElement>((_, ref) => {
  const achievements = [
    {
      title: "70% Scholarship",
      description: "Awarded at The German International University, ranked 2nd out of 350+ students.",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "21st Place - ECPC",
      description: "Secured 21st place at the Egyptian Collegiate Programming Contest (ECPC).",
      icon: <Award className="h-6 w-6 text-green-500" />
    },
    {
      title: "2nd Place - GIU Programming Contest",
      description: "Achieved 2nd place at the German International University Programming Contest.",
      icon: <Medal className="h-6 w-6 text-red-500" />
    },
    {
      title: "1st Place - Hack App Hackathon",
      description: "Won 1st place at Ulm University&apos;s Hack App Hackathon with privacy-preserving Dijkstra&apos;s using MP-SPDZ.",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "3rd Place - IEEE Hackathon",
      description: "Secured 3rd place at Exceed Hackathon (IEEE) for a VR Physics Education App.",
      icon: <Medal className="h-6 w-6 text-red-500" />
    },
    {
      title: "Arlo Security Hall of Fame",
      description: "Recognized in Arlo Security Hall of Fame via Bugcrowd for identifying a vulnerability.",
      icon: <Award className="h-6 w-6 text-green-500" />
    }
  ]

  return (
    <Section id="achievements" className="py-20 bg-black border-b border-green-500" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TerminalHeader title="achievements" className="mb-8" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gray-400 font-mono">
              <span className="text-green-500">$</span> ls -la achievements/
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="p-6 border border-green-500/20 rounded-lg hover:border-green-500/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-black/50 rounded-lg border border-green-500/20">
                        {achievement.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-300">{achievement.description}</p>
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

Achievements.displayName = "Achievements"

export default Achievements 