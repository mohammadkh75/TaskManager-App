import TaskCard from "./TaskCard";
import { TaskColumnProps } from "@/types/task";
export default function TaskColumn({title,tasks}: TaskColumnProps)
{
return(
    <div className="bg-gray-100 p-4 rounded shadow w-full">
    <h2 className="text-lg font-bold mb-4 text-center text-gray-800">{title}</h2>
    <div className="space-y-2">
     {tasks.map((task)=>
     (
        <TaskCard  key={task.id} task={task}/>
     )
    )}
    </div>
  </div>

)
}