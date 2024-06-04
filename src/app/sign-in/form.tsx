'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react'; // Correct import for next-auth
import Button from "./button";
import { useRouter } from 'next/navigation';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { signInWithCustomToken } from 'firebase/auth';


// https://stackoverflow.com/questions/75963110/firebase-rules-to-fix-missing-or-insufficient-permissions-error-when-accessing

// Test function for creating Firebase custom token
const createCustomTokenForFirebase = async (userInfo:any) => {
  let errorMsg = "";
  try {
    const response = await fetch(`/api/auth/createCustomToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: userInfo.email, id: userInfo.id })
    });

    const data = await response.json();
    console.log("RESPONSE FOR TOKEN: ", data.customToken);

    if (response.status === 200) {
      signInWithCustomToken(auth, data.customToken)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
          errorMsg="Failed to sign in with custom token"
          return errorMsg;
        });
    } else {
      errorMsg="Failed to create custom token"
      return errorMsg;
    }
  } catch (error) {
    console.error("Error creating custom token: ", error);
    errorMsg="Error creating custom token"
    return errorMsg;
  }
}

export default function Form() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    let users = collection(db, "users");
    let findUserByEmail = query(users, where("email", "==", email), where("password", "==", password));
    let querySnapshot = await getDocs(findUserByEmail);
    let userInfo: any = null;
    
    querySnapshot?.forEach((doc) => {
      userInfo = { id: doc.id, ...doc.data() };
    });

    if (!userInfo || userInfo.email !== email || userInfo.password !== password) {
      setError("Invalid email or password");
    } else {
      const result = await signIn('credentials', { redirect: false, email, password });

      if (result?.error) {
        setError(result.error);
      } else {
        /*const errorMessage = await createCustomTokenForFirebase(userInfo);

        if (errorMessage) {
          setError(errorMessage);
        }*/

        router.push('/');
        router.refresh();

      }
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
