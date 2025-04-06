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
                    src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fjasmin_huremovic.jpg?alt=media&token=5cb4e072-6053-44bf-b402-34a07934340a' 
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
                    <span className='mr-4 inline-block w-6 h-[3px] bg-[rgb(250,185,0)] mb-[5px]'></span>Arhitektonski biro “CODE design d.o.o.” bavi se prije svega uslugama arhitektonskog projektovanja, dizajnom enterijera, project managementom, nadzorom nad izvodjenjem gradjevinskih radova, tehnickim savjetovanjem i konsaltingom.
                    Nas mladi tim nudi drugaciji i efikacniji pristup arhitekruri koji u skladu s savremenim trendovima vodi klijenta od ideje do realizacije projekta.
                    Primjena savremenih metoda projektovanja, savremenih materijala, optimizacija projekata i usluge project managementa sastavni su dio arhitekture novog doba i u potpunosti su prilagodjeni najnovijim svjetskim trendovima.
                    </p>
                    <p className='text-xl mt-2'>
                    <span className='mr-4 inline-block w-6 h-[3px] bg-[rgb(250,185,0)] mb-[5px]'></span>
                    Kroz inovativna rjesenja, odrzivu i energetski efikasnu gradnju brinemo ne samo o dobrobiti nasih klijenata nego i o zastiti zivotne sredine.
                    Upotrebom BIM sistema podizemo kvalitet projetovanja i gradnje Vasih objekta. BIM (Building information modeling) je najnapredniji koncept u projektovanju koji objedinjuje sve struke u gradjevinarstvu i arhitekturi. 
                    </p>
                    <p className='text-xl mt-2'>
                    <span className='mr-4 inline-block w-6 h-[3px] bg-[rgb(250,185,0)] mb-[5px]'></span>
                    Osnova BIM sistema je trodimenzionalni model objekta koji osim vizualne reprezentacije u sebi sadrzi i druge informacije kao sto su geodetske koordinate, kolicine materijala i elemenata, svojstva elementa (toplinska provodljivost, masa, čvrstoca…), detalji elemenata, cijene i druge informacije potrebne za izradu projektne dokumentacije i izgradnju samog objekta.
                    Danas se BIM sistem naziva i 5D modeliranje jer osim 3D modela BIM model u sebi sadrzi dodatne informacije te prilikom izgradnje objekta uz pomoc BIM sistema se prate faze izgradnje, a kasnije i odrzavanje objekta.
                    </p>
                </div>
                <div className='flex justify-center md:justify-end mt-8'>
                    <div onClick={() => router.push('/about-us')} className='text-[#FAFAFA] justify-center gap-4 flex items-center bg-[#6D89C7] hover:bg-[#5C74AA] w-[250px] h-[50px] cursor-pointer'>
                        <button className='ml-4 text-lg'>Pročitaj više</button>
                        <PiArrowSquareInFill size={24} className='mr-4'/>
                    </div>
                </div>
            </div>
    </div>
    <div className='flex flex-col justify-center items-center md:gap-10 lg:gap-0 md:flex-row md:justify-around px-8 py-12 text-[#FAFAFA]'>
        <div className='text-center mt-6'>
            <h3 className='text-slate-200 text-4xl'>GODINE ISKUSTVA</h3>
            <p className='text-6xl font-semibold mt-6'>15+</p>
        </div>
        <div className='text-center mt-6'>
            <h3 className='text-slate-200 text-4xl'>PROJEKTI</h3>
            <p className='text-6xl font-semibold mt-6'>500+</p>
        </div>
        <div className='text-center mt-6'>
            <h3 className='text-slate-200 text-4xl'>ZADOVOLJNI KLIJENTI</h3>
            <p className='text-6xl font-semibold mt-6'>100%</p>
        </div>
        </div>
    </div>
  )
}
