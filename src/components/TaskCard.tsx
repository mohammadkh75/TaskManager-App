"use client";
import { TaskCardProp } from "@/types/task";
 export default function TaskCard({task} : TaskCardProp )
 {
    return(
        <div className="bg-white p-3 rounded shadow mb-2">
        <h3 className="font-semibold text-gray-800">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-600"> Creat At :{new Date(task.createdAt).toLocaleDateString("fa-IR")}</p>
        <p className="text-sm text-gray-600">Update At: {new Date(task.updatedAt).toLocaleDateString("fa-IR")}</p>

      </div>
    )

 }