'use client'
import { db } from '@/app/firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import { GoArrowUpRight } from "react-icons/go";
import Project from './project';


interface ImageRef {
  id: number;
  imageSource: string;
  imageFileRef: File;
  imageName: string;
}

interface Project {
  id: string;
  projectName: string;
  projectLocation: string;
  projectDate: string;
  projectImages: ImageRef[];
  projectUploadDate: Date;
}
export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
 

  useEffect(() => {
    const getAllDocuments = async () => {
      try {
        const listCollection = collection(db, "projects");
        const querySnapshot = await getDocs(query(listCollection, orderBy("projectUploadDate", "desc")));
        
        const projectsList = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            projectName: data.projectName,
            projectLocation: data.projectLocation,
            projectDate: data.projectDate,
            projectImages: data.projectImages,
            projectUploadDate: data.projectUploadDate.toDate(), // Convert Firestore Timestamp to Date
          } as Project;
        });

        setProjects(projectsList); 
       
      } catch (error) {
        console.error("Error fetching documents: ", error); 
      }
      
    }

    getAllDocuments();
    },[]);

    console.log(projects)
  return (
    
    <div className='mx-4 xsm:mx-14 sm:mx-20 2xl:mx-32 mt-8 md:mt-16 text-center'>
      
      <h2 className='text-4xl font-bold text-[#677582] mb-20'>SVI PROJEKTI</h2> 
       
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20'>
        
        {
          projects.length > 0 ? projects.map(project => (
            <Project 
            key={project.id} 
            id={project.id}
            projectImages={project.projectImages} 
            projectName={project.projectName} 
            projectDate={project.projectDate}
            projectLocation={project.projectLocation}
            />
          )) : null
        }
      </div>

    </div>
  )
}
