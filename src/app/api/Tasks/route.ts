import { Task } from "@/types/task";
import { tasks } from "@/mock/tasks";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { url } from "inspector";


export async function GET(request : NextRequest) {

try{
    const {searchParams} = new URL(request.url);
    const userId = searchParams.get("assignedToUserId")

    const filteredTasks = userId
    ? tasks.filter((task) => task.assignedToUserId === userId)
    : tasks;
    return NextResponse.json(filteredTasks);
  } catch (error) {
    return NextResponse.json({ error: "خطا در دریافت تسک‌ها" }, { status: 500 });
  }   
}  


export async function POST(request: NextRequest) {
    try {
      const body = await request.json();
  
      if (!body.title || !body.description || !body.assignedTo || !body.createdBy) {
        return NextResponse.json(
          { error: "اطلاعات تسک ناقص است" },
          { status: 400 }
        );
      }
  
      const newTask: Task = {
        id: `t${tasks.length + 1}`,
        status:'in_progress',
        title: body.title,
        description: body.description,
        assignedToUserId: body.assignedTo,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
  
      tasks.push(newTask);
  
      return NextResponse.json(newTask, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { error: "خطا در ایجاد تسک جدید" },
        { status: 500 }
      );
    }
  }

  export async function PUT(request: NextRequest) {
    try {
      const updatedTask: Task = await request.json();     
      const index = tasks.findIndex(task => task.id === updatedTask.id);
  
      if (index === -1) {
        return NextResponse.json(
          { error: "تسک مورد نظر پیدا نشد" },
          { status: 404 }
        );
      }
    
      tasks[index] = {
        ...updatedTask,
        updatedAt: new Date().toISOString(),  
      };
  
      return NextResponse.json(tasks[index], { status: 200 });
  
    } catch (error) {
      return NextResponse.json(
        { error: "خطا در به‌روزرسانی تسک" },
        { status: 500 }
      );
    }
  }


  export async function DELETE(request: NextRequest) {
    try {
      const deletedTask: Task = await request.json();
  
      const index = tasks.findIndex(task => task.id === deletedTask.id);
  
      if (index === -1) {
        return NextResponse.json({ error: "تسک مورد نظر پیدا نشد" }, { status: 404 });
      }
  
      tasks.splice(index, 1);
  
      return NextResponse.json({ message: "تسک با موفقیت حذف شد" }, { status: 200 });
  
    } catch (error) {
      return NextResponse.json({ error: "خطا در حذف تسک" }, { status: 500 });
    }
  }