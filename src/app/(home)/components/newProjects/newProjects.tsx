'use client'
import { db } from '@/app/firebaseConfig';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Project from './project';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';


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
export default function NewProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
 

  useEffect(() => {
    const getAllDocuments = async () => {
      try {
        const listCollection = collection(db, "projects");
        const querySnapshot = await getDocs(query(listCollection, orderBy("projectUploadDate", "desc"), limit(3)));
        
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

  return (
    <div className='mx-8 sm:mx-20 2xl:mx-32 mt-20 text-center'>
      {
        projects.length > 0 ? 
        <h2 className='text-4xl font-bold text-[#677582] mb-20'>NOVI PROJEKTI</h2> :
        null
      }
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

      {
        projects.length > 0 ? 
      
        <Link href='/projects'>
          <button className='w-full w-1/2 md:w-1/3 lg:w-1/4 xl:w-[15%] mx-auto flex justify-center items-center drop-shadow-xl flex w-full h-[50px] bg-[#6D89C7] hover:bg-[#5C74AA] text-[#FAFAFA]'>
            Ostali projekti
            <GoArrowUpRight size={22} color='#FAFAFA' className='ml-[4px] mt-[4px]'/>
          </button>
        </Link>
        
       : null
      }
    </div>
  )
}
