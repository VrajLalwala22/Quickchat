import React from 'react'
import ProfileMenu from '../auth/ProfileMenu'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function DashNav({name, image}: {name: string, image?: string}) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/75 backdrop-blur-lg">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <MessageCircle className="h-6 w-6 text-indigo-600" />
          <span className="text-xl">QuickChat</span>
        </Link>
        
        <div className="ml-auto flex items-center gap-4">
          <div className="text-sm text-gray-500">
            Welcome back, <span className="font-medium text-gray-900">{name}</span>
          </div>
          <ProfileMenu name={name} image={image}/>
        </div>
      </div>
    </nav>
  )
}