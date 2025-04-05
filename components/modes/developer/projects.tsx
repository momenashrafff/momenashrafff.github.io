"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "My personal website with dual-mode interface and interactive terminal.",
      image: "bg-gradient-to-br from-purple-400 to-indigo-600",
      tags: ["Next.js", "React", "TypeScript"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication and payment processing.",
      image: "bg-gradient-to-br from-indigo-400 to-blue-600",
      tags: ["React", "Node.js", "MongoDB"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Security Scanner",
      description: "An automated tool for detecting common web vulnerabilities and security issues.",
      image: "bg-gradient-to-br from-blue-400 to-cyan-600",
      tags: ["Python", "Flask", "SQLAlchemy"],
      links: {
        github: "#",
        demo: "#",
      },
    },
  ]

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
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.03 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                <div
                  className={`h-48 ${project.image} flex items-center justify-center text-white relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <span className="text-sm z-10">Project Screenshot</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-black/50 text-white border-white hover:bg-black/70"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 border-purple-200 text-purple-700 hover:bg-purple-50"
                  >
                    <Github className="h-4 w-4" /> Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

Projects.displayName = "Projects"

export default Projects 