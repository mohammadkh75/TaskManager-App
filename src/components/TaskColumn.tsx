"use client"
import TaskCard from "./TaskCard";
import { TaskColumnProps } from "@/types/task";
export default function TaskColumn({ title, tasks }: TaskColumnProps) {

  function removeTaskOptions(id: string) {
    console.log(id)
    const index = tasks.findIndex(item => item.id === id)

    if (index === -1) {
      return
    }

    tasks.splice(0, index)
  }

  return (
    <div className="bg-gray-100 p-4 rounded shadow w-1/3">
      <h2 className="text-lg font-bold mb-4 text-center text-gray-800">{title}</h2>
      <div className="space-y-2">
        {tasks.map((task) =>
        (
          <TaskCard key={task.id} task={task} onDeleteTask={removeTaskOptions} />
        )
        )}
      </div>
    </div>

  )

}