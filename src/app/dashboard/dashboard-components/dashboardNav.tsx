
import React from 'react'
import DashboardNavMain from './dashboardNavMain'
import { auth } from '@/auth'
export async function DashboardNav() {

    const session = await auth();
    const user = session?.user;
  
  return (
    <DashboardNavMain user={user}/>
  )
}
