'use client'
import Image from 'next/image'
import React from 'react'
import { PiArrowSquareInFill } from "react-icons/pi";
import { useRouter } from 'next/navigation';
export default function AboutUs() {
    const router = useRouter();
  return (
    <div className='bg-[#516795] mx-4 xl:mx-14 2xl:mx-32 mt-20'>
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
                <div className='flex justify-end'>
                    <div className='text-[#FAFAFA] justify-center gap-4 flex items-center bg-[#6D89C7] hover:bg-[#5C74AA] w-[250px] h-[50px] cursor-pointer'>
                        <button className='ml-4 text-lg' onClick={() => router.push('/about-us')}>Pročitaj više</button>
                        <PiArrowSquareInFill size={24} className='mr-4'/>
                    </div>
                </div>
            </div>
    </div>
    <div className='flex flex-col justify-center items-center md:gap-10 lg:gap-0 md:flex-row md:justify-around px-8 py-12 text-[#FAFAFA]'>
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
    </div>
  )
}
