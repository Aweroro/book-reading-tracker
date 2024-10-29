"use client"
import React from 'react'
import Image from 'next/image';
import PrimaryButton from '../../ui-components/Buttons/PrimaryButton';
import PageImage from '/Users/Hardee/book-reading-tracker/public/analytic.png';

const LandingPageBody = () => {
  return (
    <div className='w-full h-full lg:p-40 md:p-30 sm:p-20'>
    <div className='grid lg:grid-cols-2 gap-y-12 grid-col-3 space-x-5'>
    <div className='flex flex-col gap-y-3'>
     <div className='flex justify-center'>
        <h1 className='lg:text-6xl font-bold text-5xl '>Track your knowledge gain and reading progress.</h1>
      </div>
      <div className='flex justify-center'>
        <p className='lg:text-4xl text-[#424242] text-3xl'>Keep track of all the books you read and create a list of books you plan to read.</p>
      </div>
      <div className='mt-10 flex md:justify-center sm:justify-center lg:justify-normal'>
        <PrimaryButton
        title='Get Started'
        className='h-20 w-40 font-bold text-xl'
        onClick={() => alert('lol implement sign in')}/>
      </div>
     </div>
     <div className='border-2 rounded-xl p-4 shadow w-full h-full flex justify-center'>
        <Image
        src={PageImage}
        alt='Landing page image'
        width={300}
        height={400}
        />
      </div>
    </div>
    </div>
  )
}

export default LandingPageBody;
