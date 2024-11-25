import React from 'react';
import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';
import { useRouter } from 'next/navigation';

const AuthHeader = () => {
   const router = useRouter();

   return (
      <MaxWidthWrapper>
         <nav className='flex bg-white overflow-hidden p-0 md:p-8 py-2 fixed inset-x-0 top-0 z-10'>
           <button 
            onClick={() => router.push('/')}
            className='text-xl md:text-2xl text-[#6366F1] font-bold cursor-pointer font-serif mx-4'>
               Booktroll 
          </button>
       </nav>
      </MaxWidthWrapper>
   )
}

export default AuthHeader;
