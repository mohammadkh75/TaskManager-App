import {Role} from './role'
export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
    avatarUrl?: string;
   
}

export interface CreateUserPayload{
    name:string;
    email:string;
}