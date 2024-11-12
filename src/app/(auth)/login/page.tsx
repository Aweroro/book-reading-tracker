"use client"
import React from 'react'
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
        <h1 className='text-3xl font-bold ml-24 mt-16'>
            Log in
        </h1>
        <div className='flex flex-col items-center mt-10 max-w-xl'>
            <button className='flex items-center gap-x-2 font-bold border px-16 py-3 rounded-md shadow-sm hover:bg-gray-100'>
                <GoogleIcon className='size-5'/>
                Continue with Google
            </button>
            <form className='flex flex-col justify-start mt-6 space-y-4'>
                <input
                type='email'
                className='border w-[320px] rounded-md shadow pl-2 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150'
                placeholder='Enter your email...'
                />
                <input
                type='password'
                className='border px-2 rounded-md shadow pl-2 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150'
                placeholder='Enter your password...'
                />
                <PrimaryButton
                title='Log in'
                />
            </form>
            <div className='flex space-x-2 text-sm font-light mt-10 text-gray-700'>
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

