"use client"
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginModal() {
    const handleLogin = async () => {
        signIn("google", {
            callbackUrl: "/dashboard",
            redirect: true,
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Getting Started</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Welcome to QuickChat</DialogTitle>
                    <DialogDescription>
                        QuickChat is a platform that allows you to create secure chat links for your conversations.
                    </DialogDescription>
                </DialogHeader>
                <Button variant="outline" onClick={handleLogin} className="flex items-center gap-2">
                    <Image 
                        src="/google.svg" 
                        alt="Google Logo" 
                        width={24} 
                        height={24}
                        className="mr-2"
                    />
                    Continue with Google
                </Button>
            </DialogContent>
        </Dialog>
    )
}