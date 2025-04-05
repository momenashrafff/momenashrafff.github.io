"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Section } from "@/components/shared/section"
import { TerminalHeader } from "../ui/terminal-header"

const Blog = forwardRef<HTMLDivElement>((_, ref) => {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications",
      description: "A deep dive into modern web architecture and best practices for scalability.",
      date: "2023-12-15",
      readTime: "5 min read"
    },
    {
      title: "TypeScript Best Practices",
      description: "Essential TypeScript patterns and practices for better code quality.",
      date: "2023-11-20",
      readTime: "4 min read"
    },
    {
      title: "React Performance Optimization",
      description: "Tips and tricks for optimizing React applications for better performance.",
      date: "2023-10-10",
      readTime: "6 min read"
    }
  ]

  return (
    <Section id="blog" className="py-20 bg-black border-b border-green-500" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <TerminalHeader title="blog" className="mb-8" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gray-400 font-mono">
              <span className="text-green-500">$</span> cat blog/posts/*
            </p>
            
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-500 transition-colors">
                        {post.title}
                      </h3>
                      <span className="text-green-500 font-mono text-sm">{post.date}</span>
                    </div>
                    <p className="text-gray-300">{post.description}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-green-500 font-mono">{post.readTime}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-green-500 font-mono">read more...</span>
                    </div>
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

Blog.displayName = "Blog"

export default Blog 