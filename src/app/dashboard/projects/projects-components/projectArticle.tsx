'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

export default function ProjectArticle({pushSelectedProjects, id, projectName, projectDate, projectImages, projectLocation, removeSelectedProjects}:any) {


  const [checkbox, setCheckbox] = useState(false);
  const [isCheckActive, setIsCheckActive] = useState(false);
  const [projectImg, setProjectImg] = useState(projectImages)

  console.log("PROJECT IMAGE" + projectImg)
  const setActiveChecks = (e: any) => {
    if (e.target.checked) {
      console.log("Checkbox is checked")
      setIsCheckActive(true)
      pushSelectedProjects(id)
    } else {
      console.log("Checkbox is unchecked")
      setIsCheckActive(false)
      removeSelectedProjects(id)
    }
  }

  // When ever user checks the project, project's ID will be pushed to array which will be used for deleting projects in database
  // In loop we will use database function to delete each project with corresponding ID
  return (
    
      <div onMouseEnter={()=> setCheckbox(true)} onMouseLeave={()=> setCheckbox(false)} className='relative cursor-pointer overflow-hidden w-full xsm:w-[65%] md:w-[30%] h-[350px] lg:h-[450px] mb-4 sm:mb-6'>
        <Link href={`/dashboard/${id}`}>
        <input 
        id="checkProject"
          type="checkbox" 
          onChange={setActiveChecks}
          className={`${checkbox || isCheckActive ? 'block': 'hidden'} z-10 cursor-pointer absolute right-2 top-2 w-6 h-6 border border-gray-300 rounded`}
        />
        <div className='relative w-full h-full'>
          <Image
            className="object-cover"
            src={projectImg[0]?.imageSource}
            alt="project"
            layout="fill"
          />
          <div className='absolute bottom-2 left-2 bg-white bg-opacity-75 p-2 md:p-4 rounded w-[95%] md:w-[90%]'>
            <h3 className='font-semibold'>{projectName}</h3>
            <p>{projectDate}</p>
          </div>
        </div>
        </Link>
      </div>
    

  )
}
