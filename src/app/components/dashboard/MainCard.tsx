import React, {useEffect, useState} from 'react';
import SecondaryButton from '../ui-components/buttons/SecondaryButton';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import Link from 'next/link';

const MainDashboardCard = () => {
  const [userName, setUserName] = useState<string>('Guest');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email?.split("@")[0] || "User");
      } else {
        setUserName('Guest');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
       <div className="relative p-4 mt-6 md:mt-0 bg-[#d1c4e9] h-full md:h-[350px] rounded-lg shadow-lg overflow-hidden transform transition-transform hover:shadow-xl">
         <div className='flex flex-col space-y-4 p-6 md:p-12'>
             <h1 className='text-xl md:text-2xl font-semibold flex justify-center'> Hello, {userName}!</h1>
             <p className='text-md md:text-xl font-medium flex justify-center'> Become a better reader and improve your skills!</p>
             <p className='text-md md:text-xl font-medium flex justify-center'> Click the button below to add a new book</p>
         </div>
         <Link href='/books' className='flex justify-center'>
            <SecondaryButton
            title='Get Started'/>
         </Link>
    </div>
  );
}

export default MainDashboardCard;


