import React from 'react'
import Image from 'next/image'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from 'next/link';
import { IoIosSettings } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
export default function Footer() {

    const scrollTo = (route: any) => {
        const element = document.getElementById(`${route}`);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }

  return (
    <footer className='bg-[#353C40] text-[#FAFAFA]'>
      <div className=' gap-10 py-20 grid grid-cols-1 lg:grid-cols-5 content-center px-8 sm:px-20 2xl:px-32 mt-20'>
        <div className='flex flex-col justify-center'>
            <div className='flex flex-col justify-center items-center text-center'>
                    <div className='w-14 mb-4'>
                        <Image className='w-full' alt="logo" src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd" height={500} width={500}/>
                    </div>
                    <h2 className='text-4xl'>CODE Design</h2>
                    <p className='text-xl'>Arhitektonski biro</p>
            </div>
        </div>
        <div className='mx-auto hidden lg:block h-26 block w-[1px] bg-[#FAFAFA]'></div>
        <div className='text-center lg:text-left'>
            <ul>
                <Link href="/"><li className='mb-6'>Početna</li></Link>
                <Link href="/about-us"><li className='mb-6'>O nama</li></Link>
                <Link href="/#services" scroll={true}><li className='mb-6'>Usluge</li></Link>
                <Link href="/projects"><li className='mb-6'>Projekti</li></Link>
            </ul>
        </div>
        <div>
        <ul className='flex flex-col items-center lg:items-start'>
          <li className='flex mb-6 gap-4'>
            <IoLocationSharp size={24} />
            <span>75000, Stupine B-8, Tuzla, BiH</span>
          </li>
          <li className='flex mb-6 gap-4'>
            <FaPhone size={24} />
            <span>+387 35 248 440, + 387 61 078 792</span>
          </li>
          <li className='flex mb-6 gap-4'>
            <MdEmail size={24} />
            <span>info@code-design.ba</span>
          </li>
          <li className='flex mb-6 gap-4'>
            <a href='https://linkedin.com/company/codedesigndoo/?originalSubdomain=ba' target='_blank'>
              <FaLinkedin size={24} />
            </a>
            <a href='https://www.facebook.com/code.design.tuzla' target='_blank'>
              <FaFacebookSquare size={24} />
            </a>
          </li>
        </ul>
      </div>
        <div>
            <ul className='text-center lg:text-left'>
                <li className='mb-6'><span className='font-semibold'>Registarski br: </span> 032-0-Reg-18-000718</li>
                <li className='mb-6'><span className='font-semibold'>ID/PDV br: </span>4210329050008/210329050008</li>
                <li className='mb-6'><span className='font-semibold'>Račun br: </span>1610000199740083 Raiffeisen Banka DD</li>
                <li className='mb-6'><span className='font-semibold'>Devizni račun: </span>06000047152 Raiffeisen Banka  DD</li>
            </ul>
        </div>
      </div>
      <div className='flex items-center justify-center pb-10'>
        <FaRegCopyright size={16}/>
        <p className='ml-2'>2024 All rights reserved</p>
        <a className='ml-20' href='https://www.code-design.ba/dashboard' target='_blank'>
          <IoIosSettings size={24}/>
        </a>
      </div>
    </footer>
  )
}
