import { AlertCircle, AlertOctagon, AlertTriangle, Briefcase, Calendar, Home, Inbox, ListTodo, LogOut, MessageCircleIcon, Moon, PersonStanding, Search, Settings, Sheet, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"


// Menu items.
const items = [
  {
    title: "Projects",
    url: "#",
    icon: Briefcase,
  },
  {
    title: "Tasks",
    url: "#",
    icon: ListTodo,
  },
  {
    title: "Team",
    url: "#",
    icon: Users,
  },
  {
    title: "Calendars",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Notifications",
    url: "#",
    icon: AlertOctagon,
  },
  {
    title: "Messages",
    url: "#",
    icon: MessageCircleIcon,
  },
  {
    title: "Dark Mode",
    url: "#",
    icon: Moon,
    
  },
  {
    title: "Analytics",
    url: "#",
    icon: Sheet,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogOut,
  },
  
]

export  default function AppSideBar() {
  return (
    <Sidebar >
      <SidebarContent >
      <div className="flex p-1">
      <SidebarTrigger className="ml-auto bg-background rounded-full" />
    </div>
        <SidebarGroup>
          <SidebarGroupLabel className=" font-bold text-2xl text-black mt-20">TASK MANAGER</SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="font-bold text-black">{item.title}</span>
                      
                    </a>
                  </SidebarMenuButton>
                  <Separator  className="bg-gray-300" />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
