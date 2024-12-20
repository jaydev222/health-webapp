import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from 'lucide-react'

export function HealthSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Health Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Average daily steps: 8,500</p>
          <p>Average sleep duration: 7.5 hours</p>
          <p>Weekly exercise sessions: 4</p>
        </div>
      </CardContent>
    </Card>
  )
}

