'use client'
import { db } from '@/app/firebaseConfig';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Project from './project';
import { useSearchParams, useRouter } from 'next/navigation';
import AnimatedSection from '../../components/AnimatedSection';
import { motion } from 'framer-motion';

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
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get('page') || '1');
    setCurrentPage(page);
  }, [searchParams]);

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
            projectUploadDate: data.projectUploadDate.toDate(),
          } as Project;
        });

        setProjects(projectsList);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    }

    getAllDocuments();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push(`/projects?page=${pageNumber}`);
  };

  return (
    <div className='mx-4 xsm:mx-14 sm:mx-20 2xl:mx-72 mt-8 md:mt-16 text-center'>
      <AnimatedSection>
        <h2 className='text-4xl font-bold text-[#677582] mb-20'>SVI PROJEKTI</h2>
      </AnimatedSection>
      
      <motion.div 
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {currentProjects.length > 0 ? currentProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Project 
              id={project.id}
              projectImages={project.projectImages} 
              projectName={project.projectName} 
              projectDate={project.projectDate}
              projectLocation={project.projectLocation}
            />
          </motion.div>
        )) : null}
      </motion.div>

      {/* Pagination */}
      {totalPages > 1 && (
        <AnimatedSection>
          <div className='flex justify-center items-center gap-4 mb-20'>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#6D89C7] hover:bg-[#5C74AA]'
              } text-white transition-colors duration-300`}
            >
              Posljednji
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page ? 'bg-[#6D89C7]' : 'bg-gray-300 hover:bg-gray-400'
                } text-white transition-colors duration-300`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#6D89C7] hover:bg-[#5C74AA]'
              } text-white transition-colors duration-300`}
            >
              Sljedeći
            </button>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
