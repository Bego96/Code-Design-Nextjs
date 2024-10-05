'use client'
import React, { useEffect, useState } from 'react';
import ProjectArticle from './projectArticle';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';

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

export default function ProjectList({ pushSelectedProjects, removeSelectedProjects }: any) {
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
    };

    getAllDocuments();
  }, []);

  return (
    <div className='mt-20 flex flex-col md:flex-row flex-wrap gap-10 items-center'>
      {projects.length > 0 ? projects.map((project) => (
        <ProjectArticle
          key={project.id}
          id={project.id}
          projectName={project.projectName}
          projectLocation={project.projectLocation}
          projectDate={project.projectDate}
          projectImages={project.projectImages}
          projectUploadDate={project.projectUploadDate}
          pushSelectedProjects={pushSelectedProjects}
          removeSelectedProjects={removeSelectedProjects}
        />
      )) : <div className='w-full'><hr className='mb-4'></hr><p className='font-semibold text-xl'>Nema projekata</p></div>}
    </div>
  );
}
