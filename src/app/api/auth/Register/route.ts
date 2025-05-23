import { NextRequest, NextResponse } from "next/server";
import { User } from "@/types/user";
import { RegisterPayload,AuthResponse } from "@/types/auth";
import { users } from "@/mock/users";
import { v4 as uuidv4 } from 'uuid';
import { createToken } from "@/utils/token";

export async function POST(request : NextRequest) {

    try{
        const body : RegisterPayload = await request.json();
        const existingUser = users.find(user  => user.email === body.email);
        if(existingUser)
        {
            return NextResponse.json({error:'کاربر قبلا ثبت شده است'} ,{status:400});
        }
        const newUser : User = {
            id: uuidv4(),
            name: body.name,
            email: body.email,
            role: {
              id: "r2",
              name: "user",
              description: "کاربر معمولی"
        }
    }
    users.push(newUser);
    const response : AuthResponse = {
        user : newUser,
        token :createToken(),
    }
     return NextResponse.json(response , {status:201});

    }catch{
        return NextResponse.json({ error: "خطا در ثبت‌نام کاربر" }, { status: 500 });

    }
    
}