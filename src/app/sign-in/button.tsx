'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function Button() {
    const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/sign-up')}>Sign Up</button>
  )
}
