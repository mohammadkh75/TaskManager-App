export interface Task {
  status: 'in_progress' | 'todo' | 'done';
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  assignedToUserId: string;

}

export interface TaskCardProp {
  taskId: string;
  
}

export interface TaskColumnProps {
  title: string;
  tasksId: string[];
};

export interface UserTaskBoardProp {
  tasks: Task[];
};
export interface TaskOptionProp {
  taskId: string;
}

