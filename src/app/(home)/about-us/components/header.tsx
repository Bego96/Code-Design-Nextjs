'use client'
import Image from 'next/image'
import React from 'react'
import { PiArrowSquareInFill } from "react-icons/pi";
import { useRouter } from 'next/navigation';
import AnimatedSection from '@/app/components/AnimatedSection';

export default function Header() {
    const router = useRouter();
    
    return (
        <div className='bg-[#516795] mx-4 xl:mx-14 2xl:mx-32 mt-4 md:mt-16'>
            <div className='flex flex-col lg:flex-row p-4 md:p-8 pb-0 gap-10'>
                <AnimatedSection delay={0.2} className='w-full lg:w-1/2'>
                    <div className='relative group overflow-hidden rounded-lg'>
                        <Image 
                            className='w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105'
                            src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fjasmin_huremovic.jpg?alt=media&token=5cb4e072-6053-44bf-b402-34a07934340a' 
                            alt="owner" 
                            width={500} 
                            height={500}
                        />
                        <div className='absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100'></div>
                    </div>
                    <div className='text-[#FAFAFA] mt-10 bg-[#6D89C7] p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform duration-300'>
                        <h2 className='text-2xl font-bold mb-2'>CODE Design</h2>
                        <p className='text-xl mb-4'>Architecture & Project Management</p>
                        <div className='border-t border-white/20 pt-4'>
                            <h2 className='text-2xl font-bold mb-2'>Osnivač:</h2>
                            <p className='text-xl'>Jasmin Huremović dipl.ing.arh.</p>
                        </div>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4} className='w-full lg:w-1/2'>
                    <div className='mb-14 xl:mb-0 bg-[#FAFAFA]/10 p-6 rounded-lg backdrop-blur-sm'>
                        <h2 className='text-4xl font-bold text-[#FAFAFA] mb-8'>O NAMA</h2>
                        <p className='text-xl text-[#FAFAFA]/90 leading-relaxed'>
                            Arhitektonski biro CODE design d.o.o. počeo je sa radom početkom 2018. godine. Naša firma bavi se arhitektonskim projektovanjem, dizajnom enterijera, 
                            project managementom, nadzorom nad izvođenjem građevinskih radova, tehničkim savjetovanjem i konsaltingom.
                        </p>
                    </div>
                </AnimatedSection>
            </div>

            <AnimatedSection delay={0.6}>
                <div className='flex flex-col justify-center items-center md:items-start md:gap-10 lg:gap-0 md:flex-row md:justify-around px-8 py-12 text-[#FAFAFA] bg-[#6D89C7]/20 backdrop-blur-sm rounded-lg mt-10 mb-10'>
                    <div className='text-center transform hover:scale-105 transition-transform duration-300 p-4'>
                        <h3 className='text-slate-200 text-4xl mb-2'>GODINE ISKUSTVA</h3>
                        <p className='text-6xl font-semibold mt-2'>15+</p>
                    </div>
                    <div className='text-center transform hover:scale-105 transition-transform duration-300 p-4'>
                        <h3 className='text-slate-200 text-4xl mb-2'>PROJEKTI</h3>
                        <p className='text-6xl font-semibold mt-2'>500+</p>
                    </div>
                    <div className='text-center transform hover:scale-105 transition-transform duration-300 p-4'>
                        <h3 className='text-slate-200 text-4xl mb-2'>ZADOVOLJNI KLIJENTI</h3>
                        <p className='text-6xl font-semibold mt-2'>100%</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection delay={0.8}>
                <div className='bg-[#FAFAFA]/10 backdrop-blur-sm rounded-lg p-8 mt-10 mb-10'>
                    <h2 className='text-4xl font-bold text-[#FAFAFA] mb-8'>NAŠ TIM</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-[#6D89C7]/30 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='w-16 h-16 rounded-full bg-[#516795] flex items-center justify-center'>
                                    <PiArrowSquareInFill className='w-8 h-8 text-[#FAFAFA]' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-[#FAFAFA]'>Jasmin Huremović</h3>
                                    <p className='text-[#FAFAFA]/80'>Direktor & Glavni Arhitekt</p>
                                </div>
                            </div>
                            <p className='text-[#FAFAFA]/90 leading-relaxed'>
                                Diplomirani inženjer arhitekture sa preko 15 godina iskustva u projektovanju i vođenju projekata.
                            </p>
                        </div>

                        <div className='bg-[#6D89C7]/30 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='w-16 h-16 rounded-full bg-[#516795] flex items-center justify-center'>
                                    <PiArrowSquareInFill className='w-8 h-8 text-[#FAFAFA]' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-[#FAFAFA]'>Projektni Tim</h3>
                                    <p className='text-[#FAFAFA]/80'>Arhitekti & Dizajneri</p>
                                </div>
                            </div>
                            <p className='text-[#FAFAFA]/90 leading-relaxed'>
                                Iskusni tim arhitekata i dizajnera posvećen stvaranju inovativnih i funkcionalnih rješenja.
                            </p>
                        </div>

                        <div className='bg-[#6D89C7]/30 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className='w-16 h-16 rounded-full bg-[#516795] flex items-center justify-center'>
                                    <PiArrowSquareInFill className='w-8 h-8 text-[#FAFAFA]' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-[#FAFAFA]'>Tehnički Tim</h3>
                                    <p className='text-[#FAFAFA]/80'>Inženjeri & Konsultanti</p>
                                </div>
                            </div>
                            <p className='text-[#FAFAFA]/90 leading-relaxed'>
                                Stručni tim za tehničku podršku, nadzor i konsalting u svim fazama projekta.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}
