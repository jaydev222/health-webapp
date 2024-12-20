import type { NextApiRequest, NextApiResponse } from 'next'

interface Task {
  id: string
  title: string
  completed: boolean
}

let tasks: Task[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(tasks)
      break
    case 'POST':
      const newTask: Task = {
        id: Date.now().toString(),
        title: req.body.title,
        completed: false
      }
      tasks.push(newTask)
      res.status(201).json(newTask)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

