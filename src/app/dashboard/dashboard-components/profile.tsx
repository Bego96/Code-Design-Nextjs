import React from 'react'
import Image from 'next/image'
export async function Profile() {
  return (
    <div className='hidden lg:flex items-center cursor-pointer'>
            <div className='w-14 h-14 overflow-hidden rounded-full grow-0 shrink-0 mr-4'>
                <Image className='w-full h-auto object-center' alt="profile picture" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={500} width={500}/>
            </div>
            <div>
                <p>Jasmin Huremović</p>
            </div>
        </div>
  )
}
