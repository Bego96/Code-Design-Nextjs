'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react'; // Correct import for next-auth
import { useRouter } from 'next/navigation';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
import { signInWithCustomToken } from 'firebase/auth';
import Image from 'next/image';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Form() {
  const [error, setError] = useState('');
  const router = useRouter();
  const [type, setType] = useState('password')
 

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

    

    console.log("ADMIN USER? " + userInfo.admin)

    if (userInfo.admin) {
      if (!userInfo || userInfo.email !== email || userInfo.password !== password ) {
        setError("Pogrešan email ili password");
      } else {
        const result = await signIn('credentials', { redirect: false, email, password });
  
        if (result?.error) {
          setError(result.error);
        } else {
        
          router.push('/dashboard');
          router.refresh();
  
        }
      }
    } else {
      setError("Korisnik nije administrator!")
    }
    
  };

  const showPass = () => {
    

    if (type === 'password') {
      setType('text')
    } else {
      setType('password')
    }
  }

  return (
    <div className='flex justify-center items-center flex-col m-auto h-screen'>
      <div className='w-full h-full sm:h-auto sm:w-2/3 lg:w-1/2 xl:w-1/3 text-center drop-shadow-lg bg-[#FAFAFA] flex flex-col p-4 sm:p-8'>
        <div className='w-1/4 mx-auto mb-10'>
          <Image className='w-full' src={`https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd`} height={500} width={500} alt="Code Design logo"/>
        </div>
        <div className=''>
          <h3 className='text-2xl font-semibold'>CODE Design</h3>
          <p className='text-xl'>Arhitektonski biro</p>
        </div>
        <h2 className='text-4xl font-semibold mb-8 mt-12'>PRIJAVI SE</h2>
        <form onSubmit={handleSubmit} className='flex flex-col w-full'>
          <div className='border border-[#495057] h-[48px] placeholder-[#495057] mb-8'>
            <input name="email" type="email" placeholder='Email adresa' className='w-full h-full pl-2' required/>
          </div>
            
            <div className='relative border border-[#495057] h-[48px] placeholder-[#495057]'>
              <input id="password" name="password" type={type} placeholder='Lozinka' className='w-full h-full pl-2' required/>
              {
                type === 'password' ? 
                <FaEye className='absolute right-4 top-4 cursor-pointer' onClick={showPass}/> :
                <FaEyeSlash className='absolute right-4 top-4 cursor-pointer' onClick={showPass}/>
              }
            </div>
            
          <div className='flex justify-end text-[#495057] my-10 cursor-pointer' onClick={() => router.push('/reset-password/confirm-email')}>
            <p>Zaboravili ste lozinku?</p>
          </div>
          
          <button type="submit" className='bg-[#222222] text-[#FAFAFA] h-[48px]'>Prijavi se</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
        </form>
      </div>
    </div>
  );
}
