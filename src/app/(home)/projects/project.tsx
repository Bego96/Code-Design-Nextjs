'use client'
import React, { useState } from 'react'
import Image from 'next/image'
export default function Project({id, projectImages, projectDate, projectLocation, projectName}:any) {

const [openProject, setOpenProject] = useState(false);


  return (
    <>
    <div className='w-full relative text-left' onClick={() => setOpenProject(true)}>
        <div className='h-[400px] lg:h-[500px] xl:h-[600px]'>
            <Image className='h-full w-full object-cover' src={projectImages[0].imageSource} width={500} height={500} alt="New project"/>
        </div>
        <div className='p-4 absolute bottom-0 text-[#FAFAFA]'>
          <h3 className='font-semibold text-lg text-left mb-2'>{projectName}</h3>
          <div className=''>
            <p>{projectLocation + ' ' + projectDate}</p>
          </div>
        </div>
    </div>
    
    </>
  )
}
