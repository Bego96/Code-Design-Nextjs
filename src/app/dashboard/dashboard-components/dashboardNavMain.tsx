'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from './navbarProfile'
import { RxHamburgerMenu } from "react-icons/rx";
import useDashboardStore from '../dashboardStore/dashboardStore';
export default function DashboardNavMain({user}: any) {



const openSidebar = useDashboardStore((state) => state.toggleSidebar)
    

  return (
    <nav className='flex 2xl:flex-row justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/'>
            <div className='flex justify-center items-center lg:mr-16 lg:border-r-[1px] border-slate-400'>
                <div className='w-14 mr-4'>
                    <Image className='w-full' alt="logo" src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd" height={500} width={500}/>
                </div>
                <h2 className='text-xl lg:pr-20'>CODE Design</h2>
            </div>
          </Link>
          <Link href='/dashboard'><button className='lg:block hidden w-40 py-4 hover:border-none hover:drop-shadow-xl bg-[#FAFAFA]'>Projekti</button></Link>
        </div>
        <RxHamburgerMenu className='lg:hidden cursor-pointer' size={20} onClick={()=> openSidebar()}/>
        <Profile user={user}/>

    </nav>
  )
}
