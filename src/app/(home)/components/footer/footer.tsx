import React from 'react'
import Image from 'next/image'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Link from 'next/link';
import { IoIosSettings } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { auth } from '@/auth';
import { FooterBottom } from './footerBottom';

export default function Footer() {
    const scrollTo = (route: any) => {
        const element = document.getElementById(`${route}`);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <footer className='bg-[#353C40] text-[#FAFAFA] mt-20'>
            <div className='max-w-7xl mx-auto px-4 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
                    {/* Company Info */}
                    <div className='flex flex-col items-center lg:items-start'>
                        <div className='w-20 h-20 mb-4'>
                            <Image 
                                className='w-full h-full object-contain' 
                                alt="logo" 
                                src="https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd" 
                                height={500} 
                                width={500}
                            />
                        </div>
                        <h2 className='text-2xl font-bold mb-2'>CODE Design</h2>
                        <p className='text-lg text-[#FAFAFA]/80'>Arhitektonski biro</p>
                    </div>

                    {/* Navigation Links */}
                    <div className='text-center lg:text-left'>
                        <h3 className='text-xl font-semibold mb-6'>Navigacija</h3>
                        <ul className='space-y-4'>
                            <li><Link href="/" className='hover:text-[#FAFAFA]/80 transition-colors duration-200'>Početna</Link></li>
                            <li><Link href="/about-us" className='hover:text-[#FAFAFA]/80 transition-colors duration-200'>O nama</Link></li>
                            <li><Link href="/#services" scroll={true} className='hover:text-[#FAFAFA]/80 transition-colors duration-200'>Usluge</Link></li>
                            <li><Link href="/projects" className='hover:text-[#FAFAFA]/80 transition-colors duration-200'>Projekti</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='text-center lg:text-left'>
                        <h3 className='text-xl font-semibold mb-6'>Kontakt</h3>
                        <ul className='space-y-4'>
                            <li className='flex items-center justify-center lg:justify-start gap-3'>
                                <IoLocationSharp size={20} />
                                <span>75000, Stupine B-8, Tuzla, BiH</span>
                            </li>
                            <li className='flex items-center justify-center lg:justify-start gap-3'>
                                <FaPhone size={20} />
                                <span>+387 35 248 440, + 387 61 078 792</span>
                            </li>
                            <li className='flex items-center justify-center lg:justify-start gap-3'>
                                <MdEmail size={20} />
                                <span>info@code-design.ba</span>
                            </li>
                            <li className='flex items-center justify-center lg:justify-start gap-4'>
                                <a href='https://linkedin.com/company/codedesigndoo/?originalSubdomain=ba' 
                                   target='_blank' 
                                   className='hover:text-[#FAFAFA]/80 transition-colors duration-200'>
                                    <FaLinkedin size={24} />
                                </a>
                                <a href='https://www.facebook.com/code.design.tuzla' 
                                   target='_blank'
                                   className='hover:text-[#FAFAFA]/80 transition-colors duration-200'>
                                    <FaFacebookSquare size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Details */}
                    <div className='text-center lg:text-left'>
                        <h3 className='text-xl font-semibold mb-6'>Detalji firme</h3>
                        <ul className='space-y-4 text-sm'>
                            <li><span className='font-semibold'>Registarski br: </span>032-0-Reg-18-000718</li>
                            <li><span className='font-semibold'>ID/PDV br: </span>4210329050008/210329050008</li>
                            <li><span className='font-semibold'>Račun br: </span>1610000199740083 Raiffeisen Banka DD</li>
                            <li><span className='font-semibold'>Devizni račun: </span>06000047152 Raiffeisen Banka DD</li>
                        </ul>
                    </div>
                </div>

                <div className='h-px bg-[#FAFAFA]/20 w-full'></div>
                <FooterBottom />
            </div>
        </footer>
    )
}
