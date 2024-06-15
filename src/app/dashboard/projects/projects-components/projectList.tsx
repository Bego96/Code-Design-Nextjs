import React from 'react'
import ProjectArticle from './projectArticle'

export default function ProjectList({pushSelectedProjects}: any) {


  return (
    <div className='mt-14 flex flex-col md:flex-row flex-wrap justify-center items-center md:justify-between'>
        <ProjectArticle id={1} pushSelectedProjects={pushSelectedProjects}/>
        <ProjectArticle id={2} pushSelectedProjects={pushSelectedProjects}/>
        <ProjectArticle id={3} pushSelectedProjects={pushSelectedProjects}/>
        <ProjectArticle id={4} pushSelectedProjects={pushSelectedProjects}/>
        <ProjectArticle id={5} pushSelectedProjects={pushSelectedProjects}/>
        <ProjectArticle id={6} pushSelectedProjects={pushSelectedProjects}/>
    </div>
  )
}
