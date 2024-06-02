'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import { storage } from '@/app/firebaseConfig';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable, UploadTaskSnapshot } from 'firebase/storage';

export default function Form() {
  const router = useRouter();
  const [image, setImage] = useState<File>();
  const [imageSrc, setImageSrc] = useState<string>();
  const handleImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
   
  }
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (image) {
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);

      const imageUrl = await getDownloadURL(storageRef);
      
      setImageSrc(imageUrl)
      console.log("IMG SOURCE " + typeof imageUrl)
      const response = await fetch(`/api/auth/register`, {
        method: 'POST',
        body: JSON.stringify({
          first_name: formData.get("first_name"),
          last_name: formData.get("last_name"),
          email: formData.get("email"),
          password: formData.get("password"),
          image: imageUrl
        })
       });
       if (response.status === 200) {
        router.push("/sign-in")
       }
    } else {
      console.error("No image selected");
    }
   }
  

  return (
    <div>
    <form onSubmit={onSubmit} className='flex flex-col w-1/3'>
      <input type="file" name="image" onChange={handleImgUpload} className='mb-2' />
      <input type="text" name="first_name" placeholder='First name' className='h-12 mb-2 text-black' />
      <input type="text" name="last_name" placeholder='Last name' className='h-12 mb-2 text-black' />
      <input type="email" name="email" placeholder='Email' className='h-12 mb-2 text-black' />
      <input type="password" name="password" placeholder='Password' className='h-12 text-black' />
      <button type='submit' className='h-12 bg-blue-500 text-white'>Submit</button>
    </form>
    {
      imageSrc && <img src={imageSrc} />
    }
    
    </div>
  )
}
