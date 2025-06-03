"use client";

import { FaComment, FaEdit, FaTrash } from 'react-icons/fa';
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

 const tasks = useTaskStore(state => state.tasks)
  const removeTask = useTaskStore( state => state.removeTask)
  const setTaskUpdate = useTaskStore(state => state.setTasks)

  const nextTask = (taskId : string) =>
  {
  const updateTasks : Task[] = tasks.map(task => task.id === taskId ? {...task, status : 'done'} : task )
  setTaskUpdate(updateTasks)
}

  

  return (
    <TooltipProvider>
      <div className="flex gap-2 justify-center items-center mt-2">
        {icons.map(({ Icon, label, type }) => (
          <Tooltip key={type}>
            <TooltipTrigger asChild>
              <button
                className="p-2 rounded-full  bg-[#4A90E2] hover:bg-[#4A90E2] text-white transition shadow-md shadow-black border-2 border-blue-200 hover:scale-130"
                aria-label={label}

                onClick={() =>
                   {
                    if (type === "Delete")
                {
                     removeTask(taskId);
                }

                if(type === "Next")
                {
                  
                  nextTask(taskId)
                }
              
                }
              
              
              }
              >
                <Icon size={17} />
              </button>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
