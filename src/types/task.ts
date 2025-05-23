export interface Task {
    status: 'in_progress' |'todo'|'done';
    id: string;
    title: string;
    description: string;
    createdAt: Date|string;
    updatedAt: Date|string;
    assignedTo:string;

}