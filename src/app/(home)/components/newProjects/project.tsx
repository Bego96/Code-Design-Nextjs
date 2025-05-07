'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoArrowUpRight } from 'react-icons/go'

export default function Project({id, projectImages, projectDate, projectLocation, projectName}: any) {
  return (
    <Link href={`projects/${id}`} className="group block relative overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:shadow-2xl">
      <div className="h-[400px] lg:h-[500px] xl:h-[600px] relative">
        <Image
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          src={projectImages[0].imageSource}
          width={500}
          height={500}
          alt="Project image"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
        {/* Text overlay */}
        <div className="absolute bottom-4 left-4 right-4 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
          <h3 className="text-lg font-semibold mb-1">{projectName}</h3>
          <p className="text-sm">{`${projectLocation} ${projectDate}`}</p>
        </div>
        {/* Arrow icon on hover */}
        <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <GoArrowUpRight className="w-6 h-6" />
        </div>
      </div>
    </Link>
  )
}

