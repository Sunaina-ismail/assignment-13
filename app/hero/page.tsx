"use client"

import { useUser } from '@clerk/nextjs'

import React from 'react'


const Hero = () => {
  
  const { isLoaded, isSignedIn, user } = useUser()
  
  if (!isLoaded || !isSignedIn) {
    return null
  }
  return (
  <div className='h-screen text-center gap-y-6 flex flex-col items-center justify-center '>
    
    <h1 className=' text-3xl  md:text-6xl lg:text-5xl xl:text-6xl font-bold '>Hello, {user.firstName} welcome to Clerk</h1>
    <p className="text-xl text-gray-700 mt-2">Thanks for testing my website. We&apos;re glad to have you here!</p></div>

  )
}

export default Hero

 

