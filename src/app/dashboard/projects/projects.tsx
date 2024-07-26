'use client'
import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import ProjectList from './projects-components/projectList';
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

export default function Projects() {
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
  } else {
    // Loop trought uploaded images on Firebase
    // If id from selected projects list exists then use it as delete method for Firebase
  }
}

console.log(selectedProjectsList)
  return (
    <div className='mt-20'>
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

        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
            <h2 className='text-3xl text-[#495057] mb-4'>OBJAVLJENI PROJEKTI</h2>
            <div className='flex flex-col xsm:flex-row'>
                <button onClick={handleOpen} className='flex items-center bg-[#6D89C7] px-6 py-2 mb-4 xsm:mb-0 xsm:mr-4 text-white'><FaRegTrashAlt className='mr-2'/>Obriši projekat</button>
                <Link href="/dashboard/projects/upload"><button className='flex items-center bg-[#222222] px-6 py-2 text-white'><VscAdd className='mr-2'/>Dodaj projekat</button></Link>
            </div>
        </div>
        <div>
      
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
        <ProjectList pushSelectedProjects={pushSelectedProjects}/>
    </div>
  )
}
