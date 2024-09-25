'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import { storage } from '@/app/firebaseConfig';
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable, UploadTaskSnapshot } from 'firebase/storage';
import Image from 'next/image';

interface ImageRef {
  fileRef: File,
  imgSrc: string
}
export default function Form() {
  const router = useRouter();
  const [image, setImage] = useState<ImageRef>();
  const [imageSrc, setImageSrc] = useState<string>();
  const handleImgUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imgObj = {
        fileRef: e.target.files[0],
        imgSrc: URL.createObjectURL(e.target.files[0])
      }
      setImage(imgObj);
    }
   
  }
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (image?.fileRef) {
      const storageRef = ref(storage, `images/${image?.fileRef.name}`);
      await uploadBytes(storageRef, image?.fileRef);

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
    <div className='p-10 flex justify-center items-center flex-col m-auto'>
      <div className='w-[95%] sm:w-2/3 xl:w-1/3 text-center drop-shadow-lg bg-[#FAFAFA] flex flex-col p-8'>
      <div className='w-1/4 mx-auto mb-10'>
          <Image className='w-full' src={`https://firebasestorage.googleapis.com/v0/b/code-design-36e78.appspot.com/o/logo%2Fcode-design-logo.jpg?alt=media&token=a58dd669-680a-425c-b7bc-5bb70fb05ffd`} height={500} width={500} alt="Code Design logo"/>
        </div>
        <div className=''>
          <h3 className='text-2xl font-semibold'>CODE Design</h3>
          <p className='text-xl'>Arhitektonski biro</p>
        </div>
        <h2 className='text-4xl font-semibold mb-8 mt-12'>PRIJAVI SE</h2>
        {
          image && 
          <div className='w-40'>
            <Image className='w-full' src={image?.imgSrc} height={500} width={500} alt="Uploaded image"/>
          </div>
        }
        <form onSubmit={onSubmit} className='flex flex-col mt-4'>
          <input type="file" name="image" onChange={handleImgUpload} className='mb-12' />
          <input type="text" name="first_name" placeholder='First name' className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 mb-8' />
          <input type="text" name="last_name" placeholder='Last name' className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 mb-8' />
          <input type="email" name="email" placeholder='Email' className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 mb-8' />
          <input type="password" name="password" placeholder='Password' className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 mb-8' />
          <button type='submit' className='bg-[#222222] text-[#FAFAFA] h-[48px]'>Submit</button>
        </form>
      </div>
    </div>
    
  )
}
