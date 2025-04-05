"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/card"
import { achievements } from "@/components/shared/constants"

const Achievements = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-1 h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 rounded-full bg-gray-100">
                      <achievement.icon className={achievement.iconClassName} size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800">{achievement.title}</CardTitle>
                      <p className="text-sm text-gray-500">{achievement.year}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
})

Achievements.displayName = "Achievements"

export default Achievements 