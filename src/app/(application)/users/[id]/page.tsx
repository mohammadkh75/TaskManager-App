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
    const userTasks : Task[] = tasks.filter((task) => task.assignedToUserId === goaluser?.id).map(task =>
      
    {
      if(task.status === "todo")
         {
   task.columnId = 1
         }
         if(task.status === "in_progress")
            {
      task.columnId = 2
            }
            if(task.status === "done")
               {
         task.columnId = 3
               }
         return {...task}
    })
    if (!goaluser) {
      return <div>User Not Found</div>;
    }


    return(
        
           
         <StoreTasks tasks={userTasks } user={goaluser}>

                <UserTaskBoard />

         </StoreTasks>

        
            
    )
 }
