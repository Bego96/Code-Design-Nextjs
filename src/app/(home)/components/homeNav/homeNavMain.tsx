'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import useHomeStore from '../../homeStore/homeStore'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

export default function HomeNavMain({user}:any) {
    const { sidebarVisibility } = useHomeStore();
    const openSidebar = useHomeStore((state) => state.toggleSidebar)
    
    const scrollTo = (route: any) => {
        const element = document.getElementById(`${route}`);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <nav className='sticky top-0 px-4 xl:px-14 2xl:px-32 py-4 flex justify-between items-center xl:mt-4 z-40 bg-[#FAFAFA] shadow-sm'>
            <div className='flex items-center gap-8'>
                <Link href="/">
                    <div className='flex justify-center items-center lg:mr-8 xl:border-r-[1px] border-slate-400'>
                        <div className='w-14 mr-4'>
                            <Image className='w-full' alt="logo" src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd" height={500} width={500}/>
                        </div>
                        <h2 className='hidden xl:block text-2xl lg:pr-14 font-bankgothic'>CODE Design</h2>
                    </div>
                </Link>
                <div className='hidden lg:flex items-center gap-2'>
                    <Link href="/">
                        <button className='px-6 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                            Početna
                        </button>
                    </Link>
                    <Link href="/about-us">
                        <button className='px-6 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                            O nama
                        </button>
                    </Link>
                    <Link href="/projects">
                        <button className='px-6 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                            Projekti
                        </button>
                    </Link>
                    <Link href="/#services" scroll={true}>
                        <button onClick={() => scrollTo('services')} className='px-6 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                            Usluge
                        </button>
                    </Link>
                </div>
            </div>
            
            <div className='flex items-center gap-4'>
                <Link href="/#contact" scroll={true}>
                    <button 
                        onClick={() => scrollTo('contact')} 
                        className='hidden lg:block px-6 py-2 bg-[#353C40] text-white hover:bg-black transition-colors duration-200 rounded-lg'
                    >
                        Kontakt
                    </button>
                </Link>
                
                <button 
                    onClick={openSidebar}
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-label="Toggle menu"
                >
                    <HiOutlineMenuAlt3 className="w-6 h-6 text-gray-800" />
                </button>
            </div>
        </nav>
    )
}
