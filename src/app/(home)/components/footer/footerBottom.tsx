import React from 'react'
import Link from 'next/link';
import { IoIosSettings } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { auth } from '@/auth';

export async function FooterBottom() {
    const session = await auth();
    const user = session?.user;

    return (
        <div className='flex flex-col sm:flex-row items-center justify-between pt-8'>
            <div className='flex items-center mb-4 sm:mb-0'>
                <FaRegCopyright className='text-[#FAFAFA]/80 mr-2' size={14} />
                <p className='text-[#FAFAFA]/80 text-sm'>2024 CODE Design d.o.o. Sva prava zadržana.</p>
            </div>
            
            {user && user.admin === true && (
                <Link 
                    href='/dashboard'
                    className='p-2 rounded-full hover:bg-[#FAFAFA]/10 transition-colors duration-200'
                >
                    <IoIosSettings className='text-[#FAFAFA]/80' size={20} />
                </Link>
            )}
        </div>
    )
}
