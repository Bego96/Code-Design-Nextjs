'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react'; // Correct import for next-auth
import Button from "./button";
import { useRouter } from 'next/navigation';

export default function Form() {
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const result = await signIn('credentials', { 
        redirect: false, 
        email, 
        password 
      });

      if (result?.error) {
        console.log(result?.error)
        setError("Wrong email and password!");
      } else {
        setError('');
        // Redirect or perform other actions on successful login
        router.push('/')

      }
    } catch (error) {
      setError('An unexpected error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Password
        <input name="password" type="password" required />
      </label>
      <button type="submit">Sign In</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>No account?</p>
      <Button />
    </form>
  );
}
