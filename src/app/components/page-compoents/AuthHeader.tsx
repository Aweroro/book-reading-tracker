import React from 'react';
import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';

const AuthHeader = () => {
    return (
      <MaxWidthWrapper>
         <nav className='flex justify-between bg-white overflow-hidden p-8 py-2 fixed inset-x-20 top-0 z-10 '>
           <header 
            className='lg:text-2xl sm:text-xl md:text-2xl text-[#6366F1] font-bold cursor-pointer font-serif mx-4'>
               Booktroll 
            </header>
       </nav>
      </MaxWidthWrapper>
      )
}

export default AuthHeader;
