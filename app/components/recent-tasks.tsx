import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare } from 'lucide-react'

export function RecentTasks() {
  const tasks = [
    { id: 1, title: "Complete project proposal", completed: false },
    { id: 2, title: "Review team performance", completed: true },
    { id: 3, title: "Prepare for client meeting", completed: false },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckSquare className="h-5 w-5" />
          Recent Tasks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className={task.completed ? "line-through text-gray-500" : ""}>
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

