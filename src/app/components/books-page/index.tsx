"use client"
import React, { useState } from 'react';
import DashboardHeader from '../page-compoents/DashboardHeader';
import EmptyStateAction from './EmptyStateAction';
import SideBar from '../page-compoents/SideBar';

const BooksComponent = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleSidebar = (isVisible: boolean) => {
    setIsSidebarVisible(isVisible);
  };

  return (
    <div className='min-h-screen overflow-hidden'>
      <DashboardHeader />

      <div className="flex pt-14">
        <SideBar onToggle={handleToggleSidebar} />
        {/* <div
          className={`transition-all duration-300 ${
            isSidebarVisible ? 'ml-[344px]' : 'ml-0'
          } flex-1`}
        >
          <EmptyStateAction />
        </div> */}
        <EmptyStateAction/>
      </div>
    </div>
  );
};

export default BooksComponent;


