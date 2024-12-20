"use client"

import { useState } from 'react'
import { cn } from "@/lib/utils"

interface CustomToggleProps {
  label: string
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export function CustomToggle({ label, defaultChecked = false, onChange }: CustomToggleProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  const handleToggle = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    if (onChange) {
      onChange(newChecked)
    }
  }

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className={cn(
          "block w-14 h-8 rounded-full transition-colors duration-300 ease-in-out",
          isChecked ? "bg-blue-500" : "bg-gray-600"
        )}></div>
        <div className={cn(
          "absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out",
          isChecked ? "transform translate-x-full" : "transform translate-x-0"
        )}></div>
      </div>
      <div className="ml-3 text-white">{label}</div>
    </label>
  )
}

