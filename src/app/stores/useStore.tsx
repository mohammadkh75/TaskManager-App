import { create } from 'zustand'
import {  tasks } from '@/mock/tasks'
import { Task } from '@/types/task'
import { ReactNode } from 'react'

interface TaskStore
{
    tasks : Task[],
    setTasks:(tasks : Task[]) => void
    removeTask : (id : string) => void
    addTask : (task : Task) => void



}

export const useTaskStore = create<TaskStore>((set)=> ({
    tasks : [],
    setTasks : (tasks) => set({tasks}),
    removeTask : (id) => set((state) => ({tasks: state.tasks.filter(task => task.id !== id)})),
    addTask: (task) => set((state) => ({tasks: [...state.tasks,task] })),

}))

export default useTaskStore