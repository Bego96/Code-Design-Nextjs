import React from 'react'
import ProjectArticle from './projectArticle'

export default function ProjectList() {


  return (
    <div className='mt-14 flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-between'>
        <ProjectArticle />
        <ProjectArticle />
        <ProjectArticle />
        <ProjectArticle />
        <ProjectArticle />
        <ProjectArticle />
    </div>
  )
}
