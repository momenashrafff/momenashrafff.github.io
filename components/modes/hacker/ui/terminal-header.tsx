import { motion } from "framer-motion"

interface TerminalHeaderProps {
  title: string
  className?: string
}

export const TerminalHeader = ({ title, className = "" }: TerminalHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`font-mono ${className}`}
    >
      <div className="flex items-center space-x-2">
        <span className="text-green-500">{">"}</span>
        <span className="text-white">./{title}.sh</span>
      </div>
    </motion.div>
  )
} 