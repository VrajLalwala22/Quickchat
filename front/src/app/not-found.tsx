import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
        <Image src="/images/404.svg" alt="404" width={500} height={500} />
        <Link href="/">
            <Button>Go to Home</Button>
        </Link>
    </div>
  )
}