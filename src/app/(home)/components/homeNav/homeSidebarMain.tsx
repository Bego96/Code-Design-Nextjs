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
    <aside className={`fixed inset-y-0 right-0 z-50 flex flex-col bg-[#FAFAFA] shadow-lg transition-transform duration-300 ease-in-out transform ${
        sidebarVisibility ? 'translate-x-0' : 'translate-x-full'
    } w-full xs:w-[85%] sm:w-[70%] md:w-[60%] lg:w-[40%] xl:w-[30%] h-full lg:hidden`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">CODE Design d.o.o</h2>
            <button 
                onClick={() => openSidebar()}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
            >
                <AiOutlineClose size={24} className="text-gray-600" />
            </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto">
            <div className="flex flex-col p-4 space-y-2">
                <Link href="/">
                    <button 
                        onClick={() => onChosenLink(null)} 
                        className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        Početna
                    </button>
                </Link>
                <Link href="/about-us">
                    <button 
                        onClick={() => onChosenLink(null)} 
                        className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        O nama
                    </button>
                </Link>
                <Link href="/projects">
                    <button 
                        onClick={() => onChosenLink(null)} 
                        className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        Projekti
                    </button>
                </Link>
                <Link href="/#services" scroll={true}>
                    <button 
                        onClick={() => onChosenLink('services')} 
                        className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        Usluge
                    </button>
                </Link>
                <Link href="/#contact" scroll={true}>
                    <button 
                        onClick={() => onChosenLink('contact')} 
                        className="w-full px-4 py-3 text-left rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        Kontakt
                    </button>
                </Link>
            </div>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">© 2024 CODE Design</p>
        </div>
    </aside>
  )
}