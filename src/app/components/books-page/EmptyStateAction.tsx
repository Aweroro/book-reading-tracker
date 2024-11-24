"use client"
import React from 'react'
import Image from 'next/image';
import EmptyStateImage from '/Users/Hardee/book-reading-tracker/public/images/book4.png'
import PrimaryButton from '../ui-components/buttons/PrimaryButton';
import { PlusIcon } from '@heroicons/react/24/outline';

const EmptyStateAction = () => {
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="sm:max-w-[470px] w-full flex flex-col justify-center sm:w-[470px]">
                <div className="w-full flex justify-center items-center mb-[30px]">
                    <Image
                        src={EmptyStateImage}
                        alt="empty-state-icon"
                        width={100}
                        height={100}
                        className="w-[99px] h-[99px]"
                    />
                </div>
                <div className="flex w-full flex-col justify-center gap-[15px] text-center">
                    <div className="font-[500] text-[24px] text-black leading-[30.24px]">You currently do not have any books!</div>
                    <div className="font-[500] text-[18px] leading-[22.68px] text-[#292d32]">Click the button below to add one</div>
                </div>
                <div className='flex justify-center mt-6'>
                    <PrimaryButton
                    title='Add book'
                    icon={<PlusIcon className='size-6'/>}
                    className='flex items-center gap-x-2 px-4'
                    onClick={() => alert('sure bro')}
                    />
                </div>
            </div>
        </div>
    );
}

export default EmptyStateAction
