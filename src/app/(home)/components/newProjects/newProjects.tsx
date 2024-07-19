import Image from 'next/image'
import React from 'react'

export default function NewProjects() {
  return (
    <div className='mx-14 sm:mx-20 2xl:mx-32 mt-20 text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
      <div className='w-full relative'>
        <div className='h-[400px] lg:h-[500px] xl:h-[600px]'>
            <Image className='h-full w-full object-cover' src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder-new-project-1.jpg?alt=media&token=f5207be8-3733-4d73-a117-890fab0f22ee' width={500} height={500} alt="New project"/>
        </div>
        <div className='p-4 absolute bottom-0 text-[#FAFAFA]'>
          <h3 className='font-semibold text-lg'>Projekat vjerskog objekta</h3>
          <div className='flex'>
            <p>Tuzla,</p>
            <p>2021</p>
          </div>
        </div>
      </div>
      <div className='w-full relative'>
        <div className='h-[400px] lg:h-[500px] xl:h-[600px]'>
            <Image className='h-full w-full object-cover' src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder-new-project-2.jpg?alt=media&token=a7c18a41-a1a2-4c7f-932d-55a7dd34fc14' width={500} height={500} alt="New project"/>
        </div>
        <div className='p-4 absolute bottom-0 text-[#FAFAFA]'>
          <h3 className='font-semibold text-lg'>Projekat stambeno poslovnog objekta</h3>
          <div className='flex'>
            <p>Tuzla,</p>
            <p>2021</p>
          </div>
        </div>
      </div>
      <div className='w-full relative'>
        <div className='h-[400px] lg:h-[500px] xl:h-[600px]'>
            <Image className='h-full w-full object-cover' src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder-new-project-3.jpg?alt=media&token=48342f54-f407-4ecc-8a77-c782f4feb41c' width={500} height={500} alt="New project"/>
        </div>
        <div className='p-4 absolute bottom-0 text-[#FAFAFA]'>
          <h3 className='font-semibold text-lg'>Projekat individualnog stambenog objekta</h3>
          <div className='flex'>
            <p>Tuzla,</p>
            <p>2021</p>
          </div>
        </div>
      </div>

    </div>
  )
}
