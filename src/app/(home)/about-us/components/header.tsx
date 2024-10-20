'use client'
import Image from 'next/image'
import React from 'react'
import { PiArrowSquareInFill } from "react-icons/pi";
import { useRouter } from 'next/navigation';
export default function Header() {
    const router = useRouter();
  return (
    <div className='bg-[#516795] mx-4 xl:mx-14 2xl:mx-32 mt-4 md:mt-16'>
            <div className='flex flex-col lg:flex-row p-4 md:p-8 pb-0 gap-10'>
                <div className='w-full lg:w-1/2'>
                    <div className='w-full'>
                        <Image 
                        className='w-full'
                        src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder-profile.png?alt=media&token=6e38ba49-8a50-4eab-bd27-9418aa694c3b' 
                        alt="owner" 
                        width={500} 
                        height={500}
                        />
                    </div>
                    <div className='text-[#FAFAFA] mt-10'>
                        <h2 className='text-2xl font-bold'>CODE Design</h2>
                        <p className='text-xl'>Architecture & Project Management</p>
                    </div>
                    <div className='text-[#FAFAFA] mt-4'>
                        <h2 className='text-2xl font-bold'>Osnivač:</h2>
                        <p className='text-xl'>Jasmin Huremović dipl.ing.arh.</p>
                    </div>
                </div>
                <div className='bg-[#FAFAFA] flex flex-col justify-between w-full lg:w-1/2 p-4 md:p-8 text-[#495057]'>
                    <div className='mb-14 xl:mb-0'>
                        <h2 className='text-4xl font-bold'>O NAMA</h2>
                        <p className='text-xl mt-6'>
                        Arhitektonski biro CODE design d.o.o. počeo je sa radom početkom 2018. godine. Naša firma bavi se arhitektonskim projektovanjem, dizajnom enterijera, 
                        project managementom, nadzorom nad izvođenjem građevinskih radova, tehničkim savjetovanjem i konsaltingom.
                        </p>
                    </div>
                </div>
        </div>
        <div className='flex flex-col justify-center items-center md:items-start md:gap-10 lg:gap-0 md:flex-row md:justify-around px-8 py-12 text-[#FAFAFA]'>
            <div className='text-center mt-6'>
                <h3 className='text-slate-200 text-4xl'>GODINE ISKUSTVA</h3>
                <p className='text-6xl font-semibold mt-6'>10</p>
            </div>
            <div className='text-center mt-6'>
                <h3 className='text-slate-200 text-4xl'>PROJEKTI</h3>
                <p className='text-6xl font-semibold mt-6'>50+</p>
            </div>
            <div className='text-center mt-6'>
                <h3 className='text-slate-200 text-4xl'>ZADOVOLJNI KLIJENTI</h3>
                <p className='text-6xl font-semibold mt-6'>100%</p>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between gap-10 p-4 md:p-8'>
            <div className='w-full lg:w-1/3 xl:w-1/3 bg-[#FAFAFA] lg:h-[30%] p-4 md:p-8'>
                <p className='text-xl text-[#495057]'>Naš mladi tim nudi efikasniji pristup arhitekturi. Vodimo klijente od ideje do realizacije koristeći savremene metode, materijale i usluge project managementa, u skladu s najnovijim trendovima.</p>
            </div>
            <div className='w-full lg:w-2/3 xl:w-2/3'>
                <Image height={800} width={800} className='w-full' alt='Team image' src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Ff9fb9be25270d42e243ed06fde5c64f5.png?alt=media&token=a838ba44-e517-4ecc-9f14-7a6d163b179e'/>
            </div>
        </div>
    </div>
  )
}
