'use client'
import React, { useState, useRef, ChangeEvent, FormEvent } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import { LuImagePlus } from "react-icons/lu";
import Image from 'next/image';
import { UploadTaskSnapshot, deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '@/app/firebaseConfig';
import { IoCloseSharp } from "react-icons/io5";
import { styled } from '@mui/material/styles';
import { addDoc, collection } from 'firebase/firestore';

interface ImageRef {
  id: number,
  imageSource: string,
  imageFileRef: File,
  imageName: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: window.innerWidth > 1280 ? '30%' : (window.innerWidth > 640 ? '60%' : '90%'),
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  zIndex: 10,
  outline: 'none'
};


const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface Images {
  imageSource: string,
  imageName: string
}

interface Project {
  projectName: string,
  projectLocation: string,
  projectDate: string,
  projectImages: Images[],
  projectUploadDate: Date
}

export default function UploadProjects() {
  const notify = (message: string) => toast(message);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const [image, setImage] = useState<ImageRef | null>(null)
  const [imageSrc, setImageSrc] = useState<ImageRef[]>([]);
  const [progressUpload, setProgressUpload] = useState<number>(0);

  const [projectName, setProjectName] = useState<string>('');
  const [projectLocation, setProjectLocation] = useState<string>('');
  const [projectDate, setProjectDate] = useState<string>('');

  
  const handleClose = () => {
    if (progressUpload > 0) {
      setProgressUpload(0);
    }
    
    setOpen(false);
  }

  const addImages = () => {
    // Add image to the project
    if (image && progressUpload === 100) {
     
        toast.success('Slika uspješno postavljena')
        setImageSrc(prevList => [...prevList, image])
        setImage(null)
        setProgressUpload(0)
        setOpen(false)
    } else {
      toast.error('Slika još nije postavljena!')
    }
    
  }

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {

    if (image) {
      setImage(null);
    }

    console.log(image)
    if (e.target.files && e.target.files[0]) {
      const imgObj = {
        fileRef: e.target.files[0],
        imgSrc: URL.createObjectURL(e.target.files[0]),
        imageName: e.target.files[0].name
      };
      
      
      if (imgObj?.fileRef) {
        const storageRef = ref(storage, `project_images/${imgObj?.fileRef.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imgObj.fileRef);
       
        uploadTask.on(
          "state_changed",
          (snapshot: UploadTaskSnapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressUpload(progress);
            console.log(`Upload is ${progress}% done`);
          },
          error => {
            console.log(error.message);
          },
          async () => {
            console.log("Upload complete");
            
            toast.success('Uploaded successfuly!')
            const imageUrl = await getDownloadURL(storageRef);

            const id = imageSrc.length === 0 ? 1 : imageSrc[imageSrc.length - 1].id + 1;

            const imageObject = {
              id: id,
              imageSource: imageUrl,
              imageFileRef: imgObj.fileRef,
              imageName: imgObj.imageName
            };

            
            setImage(imageObject);

              // Reset progress after upload completes
          }
        );
      }
    }
  }

  const uploadProject = (event: FormEvent<HTMLFormElement>) => {
    // Function to handle project upload
    event.preventDefault();

    if (projectName === '' || projectLocation === '' || projectDate === '' || imageSrc.length === 0 ) {
      notify('Molimo upišite informacije o projektu!')
    } else {

      const filterImageSources = imageSrc.map(({ id, imageSource, imageName }) => ({ id, imageSource, imageName }));
      const uploadedDate = new Date(); 
      // Convert both dates to their respective timestamps for comparison

      console.log(uploadedDate)

      const projectInfo: Project = {
        projectName: projectName,
        projectLocation: projectLocation,
        projectDate: projectDate,
        projectImages: filterImageSources,
        projectUploadDate: uploadedDate
      };
    
      const addProjectToDb = async () => {
        try {
          const addToDb = await addDoc(collection(db, "projects"), projectInfo).then(res => console.log("RESPONSE" + res));
          // Assuming addDoc returns an object with an id property
          setProjectName('');
          setProjectDate('');
          setProjectLocation('');
          setImageSrc([]);

          toast.success('Projekat uspješno sačuvan')
        } catch (error) {
          console.error("Error adding document: ", error);
          toast.error('Greška u sačuvanju projekta!')
        }
      };

      const res = addProjectToDb();
    //console.log("PROJECT INFO " + JSON.stringify(projectInfo))
    }
  }

  

  const deleteUploadedImg = async (imgName: File) => {
    if (image) {
      const storage = getStorage();
       
        const desertRef = ref(storage, `images/${imgName.name}`);

        deleteObject(desertRef).then(() => {
          toast.success('Slika uspješno izbrisana')
          setImage(null);
          setProgressUpload(0);
        }).catch((error) => {
          toast.error("Greška u brisanju slike!")
        });


    }
  }

  const deleteImage = async (imgName: File) => {
    for (let i = 0; i < imageSrc.length; i++) {
      if (imageSrc[i].imageFileRef === imgName) {
        const storage = getStorage();
        const desertRef = ref(storage, `images/${imgName.name}`);

        deleteObject(desertRef).then(() => {
          toast.success('Slika uspješno izbrisana')
        }).catch((error) => {
          toast.error("Greška u brisanju slike!")
        });

        const newArray = imageSrc.filter((item) => item !== imageSrc[i]);
        setImageSrc(newArray);
        
      }
    }
  }

  
  return (
    <div className='mt-20'>
      {/* Modal window for image upload */}
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
              <div className='w-full'>
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="dropzone-file" className="flex items-center justify-around w-full p-6 border-2 border-dashed rounded-lg cursor-pointer border-[#495057]">
                    <div className="flex items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
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
              
                  {progressUpload > 0 && (
                <div className='mt-4 w-full'>
                      {
                    image && <div className='flex justify-between'>
                      <p>{image?.imageName}</p>
                      <IoCloseSharp onClick={() => deleteUploadedImg(image?.imageFileRef)} size={25} color='#495057' className='bg-slate-200 bg-opacity-60 cursor-pointer' />
                  
                  </div>
                  }
                  <div className='h-2 bg-gray-300'>
                    <div className='h-full bg-blue-600' style={{ width: `${progressUpload}%` }}></div>
                  </div>
                </div>
              )}
              <div className="flex justify-between mt-10">
                <button onClick={handleClose} className='w-[45%] py-2 bg-[#4F6071] text-white'>Odustani</button>
                <button onClick={addImages} className='w-[45%] py-2 bg-gray-400 text-white'>Dodaj</button>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>

      {/* Navigation of upload projects */}
      <form onSubmit={uploadProject}>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start'>
          <h2 className='text-3xl text-[#495057] mb-4'>NOVI PROJEKAT</h2>
          <div className='flex flex-col xsm:flex-row'>
            <Link href="/dashboard"><button className='bg-[#4F6071] w-[200px] py-2 mb-4 xsm:mb-0 xsm:mr-4 text-white text-center'>Odustani</button></Link>
            <button type="submit" className='bg-gray-400 w-[200px] py-2 text-white text-center'>Snimi projekat</button>
          </div>
        </div>

        {/* Form with input fields */}
        <div className='w-full md:w-1/2 mt-10'>
          <input type="text" placeholder='Naziv' value={projectName} onChange={(e) => setProjectName(e.target.value)} className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full'/>
          <div className='flex flex-col sm:flex-row mt-4'>
            <input type="text" placeholder='Lokacija' value={projectLocation} onChange={(e) => setProjectLocation(e.target.value)} className='border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full sm:w-[70%] mr-auto' />
            <input type="text" placeholder="Datum" onChange={(e) => setProjectDate(e.target.value)} value={projectDate} className='mt-4 sm:mt-0 border border-[#495057] h-[48px] placeholder-[#495057] pl-4 w-full sm:w-[28%]'/>
          </div>
        </div>
      </form>

      {/* Component for list of uploaded images */}
      <div className='mt-10'>
        <span className='bg-[#495057] h-px block mb-10'></span>
        <div className='flex flex-wrap'>
          <div className='flex flex-wrap'>
            {imageSrc.length > 0 && (
              imageSrc.map((image) => (
                <div key={image.id}  className={`relative w-[200px] h-[200px] ${imageSrc.length === 1 ? 'ml-0 mb-0' : 'ml-4 mb-4'}`}>
                <IoCloseSharp onClick={() => deleteImage(image.imageFileRef)} size={25} color='#495057' className='bg-slate-200 bg-opacity-60 cursor-pointer absolute top-2 right-2' />
                  
                
                  <Image className="h-full w-full object-cover" src={image.imageSource} alt="Uploaded Image" width={150} height={150} />
                </div>
              ))
            )}
            <div onClick={handleOpen} className={`${imageSrc.length === 0 ? 'ml-0' : 'ml-4'} cursor-pointer border-dashed inline-block flex flex-col justify-center items-center w-[200px] h-[200px] border-[#495057] border-2`}>
            <LuImagePlus size={30} className='mx-auto mb-4' color='#495057'/>
            <p className='text-[#495057]'>Dodaj sliku</p>
          </div>
          </div>
          
        </div>
      
      </div>

      {/* Toaster for notifying user about success or error in uploading */}
      <Toaster toastOptions={{duration: 2000, style: {color: 'black', width: '500px', backgroundColor: ''}}}>
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
