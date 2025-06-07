"use client"

import useTaskStore from "@/app/stores/useStore";
import { Task } from "@/types/task";
import { User } from "@/types/user";
import { useEffect } from "react";
import { ReactNode } from "react";
export default function StoreTasks({ tasks, children,user }: { tasks: Task[]; children: ReactNode; user : User}) 
{

const setTasks = useTaskStore((state) =>(state.setTasks))
const setThisUser = useTaskStore((state) => state.setUser)

useEffect(() => {
  setThisUser(user)
}, [user])

useEffect(() =>
    {
        setTasks(tasks)
    },[tasks])


    return  <>{children}</>
    
       
    
    
}