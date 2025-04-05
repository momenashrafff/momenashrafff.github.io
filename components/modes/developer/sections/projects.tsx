"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/shared/card"
import { Button } from "@/components/shared/button"
import { Github, ExternalLink } from "lucide-react"

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  const projects = [
    {
      title: "tutorFlow",
      description: "A comprehensive e-learning platform with security measures to protect user data and enhance platform integrity.",
      image: "bg-gradient-to-br from-purple-400 to-indigo-600",
      tags: ["Next.js", "Nest.js", "MongoDB"],
      links: {
        github: "https://github.com/momenashrafff",
        demo: "#",
      },
    },
    {
      title: "GIU-Connect",
      description: "A platform built to help German International University (GIU) students find partners for tutorial exchanges support.",
      image: "bg-gradient-to-br from-indigo-400 to-blue-600",
      tags: ["Flutter", "Firebase"],
      links: {
        github: "https://github.com/momenashrafff",
        demo: "#",
      },
    },
    {
      title: "Online Coaching Platform",
      description: "A fitness coaching platform with Stripe payment integration, email services, and error handling.",
      image: "bg-gradient-to-br from-blue-400 to-cyan-600",
      tags: ["React.js", "Node.js", "Stripe"],
      links: {
        github: "https://github.com/momenashrafff",
        demo: "#",
      },
    },
    {
      title: "The Last Of Us: Legacy",
      description: "A turn-based survival game where players control heroes to navigate a zombie apocalypse with resource management.",
      image: "bg-gradient-to-br from-green-400 to-emerald-600",
      tags: ["Java", "JavaFX"],
      links: {
        github: "https://github.com/momenashrafff",
        demo: "#",
      },
    },
    {
      title: "Infinity Systems",
      description: "A Home Sync project enabling centralized management of diverse devices via a single website interface.",
      image: "bg-gradient-to-br from-red-400 to-pink-600",
      tags: [".NET Core MVC", "C#", "MSSQL"],
      links: {
        github: "https://github.com/momenashrafff",
        demo: "#",
      },
    },
    {
      title: "Smart Mirror",
      description: "Led the technical team in designing and implementing an interactive AR mirror for DIOR X GIU LAB.",
      image: "bg-gradient-to-br from-yellow-400 to-orange-600",
      tags: ["C#", "Unity 3D", "Lens Studio"],
      links: {
        github: "https://github.com/momenashrafff",
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