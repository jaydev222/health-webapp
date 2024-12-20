import { cn } from "@/lib/utils"

interface CustomCardProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function CustomCard({ title, children, className }: CustomCardProps) {
  return (
    <div className={cn("bg-zinc-800 rounded-xl overflow-hidden", className)}>
      <div className="bg-zinc-700 px-4 py-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

