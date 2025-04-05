"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/card"
import { Button } from "@/components/shared/button"
import { socialLinks } from "@/components/shared/constants"

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
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
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-12 rounded-full"></div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-gray-800">
                Let&apos;s Connect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-gray-600">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <link.icon className={link.iconClassName} />
                      <span className="ml-2">{link.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = "Contact"

export default Contact 