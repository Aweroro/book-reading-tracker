"use client"
import React from 'react';

const DashboardHeader = () => {
    return (
      <nav className='flex justify-between bg-white overflow-hidden p-8 py-2 fixed inset-x-0 top-0 z-10 shadow-md'>
           <header 
            className='text-2xl text-[#6366F1] font-bold cursor-pointer font-serif mx-4'>
               Booktroll 
            </header>
            <div className='border rounded-full font-bold bg-gray-300 text-[#6366F1] p-2 cursor-pointer mx-6'>
                AH
             </div>
       </nav>
      )
    
}

export default DashboardHeader;