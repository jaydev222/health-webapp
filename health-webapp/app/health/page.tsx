"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MetricCard } from '../components/metric-card'
import { HealthChart } from '../components/health-chart'
import { AppleHealthConnector } from '../components/apple-health-connector'
import { toast } from "@/components/ui/use-toast"
import { LoadingSpinner } from '../components/loading-spinner'

interface HealthData {
  date: string
  steps: number
  calories: number
  sleep: number
}

export default function HealthPage() {
  const [steps, setSteps] = useState(0)
  const [calories, setCalories] = useState(0)
  const [sleep, setSleep] = useState(0)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [healthData, setHealthData] = useState<HealthData[]>([])
  const [appleHealthCalories, setAppleHealthCalories] = useState<number | null>(null)

  useEffect(() => {
    fetchHealthData()
    fetchAppleHealthData()
  }, [])

  const fetchHealthData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/health')
      if (!response.ok) throw new Error('Failed to fetch health data')
      const data = await response.json()
      setHealthData(data)
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to load health data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const fetchAppleHealthData = async () => {
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      const mockAppleHealthCalories = Math.floor(Math.random() * 500) + 1500
      setAppleHealthCalories(mockAppleHealthCalories)
    } catch (err) {
      console.error('Failed to fetch Apple Health data:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (steps < 0 || calories < 0 || sleep < 0 || sleep > 24) {
      setError('Please enter valid values')
      return
    }

    try {
      setIsLoading(true)
      const newData = { date: new Date().toISOString().split('T')[0], steps, calories, sleep }
      const response = await fetch('/api/health', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
      })
      if (!response.ok) throw new Error('Failed to save health data')
      setHealthData([...healthData, newData])
      setSteps(0)
      setCalories(0)
      setSleep(0)
      toast({
        title: "Success",
        description: "Health data saved successfully.",
      })
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to save health data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <LoadingSpinner />

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Daily Steps"
          value={steps.toString()}
          subtitle="steps"
          color="bg-cyan-400"
        />
        <MetricCard
          title="Calories Burned"
          value={calories.toString()}
          subtitle="kcal"
          color="bg-orange-400"
        />
        <MetricCard
          title="Sleep Duration"
          value={sleep.toString()}
          subtitle="hours"
          color="bg-purple-400"
        />
      </div>
      
      <AppleHealthConnector />

      {appleHealthCalories !== null && (
        <Card>
          <CardHeader>
            <CardTitle>Apple Health Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{appleHealthCalories} kcal</p>
            <p className="text-sm text-gray-500">Calories burned today (synced from Apple Health)</p>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Log Health Data</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Steps</label>
              <Input
                type="number"
                id="steps"
                value={steps}
                onChange={(e) => setSteps(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="calories" className="block text-sm font-medium text-gray-700">Calories Burned</label>
              <Input
                type="number"
                id="calories"
                value={calories}
                onChange={(e) => setCalories(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            <div>
              <label htmlFor="sleep" className="block text-sm font-medium text-gray-700">Sleep Duration (hours)</label>
              <Input
                type="number"
                id="sleep"
                value={sleep}
                onChange={(e) => setSleep(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Log Data'}
            </Button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
      </Card>

      <HealthChart data={healthData} />
    </div>
  )
}

