export interface Balance {
  amount: number
  currency: string
  change: {
    value: number
    percentage: number
  }
}

export interface Expense {
  category: string
  percentage: number
  amount: number
  color: string
}

export interface Transaction {
  id: string
  type: 'income' | 'expense'
  amount: number
  category: string
  date: string
}

