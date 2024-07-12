"use client"
// to take some data from the frownt end part in this case user name password we have to make it a client component that why we use client 
import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from '@/components/ui/input';
import { cn } from "@/utils/cn";
import Link from 'next/link';
import { string } from 'zod';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useState } from 'react';




function Login() {
    const route = useRouter();

    const [user, setuser] = React.useState({
        email: "",
        password: ""
    })

    return (
        <div>        <div className=' flex aling center justify-center items-center mt-10'>
            <div className="max-w-lg  mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-5">
                    Login
                </h2>
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    placeholder="Email Address"
                    type="email"
                    value={user.email}
                    onChange={(e) => setuser({ ...user, email: e.target.value })} />



                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    value={user.password}
                    onChange={(e) => setuser({ ...user, password: e.target.value })} />

                <div className='flex justify-center items-center mt-5 dark:text-white gap-5'>
                    <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        LogIn
                    </button>
                    <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        <Link href="/signup">
                            signup
                        </Link>

                    </button>
                </div>
            </div>
        </div>




        </div>
    )
}

export default Login