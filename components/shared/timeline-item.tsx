"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  date: string
  title: string
  description: string
  icon: ReactNode
  isLeft?: boolean
  isFirst?: boolean
  isLast?: boolean
  className?: string
  iconClassName?: string
}

export default function TimelineItem({
  date,
  title,
  description,
  icon,
  isLeft = false,
  isFirst = false,
  isLast = false,
  className,
  iconClassName,
}: TimelineItemProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Line */}
      {!isFirst && (
        <div className="absolute top-0 left-1/2 w-px h-1/2 -translate-x-1/2 bg-gradient-to-b from-transparent to-current opacity-20" />
      )}
      {!isLast && (
        <div className="absolute bottom-0 left-1/2 w-px h-1/2 -translate-x-1/2 bg-gradient-to-b from-current to-transparent opacity-20" />
      )}

      {/* Content */}
      <div className="grid grid-cols-[1fr_auto_1fr] w-full max-w-4xl gap-4 py-8">
        {/* Left side */}
        <div className={cn("flex flex-col", isLeft ? "items-end text-right" : "md:items-end md:text-right opacity-0")}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
            whileInView={{ opacity: isLeft ? 1 : 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-bold text-lg"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
            whileInView={{ opacity: isLeft ? 1 : 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm opacity-80 max-w-xs"
          >
            {description}
          </motion.div>
        </div>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-xs font-mono mb-2">{date}</div>
          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center z-10", iconClassName)}>
            {icon}
          </div>
        </motion.div>

        {/* Right side */}
        <div
          className={cn("flex flex-col", !isLeft ? "items-start text-left" : "md:items-start md:text-left opacity-0")}
        >
          <motion.div
            initial={{ opacity: 0, x: !isLeft ? -20 : 20 }}
            whileInView={{ opacity: !isLeft ? 1 : 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-bold text-lg"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: !isLeft ? -20 : 20 }}
            whileInView={{ opacity: !isLeft ? 1 : 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm opacity-80 max-w-xs"
          >
            {description}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

