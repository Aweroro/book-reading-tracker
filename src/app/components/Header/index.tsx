"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import PrimaryButton from '../ui-components/Buttons/PrimaryButton';
//Todo: Change app name
const Header = () => {
    const router = useRouter();

    const handleHomeClick = () => {
        router.refresh();
        console.log('refresh')
    }

    
  return (
    <nav className='flex justify-between overflow-hidden p-12'>
      <header 
      onClick={() => {handleHomeClick}}
      className='text-2xl cursor-pointer font-serif'>
      Booktroll 
      </header>
      <div className='text-2xl mx-4 flex space-x-4'>
        <div className='py-2 cursor-pointer'>
        Log in
        </div>
       <div>
       <PrimaryButton
       title='Get Started'
       className=''
       onClick={() => router.push(``)}
       />
       </div>
      </div>
    </nav>
  )
}

export default Header;
