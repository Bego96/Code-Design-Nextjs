'use client'
import Image from 'next/image'
import React from 'react'
import AnimatedSection from '@/app/components/AnimatedSection'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import '@/app/styles/slider.css'

export default function OurVision() {
  return (
    <div className='mx-4 xl:mx-14 2xl:mx-32 mt-20'>
      <div className='flex flex-col lg:flex-row gap-8'>
        {/* Left side - Text content */}
        <AnimatedSection delay={0.2} className='w-full lg:w-1/2 bg-[#FAFAFA] p-6 md:p-8 rounded-lg shadow-lg'>
          <h3 className='text-[#677582] text-4xl font-bold mb-12'>NAŠA VIZIJA</h3>
          
          <div className='space-y-8'>
            <div className='flex items-start gap-4'>
              <span className='text-[#516795] text-lg font-bold min-w-[24px]'>1.</span>
              <p className='text-[#495057] text-xl'>
                Istovremeno zadovoljstvo klijenata i briga o životnoj sredini.
              </p>
            </div>

            <div className='flex items-start gap-4'>
              <span className='text-[#516795] text-lg font-bold min-w-[24px]'>2.</span>
              <p className='text-[#495057] text-xl'>
                Korišćenjem BIM (Building Information Modeling) sistema, koji koristi digitalne modele za integraciju svih struka u građevinarstvu i arhitekturi, osiguravamo efikasniju saradnju i veću preciznost tokom cjelog životnog ciklusa projekta.
              </p>
            </div>

            <div className='flex items-start gap-4'>
              <span className='text-[#516795] text-lg font-bold min-w-[24px]'>3.</span>
              <p className='text-[#495057] text-xl'>
                Na ovaj način podižemo kvalitet projektovanja i gradnje, pružajući klijentima najbolja rešenja, dok smanjujemo naš uticaj na planetu.
              </p>
            </div>

            <div className='flex items-start gap-4'>
              <span className='text-[#516795] text-lg font-bold min-w-[24px]'>4.</span>
              <p className='text-[#495057] text-xl'>
                Stvaranje prostora koji su funkcionalni, estetski privlačni i ekološki odgovorni.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Right side - Image slider */}
        <AnimatedSection delay={0.4} className='w-full lg:w-1/2'>
          <div className="w-full h-[600px] relative">
            <div className="slider-container h-full">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                speed={1000}
                loop={true}
                effect="fade"
                fadeEffect={{
                  crossFade: true
                }}
                className="h-full"
              >
                <SwiperSlide>
                  <div className='relative w-full aspect-square transition-transform duration-1000 ease-in-out hover:scale-105'>
                    <Image 
                      className='object-cover transition-all duration-1000 ease-in-out'
                      fill
                      alt="Construction Site Overview"
                      src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=800&q=80'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='relative w-full aspect-square'>
                    <Image 
                      className='object-cover'
                      fill
                      alt="Architectural Design Process"
                      src='https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&h=800&q=80'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='relative w-full aspect-square'>
                    <Image 
                      className='object-cover'
                      fill
                      alt="Sustainable Architecture"
                      src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=800&q=80'
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='relative w-full aspect-square'>
                    <Image 
                      className='object-cover'
                      fill
                      alt="Modern Interior Design"
                      src='https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&h=800&q=80'
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
