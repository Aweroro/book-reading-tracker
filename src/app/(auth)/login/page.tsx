"use client";
import React from 'react';
import AuthHeader from '@/app/components/page-compoents/AuthHeader';
import GoogleIcon from '@/app/components/ui-components/icons/GoogleIcon';
import PrimaryButton from '@/app/components/ui-components/Buttons/PrimaryButton';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();

  return (
    <div className='flex container mx-auto max-w-xl'>
        <AuthHeader/>
      <div className='relative container mt-20 min-h-[80vh]'>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold ml-24 lg:ml-2 mt-16 md:mt-24 lg:mt-28'>
            Log in
        </h1>
        <div className='flex flex-col items-center mt-10 max-w-xl'>
            <button className='flex items-center gap-x-2 lg:gap-x-4 font-bold text-base lg:text-2xl border px-16 px-28 lg:px-32 py-3 lg:py-4 rounded-md shadow-sm hover:bg-gray-100'>
                <GoogleIcon className='size-5 lg:size-7'/>
                Continue with Google
            </button>
            <form className='flex flex-col justify-start mt-6 space-y-4'>
                <input
                type='email'
                className='border w-[420px] lg:w-[550px] rounded-md shadow pl-2 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150'
                placeholder='Enter your email...'
                />
                <input
                type='password'
                className='border w-[420px] lg:w-[550px] px-2 rounded-md shadow pl-2 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150'
                placeholder='Enter your password...'
                />
                <PrimaryButton
                className='text-base lg:text-2xl'
                title='Log in'
                />
            </form>
            <div className='flex space-x-2 text-sm lg:text-lg font-light mt-10 text-gray-700'>
                <p>Don't have an account?</p>
                <button
                onClick={() => router.push('/signup')}
                className='underline'>
                    Sign up
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;

