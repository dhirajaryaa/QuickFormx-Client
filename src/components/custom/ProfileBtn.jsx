import userImage from "@/assets/boy.png"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { LogOut, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function ProfileBtn() {
  const navigate = useNavigate()

  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Avatar className="border-2 border-accent-foreground hover:border-destructive size-10 transition-colors duration-200">
        <AvatarImage src={userImage} alt="Profile_Pic" />
        <AvatarFallback className="text-sm font-medium">U</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-48 mr-2 p-2 rounded-xl shadow-xl bg-background border">
      <DropdownMenuLabel className="text-muted-foreground text-xs uppercase tracking-wider">
        My Account
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuItem
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        <User className="w-4 h-4 text-primary" />
        <span>Profile</span>
      </DropdownMenuItem>

      <DropdownMenuItem
        className="flex items-center gap-2"

      >
        <LogOut className="w-4 h-4" />
        <span>Logout</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default ProfileBtn