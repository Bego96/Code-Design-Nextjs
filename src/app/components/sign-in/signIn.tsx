import { signIn } from 'next-auth/react';
import React, { FormEvent } from 'react'
import Form from './form';

export async function SignIn() {
  return (
    <Form />
  )
}
