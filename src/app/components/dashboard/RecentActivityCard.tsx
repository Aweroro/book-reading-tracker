import React from 'react';

const RecentActivityCard = () => {
  return (
       <div className="relative cursor-pointer bg-[#f8bbd0] p-4 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl max-w-5xl h-[300px]">
         <div className='flex justify-center items-center p-20'>
             <h1 className='text-2xl font-medium'> No recent activity has been recorded!</h1>
         </div>
       </div>
  )
}

export default RecentActivityCard;
