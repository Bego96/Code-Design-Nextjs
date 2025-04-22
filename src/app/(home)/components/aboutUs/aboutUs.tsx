'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import AnimatedSection from '@/app/components/AnimatedSection';
import { useRouter } from 'next/navigation';
import CountUp from 'react-countup'

// Hook for count-up animation, runs only once per session
function useCountUp(end: number, duration: number, sessionKey: string) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const animated = sessionStorage.getItem(sessionKey);
    if (!animated) {
      sessionStorage.setItem(sessionKey, 'true');
      let current = 0;
      const interval = Math.max(10, Math.floor(duration / end));
      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= end) clearInterval(timer);
      }, interval);
      return () => clearInterval(timer);
    } else {
      setCount(end);
    }
  }, [end, duration, sessionKey]);
  return count;
}

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  suffix?: string;
}

// Animated number that counts from 0 to end when in view
function AnimatedNumber({ end, duration = 1000, suffix = '+' }: AnimatedNumberProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let observer: IntersectionObserver;
    const timer = { current: 0 };
    const start = () => {
      const stepTime = Math.max(10, duration / end);
      timer.current = window.setInterval(() => {
        setValue(v => {
          if (v < end) return v + 1;
          clearInterval(timer.current);
          return end;
        });
      }, stepTime);
    };
    if (ref.current) {
      observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          start();
          observer.disconnect();
        }
      }, { threshold: 0.5 });
      observer.observe(ref.current);
    }
    return () => clearInterval(timer.current);
  }, [end, duration]);
  return <span ref={ref}>{value}{suffix}</span>;
}

