"use client";
import React from 'react'
import PrimaryButton from '../../ui-components/buttons/PrimaryButton';
import Link from 'next/link';
import MaxWidthWrapper from '../../ui-components/wrapper/MaxWidthWrapper';

const Header = () => {
   
  return (
   <MaxWidthWrapper>
     <nav className='flex justify-between overflow-hidden p-2 md:p-3 mx-0 md:mx-4 border-b-4 md:border-b-0'>
     <Link href='/'>
      <header 
          className='text-xl md:text-3xl text-[#6366F1] font-bold cursor-pointer font-serif'>
          Codex 
        </header>
     </Link>
      <div className='flex space-x-2'>
        <Link href={'/login'}>
          <div 
          className='py-2 text-sm md:text-xl cursor-pointer'
          >
          Log in
          </div>
        </Link>
       <div>
      <Link href={'/signup'}>
        <PrimaryButton
        title='Get Started'
        className='text-sm md:text-xl'
        />
      </Link>
       </div>
      </div>
    </nav>
   </MaxWidthWrapper>
  )
}

export default Header;
