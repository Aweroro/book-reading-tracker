"use client"
import React from 'react';

const AuthHeader = () => {
    return (
      <nav className='flex justify-between bg-white overflow-hidden p-8 py-2 fixed inset-x-20 top-2 z-10 '>
           <header 
            className='lg:text-2xl sm:text-xl md:text-2xl text-[#6366F1] font-bold cursor-pointer font-serif mx-4'>
               Booktroll 
            </header>
       </nav>
      )
    
}

export default AuthHeader;
