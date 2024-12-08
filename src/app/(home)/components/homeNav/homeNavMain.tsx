'use client'
import Link from 'next/link'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import Image from 'next/image'
import useHomeStore from '../../homeStore/homeStore'

export default function HomeNavMain({user}:any) {
    
    
    const scrollTo = (route: any) => {
        const element = document.getElementById(`${route}`);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }
    
      const openSidebar = useHomeStore((state) => state.toggleSidebar)


  return (
    <nav className='sticky top-0 px-4 xl:px-14 2xl:px-32 py-6 flex 2xl:flex-row justify-between items-center xl:mt-4 z-40 bg-[#FAFAFA]'>
        <div className='flex items-center'>
            <Link href="/">
                <div className='flex justify-center items-center lg:mr-8 xl:border-r-[1px] border-slate-400'>
                    <div className='w-14 mr-4'>
                        <Image className='w-full' alt="logo" src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd" height={500} width={500}/>
                    </div>
                    <h2 className='hidden xl:block text-2xl lg:pr-14 font-bankgothic'>CODE Design</h2>
                </div>
            </Link>
            <Link href="/">
            
                <button className='cursor-point hidden lg:flex   px-12 py-4 bg-[#FAFAFA] hover:drop-shadow-md'>
                    Početna
                </button>
            </Link>
            <Link href="/about-us">
            
                <button className='cursor-pointer hidden lg:flex   px-12 py-4 bg-[#FAFAFA] hover:drop-shadow-md'>
                    O nama
                </button>
                
            
            </Link>
            <Link href="/projects">
                <button className='cursor-pointer hidden lg:flex   px-12 py-4 bg-[#FAFAFA] hover:drop-shadow-md'>
                    Projekti
                </button></Link>
            <Link href="/#services" scroll={true}>
                <button onClick={() => scrollTo('services')} className='cursor-pointer hidden lg:flex  px-12 py-4 bg-[#FAFAFA] hover:drop-shadow-md'>
                    Usluge
                </button>
            </Link>
            <Link href={`${user && user.admin === true ? '/dashboard' : '/sign-in'}`}>
                <button className='cursor-point hidden lg:flex   px-12 py-4 bg-[#FAFAFA] hover:drop-shadow-md'>
                    Dashboard
                </button>
            </Link>
        </div>
        <Link href="/#contact" scroll={true}>
            <button onClick={() => scrollTo('contact')} className='bg-[#222222] hidden lg:flex hover:bg-slate-600 text-[#FAFAFA] px-16 py-4'>
                Kontakt
            </button>
        </Link>
        
        <RxHamburgerMenu className='lg:hidden cursor-pointer' size={20} onClick={()=> openSidebar()}/>

    </nav>
  )
}
