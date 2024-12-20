import type { NextApiRequest, NextApiResponse } from 'next'

interface HealthData {
  id: string
  date: string
  steps: number
  calories: number
  sleep: number
}

let healthData: HealthData[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(healthData)
      break
    case 'POST':
      const newData: HealthData = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        ...req.body
      }
      healthData.push(newData)
      res.status(201).json(newData)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

