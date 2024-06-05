import { auth } from '@/auth'
import React from 'react'
import { signOut } from '@/auth';
import Button from './button';
export async function Navigation() {

    const session = await auth();
    const user = await session?.user;
  return (
    <div className='flex justify-between z-50 bg-slate-100'>
        <div>Logo</div>
        {
            user ? 
            <form action={async () => {
                "use server"
                await signOut()
              }}>
                <button type="submit">Sign Out</button>
            </form> : <Button />
        }
        
    </div>
  )
}
