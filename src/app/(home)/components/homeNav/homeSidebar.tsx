

import React from 'react'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from 'zustand';
import { auth } from '@/auth'
import HomeSidebarMain from './homeSidebarMain';
export async function HomeSidebar() {

    const session = await auth();
    const user = session?.user;
  
    console.log("USER" + user?.name)

  return (
    <HomeSidebarMain user={user}/>
  )
}
