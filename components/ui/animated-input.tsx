"use client"

import { useState } from 'react'
import { cn } from "@/lib/utils"

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function AnimatedInput({ label, className, ...props }: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative">
      <input
        {...props}
        className={cn(
          "block w-full px-4 py-2 text-white bg-transparent border-2 border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-200",
          isFocused || hasValue ? "pt-6" : "",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false)
          setHasValue(e.target.value !== "")
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
      />
      <label
        className={cn(
          "absolute left-4 transition-all duration-200",
          isFocused || hasValue
            ? "top-1 text-xs text-blue-500"
            : "top-2 text-gray-500"
        )}
      >
        {label}
      </label>
    </div>
  )
}

