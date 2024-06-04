'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react'; // Correct import for next-auth
import Button from "./button";
import { useRouter } from 'next/navigation';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { signInWithCustomToken } from 'firebase/auth';
import Image from 'next/image';

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
    <div>
      <div className='w-1/3 text-center mx-auto drop-shadow-lg bg-[#FAFAFA] flex flex-col p-8'>
        <div className='w-1/4 mx-auto mb-10'>
          <Image className='w-full' src={`https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd`} height={500} width={500} alt="Code Design logo"/>
        </div>
        <div className=''>
          <h3 className='text-2xl font-semibold'>CODE Design</h3>
          <p className='text-xl'>Arhitektonski biro</p>
        </div>
        <h2 className='text-4xl font-semibold mb-8 mt-12'>PRIJAVI SE</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          
            <input name="email" type="email" placeholder='Email adresa' required className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 mb-8'/>
        
            <input name="password" type="password" placeholder='Lozinka' required className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4'/>
          <div className='flex justify-end text-[#495057]'>
            <p>Zaboravili ste lozinku?</p>
          </div>
          <div className='flex flex-start mb-6'>
            <input type="checkbox" id="remember" className='accent-[#495057] mr-2'/>
            <label htmlFor="remember">Zapamti me</label>
          </div>
          
          <button type="submit" className='bg-[#222222] text-[#FAFAFA] h-[48px]'>Prijavi se</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
        </form>
        <div className='mt-6'>
          <Button />
        </div>
      </div>
    </div>
  );
}
