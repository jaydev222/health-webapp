"use client"

import { useState } from 'react'
import { CustomCard } from "@/components/ui/custom-card"
import { UserHeader } from "@/components/ui/user-header"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { Modal } from "@/components/ui/modal"
import { AnimatedInput } from "@/components/ui/animated-input"
import { Mail, Plus } from 'lucide-react'

export default function FinancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const date = new Date()

  return (
    <div className="max-w-md mx-auto min-h-screen bg-zinc-950 text-white pb-20">
      <UserHeader showMenu={false} showAddUser={true} />
      
      <div className="p-4 space-y-4">
        <CustomCard title="Total Balance" className="bg-[#00897B]">
          <div className="space-y-2">
            <p className="text-3xl font-bold">$206,367.00</p>
            <p className="text-sm">↑ 5.25% • $207.50</p>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="icon" className="h-12 w-12 rounded-full bg-[#FF4081]">
              <Mail className="h-6 w-6" />
            </Button>
            <Button size="icon" className="h-12 w-12 rounded-full bg-[#FFC107]">
              <Plus className="h-6 w-6" />
            </Button>
            <Button size="icon" className="h-12 w-12 rounded-full bg-white/20">
              <Plus className="h-6 w-6" />
            </Button>
          </div>
        </CustomCard>

        <CustomCard title="Expense Calendar" className="bg-[#D81B60]">
          <Calendar
            mode="single"
            selected={date}
            className="rounded-lg bg-transparent border-none text-white"
          />
        </CustomCard>

        <CustomCard title="Monthly Expenses" className="bg-[#00897B]">
          <div className="relative h-[300px] mt-4">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#FF4081] flex items-center justify-center">
              <span className="text-xl font-bold">34%</span>
            </div>
            <div className="absolute left-12 top-12 h-16 w-16 rounded-full bg-[#FFC107] flex items-center justify-center">
              <span className="text-lg font-bold">15%</span>
            </div>
            <div className="absolute right-20 bottom-0 h-20 w-20 rounded-full bg-[#7C4DFF] flex items-center justify-center">
              <span className="text-lg font-bold">18%</span>
            </div>
          </div>
        </CustomCard>
      </div>

      <FloatingActionButton onClick={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Transaction">
        <div className="space-y-4">
          <AnimatedInput label="Amount" type="number" />
          <AnimatedInput label="Category" type="text" />
          <AnimatedInput label="Date" type="date" />
        </div>
      </Modal>
    </div>
  )
}

