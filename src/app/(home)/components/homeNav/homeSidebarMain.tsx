
'use client'
import React from 'react'
import Link from 'next/link'

import { AiOutlineClose } from "react-icons/ai";
import useHomeStore from '../../homeStore/homeStore';
export default function HomeSidebarMain({user}: any) {
    
    const { sidebarVisibility} = useHomeStore();
    const openSidebar = useHomeStore((state) => state.toggleSidebar)
   
    const scrollTo = (route: any) => {
        const element = document.getElementById(`${route}`);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }

    const onChosenLink = (route:any) => {
        if (route) {
            scrollTo(route);
            openSidebar();
        } else {
            openSidebar();
        }
    }

  return (
    
        <aside className={`bg-[#FAFAFA] z-50 p-4 shadow-[-4px_1px_22px_-14px_#000000] fixed right-0 top-0 w-full xsm:w-1/2 md:w-1/3 top-0 transition-all ease-in-out duration-150 ${sidebarVisibility ? 'right-0' : 'right-[-100%]'} flex flex-col bg-white h-full lg:right-[-100%]`}>
        <AiOutlineClose className='absolute top-5 right-5 cursor-pointer' size={25} onClick={() => openSidebar()}/>
        <div className='mt-14 h-full'>
            <div className='w-full mt-4'>
                
                    <Link href="/" >
                        <button onClick={() => onChosenLink(null)} className='text-left pl-4 cursor-point w-full py-4 bg-white hover:drop-shadow-md'>
                            Početna
                        </button>
                    </Link>
                    <Link href="/about-us">
                        <button onClick={() => onChosenLink(null)} className='text-left pl-4 cursor-pointer w-full py-4 bg-white hover:drop-shadow-md'>
                            O nama
                        </button>
                    </Link>
                    <Link href="/projects">
                        <button onClick={() => onChosenLink(null)} className='text-left pl-4 cursor-pointer w-full py-4 bg-white hover:drop-shadow-md'>
                            Projekti
                        </button></Link>
                    <Link href="/#services" scroll={true}>
                        <button onClick={() => onChosenLink('services')} className='text-left pl-4 cursor-pointer w-full py-4 bg-white hover:drop-shadow-md'>
                            Usluge
                        </button>
                    </Link>
                   
               
                    <Link href="/#contact" scroll={true}>
                        <button onClick={() => onChosenLink('contact')} className='text-left pl-4 cursor-pointer w-full py-4 bg-white hover:drop-shadow-md'>
                            Kontakt
                        </button>
                    </Link>
                
            </div>
        </div>
        </aside>
    

    
    
  )
}