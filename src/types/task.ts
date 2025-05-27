export interface Task {
    status: 'in_progress' |'todo'|'done';
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    assignedToUserId:string;

}

export interface TaskCardProp{
    task:Task;
}

export interface TaskColumnProps {
    title: string;
    tasks: Task[];
  };

  export interface UserTaskBoardProp {
    tasks: Task[];
  };