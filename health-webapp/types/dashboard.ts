export interface HealthMetric {
  value: number
  unit: string
  change?: {
    value: number
    percentage: number
  }
}

export interface NutritionInfo {
  calories: number
  proteins: number
  carbs: number
  fats: number
}

export interface DailyProgress {
  date: string
  calories: {
    current: number
    target: number
  }
  progress: number
}

