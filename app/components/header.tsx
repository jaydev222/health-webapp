"use client"

import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Bell } from 'lucide-react'

export function Header() {
  const pathname = usePathname()

  const getPageTitle = () => {
    switch (pathname) {
      case '/':
        return 'Dashboard'
      case '/health':
        return 'Health Tracking'
      case '/tasks':
        return 'Task Management'
      case '/finance':
        return 'Financial Overview'
      case '/settings':
        return 'Settings'
      default:
        return 'Dashboard'
    }
  }

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">{getPageTitle()}</h1>
      <Button variant="ghost" size="icon">
        <Bell className="h-5 w-5" />
      </Button>
    </header>
  )
}

