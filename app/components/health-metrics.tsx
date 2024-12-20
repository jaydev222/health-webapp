import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Mon", steps: 4000 },
  { name: "Tue", steps: 3000 },
  { name: "Wed", steps: 2000 },
  { name: "Thu", steps: 2780 },
  { name: "Fri", steps: 1890 },
  { name: "Sat", steps: 2390 },
  { name: "Sun", steps: 3490 },
]

export function HealthMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Step Count</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="steps" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

