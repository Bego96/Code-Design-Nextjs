'use client'
import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import ProjectList from './projects-components/projectList';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import { doc, deleteDoc, collection, getDocs, query, orderBy, snapshotEqual } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getStorage, ref, deleteObject } from "firebase/storage";

interface ImageRef {
  id: number;
  imageSource: string;
  imageFileRef: File;
  imageName: string;
}

interface Project {
  id: string;
  projectName: string;
  projectLocation: string;
  projectDate: string;
  projectImages: ImageRef[];
  projectUploadDate: Date;
}

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
  const router = useRouter();
  const notify = (message: string) => toast(message);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedProjectsList, setSelectedProjectsList] = useState<any[]>([]);
  const [projects, setProjects] = useState<Project[]>([])


  const pushSelectedProjects = (value: any) => {
    setSelectedProjectsList(prevList => [...prevList, value]);
  };

  const removeSelectedProjects = (value: any) => {
    setSelectedProjectsList(prevList => prevList.filter(selectedProject => selectedProject !== value));
    console.log(selectedProjectsList);
  }

  const getAllDocuments = async () => {
    try {
      const listCollection = collection(db, "projects");
      const querySnapshot = await getDocs(query(listCollection, orderBy("projectUploadDate", "desc")));
      
      const snapShotResult =  querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          projectImages: data.projectImages,
        } as Project;
      });
      
      setProjects(snapShotResult)
      return snapShotResult;
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return [];
    }
  };



  const deleteProjects = async () => {
    if (selectedProjectsList.length === 0) {
      handleClose();
      notify('Niste označili ni jedan projekat');
    } else {
      try {
        const allDocuments = await getAllDocuments();
        const storage = getStorage();

        for (let i = 0; i < selectedProjectsList.length; i++) {
          const selectedProject = selectedProjectsList[i];

          for (let j = 0; j < allDocuments.length; j++) {
            const document = allDocuments[j];
            
            if (selectedProject === document.id) {
              const images = document.projectImages;
              console.log(images)
              for (let x = 0; x < images.length; x++) {
                const desertRef = ref(storage, `images/${images[x].imageName}`);

                try {
                  await deleteObject(desertRef);
                  toast.success("Slike izbrisane");
                } catch (error) {
                  toast.error("Greška u brisanju slika");
                }
              }
            }
          }
          await deleteDoc(doc(db, "projects", selectedProject));
        }
        handleClose();
        window.location.reload()
        toast.success('Uspješno izbrisano');
        
      } catch (err) {
        console.log(err);
        toast.error('Greška u brisanju');
      }
    }
  }

  useEffect(() => {
    getAllDocuments();
  },[])

  console.log(projects)

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
                <button onClick={deleteProjects} className='w-[45%] py-2 bg-[#4F6071] text-white'>Obriši</button>
                <button onClick={handleClose} className='w-[45%] py-2 bg-[#222222] text-white'>Odustani</button>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
        <h2 className='text-3xl text-[#495057] mb-8'>OBJAVLJENI PROJEKTI</h2>
        <div className='flex flex-col xsm:flex-row'>
          <button disabled={projects.length === 0} onClick={handleOpen} className={`flex items-center ${projects.length === 0 ? 'bg-[#95b2f2]' : 'bg-[#6D89C7] hover:bg-[#5A7ECE]'} px-6 py-2 mb-4 xsm:mb-0 xsm:mr-4 text-white`}>
            <FaRegTrashAlt className='mr-2'/>Obriši projekat
          </button>
          <Link href="/dashboard/projects/upload">
            <button className='flex items-center bg-[#222222] px-6 py-2 text-white'>
              <VscAdd className='mr-2'/>Dodaj projekat
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Toaster toastOptions={{ duration: 2000, style: { color: '', width: '500px', backgroundColor: '' } }}>
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
      <ProjectList pushSelectedProjects={pushSelectedProjects} removeSelectedProjects={removeSelectedProjects} />
    </div>
  )
}
