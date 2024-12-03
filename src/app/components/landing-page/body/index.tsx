"use client"
import React from 'react'
import Image from 'next/image';
import PrimaryButton from '../../ui-components/buttons/PrimaryButton';
import Link from 'next/link';
import MaxWidthWrapper from '../../ui-components/wrapper/MaxWidthWrapper';

const LandingPageBody = () => {
  return (
    <MaxWidthWrapper>
    <div className='w-full h-full p-4 md:p-10 mt-4 md:mt-0 lg:mt-20'>
    <div className='grid lg:grid-cols-2 gap-y-6 md:space-x-5'>
    <div className='flex flex-col gap-y-3'>
     <div className='flex justify-center'>
        <h1 className='font-bold text-xl md:text-3xl lg:text-5xl '>Track your knowledge gain and reading progress.</h1>
      </div>
      <div className='flex justify-center'>
        <p className='text-[#424242] text-lg md:text-xl lg:text-2xl'>Keep track of all the books you read and create a list of books you plan to read.</p>
      </div>
      <div className='mt-0 justify-center lg:mt-10 lg:justify-start flex'>
        <Link href={'/signup'}>
        <PrimaryButton
        title='Get Started'
        className='font-bold text-xl'
        />
        </Link>
      </div>
     </div>
     <div className='border rounded-xl w-full h-[200px] lg:h-[400px] lg:w-[700px] shadow flex justify-center'>
        <Image
        src={'/images/landing-page.png'}
        alt='Landing page image'
        width={700}
        height={500}
        />
      </div>
    </div>
    </div>
    </MaxWidthWrapper>
  )
}

export default LandingPageBody;
