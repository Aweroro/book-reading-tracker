"use client"
import React, { useEffect, useState } from 'react';
import DashboardHeader from '../page-compoents/DashboardHeader';
import MainDashboardBody from './MainDashboardBody';
import SideBar from '../page-compoents/SideBar';

const DashboardComponent = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleSidebar = (isVisible: boolean) => {
    setIsSidebarVisible(isVisible);
  };

useEffect(() => {
    const updateSidebarVisibility = () => {
      const smallScreen = window.innerWidth < 1200;
      setIsSidebarVisible(!smallScreen);
    };

    updateSidebarVisibility();

    window.addEventListener('resize', updateSidebarVisibility);

    return () => window.removeEventListener('resize', updateSidebarVisibility);
  }, []);

  return (
    <div className='min-h-screen overflow-hidden'>
      <DashboardHeader />

      <div className="flex pt-14">
        <SideBar onToggle={handleToggleSidebar} />
        <div
          className={`transition-all duration-300 ${
            isSidebarVisible ? 'lg:ml-[344px]' : 'lg:ml-0'
          } flex-1`}
        >
          <MainDashboardBody />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;

