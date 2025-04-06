import React from 'react'
import { MdEmail } from "react-icons/md";
export default function Header() {
  return (
    <header className='px-4 xl:px-14 2xl:px-32 mt-4 md:mt-10'>
        <div className='relative bg-header-bg bg-cover bg-top px-4 md:px-10 pt-32 pb-52 text-[#FAFAFA]'>
            <div className='text-center'>
                <h1 className='text-3xl sm:text-4xl md:text-8xl font-bold mb-10'>Istražite kako arhitektura može <br></br>transformirati prostor</h1>
                <p className='md:text-4xl'>Kroz našu stranicu, zavirite u inovativne koncepte i inspirativne realizacije koje <br></br> definiraju našu viziju za bolje sutra. 
                Imamo više od 10 godina iskustva u različitim arhitektonskim oblastima.
                </p>
            </div>
        </div>
    </header>
  )
}
