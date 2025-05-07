'use client';

import { CSSProperties, useEffect, useState } from 'react';
import { db } from '@/app/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { IoIosArrowRoundBack, IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import BarLoader from 'react-spinners/BarLoader'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const customStyles: CSSProperties & { [key: string]: string } = {
  "--swiper-navigation-color": "#516795",
  "--swiper-navigation-size": "30px",
};

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
  imageFileRef: File;
  imageName: string;
}

interface Props {
  id: string;
}

export default function Project({ id }: Props) {
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const cleanedPath = pathname.split('/').slice(0, -1).join('/');

  useEffect(() => {
    const getProject = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProject({
            id: docSnap.id,
            projectName: data.projectName,
            projectLocation: data.projectLocation,
            projectDate: data.projectDate,
            projectImages: data.projectImages,
            projectUploadDate: data.projectUploadDate.toDate(),
          });
        }
      } catch (error) {
        console.error("Error fetching project: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    getProject();
  }, [id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullScreen) {
        if (e.key === 'Escape') {
          setIsFullScreen(false);
        } else if (e.key === 'ArrowLeft' && project?.projectImages) {
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : project.projectImages.length - 1));
        } else if (e.key === 'ArrowRight' && project?.projectImages) {
          setActiveIndex((prev) => (prev < project.projectImages.length - 1 ? prev + 1 : 0));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullScreen, project?.projectImages]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#516795" />
      </div>
    );
  }

  return (
    <div className='w-[95%] md:w-[70%] my-10 mx-auto'>
      <div className='flex items-center cursor-pointer mb-10' onClick={() => {router.push(cleanedPath)}}> 
        <IoIosArrowRoundBack size={26}/>
        <span>Nazad na projekte</span>
      </div>
      <h2 className='text-2xl font-bold text-[#677582] text-center mb-20'>PREGLED PROJEKTA</h2>
      
      <div className='mb-12'>
        <h3 className='text-[#495057] mb-4 font-semibold'>Faza: <span className='font-light'>{' ' + project?.projectName}</span></h3>
        <p className='text-[#495057] mb-4 font-semibold'>Lokacija: <span className='font-light'>{project?.projectLocation}</span></p>
        <p className='text-[#495057] mb-4 font-semibold'>Godina: <span className='font-light'>{project?.projectDate}</span></p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        style={customStyles}
      >
        {project?.projectImages.map((image, index) => (
          <SwiperSlide key={image.id}>
            <div 
              className='h-full cursor-pointer'
              onClick={() => {
                setActiveIndex(index);
                setIsFullScreen(true);
              }}
            >
              <Image 
                alt={image.imageName} 
                className='w-auto max-h-[700px] mx-auto' 
                src={image.imageSource} 
                height={1000} 
                width={1000}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Full Screen Modal */}
      {isFullScreen && project && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[2000] flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-4xl z-[2100]"
            onClick={() => setIsFullScreen(false)}
          >
            <IoMdClose />
          </button>
          
          <div className="w-full h-full flex items-center justify-center">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              navigation
              initialSlide={activeIndex}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              style={customStyles}
            >
              {project.projectImages.map((image) => (
                <SwiperSlide key={image.id}>
                  <div className="flex items-center justify-center h-screen">
                    <Image
                      alt={image.imageName}
                      className="max-h-[90vh] w-auto object-contain"
                      src={image.imageSource}
                      height={2000}
                      width={2000}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
