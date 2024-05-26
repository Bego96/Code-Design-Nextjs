'use client'
import React, { FormEvent } from 'react'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function Form() {

  const router = useRouter();
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const response = await fetch(`/api/auth/register`, {
          method: 'POST',
          body: JSON.stringify({
            first_name: formData.get("first_name"),
            last_name: formData.get("last_name"),
            email: formData.get("email"),
            password: formData.get("password")
          })
         })
         if (response.status === 200) {
          router.push("/sign-in")
         }
       }


    return (
        <form onSubmit={onSubmit} className='flex flex-col w-1/3'>
          <input type="text" name="first_name" placeholder='first name..' className='h-12 mb-2 text-black'/>
          <input type="text" name="last_name" placeholder='last name..' className='h-12 mb-2 text-black'/>
          <input type="email" name="email" placeholder='email..' className='h-12 mb-2 text-black'/>
          <input type="password" name="password" placeholder='password..' className='h-12 text-black'/>
          <button type='submit'>Submit</button>
        </form>
      )
}