export default function AboutUs() {
    const router = useRouter();

    return (
        <div className='bg-[#516795] mx-4 xl:mx-14 2xl:mx-32 mt-20'>
            <div className='flex flex-col lg:flex-row p-4 md:p-8 gap-10'>
                <AnimatedSection delay={0.2} className='w-full lg:w-1/2'>
                    <div className='relative group overflow-hidden rounded-lg'>
                        <Image
                            className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105'
                            src='https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/images%2Fjasmin_huremovic.jpg?alt=media'
                            alt='owner'
                            width={500}
                            height={500}
                        />
                        <div className='absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100' />
                    </div>
                    <div className='hidden lg:block bg-[#FAFAFA] p-6 rounded-lg text-[#495057] mt-6'>
                        <h2 className='text-2xl font-bold mb-2'>CODE Design</h2>
                        <p className='text-xl mb-4'>Architecture & Project Management</p>
                        <div className='border-t border-[#495057]/20 pt-4'>
                            <h2 className='text-2xl font-bold mb-2'>Osnivač:</h2>
                            <p className='text-xl'>Jasmin Huremović dipl.ing.arh.</p>
                        </div>
                        <div className='mt-6 text-center'>
                            <button onClick={() => router.push('/about-us')} className='px-6 py-3 bg-[#6D89C7] text-[#FAFAFA] rounded-full transform hover:scale-105 transition-transform duration-300'>Pročitaj više</button>
                        </div>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={0.4} className='w-full lg:w-1/2 space-y-8'>
                    <div className='bg-[#FAFAFA] p-6 rounded-lg text-[#495057]'>
                        <h2 className='text-4xl font-bold mb-4'>O NAMA</h2>
                        <p className='text-xl mt-6'>
                            <span className='mr-4 inline-block w-6 h-[3px] bg-[rgb(250,185,0)] mb-[5px]'></span>
                            {`Arhitektonski biro "CODE design d.o.o." bavi se prije svega uslugama arhitektonskog projektovanja, dizajnom enterijera, project managementom, nadzorom nad izvodjenjem građevinskih radova, tehničkim savjetovanjem i konsaltingom. Nas mladi tim nudi drugačiji i efikasan pristup arhitekturi koji vodi klijenta od ideje do realizacije projekta. Primjena savremenih metoda projektovanja, savremenih materijala, optimizacija projekata i usluge project managementa sastavni su dio arhitekture novog doba i u potpunosti su prilagođeni najnovijim svjetskim trendovima.`}
                        </p>
                        <p className='text-xl mt-2'>
                            <span className='mr-4 inline-block w-6 h-[3px] bg-[rgb(250,185,0)] mb-[5px]'></span>
                            Kroz inovativna rješenja, održivu i energetski efikasnu gradnju brinemo ne samo o dobrobiti naših klijenata nego i o zaštiti životne sredine. Upotrebom BIM sistema podižemo kvalitet projektovanja i gradnje vaših objekata. BIM (Building Information Modeling) je najnapredniji koncept u projektovanju koji objedinjuje sve struke u građevinarstvu i arhitekturi.
                        </p>
                        <p className='text-xl mt-2'>
                            <span className='mr-4 inline-block w-6 h-[3px] bg-[rgb(250,185,0)] mb-[5px]'></span>
                            Osnova BIM sistema je trodimenzionalni model objekta koji osim vizualne reprezentacije u sebi sadrži i druge informacije kao što su geodetske koordinate, količine materijala i elemenata, svojstva elementa (toplinska provodljivost, masa, čvrstoća…), detalji elemenata, cijene i druge informacije potrebne za izradu projektne dokumentacije i izgradnju samog objekta. Danas se BIM sistem naziva i 5D modeliranje jer osim 3D modela BIM model u sebi sadrži dodatne informacije te prilikom izgradnje objekta uz pomoć BIM sistema se prate faze izgradnje, a kasnije i održavanje objekta.
                        </p>
                    </div>
                    {/* CODE Design card for mobile under O NAMA */}
                    <div className='lg:hidden bg-[#FAFAFA] p-6 rounded-lg text-[#495057] mt-6'>
                        <h2 className='text-2xl font-bold mb-2'>CODE Design</h2>
                        <p className='text-xl mb-4'>Architecture & Project Management</p>
                        <div className='border-t border-[#495057]/20 pt-4'>
                            <h2 className='text-2xl font-bold mb-2'>Osnivač:</h2>
                            <p className='text-xl'>Jasmin Huremović dipl.ing.arh.</p>
                        </div>
                        <div className='mt-6 text-center'>
                            <button onClick={() => router.push('/about-us')} className='px-6 py-3 bg-[#6D89C7] text-[#FAFAFA] rounded-full transform hover:scale-105 transition-transform duration-300'>Pročitaj više</button>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            <AnimatedSection delay={0.6} className='mt-10 mb-10'>
                <div className='flex flex-col md:flex-row justify-around items-center gap-8 px-8 py-12 text-[#FAFAFA] bg-[#6D89C7]/20 backdrop-blur-sm rounded-lg'>
                    <div className='text-center transform hover:scale-105 transition-transform duration-300 p-4'>
                        <h3 className='text-slate-200 text-4xl mb-2'>GODINE ISKUSTVA</h3>
                        <p className='text-6xl font-semibold mt-2'>
                            <CountUp end={15} duration={1} suffix="+" enableScrollSpy scrollSpyOnce />
                        </p>
                    </div>
                    <div className='text-center transform hover:scale-105 transition-transform duration-300 p-4'>
                        <h3 className='text-slate-200 text-4xl mb-2'>PROJEKTI</h3>
                        <p className='text-6xl font-semibold mt-2'>
                            <CountUp end={500} duration={1} suffix="+" enableScrollSpy scrollSpyOnce />
                        </p>
                    </div>
                    <div className='text-center transform hover:scale-105 transition-transform duration-300 p-4'>
                        <h3 className='text-slate-200 text-4xl mb-2'>ZADOVOLJNI KLIJENTI</h3>
                        <p className='text-6xl font-semibold mt-2'>
                            <CountUp end={100} duration={1} suffix="%" enableScrollSpy scrollSpyOnce />
                        </p>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
}
