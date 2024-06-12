
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from './navbarProfile'
import { RxHamburgerMenu } from "react-icons/rx";
import useDashboardStore from '../dashboardStore/dashboardStore';
import DashboardNavMain from './dashboardNavMain'
import { auth } from '@/auth'
export async function DashboardNav() {

    const session = await auth();
    const user = session?.user;
  
  return (
    <DashboardNavMain user={user}/>
  )
}
