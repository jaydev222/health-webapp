import type { NextApiRequest, NextApiResponse } from 'next'

interface UserSettings {
  name: string
  email: string
  notifications: boolean
  theme: 'light' | 'dark' | 'system'
  currency: string
}

let userSettings: UserSettings = {
  name: 'John Doe',
  email: 'john@example.com',
  notifications: true,
  theme: 'system',
  currency: 'USD'
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(userSettings)
      break
    case 'PUT':
      userSettings = { ...userSettings, ...req.body }
      res.status(200).json(userSettings)
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

