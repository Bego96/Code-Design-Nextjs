'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { db } from '@/app/firebaseConfig';

interface FormProps {
  userEmail?: string; 
}

export default function Form({ userEmail }: FormProps) {
  const router = useRouter();
  const [email, setEmail] = useState(userEmail);
  const [error, setError] = useState('');
  const [type, setType] = useState('password');

  const showPass = () => {
    setType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get('password') as string;
    const confirmedPassword = formData.get('confirmedPassword') as string;

    if (password !== confirmedPassword) {
      setError('Lozinke se ne podudaraju');
      return;
    }

    try {
      
      const usersCollection = collection(db, 'users');
      const userQuery = query(usersCollection, where('email', '==', email));
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        setError('Korisnički email nije pronađen');
        return;
      }

  
      let userDocId: string | null = null;
      querySnapshot.forEach((doc) => {
        userDocId = doc.id;
      });

      if (userDocId) {
        const userDocRef = doc(db, 'users', userDocId);
        await updateDoc(userDocRef, { password });

        
        router.push('/sign-in'); 
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setError('Došlo je do greške pri ažuriranju lozinke');
    }
  };

  return (
    <div className='flex justify-center items-center flex-col m-auto h-screen'>
      <div className='w-full h-full sm:h-auto sm:w-2/3 lg:w-1/2 xl:w-1/3 text-center drop-shadow-lg bg-[#FAFAFA] flex flex-col p-4 sm:p-8'>
        <div className='w-1/4 mx-auto mb-10'>
          <Image
            className='w-full'
            src={`https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd`}
            height={500}
            width={500}
            alt='Code Design logo'
          />
        </div>
        <div>
          <h3 className='text-2xl font-semibold'>CODE Design</h3>
          <p className='text-xl'>Arhitektonski biro</p>
        </div>
        <h2 className='text-4xl font-semibold mb-8 mt-12'>PROMJENITE ŠIFRU</h2>
        <form onSubmit={handleSubmit} className='flex flex-col w-full'>
          <div className='relative border border-[#495057] h-[48px] placeholder-[#495057] mb-8'>
            <input
              id='password'
              name='password'
              type={type}
              placeholder='Nova lozinka'
              className='w-full h-full pl-2'
              required
            />
            {type === 'password' ? (
              <FaEye className='absolute right-4 top-4 cursor-pointer' onClick={showPass} />
            ) : (
              <FaEyeSlash className='absolute right-4 top-4 cursor-pointer' onClick={showPass} />
            )}
          </div>

          <div className='relative border border-[#495057] h-[48px] placeholder-[#495057] mb-8'>
            <input
              id='confirmedPassword'
              name='confirmedPassword'
              type={type}
              placeholder='Potvrdite lozinku'
              className='w-full h-full pl-2'
              required
            />
            {type === 'password' ? (
              <FaEye className='absolute right-4 top-4 cursor-pointer' onClick={showPass} />
            ) : (
              <FaEyeSlash className='absolute right-4 top-4 cursor-pointer' onClick={showPass} />
            )}
          </div>

          <button type='submit' className='bg-[#222222] text-[#FAFAFA] h-[48px]'>
            Potvrdi
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </div>
    </div>
  );
}
