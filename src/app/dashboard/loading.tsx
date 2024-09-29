import React from 'react'
import BarLoader from 'react-spinners/BarLoader'
export default function Loading() {
  return (
    <div className='flex justify-center items-center 
         h-screen'>
        <BarLoader />
    </div>
  )
}
