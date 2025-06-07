import { create } from 'zustand'
import { Task } from '@/types/task'
import { User } from '@/types/user'

interface TaskStore
{
    tasks : Task[],
    user: User ,
    setUser: (user : User) => void
    setTasks:(tasks : Task[]) => void
    removeTask : (id : string) => void
    addTask : (task : Task) => void
    Addcomment : (id : string , comment : string) => void



}

export const useTaskStore = create<TaskStore>((set)=> ({
    tasks : [],
    user: {
        id: "",
        name: "",
        email: "",
        role: {
          id: "",
          name: "user" ,
          description: " "
        }
      },

    setUser : (user) => set({user}),
    setTasks : (tasks) => set({tasks}),
    removeTask : (id) => set((state) => ({tasks: state.tasks.filter(task => task.id !== id)})),
    addTask: (task) => set((state) => ({tasks: [...state.tasks,task] })),
    Addcomment : (id,comment) => set((state) => ({tasks : state.tasks.map(task => 
        task.id === id ? {...task,comments : [...(task.comments ?? []), comment] } : task
    )}))

}))

export default useTaskStore