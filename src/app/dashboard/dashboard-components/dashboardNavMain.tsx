'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import useDashboardStore from '../dashboardStore/dashboardStore';
import NavProfile from './navProfile';
export default function DashboardNavMain({user}: any) {



const openSidebar = useDashboardStore((state) => state.toggleSidebar)
    

  return (
    <nav className='flex 2xl:flex-row justify-between items-center'>
        <div className='order-2 g:order-1 flex items-center'>
            <div className='flex justify-center items-center lg:mr-8 lg:border-r-[1px] border-slate-400'>
                <div className='w-14 md:mr-4'>
                    <Image className='w-full' alt="logo" src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd" height={500} width={500}/>
                </div>
                <h2 className='text-xl lg:pr-14 hidden md:block'>CODE Design</h2>
            </div>
          <Link href='/'>
            <button className='lg:block hidden w-40 py-4 bg-[#FAFAFA] hover:drop-shadow-md'>
              Početna
            </button>
          </Link>
          <Link href='/dashboard'>
            <button className='lg:block hidden w-40 py-4 bg-[#FAFAFA] hover:drop-shadow-md'>
              Projekti
            </button>
          </Link>
        </div>
        
        
          <div className='order-3 lg:order-2 lg:flex'>
            <NavProfile user={user}/>
          </div>
          <RxHamburgerMenu className='order-1 lg:hidden cursor-pointer mr-12' size={20} onClick={()=> openSidebar()}/>
        

    </nav>
  )
}
