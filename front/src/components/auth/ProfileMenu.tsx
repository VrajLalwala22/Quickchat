"use client"
import React, { Suspense, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvtar from '../common/UserAvtar'
import dynamic from 'next/dynamic'

const LogoutModal=dynamic(()=>import("./LogoutModal"),{
    ssr:false
})
export default function ProfileMenu({name,image}:{name:string,image?:string}) {

const [logoutOpen,setLogoutOpen]=useState(false)


    return (
        <div>
            {logoutOpen && <Suspense fallback={<div>Loading...</div>}>
            <LogoutModal open={logoutOpen} setOpen={setLogoutOpen}/>
            
            </Suspense>}
            <DropdownMenu>
                <DropdownMenuTrigger>
    <UserAvtar name={name} image={image} />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem onClick={()=>setLogoutOpen(true)}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
 
        </div>
    )
}