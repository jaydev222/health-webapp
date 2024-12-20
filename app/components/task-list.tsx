import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

const tasks = [
  { id: 1, title: "Complete project proposal", completed: false },
  { id: 2, title: "Go for a 30-minute run", completed: true },
  { id: 3, title: "Read 20 pages of current book", completed: false },
  { id: 4, title: "Prepare healthy meal plan for the week", completed: false },
]

export function TaskList() {
  return (
    <Card className="border-0 bg-zinc-900 p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Today's Tasks</h3>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center space-x-2">
            <Checkbox id={`task-${task.id}`} checked={task.completed} />
            <label
              htmlFor={`task-${task.id}`}
              className={`text-sm ${task.completed ? 'line-through text-zinc-500' : 'text-zinc-300'}`}
            >
              {task.title}
            </label>
          </li>
        ))}
      </ul>
    </Card>
  )
}

