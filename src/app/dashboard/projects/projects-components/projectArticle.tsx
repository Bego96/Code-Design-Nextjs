import Image from 'next/image'
import React from 'react'

export default function ProjectArticle() {
  return (
    <div className='relative overflow-hidden w-full md:w-[30%] h-[350px] lg:h-[450px] mb-12'>
      <div className='relative w-full h-full'>
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="project"
          layout="fill"
        />
      </div>
      <div className='absolute bottom-2 left-2 bg-white bg-opacity-75 p-2 rounded'>
        <h3>Projekat naziv</h3>
        <p>Tuzla Datum</p>
      </div>
    </div>
  )
}
