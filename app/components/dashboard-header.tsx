import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Welcome back, User!</h1>
      <Button>Add New Task</Button>
    </header>
  )
}

