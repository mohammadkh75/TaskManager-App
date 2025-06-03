import { tasks } from "@/mock/tasks";
import { users } from "@/mock/users";
import UserTaskBoard from "@/components/UserTaskBoard";
import { UserPageProp } from "@/types/user";
import { Task } from "@/types/task";
import StoreTasks from "@/components/StoreTasks";
 export default  async function UserPage({params} : UserPageProp)
 {
    const {id}=  await params;
    const goaluser = users.find((user) => user.id === id)
    const userTasks : Task[] = tasks.filter((task) => task.assignedToUserId === goaluser?.id)
    return(
        
           
         <StoreTasks tasks={userTasks }>

                <UserTaskBoard />

         </StoreTasks>

        
            
    )
 }
