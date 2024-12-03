import React from 'react';
import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';
import Link from 'next/link';

const AuthHeader = () => {

   return (
      <MaxWidthWrapper>
         <nav className='flex justify-start bg-white overflow-hidden p-0 md:p-3 py-2 '>
         <Link href={'/'}>
            <button 
               className='text-xl md:text-2xl text-[#6366F1] font-bold cursor-pointer font-serif mx-4'>
                  Booktroll 
            </button>
         </Link>
       </nav>
      </MaxWidthWrapper>
   )
}

//fixed inset-x-0 top-0 z-10

export default AuthHeader;
