import React from 'react';
import SecondaryButton from '../ui-components/Buttons/SecondaryButton';

const StatisticsCard = () => {
  return (
       <div className="relative cursor-pointer p-4 bg-[#bbdefb] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl max-w-5xl h-[300px]">
         <div className='flex flex-col space-y-4 p-10'>
             <h1 className='text-2xl font-semibold flex justify-center'> Hello, Hadi!</h1>
             <p className='text-xl font-medium flex justify-center'> Start your journey into becoming an efficient reader</p>
         </div>
         <div className='flex justify-center mt-8'>
            <SecondaryButton
            title='Get Started'/>
         </div>
    </div>
  )
}

export default StatisticsCard
