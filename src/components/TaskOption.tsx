"use client";

import { FaComment, FaEdit, FaPaperPlane, FaTrash } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useTaskStore from '@/app/stores/useStore';
type IconType = "Edit" | "Comment" | "Next" | "Back" | "Delete";
import { TaskOptionProp } from '@/types/task';
import { Task } from '@/types/task';
import { useState } from 'react';
import ShowComment from './ShowComment';
export interface IconItem {
  Icon: React.ElementType,
  label: string,
  type: IconType,


}



export default function TaskOption( {taskId} : TaskOptionProp) {
  
  const icons: IconItem[] = [
    { Icon: FaComment, label: "Create a Comment On This Task", type: "Comment" },
    { Icon: FaEdit, label: "Edit This Task ", type: "Edit" },
    { Icon: FaTrash, label: "Delete This Task ", type: "Delete" },
    { Icon: FiArrowLeft, label: "Move To Previous Status ", type: "Back" },
    { Icon: FiArrowRight, label: "Move To Next Status ", type: "Next" },
  ];
 const [isCommenting,setIsCommenting] = useState(false)
 const [textComment,setTextComment] = useState("")
 const tasks = useTaskStore(state => state.tasks)

 const thisTask = tasks.find(task => task.id === taskId)
  const removeTask = useTaskStore( state => state.removeTask)
  const setTaskUpdate = useTaskStore(state => state.setTasks)
  const Addcomment = useTaskStore(state => state.Addcomment)

  const nextColumn = (taskId : string) =>
  {
  const updateTasks : Task[] = tasks.map(task => task.id === taskId ? {...task, columnId : (task.columnId ?? 0) + 1 ,
    status : (task.status === "todo" ? "in_progress" : "done")
  } : task )
  setTaskUpdate(updateTasks)
  console.log(updateTasks)
}
const Backcolumn = (taskId : string) =>
  {
  const updateTasks : Task[] = tasks.map(task => task.id === taskId ? {...task, columnId : (task.columnId ?? 0) - 1 ,
    status : (task.status === "done" ? "in_progress" : "todo")
  } : task )
  setTaskUpdate(updateTasks)
}








const filteredIcons  = icons.filter( ({type}) =>
{
if(type === "Back" &&  thisTask?.columnId === 1 )
{
  return false
}
if(type === "Next" &&  thisTask?.columnId === 3 )
  {
    return false
  }
return true
}
)

  

  return (

    
    <TooltipProvider>
      <ShowComment id={taskId}  />
      
    <div className="flex flex-col items-center gap-2 mt-2">
      
      <div className="flex gap-2 justify-center items-center">
        {filteredIcons.map(({ Icon, label, type }) => (
          <Tooltip key={type}>
            <TooltipTrigger asChild>
              <button
                className="p-2 rounded-full  bg-background  text-white transition shadow-md shadow-black border-2 border-blue-200 hover:scale-130"
                aria-label={label}
                onClick={() => {
                  if (type === "Delete") removeTask(taskId);
                  if (type === "Next") nextColumn(taskId);
                  if (type === "Back") Backcolumn(taskId);
                  if (type === "Comment") setIsCommenting((prev) => !prev);
                }}
              >
                <Icon size={17} />
              </button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>

      {isCommenting && (
        <div className="w-full mt-3 max-w-md bg-white  border-blue-200 border-4 rounded-lg shadow-sm p-3">
          <div className="flex gap-2 items-center">
            <input
              id="comment"
              type="text"
              value={textComment}
              onChange={(e) => setTextComment(e.target.value)}
              placeholder="Type your comment..."
              className="flex-1 p-4  border-4 rounded-md text-black focus:outline-none  "
            />
            <button
              onClick={() =>{
                Addcomment(taskId,textComment);
                setIsCommenting(false);
                setTextComment("");
              } 
              }
              className=" w-9 h-9  p-2 rounded-full  bg-[#4A90E2] hover:bg-[#4A90E2] text-white  shadow-md shadow-black border-2 border-blue-200 hover:scale-130"
              >
               <FaPaperPlane size={16} />
            </button>
          </div>
        </div>
      )}
  
    </div>
  </TooltipProvider>
  
  );
}
