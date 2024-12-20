"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Activity, CheckSquare, DollarSign, Settings } from 'lucide-react'
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: Activity, label: 'Health', href: '/health' },
  { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
  { icon: DollarSign, label: 'Finance', href: '/finance' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-16 bg-zinc-900 border-r border-zinc-800 flex flex-col items-center py-6">
      <nav className="flex-1 flex flex-col items-center gap-4">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors",
              pathname === href && "bg-zinc-800 text-white"
            )}
            title={label}
          >
            <Icon className="h-5 w-5" />
          </Link>
        ))}
      </nav>
    </aside>
  )
}

