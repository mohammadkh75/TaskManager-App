import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { users } from "@/mock/users";
import { CreateUserPayload } from "@/types/user";
import { User } from "@/types/user";

export async function GET(): Promise<NextResponse<User[] | { error: string }>> {
  try {
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "خطا در دریافت کاربران" },
      { status: 500 }
    );
  }
}


export async function POST(request : NextRequest) {

    try{
        const body : CreateUserPayload = await request.json();
        const newUser :User =
    {
        id: `u${users.length + 1}`,
      name: body.name,
      email: body.email,
      role: {
        id: 'r2',
        name: 'user',
        description: 'کاربر عادی'
    }     
    };
    users.push(newUser);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "ثبت کاربر انجام نشد" }, { status: 500 });
  }
};


export async function PUT(request :NextRequest) {

    try{
        const updatedUser  : User = await request.json();
        const index = users.findIndex((user) => user.name === updatedUser.name && user.email === updatedUser.email);
        if (index === -1) {
            return NextResponse.json({ error: "کاربر پیدا نشد" }, { status: 404 });
          }
          users[index] = {
            ...users[index],    
            ...updatedUser,       
          };

        return NextResponse.json(updatedUser,{status :200});

    } catch
{
    return NextResponse.json({ error: "خطا در به‌روزرسانی کاربر" }, { status: 500 });
}
    
}



export async function DELETE(request : NextRequest) {

    try{
        const deletedUser : User = await request.json();
        const index = users.findIndex((user) => (user.name === deletedUser.name && user.email === deletedUser.email))
        if(index === -1)
        {
            return NextResponse.json({ error: "کاربر پیدا نشد" }, { status: 404 }); 
        }
        users.splice(index,1);

        return NextResponse.json({ message: "کاربر حذف شد" },{status:200})

    }catch
    {
        return NextResponse.json({ error: "خطا در به‌روزرسانی کاربر" }, { status: 500 });
    }

    
}
    
    
