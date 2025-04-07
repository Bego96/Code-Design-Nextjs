// import Swiper core and required modules
'use client';
import { CSSProperties, useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles.css'

const customStyles: CSSProperties & { [key: string]: string } = {
  "--swiper-navigation-color": "#516795",
  "--swiper-navigation-size": "30px",
};

export default function Brands() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  const [brands, setBrands] = useState([
    {
      id: 0,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fdmfoffice.jpg?alt=media&token=ad2d0ec0-65a9-474c-aba4-8025829de008',
      link: 'https://dmf.ba',
      alt: 'DMF-Office'
    },
    {
      id: 1,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fminesu.jpg?alt=media&token=ac62da03-876b-4ff4-8a70-9a8989b2b116',
      link: 'https://minesu.ba/en/home/',
      alt: 'Minesu'
    },
    {
      id: 2,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fhezzgradnja.jpg?alt=media&token=3cd66de8-0d37-49b6-8303-0649bf28eb1a',
      link: 'https://heezgradnja.ba',
      alt: 'Heez Gradnja'
    },
    {
      id: 3,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Ftehnograd.jpg?alt=media&token=7ff2a7ce-0d5f-48e4-ac4a-ff0875c31073',
      link: 'https://www.tehnograd.ba',
      alt: 'Tehnograd'
    },
    {
      id: 4,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fbeautybyzerina.jpg?alt=media&token=77be7b65-c69a-41a1-a4cc-8efb22d77a7a',
      link: 'https://www.instagram.com/beautybyzeriina?igsh=MXAycXBlOGVnOTY4bQ==',
      alt: 'Beauty By Zerina'
    },
    {
      id: 5,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Farchliving.jpg?alt=media&token=5f13c155-322c-4672-b012-ee9ac73c237f',
      link: 'https://www.facebook.com/share/B4qS15QqkfdDAvYJ/?mibextid=LQQJ4d',
      alt: 'ArchLiving'
    },
    {
      id: 6,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fstudiopart.jpg?alt=media&token=f80ff630-6826-46b4-bc7f-28c492122ccd',
      link: 'https://www.facebook.com/share/XvWvg7XL1s4ndcpf/?mibextid=LQQJ4d',
      alt: 'Studio Art'
    },
    {
      id: 7,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fgeotim.jpg?alt=media&token=46f887ba-d100-462e-9556-585b3cd99385',
      link: 'https://geotim.ba',
      alt: 'GeoTim'
    },
    {
      id: 8,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fdesigngridstudio.jpg?alt=media&token=7220ad5f-72ba-498e-8fd9-43c9abc8c86e',
      link: 'https://ba.linkedin.com/company/design-grid-studio',
      alt: 'Design Grid Studio'
    },
    {
      id: 9,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2FInproz.jpg?alt=media&token=78c518fe-1b74-4342-a2b8-b2486914425e',
      link: 'https://inproz.ba',
      alt: 'Inproz'
    },
    {
      id: 10,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fs-beca.jpg?alt=media&token=cf412fb7-bf06-443a-82f8-e6755b3105bd',
      link: 'http://s-beca.eu',
      alt: 'S-Beca'
    },
    {
      id: 11,
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Frestoranzlatnik.jpg?alt=media&token=a6b99862-211a-47fe-bfef-8d9769fc0b4f',
      link: 'https://restoranzlatnik.ba/kontakt.php',
      alt: 'Restoran Zlatnik'
    },
  ])

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1280) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(6);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  return (
    <div className='mt-20 bg-[#FAFAFA] cursor-pointer'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        navigation
        style={customStyles}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
              <div className='w-[30%] mx-auto'>
                <Image
                  className="w-full"
                  height={500}
                  width={500}
                  src={brand.imgSrc}
                  alt={brand.alt}
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
