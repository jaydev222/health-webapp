"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Home, DollarSign, CheckSquare, Plus, Bell } from 'lucide-react'
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: DollarSign, label: 'Finance', href: '/finance' },
  { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 p-4 z-50">
        <div className="flex justify-around items-center">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href} passHref>
              <Button
                size="icon"
                variant="ghost"
                className={cn(
                  "rounded-full",
                  pathname === href && "bg-zinc-800 text-white"
                )}
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </Button>
            </Link>
          ))}
          <Button size="icon" variant="ghost" className="rounded-full" onClick={() => setIsOpen(!isOpen)}>
            <Plus className="h-6 w-6" />
            <span className="sr-only">Add</span>
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Bell className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-zinc-800 rounded-lg p-4">
            <p className="text-white text-center">Add new item (placeholder)</p>
          </div>
        </div>
      )}
    </>
  )
}

