import React from 'react';
import Form from './form';
import '@/app/globals.css';

export default function ResetPassword({ searchParams }: { searchParams: { email?: string | undefined } }) {
  const email = searchParams.email;

  return <Form userEmail={email} />;
}
