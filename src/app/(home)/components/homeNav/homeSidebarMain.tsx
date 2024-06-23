
'use client'
import React from 'react'
import Link from 'next/link'

import { AiOutlineClose } from "react-icons/ai";
import { useStore } from 'zustand';

import HomeSidebarProfile from './homeSidebarProfile';
import useHomeStore from '../../homeStore/homeStore';
export default function HomeSidebarMain({user}: any) {

    const { sidebarVisibility} = useHomeStore();
    const openSidebar = useHomeStore((state) => state.toggleSidebar)
    console.log(sidebarVisibility)

  return (
    <aside className={`z-50 p-4 shadow-[-4px_1px_22px_-14px_#000000] fixed right-0 top-0 w-full xsm:w-1/2 md:w-1/3 top-0 transition-all ease-in-out duration-150 ${sidebarVisibility ? 'right-0' : 'right-[-100%]'} flex flex-col bg-white h-screen`}>
        <AiOutlineClose className='absolute top-5 right-5 cursor-pointer' size={25} onClick={() => openSidebar()}/>
        <div className='mt-14'>
        <div className='flex items-center cursor-pointer'>
            <HomeSidebarProfile user={user} />
        </div>
            <Link href="/projekti">
                <button className='mt-10 drop-shadow-xl px-16 py-4 bg-white'>
                    Projekti
                </button>
            </Link>
        </div>
    </aside>
  )
}