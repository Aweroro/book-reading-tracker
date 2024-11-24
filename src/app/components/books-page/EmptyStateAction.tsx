"use client"
import React from 'react'
import Image from 'next/image';
import EmptyStateImage from '/Users/Hardee/book-reading-tracker/public/images/book4.png'
import PrimaryButton from '../ui-components/buttons/PrimaryButton';
import { PlusIcon } from '@heroicons/react/24/outline';
import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';

const EmptyStateAction = () => {
    return(
       <MaxWidthWrapper>
         <div className="flex h-screen justify-center items-center">
            <div className="w-full flex flex-col justify-center">
                <div className="w-full flex justify-center items-center mb-[30px]">
                    <Image
                        src={EmptyStateImage}
                        alt="empty-state-icon"
                        width={100}
                        height={100}
                        className="w-[59px] h-[59px] md:w-[99px] md:h-[99px]"
                    />
                </div>
                <div className="flex w-full flex-col justify-center gap-[15px] text-center">
                    <div className="font-[500] text-[14px] md:text-[24px] text-black leading-[30.24px]">You currently do not have any books!</div>
                    <div className="font-[500] text-[12px] md:text-[18px] leading-[22.68px] text-[#292d32]">Click the button below to add one</div>
                </div>
                <div className='flex justify-center mt-6'>
                    <PrimaryButton
                    title='Add book'
                    icon={<PlusIcon className='size-3 md:size-6'/>}
                    className='flex items-center gap-x-2 px-4 text-xs md:text-base'
                    onClick={() => alert('sure bro')}
                    />
                </div>
            </div>
        </div>
       </MaxWidthWrapper>
    );
}

export default EmptyStateAction
