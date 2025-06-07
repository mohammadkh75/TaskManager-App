"use client"

import TaskColumn from "./TaskColumn";
import useTaskStore from "@/app/stores/useStore";

export default function UserTaskBoard()
{

  const tasks   = useTaskStore((state) => state.tasks);

  const toDoTasks = tasks.filter(task => task.columnId === 1).map(task => task.id)
  const inProgressTasks = tasks.filter(task => task.columnId === 2).map(task => task.id)
  const doneTasks = tasks.filter(task => task.columnId === 3).map(task => task.id)


    return(
      <div className="flex flex-row gap-x-1 px-4 py-4  justify-center">
      <TaskColumn  title="TO Do " tasksId={toDoTasks}   />
      <TaskColumn title="IN Progress " tasksId={inProgressTasks}  />
      <TaskColumn title="Done" tasksId={doneTasks} />
  </div>
  
    )
}