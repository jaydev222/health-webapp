import type { NextApiRequest, NextApiResponse } from 'next'

interface Task {
  id: string
  title: string
  completed: boolean
}

let tasks: Task[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  switch (req.method) {
    case 'PATCH':
      const taskIndex = tasks.findIndex(task => task.id === id)
      if (taskIndex > -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...req.body }
        res.status(200).json(tasks[taskIndex])
      } else {
        res.status(404).json({ message: 'Task not found' })
      }
      break
    default:
      res.setHeader('Allow', ['PATCH'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

