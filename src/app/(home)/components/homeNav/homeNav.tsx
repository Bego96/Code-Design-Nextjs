import { auth } from '@/auth';
import React from 'react'
import HomeNavMain from './homeNavMain';

export async function HomeNav() {
    const session = await auth();
    const user = session?.user;
  return (
    <HomeNavMain user={user}/>
  )
}
