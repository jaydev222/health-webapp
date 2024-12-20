"use client"

import { useState } from 'react'
import { UserHeader } from "@/components/ui/user-header"
import { CustomCard } from "@/components/ui/custom-card"
import { Button } from "@/components/ui/button"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { Modal } from "@/components/ui/modal"
import { AnimatedInput } from "@/components/ui/animated-input"

interface TaskCardProps {
  title: string
  type: "comment" | "poll"
  options?: string[]
  className?: string
}

function TaskCard({ title, type, options, className }: TaskCardProps) {
  return (
    <CustomCard className={className}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {type === "comment" ? (
        <Button className="w-full justify-start rounded-xl bg-white/20 hover:bg-white/30">
          Write Comment
        </Button>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {options?.map((option) => (
            <Button
              key={option}
              variant="secondary"
              className="rounded-xl"
            >
              {option}
            </Button>
          ))}
        </div>
      )}
    </CustomCard>
  )
}

export default function TasksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="max-w-md mx-auto min-h-screen bg-zinc-950 text-white pb-20">
      <UserHeader showMenu={false} showAddUser={true} />
      
      <div className="space-y-4 p-4">
        <TaskCard
          title="Which is the best recipe for potato salad?"
          type="comment"
          className="bg-emerald-600"
        />

        <TaskCard
          title="Which OS do you prefer the most?"
          type="poll"
          options={["Windows", "MacOS"]}
          className="bg-orange-600"
        />
      </div>

      <FloatingActionButton onClick={() => setIsModalOpen(true)} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Task">
        <div className="space-y-4">
          <AnimatedInput label="Task Title" type="text" />
          <AnimatedInput label="Task Type" type="text" placeholder="comment or poll" />
        </div>
      </Modal>
    </div>
  )
}

