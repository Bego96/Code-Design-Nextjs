import { signIn } from 'next-auth/react';
import React, { FormEvent } from 'react'
import Form from '../sign-in/form';
import '@/app/globals.css'
export default function SignIn() {
  return (
    <Form />
  )
}
