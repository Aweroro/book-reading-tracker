"use server"
import React from 'react'
import Image from 'next/image';
import EmptyStateImage from '/Users/Hardee/book-reading-tracker/public/images/book4.png'

const EmptyStateAction = () => {
    return(
        <div className="w-full h-ful flex justify-center items-center">
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
                    <div className="font-[500] text-[24px] text-black leading-[30.24px]">Welcome to your personal reading tracker!</div>
                    <div className="font-[500] text-[18px] leading-[22.68px] text-[#292d32]">Your progress will be displayed here</div>
                </div>
            </div>
        </div>
    );
}

export default EmptyStateAction
