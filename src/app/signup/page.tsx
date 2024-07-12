"use client";
import React, { use, useEffect } from 'react'
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { cn } from "@/utils/cn";
import Link from 'next/link';
import { string } from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import dbConnect from '@/lib/dbConneection';



function Signup() {

    const [user, setuser] = React.useState({
        name: "",
        email: "",
        password: ""
    })
    const [buttonDisable, setbuttonDisable] = React.useState(false);


    useEffect(() => {
        if (user.name.length > 0 && user.email.length > 0 && user.password.length > 0) {
            setbuttonDisable(false)
        } else {
            setbuttonDisable(true)
        }
    }, [user])
    console.log(user)

    const route = useRouter();
    const onSignup = async () => {

        await dbConnect();

        try {
            const response = await axios.post("api/users/sign-up", user)
            console.log("response successfully", response.data);
            await route.push("/login")

        } catch (error: any) {
            console.log(error.message, error)
            return Response.json(
                {
                    success: false,
                    message: " error while registering",
                    status: 400
                }
            )



        }

    }




    return (
        <div className=' flex aling center justify-center items-center mt-10'>
            <div className="max-w-lg  mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-5">
                    Signup Form
                </h2>


                <div className="flex flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <Label htmlFor="firstname"></Label>
                    <Input
                        id="firstname"
                        placeholder="Name"
                        type="text"
                        value={user.name}
                        onChange={(e) => setuser({ ...user, name: e.target.value })}
                    />
                    <Label htmlFor="lastname"></Label>


                </div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="Email Address" type="email"
                    value={user.email}
                    onChange={(e) => setuser({ ...user, email: e.target.value })}
                />
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password"
                    value={user.password}
                    onChange={(e) => setuser({ ...user, password: e.target.value })}
                />

                <div className='flex justify-center items-center mt-5 dark:text-white gap-5'>
                    <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200" onClick={onSignup}>
                        {buttonDisable ? " enter deails " : " SignIn"}
                    </button>
                    <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        <Link href="/login">
                            Login Use
                        </Link>

                    </button>

                </div>
            </div>
        </div>

    )
}

export default Signup