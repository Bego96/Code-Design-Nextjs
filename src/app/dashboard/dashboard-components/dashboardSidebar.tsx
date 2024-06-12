

import React from 'react'
import Link from 'next/link'
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from 'zustand';
import useDashboardStore from '../dashboardStore/dashboardStore';
import DashboardSidebarMain from './dashboardSidebarMain'
import { auth } from '@/auth'
export async function DashboardSidebar() {

    const session = await auth();
    const user = session?.user;
  
    console.log("USER" + user?.name)

  return (
    <DashboardSidebarMain user={user}/>
  )
}
