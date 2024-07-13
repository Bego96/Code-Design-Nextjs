'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export default function HomeNavProfile({user}: any) {
  const router = useRouter();
  if (!user) {
    return (
      <div>
      <button

        onClick={() => router.push("/sign-in")}
        className="bg-indigo-700 p-2 rounded-md"
      >
        Sign In 
      </button>
    </div>
    )
  } else {
    return (
      <div className='hidden lg:flex items-center cursor-pointer'>
        <div className='w-14 h-14 overflow-hidden rounded-full grow-0 shrink-0 mr-4'>
          <Image className='w-full h-auto object-center' alt="profile picture" src={user?.image} height={500} width={500}/>
        </div>
        <div>
          {
            user && <div><p>{user.name + ' ' + user.lastName}</p></div>
          }
        </div>
      </div>
    )
  }
}
