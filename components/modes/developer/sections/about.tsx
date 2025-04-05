"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/shared/card"

const About = forwardRef<HTMLElement>((_, ref) => {
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
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-4 h-full w-1 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
                <p className="text-gray-700 text-lg leading-relaxed pl-4">
                  I&apos;m a passionate software developer and computer science student at German International University (GIU). 
                  With a strong academic record as the <span className="font-semibold text-purple-700">2nd highest-ranked student</span> in my major, 
                  I combine theoretical knowledge with practical experience in building modern web applications and secure systems.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  Technical Expertise
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  My expertise spans across various technologies and frameworks including 
                  <span className="font-medium text-indigo-600"> Next.js</span>, 
                  <span className="font-medium text-blue-600"> React</span>, 
                  <span className="font-medium text-purple-600"> Flutter</span>, and 
                  <span className="font-medium text-cyan-600"> .NET Core MVC</span>. 
                  I&apos;m particularly interested in security and privacy, having participated in workshops on 
                  <span className="font-medium text-emerald-600"> MPC</span>, 
                  <span className="font-medium text-teal-600"> Homomorphic Encryption</span>, and 
                  <span className="font-medium text-green-600"> Zero-Knowledge Proofs</span> at Ulm University, Germany.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-indigo-600/5 rounded-xl"></div>
                <div className="relative p-6 backdrop-blur-sm rounded-xl border border-purple-200">
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    Community Impact
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Beyond development, I actively contribute to the programming community as a coach at 
                    <span className="font-semibold text-purple-700"> GIU&apos;s Collegiate Programming Club</span>, 
                    where I&apos;ve trained over 35 students for competitive programming contests, helping them excel 
                    in their programming journey.
                  </p>
                </div>
              </div>
            </div>
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
                      <span className="text-yellow-300">&quot;BSc. Computer Science at GIU&quot;</span>
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
                      <span className="text-yellow-300">&quot;Security&quot;</span>
                      <span className="text-white">,</span>
                      <span className="text-yellow-300">&quot;Competitive Programming&quot;</span>
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