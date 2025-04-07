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
import { auth } from '@/auth';
export async function FooterBottom() {

    

      const session = await auth();
          const user = session?.user;
          
          console.log("IM SESSIOn " + session)

  return (
    
      <div className='flex items-center justify-center pb-10'>
        <FaRegCopyright size={16}/>
        <p className='ml-2'>2024 All rights reserved</p>
          <div className='ml-20'>
            <Link href={`${user && user.admin === true ? '/dashboard' : '/sign-in'}`}>
              <IoIosSettings size={24}/>
            </Link>
          </div>
      </div>
    
  )
}
