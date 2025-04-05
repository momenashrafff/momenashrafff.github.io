"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/shared/card"

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="py-20 relative"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 to-transparent opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              I&apos;m a passionate software developer and computer science student with a keen interest in building modern
              web applications. Currently in my third year at German International University (GIU), I&apos;m constantly
              learning and improving my skills in various technologies.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              When I&apos;m not coding, I enjoy exploring cybersecurity concepts, participating in CTF competitions, and
              writing technical blog posts about my findings and learnings.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              I believe in clean code, continuous learning, and building applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-gray-900 rounded-lg overflow-hidden shadow-xl border border-purple-500/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between p-2 bg-gray-800 border-b border-gray-700">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-gray-400">about.tsx</div>
                  <div className="w-4"></div>
                </div>
                <div className="p-4 font-mono text-sm text-gray-300">
                  <div className="flex">
                    <span className="text-gray-500 mr-4">1</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-white mx-1">aboutMe</span>
                    <span className="text-purple-400">=</span>
                    <span className="text-purple-400 mx-1">&#123;</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">2</span>
                    <span className="text-white ml-4">
                      <span className="text-green-400">name</span>
                      <span className="text-white">:</span>
                      <span className="text-yellow-300">&quot;Momen Elkhouli&quot;</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">3</span>
                    <span className="text-white ml-4">
                      <span className="text-green-400">role</span>
                      <span className="text-white">:</span>
                      <span className="text-yellow-300">&quot;Software Developer&quot;</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">4</span>
                    <span className="text-white ml-4">
                      <span className="text-green-400">education</span>
                      <span className="text-white">:</span>
                      <span className="text-yellow-300">&quot;Computer Science at GIU&quot;</span>
                      <span className="text-white">,</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">5</span>
                    <span className="text-white ml-4">
                      <span className="text-green-400">interests</span>
                      <span className="text-white">:</span>
                      <span className="text-yellow-300">[</span>
                      <span className="text-yellow-300">&quot;Web Development&quot;</span>
                      <span className="text-white">,</span>
                      <span className="text-yellow-300">&quot;Cybersecurity&quot;</span>
                      <span className="text-white">,</span>
                      <span className="text-yellow-300">&quot;CTF&quot;</span>
                      <span className="text-yellow-300">]</span>
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">6</span>
                    <span className="text-purple-400">&#125;</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"

export default About 