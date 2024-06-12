import React from 'react'
import Image from 'next/image'
export default function Profile({user}: any) {
  return (
    <div className='hidden lg:flex items-center cursor-pointer'>
            <div className='w-14 h-14 overflow-hidden rounded-full grow-0 shrink-0 mr-4'>
                <Image className='w-full h-auto object-center' alt="profile picture" src={user?.image} height={500} width={500}/>
            </div>
            <div>
                <p>{user.name + ' ' + user.lastName}</p>
            </div>
        </div>
  )
}
