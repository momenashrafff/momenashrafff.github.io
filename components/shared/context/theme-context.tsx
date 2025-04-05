"use client"

import { createContext, useContext, ReactNode, useState } from "react"

export type Theme = "developer" | "hacker"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  styles: {
    text: {
      primary: string
      secondary: string
      accent: string
    }
    bg: {
      primary: string
      secondary: string
      accent: string
    }
    border: {
      primary: string
      secondary: string
    }
  }
}

const developerStyles = {
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-600",
    accent: "text-blue-500",
  },
  bg: {
    primary: "bg-white",
    secondary: "bg-gray-50",
    accent: "bg-blue-500",
  },
  border: {
    primary: "border-gray-200",
    secondary: "border-blue-500",
  },
}

const hackerStyles = {
  text: {
    primary: "text-white",
    secondary: "text-green-500",
    accent: "text-red-500",
  },
  bg: {
    primary: "bg-black",
    secondary: "bg-[#0d1117]",
    accent: "bg-red-500",
  },
  border: {
    primary: "border-green-500",
    secondary: "border-red-500",
  },
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children, initialTheme = "developer" }: { children: ReactNode; initialTheme?: Theme }) {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  const styles = theme === "developer" ? developerStyles : hackerStyles

  return (
    <ThemeContext.Provider value={{ theme, setTheme, styles }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
} 