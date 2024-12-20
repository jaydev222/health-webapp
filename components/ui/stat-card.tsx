import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  className?: string
  children?: React.ReactNode
}

export function StatCard({ title, value, subtitle, className, children }: StatCardProps) {
  return (
    <Card className={cn("rounded-3xl border-0", className)}>
      <CardContent className="p-6">
        <h3 className="text-sm font-medium mb-4">{title}</h3>
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && <p className="text-sm opacity-80">{subtitle}</p>}
        {children}
      </CardContent>
    </Card>
  )
}

