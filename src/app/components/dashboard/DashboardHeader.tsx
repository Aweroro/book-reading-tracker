import React from 'react'

const DashboardHeader = () => {
    return (
        <nav className='flex justify-between bg-[#6366F1] overflow-hidden p-8'>
          <header 
            className='text-4xl text-white font-bold cursor-pointer font-serif mx-4'>
            Booktroll 
          </header>
          <div className='border rounded-full font-bold bg-white text-[#6366F1] p-4 cursor-pointer mx-6'>
            AH
          </div>
        </nav>
      )
    
}

export default DashboardHeader;
