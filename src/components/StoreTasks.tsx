"use client"

import useTaskStore from "@/app/stores/useStore";
import { Task } from "@/types/task";
import { useEffect } from "react";
import { ReactNode } from "react";
export default function StoreTasks({ tasks, children }: { tasks: Task[]; children: ReactNode }) 
{

const setTasks = useTaskStore((state) =>(state.setTasks))

useEffect(() =>
    {
        setTasks(tasks)
    },[tasks])


    return  <>{children}</>
    
       
    
    
}