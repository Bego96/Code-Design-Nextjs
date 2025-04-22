'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import useHomeStore from '../../homeStore/homeStore'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function HomeNavMain({user}:any) {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isSolid = scrolled || pathname !== "/";
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const { sidebarVisibility } = useHomeStore();
    const openSidebar = useHomeStore((state) => state.toggleSidebar)
    
    const scrollTo = (route: any) => {
        const element = document.getElementById(`${route}`);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <nav className={`fixed top-0 inset-x-0 px-4 md:px-8 lg:px-14 py-4 flex justify-between items-center z-[1000] transition-colors duration-300 ${isSolid ? 'bg-[#FAFAFA] shadow-sm' : 'bg-transparent'}`}>
            <div className='flex items-center gap-8'>
                <Link href="/">
                    <div className='flex justify-center items-center lg:mr-8 xl:border-r-[1px] border-slate-400'>
                        <div className='w-14 mr-4'>
                            <Image className='w-full' alt="logo" src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd" height={500} width={500}/>
                        </div>
                        <h2 className={`hidden xl:block text-2xl lg:pr-14 font-bankgothic transition-colors duration-200 ${isSolid ? 'text-[#495057]' : 'text-white'}`}>CODE Design</h2>
                    </div>
                </Link>
                <div className='hidden lg:flex items-center gap-2'>
                    <Link href="/" scroll={false}>
                        <button className={`px-6 py-2 rounded-lg transition-all duration-200 ${isSolid ? 'text-[#495057] hover:bg-gray-300 hover:text-[#516795]' : 'text-white hover:bg-white/30 hover:text-gray-200'}`}>
                            Početna
                        </button>
                    </Link>
                    <Link href="/about-us">
                        <button className={`px-6 py-2 rounded-lg transition-all duration-200 ${isSolid ? 'text-[#495057] hover:bg-gray-300 hover:text-[#516795]' : 'text-white hover:bg-white/30 hover:text-gray-200'}`}>
                            O nama
                        </button>
                    </Link>
                    <Link href="/projects">
                        <button className={`px-6 py-2 rounded-lg transition-all duration-200 ${isSolid ? 'text-[#495057] hover:bg-gray-300 hover:text-[#516795]' : 'text-white hover:bg-white/30 hover:text-gray-200'}`}>
                            Projekti
                        </button>
                    </Link>
                    <Link href="/#services" scroll={false}>
                        <button onClick={() => scrollTo('services')} className={`px-6 py-2 rounded-lg transition-all duration-200 ${isSolid ? 'text-[#495057] hover:bg-gray-300 hover:text-[#516795]' : 'text-white hover:bg-white/30 hover:text-gray-200'}`}>
                            Usluge
                        </button>
                    </Link>
                </div>
            </div>
            
            <div className='flex items-center gap-4'>
                <Link href="/#contact" scroll={false}>
                    <button
                        onClick={() => scrollTo('contact')}
                        className={`hidden lg:block px-6 py-2 rounded-lg transition-colors duration-200 ${
                            isSolid
                                ? 'bg-[#FAFAFA] text-[#495057] hover:bg-gray-300 hover:text-[#516795]'
                                : 'bg-white text-gray-900 hover:bg-gray-100'
                        }`}>
                        Kontakt
                    </button>
                </Link>
                
                <button
                    onClick={openSidebar}
                    aria-label="Toggle menu"
                    className="lg:hidden p-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
                    <HiOutlineMenuAlt3 className="w-6 h-6" />
                </button>
            </div>
        </nav>
    )
}
