import useTaskStore from "@/app/stores/useStore"
import { motion } from "framer-motion";
export default function ShowComment ({ id }: { id: string })
{
    const userTasks  = useTaskStore(state => state.tasks)
    const thisTask = userTasks.find(task => task.id === id)
    const  commentThisTask = thisTask?.comments
    const thisUser = useTaskStore(state => state.user)

    return(  
        <ul className="space-y-3">
        {commentThisTask?.map((comment, index) => (
          <motion.li
          
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-tr from-blue-400 to-white p-2 rounded-2xl shadow-lg border-2 border-background flex items-start gap-3 mt-2"
          >
            <span className=" text-xl">💬</span>
            <p className="text-black text-lg">
  <span className="font-semibold text-blue-700">{thisUser.name}</span>: {comment}
</p>
          </motion.li>
        ))}
      </ul>
    )


  
        
    


}


