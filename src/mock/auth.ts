import { LoginPayload,RegisterPayload,AuthResponse } from "@/types/auth";
import { User } from "@/types/user";
import { users } from "./users";
import { v4 as uuidv4 } from 'uuid';

 function createToken ():string
{
    return uuidv4();

}

export function Login (payload:LoginPayload): AuthResponse | null
{
    const {email,password} = payload;
    const existingUser = users.find(user => user.email === email);
    const passwordIscorrect = password ==='TASKMANAGER';
    if(existingUser && passwordIscorrect)
    {
        return{
            user: existingUser,
            token: createToken(),
        };
    }

    return null;
}

export function register(payload: RegisterPayload): AuthResponse {
    const { name, email, password } = payload;
  
   
    const newUser: User = {
      id: `u${users.length + 1}`,
      name,
      email,
      role: {
        id: 'r2',
        name: 'user',
        description: 'کاربر عادی',
      },
    };
  
   
    users.push(newUser);
  
    return {
      user: newUser,
      token: createToken(),
    };
  }
  
