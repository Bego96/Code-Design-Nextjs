

import React from 'react'
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
