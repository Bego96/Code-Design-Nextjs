import React from 'react'
import { MdEmail } from "react-icons/md";
export default function Header() {
  return (
    <header className='px-4 xl:px-14 2xl:px-32 mt-10'>
        <div className='relative bg-header-bg bg-cover bg-top px-4 md:px-10 pt-32 pb-52 text-[#FAFAFA]'>
            <div className='text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-10'>Istražite kako arhitektura može <br></br>transformirati prostor</h1>
                <p className='md:text-2xl'>Kroz našu stranicu, zavirite u inovativne koncepte i inspirativne realizacije koje <br></br> definiraju našu viziju za bolje sutra. 
                Imamo više od 10 godina iskustva u različitim arhitektonskim oblastima.
                </p>
            </div>
            <div className='drop-shadow-2xl absolute mt-10  md:-bottom-24 bg-[#FAFAFA] text-[#495057] px-4 sm:px-10 py-6 md:w-[70%] left-0 right-0 ml-auto mr-auto'>
                <h2 className='text-2xl'>PRIDRUŽITE SE NAŠOJ MAIL LISTI</h2>
                <span className='bg-[#495057] h-px block my-4'></span>
                <p className='text-xl mb-6'>Ne propustite najnovije vijesti iz arhitekture i naših budućih projekata</p>
                <form className='md:flex'>
                    <div className='w-full relative'>
                    <MdEmail size={24} className='absolute left-3 top-3'/>
                        <input type="email" className='w-full border border-[#22222] h-[48px] pl-10' placeholder='Email adresa'/>
                    </div>
                    <button type="submit" className='bg-[#222222] px-12 text-[#FAFAFA] h-[48px] w-full md:w-1/3'>Pošalji</button>
                </form>
            </div>
        </div>
    </header>
  )
}
