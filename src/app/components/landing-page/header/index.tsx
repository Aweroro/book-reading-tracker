"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import PrimaryButton from '../../ui-components/Buttons/PrimaryButton';

const Header = () => {
    const router = useRouter();

    const handleHomeClick = () => {
        router.refresh();
        console.log('refresh')
    }

    
  return (
    <nav className='flex justify-between overflow-hidden lg:p-12 md:p-12 sm:p-8 sm:border-b-4 lg:border-b-0 md:border-b-0'>
      <header 
        onClick={() => {handleHomeClick}}
        className='text-4xl text-[#6366F1] font-bold cursor-pointer font-serif'>
        Booktroll 
      </header>
      <div className='text-2xl mx-4 flex space-x-4'>
        <div 
        className='py-2 cursor-pointer'
        onClick={() => alert('lol implement log in')}>
        Log in
        </div>
       <div>
       <PrimaryButton
       title='Get Started'
       className=''
       onClick={() => alert('lol implement sign in')}
       />
       </div>
      </div>
    </nav>
  )
}

export default Header;
