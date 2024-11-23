import React from 'react';
//import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

interface StatisticCardProps{
  title: string;
  description: string;
  className?: string;
}

const EmptyStatisticCard = (
  {title, description, className} : StatisticCardProps
) => {
  return (
       <div className={`relative bg-[#f8bbd0] p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:ring-1 ring-indigo-500 hover:shadow-xl ${className}`}>
        <div className='flex flex-col'>
          <h1 className='text-xl font-semibold'>
            {title}
            <p className='text-blue-500'>0</p>
          </h1>
          {/* <ArrowRightCircleIcon className='w-6 h-6'/> */}
        </div>
         <div className='flex justify-center items-center p-20'>
             <h1 className='text-xl font-medium'>{description}</h1>
         </div>
       </div>
  )
}

export default EmptyStatisticCard;
