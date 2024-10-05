'use client';

import { useEffect, useState } from 'react';
import { db } from '@/app/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import BarLoader from 'react-spinners/BarLoader'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

interface Project {
  id: string;
  projectName: string;
  projectLocation: string;
  projectDate: string;
  projectImages: ImageRef[];
  projectUploadDate: Date;
}

interface ImageRef {
  id: number;
  imageSource: string;
  imageFileRef: File; // Note: Handling files may require special considerations
  imageName: string;
}

async function fetchDataFirestore(projectId: string): Promise<Project | null> {
  const docRef = doc(db, "projects", projectId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    const data = docSnap.data();
    
    // Type assertion and data transformation
    const projectData: Project = {
      id: docSnap.id,
      projectName: data.projectName,
      projectLocation: data.projectLocation,
      projectDate: data.projectDate,
      projectImages: data.projectImages.map((img: any) => ({
        id: img.id,
        imageSource: img.imageSource,
        imageFileRef: img.imageFileRef, // Handling of File objects may need special considerations
        imageName: img.imageName,
      })),
      projectUploadDate: data.projectUploadDate.toDate(), // Convert Firestore Timestamp to Date
    };

    return projectData;
  } else {
    return null;
  }
}

type Props = {
  id: string;
};

export default function Project({ id }: Props) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  const cleanedPath = '/' + pathSegments.slice(0, -1).join('/');
  const router = useRouter();

  console.log("Cleaned Path: ", cleanedPath);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFirestore(id);
        if (data) {
          setProject(data);
          console.log(data)
        } else {
          setError('Project not found');
        }
      } catch (error) {
        console.error('Failed to fetch project:', error);
        setError('Failed to fetch project data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, [id]);

  if (loading) return <div className='flex justify-center items-center h-screen'><BarLoader /></div>;
  if (error) return <div className='flex justify-center items-center h-screen'>{error}</div>;

  if (!project) return <div>No project data</div>;


  return (
    <div className='w-[95%] md:w-[70%] my-20 mx-auto'>
      <IoIosArrowRoundBack className='cursor-pointer' size={44} onClick={() => {router.push(cleanedPath)}}/>
      <h2 className='text-2xl font-bold text-[#677582] text-center mb-20'>PREGLED PROJEKTA</h2>

        <div className=' mb-12'>
          <h3 className='text-[#495057] font-bold text-xl mb-4'>{project?.projectName}</h3>
          <p className='text-[#495057] font-light'>{project?.projectLocation + " " + project?.projectDate}</p>
        </div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
     className='swiper-container'
    >
      {project?.projectImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className='h-full cursor-pointer'>
              <Image alt={image.imageName} className='w-auto max-h-[700px] mx-auto' src={image.imageSource} height={1000} width={1000}/>
            </div>
          </SwiperSlide>
        ))}
    
    </Swiper>
      </div>
    
  );
}
