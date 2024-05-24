'use client'
import React, { FormEvent } from 'react'
import { signIn } from 'next-auth/react';
export default function Form() {

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const response = await fetch(`/api/auth/register`, {
          method: 'POST',
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password")
          })
         })
       }


    return (
        <form onSubmit={onSubmit} className='flex flex-col w-1/3'>
          <input type="email" name="email" placeholder='email..' className='h-12 mb-2 text-black'/>
          <input type="password" name="password" placeholder='password..' className='h-12 text-black'/>
          <button type='submit'>Submit</button>
        </form>
      )
}
