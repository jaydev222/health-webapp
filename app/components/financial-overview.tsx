import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign } from 'lucide-react'

export function FinancialOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Financial Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Monthly Income: $5,000</p>
          <p>Monthly Expenses: $3,500</p>
          <p>Savings Rate: 30%</p>
        </div>
      </CardContent>
    </Card>
  )
}

