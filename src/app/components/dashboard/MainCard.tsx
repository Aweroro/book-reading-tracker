import React from 'react';
import SecondaryButton from '../ui-components/buttons/SecondaryButton';

const MainDashboardCard = () => {
  return (
       <div className="relative p-4 mt-6 md:mt-0 bg-[#d1c4e9] h-[300px] md:h-[350px] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:shadow-xl">
         <div className='flex flex-col space-y-4 p-6 md:p-12'>
             <h1 className='text-xl md:text-2xl font-semibold flex justify-center'> Hello, Hadi!</h1>
             <p className='text-md md:text-xl font-medium flex justify-center'> Start your journey into becoming an efficient reader</p>
             <p className='text-md md:text-xl font-medium flex justify-center'> Click the button below to add a new book</p>
         </div>
         <div className='flex justify-center'>
            <SecondaryButton
            className=''
            title='Get Started'/>
         </div>
    </div>
  )
}

export default MainDashboardCard;
