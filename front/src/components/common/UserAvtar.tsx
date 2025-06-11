import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React from 'react'

export default function UserAvtar({name,image}:{name:string,image?:string}) {
  return (
    <Avatar>
  <AvatarImage src={image} />
  <AvatarFallback>{name[0]}</AvatarFallback>
</Avatar>
  )
}