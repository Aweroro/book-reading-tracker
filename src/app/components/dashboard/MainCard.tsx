import React from 'react';
import SecondaryButton from '../ui-components/Buttons/SecondaryButton';

const MainDashboardCard = () => {
  return (
       <div className="relative p-4 bg-[#d1c4e9] h-[350px] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:shadow-xl">
         <div className='flex flex-col space-y-4 p-12'>
             <h1 className='text-2xl font-semibold flex justify-center'> Hello, Hadi!</h1>
             <p className='text-xl font-medium flex justify-center'> Start your journey into becoming an efficient reader</p>
         </div>
         <div className='flex justify-center mt-8'>
            <SecondaryButton
            className=''
            title='Get Started'/>
         </div>
    </div>
  )
}

export default MainDashboardCard;
