
import { users } from "@/mock/users";
import { LoginPayload ,AuthResponse} from "@/types/auth";
import { User } from "@/types/user";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createToken } from "@/utils/token";



export async function POST(request: NextRequest) {
    try {
      const { email, password }: LoginPayload = await request.json();
  
      const existingUser = users.find(
        (user) => user.email === email && password ==='TASKMANAGER'
      );
  
      if (!existingUser) {
        return NextResponse.json(
          { error: "ایمیل یا رمز عبور نادرست است" },
          { status: 401 }
        );
      }
  
      const response: AuthResponse = {
        user: existingUser,
        token: createToken(),   
      };
  
      return NextResponse.json(response);
    } catch (error) {
      return NextResponse.json(
        { error: "ورود با خطا مواجه شد" },
        { status: 500 }
      );
    }
  }