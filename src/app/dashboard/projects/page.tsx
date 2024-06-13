import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import ProjectList from './projects-components/projectList';
export default function Projects() {
  return (
    <div className='mt-20'>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
            <h2 className='text-3xl text-[#495057] mb-4'>OBJAVLJENI PROJEKTI</h2>
            <div className='flex flex-col xsm:flex-row'>
                <button className='flex items-center bg-[#6D89C7] px-6 py-2 mb-4 xsm:mb-0 xsm:mr-4 text-white'><FaRegTrashAlt className='mr-2'/>Obriši projekat</button>
                <button className='flex items-center bg-[#222222] px-6 py-2 text-white'><VscAdd className='mr-2'/>Dodaj projekat</button>
            </div>
        </div>
        <ProjectList />
    </div>
  )
}
