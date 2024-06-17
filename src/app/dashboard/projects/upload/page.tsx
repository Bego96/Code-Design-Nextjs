'use client'
import React, { useState, useRef } from 'react'
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
import UploadedProjects from './uploadedProjects/uploadedProjects';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
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
              Da li ste sigurni da želite da obrišete?
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <div className="flex justify-between mt-10">
                  <button onClick={deleteProjects} className='w-[45%] py-2 bg-[#4F6071] text-white' >Obriši</button>
                  <button onClick={handleClose} className='w-[45%] py-2 bg-[#222222] text-white'>Odustani</button>
                </div>
              </Typography>
            </Box>
          </Fade>
        </Modal>

        {/*Navigation of upload projects*/}

        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
            <h2 className='text-3xl text-[#495057] mb-4'>NOVI PROJEKAT</h2>
            <div className='flex flex-col xsm:flex-row'>
                <Link href="/dashboard/projects"><button className='bg-[#4F6071] w-[200px] py-2 mb-4 xsm:mb-0 xsm:mr-4 text-white text-center'>Odustani</button></Link>
                <Link href="/dashboard/projects/upload"><button className='bg-gray-400 w-[200px] py-2 text-white text-center'>Snimi projekat</button></Link>
            </div>
        </div>
        <div>

          {/*Form with input fields*/}
          <div className='w-full md:w-1/2 mt-10'>
            <form>
              <input type="text" placeholder='Naziv' className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full'/>
              <div className='flex flex-col sm:flex-row mt-4'>
                <input type="text" placeholder='Lokacija' className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full sm:w-[70%] mr-auto' />
                <input type="date" placeholder="Datum" className='mt-4 sm:mt-0 border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full sm:w-[28%]'/>
                
              </div>
            </form>
          </div>
      
          {/*Component for list of uploaded projects*/}

          <UploadedProjects />

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
        
    </div>
  )
}
