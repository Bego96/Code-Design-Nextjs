'use client'
import React, { useState, useRef, ChangeEvent } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { duration } from '@mui/material';
import { AiOutlineClose } from "react-icons/ai";
import zIndex from '@mui/material/styles/zIndex';
import Link from 'next/link';
import { LuImagePlus } from "react-icons/lu";
import Image from 'next/image';

interface ImageRef {
  id: number,
  fileRef: File,
  imgSrc: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  zIndex: 10
};

export default function UploadProjects() {
  const dateInput = useRef<HTMLInputElement>(null);
  const notify = (message: string) => toast(message);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [image, setImage] = useState<ImageRef[]>([]);
  const [imageSrc, setImageSrc] = useState<string>();


  const [selectedProjectsList, setSelectedProjectsList] = useState<any[]>([]);

const pushSelectedProjects = (value: any) => {
  setSelectedProjectsList(prevList => [...prevList, value]);
};

const deleteProjects = () => {
  if (selectedProjectsList.length === 0) {
    handleClose();
    notify('You didnt select any projects')
  }
}

const addImages = () => {

}

const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
      let id;
      if (image.length === 0) {
        id = 1;
      } else {
        // If array already has some elements, get last one's id and assign it
        const lastId = image[image.length - 1];
        id = lastId.id++;
      }

      const imgObj = {
        id: id,
        fileRef: e.target.files[0],
        imgSrc: URL.createObjectURL(e.target.files[0])
      }
      
      setImage(prevList => [...prevList, imgObj]);

     
    }
}


const uploadProject = () => {

}

console.log(image)
console.log(selectedProjectsList)
  return (
    <div className='mt-20'>

        {/*Modal window for image upload*/}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
            
              <Typography id="transition-modal-title" className="text-center" variant="h6" component="h2">
              <div>
                
                  <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file" className="flex items-center justify-center w-full p-6 border-2 border-dashed rounded-lg cursor-pointer border-[#495057]">
                          <div className="flex items-center justify-center pt-5 pb-6">
                              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                              </svg>
                              <div className='flex flex-col'>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                              </div>
                          </div>
                          <input id="dropzone-file" onChange={uploadImage} type="file" className="hidden" />
                      </label>
                  </div> 
                
              </div>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <div className="flex justify-between mt-10">
                  <button onClick={handleClose} className='w-[45%] py-2 bg-[#4F6071] text-white' >Odustani</button>
                  <button onClick={addImages} className='w-[45%] py-2 bg-[#222222] text-white'>Dodaj</button>
                </div>
              </Typography>
              
            </Box>
          </Fade>
        </Modal>

        {/*Navigation of upload projects*/}
        <form onSubmit={uploadProject}>
          <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
              <h2 className='text-3xl text-[#495057] mb-4'>NOVI PROJEKAT</h2>
              <div className='flex flex-col xsm:flex-row'>
                  <Link href="/dashboard/projects"><button className='bg-[#4F6071] w-[200px] py-2 mb-4 xsm:mb-0 xsm:mr-4 text-white text-center'>Odustani</button></Link>
                  <Link href="/dashboard/projects/upload"><button type="submit" className='bg-gray-400 w-[200px] py-2 text-white text-center'>Snimi projekat</button></Link>
              </div>
          </div>
       

          {/*Form with input fields*/}
            <div className='w-full md:w-1/2 mt-10'>
              
                <input type="text" placeholder='Naziv' className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full'/>
                <div className='flex flex-col sm:flex-row mt-4'>
                  <input type="text" placeholder='Lokacija' className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full sm:w-[70%] mr-auto' />
                  <input type="date" placeholder="Datum" className='mt-4 sm:mt-0 border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full sm:w-[28%]'/>
                  
                </div>
              
            </div>
          </form>
          {/*Component for list of uploaded images*/}
          
          <div className='mt-10'>

            <span className='bg-[#495057] h-px block mb-10'></span>
            <div className='flex flex-wrap'>
              <div className='flex flex-wrap'>
                {image && 
                image.map(img => (
                  <div className='w-full md:w-[150px] max-h-[150px] mr-4' key={img?.id}> <Image className='w-full h-full object-cover' src={img?.imgSrc} height={500}  width={500} alt="image"/></div>
                ))
                }
                
              </div>
            
              <div onClick={handleOpen} className='cursor-pointer border-dashed inline-block flex flex-col justify-center items-center w-[150px] h-[150px] border-[#495057] border-2'>
                <LuImagePlus size={30} className='mx-auto mb-4' color='#495057'/>
                <p className='text-[#495057]'>Dodaj sliku</p>
              </div>

            </div>
            
          </div>
          {/*Toaster for notifing user about success or error in uploading*/}

          <Toaster toastOptions={{duration: 2000, style: {color: 'white', width: '500px', backgroundColor: 'rgba(255, 0, 0, 0.7)'}}}>
            {(t) => (
              <ToastBar toast={t}>
                {({ icon, message }) => (
                  <>
                    {icon}
                    {message}
                    {t.type !== 'loading' && (
                      <button onClick={() => toast.dismiss(t.id)}><AiOutlineClose size={20}/></button>
                    )}
                  </>
                )}
              </ToastBar>
            )}
          </Toaster>
        
        
    </div>
  )
}
