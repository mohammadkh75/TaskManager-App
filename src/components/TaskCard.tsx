
import { TaskCardProp } from "@/types/task";
import TaskOption from "./TaskOption";

export default function TaskCard({ task, onDeleteTask }: TaskCardProp) {

  return (
    <div className=" flex flex-col  bg-white p-3 rounded-2xl shadow-black shadow-xl mb-2 ">
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className="text-sm text-gray-600">
        Create At: {new Date(task.createdAt).toLocaleDateString("fa-IR")}
      </p>
      <p className="text-sm text-gray-600">
        Update At: {new Date(task.updatedAt).toLocaleDateString("fa-IR")}
      </p>

      <TaskOption task={task} onDelete={onDeleteTask} />
    </div>
  );
}
