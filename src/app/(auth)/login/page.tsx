"use client";
import { LoginPayload } from "@/types/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as React from "react"
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function Login() {

    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const router = useRouter();

    const handleEmail = (e :React.ChangeEvent<HTMLInputElement>) =>
    {
      setEmail(e.target.value);
    }
    const handlePassword = (e : React.ChangeEvent<HTMLInputElement>) =>
    {
        setPassword(e.target.value);
    }

const handleLogin = async (e : React.FormEvent) =>
{
    try{
        const payload : LoginPayload = {email,password};
        const response = await fetch('/api/auth/Login',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload),
        }
        );
        const result =  await response.json();
        const resultId = result.user.id;
        router.push(`/users/${resultId}`)
        console.log(result);

    }catch
    {

    }


}


  return (
    <div className="min-h-screen flex items-center justify-center">
    <Card className="w-[350px]">
      <CardHeader className="justify-center">
        <CardTitle>Task Manager</CardTitle>
        <CardDescription>Manage your tasks</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label >Email</Label>
              <Input id="email" placeholder="Enter your email."  onChange={handleEmail}/>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Label >Password</Label>
            <Input type="password" id="password" placeholder="Enter Your Password."  onChange={handlePassword} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button  >Register</Button>
        <Button type="submit" onClick={handleLogin} >Login</Button>
      </CardFooter>
    </Card>
    </div>
  )
}
