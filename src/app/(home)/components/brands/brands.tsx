// import Swiper core and required modules
'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Brands() {
  return (
    <div className='mt-60 md:mt-48 bg-white'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={window.screen.width < 640 ? 1 : window.screen.width < 768 ? 2 : window.screen.width < 1024 ? 3 : window.screen.width < 1280 ? 5 : 6}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide><div className='w-[40%] mx-auto'><Image className="w-full" height={500} width={500} src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder1.jpg?alt=media&token=126cebf0-24ca-4351-a16f-3e579cf1c30e" alt="placeholder1"/></div></SwiperSlide>
      <SwiperSlide><div className='w-[40%] mx-auto'><Image className="w-full" height={500} width={500} src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder2.jpg?alt=media&token=56568772-0b95-490a-8909-db7db1bc54f1" alt="placeholder2"/></div></SwiperSlide>
      <SwiperSlide><div className='w-[40%] mx-auto'><Image className="w-full" height={500} width={500} src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder3.png?alt=media&token=f89f6584-f84d-4664-941b-085ddf04e2fe" alt="placeholder3"/></div></SwiperSlide>
      <SwiperSlide><div className='w-[40%] mx-auto'><Image className="w-full" height={500} width={500} src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder4.png?alt=media&token=7c4f3b0f-68f0-4c3d-aba1-171969f7b927" alt="placeholder4"/></div></SwiperSlide>
      <SwiperSlide><div className='w-[40%] mx-auto'><Image className="w-full" height={500} width={500} src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder5.png?alt=media&token=e6199212-6dbe-4ddb-971f-37157a1c27e1" alt="placeholder5"/></div></SwiperSlide>
      <SwiperSlide><div className='w-[40%] mx-auto'><Image className="w-full" height={500} width={500} src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder6.png?alt=media&token=2a0e7ded-dc67-4474-8e31-9a606980923a" alt="placeholder6"/></div></SwiperSlide>
      <SwiperSlide><div className='w-[40%] mx-auto'><Image className="w-full" height={500} width={500} src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fplaceholder7.jpg?alt=media&token=1ae84552-cb6e-48df-bd86-e373094edeb5" alt="placeholder7"/></div></SwiperSlide>
    </Swiper>
    </div>
  );
};