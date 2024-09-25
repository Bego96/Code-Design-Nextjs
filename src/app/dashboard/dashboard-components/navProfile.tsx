'use client'
import { signOut } from "next-auth/react";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NavProfile({ user }: any) {
  const router = useRouter();
  const [profileMenu, setProfileMenu] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setProfileMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [profileMenu]);


 

  if (user) {
    return (
      <div className='relative'>
        <div onClick={() => setProfileMenu(!profileMenu)} className='flex items-center cursor-pointer'>
          <div className='w-14 h-14 overflow-hidden rounded-full grow-0 shrink-0 md:mr-4'>
            <Image
              className='w-full h-auto object-center'
              alt="profile picture"
              src={user?.image}
              height={500}
              width={500}
            />
          </div>
          <div className="hidden md:block">
            <p>{`${user.name}`}</p>
          </div>
        </div>
        {profileMenu && (
          <div ref={ref} className='p-6 absolute top-20 right-0 bg-[#FAFAFA] drop-shadow-md'>
            <button onClick={() => signOut({ callbackUrl: '/', redirect:true })} className='w-[150px] bg-slate-800 py-2 rounded-md text-[#FAFAFA]'>Sign Out</button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={() => router.push("/sign-in")}
          className="w-[150px] bg-slate-800 py-2 rounded-md text-[#FAFAFA]"
        >
          Sign In
        </button>
      </div>
    );
  }
}
