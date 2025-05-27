"use client"
import TaskColumn from "./TaskColumn";
import { Task, UserTaskBoardProp } from "@/types/task";

export default function UserTaskBoard({tasks} : UserTaskBoardProp)
{
    const todoTasks  = tasks.filter( task => task.status === "todo");
    const inProgressTasks  = tasks.filter( task => task.status === "in_progress");
    const doneTasks  = tasks.filter( task => task.status === "done");
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      <TaskColumn title="TO Do " tasks={todoTasks} />
      <TaskColumn title="IN Progress  " tasks={inProgressTasks} />
      <TaskColumn title="Done" tasks={doneTasks} />
    </div>
    )
}