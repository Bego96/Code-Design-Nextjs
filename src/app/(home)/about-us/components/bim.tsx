'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Bim() {
  return (
    <div className='bg-[#516795] p-4 md:p-8 gap-8 flex flex-col lg:flex-row mx-4 xl:mx-14 2xl:mx-32 mt-20'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='w-full lg:w-1/2'
      >
        <h3 className='text-[#FAFAFA] text-4xl font-bold mb-16'>BIM IZGRADNJA</h3>
        <div className='w-full mb-8'>
          <Image
            className='w-full'
            height={800}
            width={800}
            alt='Bim'
            src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2F587dbe06c18483e337cfd3b5a44c1796.png?alt=media&token=8061349d-6f53-472c-bc8a-be00fe845b02'
          />
        </div>
        <div className='w-full'>
          <Image
            className='w-full'
            height={800}
            width={800}
            alt='Bim'
            src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2F8a6cd76bd23214cdc6077a98084e6424.png?alt=media&token=79f5f872-db00-4622-b135-82e3dfef7802'
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='w-full lg:w-1/2'
      >
        <div className='bg-[#FAFAFA] text-[#495057] p-4 md:p-8'>
          <p className='text-xl'>
            <span className='font-semibold'>BIM</span> je napredni sistem koji koristi <span className='font-semibold'>3D model</span> objekta kao osnovu, ali također uključuje širok spektar informacija kao što su:
          </p>
          <ul className='ml-6 list-disc'>
            <li className='text-xl'><span className='font-semibold'>Geodetske koordinate:</span> Precizni podaci o lokaciji i orijentaciji objekta u fizičkom prostoru.</li>
            <li className='text-xl'><span className='font-semibold'>Materijali:</span> Podaci o materijalima korištenim u gradnji, uključujući količine, svojstva poput toplinske provodljivosti, mase, čvrstoće, te informacije o proizvođačima i cjenama.</li>
            <li className='text-xl'><span className='font-semibold'>Elementi dizajna:</span> Podaci o pojedinim arhitektonskim i konstrukcijskim elementima, kao što su vrata, prozori, zidovi, stubovi i krovovi.</li>
            <li className='text-xl'><span className='font-semibold'>Struktura troškova:</span> Cijene i troškovi materijala, radne snage, opreme i drugih resursa potrebnih za izgradnju.</li>
          </ul>
          <p className='text-xl mt-8'>
            <span className='font-semibold'>BIM</span> se naziva i <span className='font-semibold'>5D modeliranjem</span> jer omogućava praćenje faza izgradnje, a kasnije i održavanje objekta, s dodatnim informacijama koje prelaze okvir 3D modela, a te dodatne dimenzije su:
          </p>
          <ul className='ml-6 list-disc'>
            <li className='text-xl'><span className='font-semibold'>Vremenski raspored (4D):</span> Praćenje izgradnje kroz vrijeme, s rasporedom radova, vezama između aktivnosti i vremenskom linijom.</li>
            <li className='text-xl'><span className='font-semibold'>Troškovi i budžeti (5D):</span> Praćenje i upravljanje troškovima tokom izgradnje i održavanja, s mogućnošću praćenja promjena u budžetu i procjene troškova kroz vrijeme.</li>
          </ul>
        </div>

        <div className='w-full mt-8'>
          <Image
            className='w-full'
            height={800}
            width={800}
            alt='Bim'
            src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2F6824b57d0411573670156e181bc0a85b.png?alt=media&token=13808b41-75b5-4bdc-aba6-edb6f0ff008c'
          />
        </div>
      </motion.div>
    </div>
  )
}
