import type { NextApiRequest, NextApiResponse } from 'next'

// This is a mock database. In a real application, you would use a proper database.
let healthData: any[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(healthData)
  } else if (req.method === 'POST') {
    const newData = req.body
    healthData.push(newData)
    res.status(201).json(newData)
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

