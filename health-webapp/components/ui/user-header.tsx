import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Menu, Plus } from 'lucide-react'

interface UserHeaderProps {
  showMenu?: boolean
  showNotifications?: boolean
  showAddUser?: boolean
}

export function UserHeader({ showMenu = true, showNotifications = true, showAddUser = false }: UserHeaderProps) {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        {showMenu && (
          <Button size="icon" variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        )}
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        {showAddUser && (
          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white/20">
            <Plus className="h-4 w-4" />
          </Button>
        )}
      </div>
      {showNotifications && (
        <Button size="icon" variant="ghost">
          <Bell className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

