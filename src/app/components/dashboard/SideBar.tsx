"use client"
import React, { useState } from 'react';
import PrimaryButton from '../ui-components/Buttons/PrimaryButton';
import { HomeIcon, BookOpenIcon, ChartBarIcon, Cog6ToothIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
    const [toggleSideBar, setToggleSideBar] = useState();
    
  return (
    <aside className="w-[344px] bg-[#F3F4F6] text-black min-h-screen flex flex-col">
        <nav className="flex-1 p-6 flex flex-col">
        <ul className="space-y-4 text-xl font-medium">
          <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
              <HomeIcon className="mr-3 text-[#6366F1] size-8" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
              <BookOpenIcon className="mr-3 text-[#6366F1] size-8" />
              <span>Books</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
              <ChartBarIcon className="mr-3 text-[#6366F1] size-8" />
              <span>Progress</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
              <Cog6ToothIcon className="mr-3 text-[#6366F1] size-8" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
        <div className="p-4 border-t border-gray-700 mt-auto mb-20">
            <PrimaryButton
            title='Log Out'
            className='w-full flex gap-x-4 align-middle items-center text-xl'
            icon={<ArrowRightStartOnRectangleIcon className='size-8'/>}
            onClick={() => alert('Dey play')}
            />
      </div>
    </nav>      
 </aside>
  );
};
export default Sidebar;

