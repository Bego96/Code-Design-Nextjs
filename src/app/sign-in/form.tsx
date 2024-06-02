'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react'; // Correct import for next-auth
import Button from "./button";
import { useRouter } from 'next/navigation';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';




export default function Form() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    let users = collection(db, "users")
    let findUserByEmail = query(users, where("email", "==", email), where("password", "==", password))
    let querySnapshot = await getDocs(findUserByEmail);
    let userInfo: any = null;
    console.log(querySnapshot)
    // Check if any documents were returned
    
      querySnapshot?.forEach((doc) => {
        // Extract document data and include the document ID
        userInfo = { id: doc.id, ...doc.data() };
     
      });

      console.log(userInfo)

      //console.log("User info" + userInfo.email)
      if (userInfo?.email !== email) {
        setError("Invalid email or password")
      } else if (userInfo?.password !== password) {
        setError("Invalid email or password")
      } else {
        const result = await signIn('credentials', { redirect: false, email, password });

        if (result?.error) {
          setError(result.error);
        } else {
          router.push('/');
          router.refresh()
        }
      }

   
    
  }

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
