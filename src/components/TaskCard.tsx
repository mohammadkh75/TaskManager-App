
import { TaskCardProp } from "@/types/task";
import TaskOption from "./TaskOption";
import useTaskStore from "@/app/stores/useStore";

export default function TaskCard({ taskId }: TaskCardProp) {

  const task = useTaskStore(state =>state.tasks.find(task => task.id === taskId));
  if(!task)
  {
    return null;
  }

  return (
    <div className=" flex flex-col  bg-muted p-3 rounded-2xl shadow-black shadow-xl mb-2 border-4 border-background ">
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-800">{task.description}</p>
      <p className="text-sm text-gray-800">
        Create At: {new Date(task.createdAt).toLocaleDateString("fa-IR")}
      </p>
      <p className="text-sm text-gray-800">
        Update At: {new Date(task.updatedAt).toLocaleDateString("fa-IR")}
      </p>

      <TaskOption  taskId={taskId} />
    </div>
  );
}
