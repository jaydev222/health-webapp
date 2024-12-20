"use client"

import { useState } from 'react'
import { CustomCard } from "@/components/ui/custom-card"
import { UserHeader } from "@/components/ui/user-header"
import { Progress } from "@/components/ui/progress"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { Modal } from "@/components/ui/modal"
import { AnimatedInput } from "@/components/ui/animated-input"

export default function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="max-w-md mx-auto min-h-screen bg-zinc-950 text-white pb-20">
      <UserHeader />
      
      <div className="p-4 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Hello Mr. David</h1>
        </div>

        <CustomCard title="Your Progress">
          <div className="space-y-2">
            <p className="text-lg font-semibold">1350 calories</p>
            <p className="text-sm text-gray-400">15 January 2023</p>
            <Progress value={80} className="h-2 mt-2" />
          </div>
        </CustomCard>

        <div className="grid grid-cols-2 gap-4">
          <CustomCard title="Current Weight">
            <div className="space-y-1">
              <p className="text-2xl font-bold">70.5 kg</p>
              <p className="text-sm text-green-400">↑ 3.5 kg (5.3%)</p>
            </div>
          </CustomCard>
          <CustomCard title="Today's Calories">
            <div className="space-y-1">
              <p className="text-2xl font-bold">1120 kcal</p>
              <p className="text-sm text-green-400">↑ 4.6%</p>
            </div>
          </CustomCard>
        </div>

        <CustomCard title="Breakfast">
          <div className="space-y-2">
            <p className="text-lg font-semibold">260 Kcal</p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium">Proteins</p>
                <p>58.6g</p>
              </div>
              <div>
                <p className="font-medium">Carbs</p>
                <p>48.8g</p>
              </div>
              <div>
                <p className="font-medium">Fats</p>
                <p>20.3g</p>
              </div>
            </div>
          </div>
        </CustomCard>
      </div>

      <FloatingActionButton onClick={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Entry">
        <div className="space-y-4">
          <AnimatedInput label="Weight" type="number" />
          <AnimatedInput label="Calories" type="number" />
          <AnimatedInput label="Date" type="date" />
        </div>
      </Modal>
    </div>
  )
}

