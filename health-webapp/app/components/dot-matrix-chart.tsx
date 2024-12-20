"use client"

import { Card } from "@/components/ui/card"

interface DotMatrixChartProps {
  data: number[]
  maxValue: number
  rows: number
  title: string
}

export function DotMatrixChart({ data, maxValue, rows, title }: DotMatrixChartProps) {
  const getOpacity = (value: number) => {
    return (value / maxValue) * 100
  }

  return (
    <Card className="p-6 border-0 bg-zinc-900">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="space-x-2">
          <button className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">D</button>
          <button className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">W</button>
          <button className="px-3 py-1 rounded-full bg-white text-zinc-900">M</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {data.map((value, index) => (
          <div key={index} className="flex flex-col gap-1">
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: `rgba(129, 140, 248, ${getOpacity(value) / 100})`,
                  opacity: rowIndex < Math.ceil((value / maxValue) * rows) ? 1 : 0.2,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}

