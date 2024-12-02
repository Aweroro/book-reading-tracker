import React from 'react';
import Spinner from '../ui-components/spinner/Spinner';

interface StatisticCardProps{
  title: string;
  description: string;
  className?: string;
  count: number;
  bookTitles: string[];
  isLoading: boolean;
}

const StatisticCard = (
  {title, description, className, count, bookTitles, isLoading} : StatisticCardProps
) => {
  return (
       <div className={`relative bg-[#f8bbd0] p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:ring-1 ring-indigo-500 hover:shadow-xl ${className}`}>
        <div className='flex flex-col'>
          <h1 className='text-md md:text-xl font-semibold'>
            {title}
            <p className='text-blue-500'>{count}</p>
          </h1>
        </div>
        <div className='flex items-center p-4'>
        {isLoading ? (
          <Spinner className='!h-full !w-full'/>
        ) : bookTitles.length > 0 ? (
          <ul className="list-disc pl-4">
            {bookTitles.map((title, index) => (
              <li key={index} className="text-md md:text-md font-medium">{title}</li>
            ))}
          </ul>
        ) : (
          <p className='text-md md:text-xl font-medium'>{description}</p>
        )}
      </div>
       </div>
  )
}

export default StatisticCard;
