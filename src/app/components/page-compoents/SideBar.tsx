"use client";
import React, { useEffect, useState } from 'react';
import PrimaryButton from '../ui-components/Buttons/PrimaryButton';
import { 
    HomeIcon, 
    BookOpenIcon, 
    ChartBarIcon,  
    ArrowRightStartOnRectangleIcon, 
    Bars4Icon 
} from '@heroicons/react/24/outline';

const Sidebar = () => {
    const [isSideBarVisible, setIsSideBarVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSideBarVisible(prev => !prev);
    }

    useEffect(() => {
        const handleResize = () => {
            const smallScreen = window.innerWidth < 1200;
            setIsSmallScreen(smallScreen);
            setIsSideBarVisible(!smallScreen); 
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='relative'>
           <div className={`absolute left-0 px-4 text-[#6366F1] ${isSideBarVisible ? 'bg-[#F3F4F6]' : 'bg-white'}`}>
                <Bars4Icon
                    className='size-8 cursor-pointer'
                    onClick={handleToggleSidebar}
                />
                </div>
          
            <aside
                className={`fixed top-22 left-0 w-[344px] bg-[#F3F4F6] min-h-screen flex flex-col transition-transform duration-300 ease-in-out z-50 ${
                    isSideBarVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className={`absolute left-[300px] text-[#6366F1] ${isSideBarVisible ? 'bg-[#F3F4F6]' : 'bg-white'}`}>
                <Bars4Icon
                    className='size-8 cursor-pointer'
                    onClick={handleToggleSidebar}
                />
                </div>

                <nav className="flex-1 p-6 flex flex-col mt-6">
                    <ul className="space-y-4 text-xl font-medium">
                        <li>
                            <a href="/dashboard" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
                                <HomeIcon className="mr-3 text-[#6366F1] size-8" />
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="/books" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
                                <BookOpenIcon className="mr-3 text-[#6366F1] size-8" />
                                <span>Books</span>
                            </a>
                        </li>
                        <li>
                            <a href="/progress" className="flex items-center p-2 text-black rounded-lg hover:bg-[#6366F1] hover:text-white transition">
                                <ChartBarIcon className="mr-3 text-[#6366F1] size-8" />
                                <span>Progress</span>
                            </a>
                        </li>
                    </ul>
                    <div className="p-4 border-t border-gray-700 mt-auto mb-16">
                        <PrimaryButton
                            title='Log Out'
                            className='w-full flex gap-x-4 align-middle items-center text-xl'
                            icon={<ArrowRightStartOnRectangleIcon className='size-8' />}
                            onClick={() => alert('Dey play')}
                        />
                    </div>
                </nav>      
            </aside>

            {isSideBarVisible && isSmallScreen && (
                <div
                    className='fixed inset-0 bg-black opacity-20 z-40'
                    onClick={handleToggleSidebar} 
                />
            )}

        </div>
    );
};

export default Sidebar;


