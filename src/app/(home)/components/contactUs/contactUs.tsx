"use client"
import Image from 'next/image'
import React from 'react'
import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineTitle } from "react-icons/md";
import { IoLocationSharp } from 'react-icons/io5';
export default function ContactUs() {

    
   

  return (
    <div id="contact" className='p-8 bg-[#516795]  gap-8 flex flex-col md:justify-between lg:flex-row mx-0 xsm:mx-4 sm:mx-20 2xl:mx-32 mt-20'>
        <div className='w-full lg:w-1/2'>
            <h3 className='text-3xl text-[#FAFAFA] font-semibold mb-20'>KONTAKRIJATE NAS</h3>
            <div>
                <ul className='text-2xl text-[#FAFAFA] font-semibold'>
                    <li className='flex mb-6 gap-4'>
                        <MdEmail size={34} />
                        <span>info@code-design.ba</span>
                    </li>
                    <li className='flex mb-6 gap-4'>
                        <IoLocationSharp size={34} />
                        <span>75000, Stupine B-8, Tuzla, BiH</span>
                    </li>
                    <li className='flex mb-6 gap-4'>
                        <FaPhone size={34} />
                        <span>+387 35 248 440, + 387 61 078 792</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className=' w-full lg:w-1/2'>
            <Image alt="location" height={800} width={800} src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2F0521cdeec26f919b797d84b5477f9f17.png?alt=media&token=c98face3-37ae-4b86-a458-c9756175dc99'/>
        </div>
    </div>
  )
}
