'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function ProjectArticle({pushSelectedProjects, id}:any) {


  const [checkbox, setCheckbox] = useState(false);
  const [isCheckActive, setIsCheckActive] = useState(false);

  const setActiveChecks = (e: any) => {
    if (e.target.checked) {
      console.log("Checkbox is checked")
      setIsCheckActive(true)
      pushSelectedProjects(id)
    } else {
      console.log("Checkbox is unchecked")
      setIsCheckActive(false)
    }
  }

  // When ever user checks the project, project's ID will be pushed to array which will be used for deleting projects in database
  // In loop we will use database function to delete each project with corresponding ID

  console.log("Active hover" +checkbox)
  console.log("Active when checked" + isCheckActive)
  return (
    <div onMouseEnter={()=> setCheckbox(true)} onMouseLeave={()=> setCheckbox(false)} className='relative cursor-pointer overflow-hidden w-full md:w-[30%] h-[350px] lg:h-[450px] mb-12'>
      <input 
      id="checkProject"
        type="checkbox" 
        onChange={setActiveChecks}
        className={`${checkbox || isCheckActive ? 'block': 'hidden'} z-10 cursor-pointer absolute right-2 top-2 w-6 h-6 border border-gray-300 rounded`}
      />
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
