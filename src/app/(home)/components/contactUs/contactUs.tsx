import Image from 'next/image'
import React from 'react'
import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineTitle } from "react-icons/md";
export default function ContactUs() {
  return (
    <div className='p-8 bg-[#516795]  gap-8 flex flex-col md:justify-between lg:flex-row mx-14 sm:mx-20 2xl:mx-32 mt-20'>
        <div className='w-full lg:w-1/2'>
            <h3 className='text-3xl text-[#FAFAFA] font-semibold'>KONTAKRIJATE NAS</h3>
            <form className='w-full'>
                <div className='w-full my-8 relative'>
                    <RiContactsFill size={18} className='absolute left-2 top-3' color='#495057'/>
                    <input type='text' placeholder='Ime i prezime' className='w-full py-2 pl-10 outline-none'/>
                </div >
                <div className='w-full my-8 relative'>
                    <FaPhone size={18} className='absolute left-2 top-3' color='#495057'/>
                    <input type='text' placeholder='Telefon' className='w-full py-2 pl-10 outline-none'/>
                </div>
                <div className='w-full my-8 relative'>
                    <MdEmail size={18} className='absolute left-2 top-3' color='#495057'/>
                    <input type='text' placeholder='Email adresa' className='w-full py-2 pl-10 outline-none'/>
                </div>
                <div className='w-full my-8 relative'>
                    <MdOutlineTitle size={18} className='absolute left-2 top-3' color='#495057'/>
                    <input type='text' placeholder='Naslov' className='w-full py-2 pl-10 outline-none'/>
                </div>
                <div className='w-full my-8'>
                    <textarea rows={10} cols={20} className='w-full p-2 outline-none' placeholder='Tekst poruke'>
                    </textarea>
                </div>
                <div>
                    <button type='submit' className='bg-[#222222] hover:bg-black text-[#FAFAFA] w-full h-[50px]'>Pošalji poruku</button>
                </div>
            </form>
        </div>
        <div className='w-full lg:w-1/2'>
            <Image alt="location" height={800} width={800} src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2F0521cdeec26f919b797d84b5477f9f17.png?alt=media&token=c98face3-37ae-4b86-a458-c9756175dc99'/>
        </div>
    </div>
  )
}
