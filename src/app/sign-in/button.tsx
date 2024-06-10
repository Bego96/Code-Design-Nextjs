'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function Button() {
    const router = useRouter();
  return (
    <button type="button" className='text-red-500' onClick={() => router.push('/sign-up')}>Nemate račun?</button>
  )
}
