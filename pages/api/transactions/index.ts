import type { NextApiRequest, NextApiResponse } from 'next'

interface Transaction {
  id: string
  amount: number
  category: string
  date: string
  type: 'income' | 'expense'
}

let transactions: Transaction[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(transactions)
      break
    case 'POST':
      const newTransaction: Transaction = {
        id: Date.now().toString(),
        ...req.body
      }
      transactions.push(newTransaction)
      res.status(201).json(newTransaction)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

