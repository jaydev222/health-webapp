import { Card } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string | number
  subtitle?: string
  color?: string
  icon?: React.ReactNode
  arrow?: boolean
}

export function MetricCard({ title, value, subtitle, color = "bg-cyan-400/20", icon, arrow }: MetricCardProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-zinc-900">
      <div className={`absolute inset-0 ${color} opacity-10 rounded-3xl`} />
      <div className="relative p-6 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm text-zinc-400">{title}</h3>
          {icon}
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-white">{value}</span>
            {subtitle && <span className="text-sm text-zinc-400">{subtitle}</span>}
          </div>
          {arrow && (
            <svg
              className="h-6 w-6 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          )}
        </div>
      </div>
    </Card>
  )
}

