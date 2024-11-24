"use client"
import Image from 'next/image'
import React from 'react'
import { RiContactsFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineTitle } from "react-icons/md";
export default function ContactUs() {

    async function handleSubmit(event: any) {
        event.preventDefault();
   
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
          .catch(error => console.log(error));
    }
   

  return (
    <div id="contact" className='p-8 bg-[#516795]  gap-8 flex flex-col md:justify-between lg:flex-row mx-0 xsm:mx-4 sm:mx-20 2xl:mx-32 mt-20'>
        <div className='w-full lg:w-1/2'>
            <h3 className='text-3xl text-[#FAFAFA] font-semibold mb-8'>KONTAKRIJATE NAS</h3>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='h-[48px] w-full my-4 relative'>
                    
                    <input type='text' name='firstName' placeholder='Ime i prezime' className='h-full w-full p-2 rounded'/>
                </div >
                <div className='h-[48px] w-full my-4 relative'>
                    
                    <input type='text' name='phone' placeholder='Telefon' className='w-full h-full p-2  rounded'/>
                </div>
                <div className='h-[48px] w-full my-4 relative'>
                   
                    <input type='text' name='email' placeholder='Email adresa' className='w-full h-full p-2  rounded'/>
                </div>
                <div className='h-[48px] w-full my-4 relative'>
                   
                    <input type='text' name='subject' placeholder='Naslov' className='w-full h-full p-2  rounded'/>
                </div>
                <div className='w-full my-4'>
                    <textarea name='message' rows={10} cols={20} className='w-full p-2 resize-none rounded' placeholder='Tekst poruke'>
                    </textarea>
                </div>
                <div className=' bg-[#222222] hover:bg-slate-100 hover:text-slate-900 text-[#FAFAFA] py-4 px-12 h-[50px] flex items-center inline-flex'>
                    <button type='submit' className='text-[#FAFAFA]'>
                        Pošalji poruku
                    </button>
                </div>
            </form>
        </div>
        <div className=' w-full lg:w-1/2'>
            <Image alt="location" height={800} width={800} src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2F0521cdeec26f919b797d84b5477f9f17.png?alt=media&token=c98face3-37ae-4b86-a458-c9756175dc99'/>
        </div>
    </div>
  )
}
