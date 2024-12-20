import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { Navigation } from "@/components/ui/navigation"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Dashboard',
  description: 'Track your health, tasks, and finances in one place',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-zinc-950 pb-20">
          {children}
          <Navigation />
        </div>
        <Toaster />
      </body>
    </html>
  )
}

