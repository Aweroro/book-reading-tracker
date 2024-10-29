// import React from 'react'

// const SideBar = () => {
//   return (
//     <aside>
//         <h2>Menu</h2>
//         <nav>
//             <ul>
//                 <li><a href='#' className='hover:text-gray-300'>Dashboard</a></li>
//                 <li><a href='#' className='hover:text-gray-300'>Books</a></li>
//                 <li><a href='#' className='hover:text-gray-300'>Progress</a></li>
//                 <li><a href='#' className='hover:text-gray-300'>Settings</a></li>
//             </ul>
//         </nav>
//     </aside>
//   )
// }

// export default SideBar

import React from 'react';
import PrimaryButton from '../ui-components/Buttons/PrimaryButton';
import { FiHome, FiBook, FiBarChart2, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <aside className="w-[344px] bg-[#F3F4F6] text-black min-h-screen flex flex-col ">
        <nav className="flex-1 p-6">
        <ul className="space-y-4 text-xl font-medium">
          <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
              <FiHome className="mr-3 text-[#6366F1]" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
              <FiBook className="mr-3 text-[#6366F1]" />
              <span>Books</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
              <FiBarChart2 className="mr-3 text-[#6366F1]" />
              <span>Progress</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
              <FiSettings className="mr-3 text-[#6366F1]" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <PrimaryButton
        title='Log Out'
        className='w-full'/>
      </div>
    </aside>
  );
};

export default Sidebar;

