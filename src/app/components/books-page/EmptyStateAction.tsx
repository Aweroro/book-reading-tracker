"use client"
import React from 'react'
import Image from 'next/image';
import EmptyStateImage from '../../../../public/images/book4.png';
import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';
import AddBookModal from '../ui-components/modal/AddBookModal';

const EmptyStateAction = ({fetchBooks}: {fetchBooks: () => void}) => {
  
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
                    <AddBookModal fetchBooks={async () => fetchBooks()} />
                </div>
            </div>
        </div>
       </MaxWidthWrapper>
    );
}

export default EmptyStateAction
