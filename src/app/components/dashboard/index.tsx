"use server"
import React from 'react'
import DashboardHeader from './DashboardHeader';
import SideBar from './SideBar';
import EmptyStateAction from './EmptyStateAction';

const DashboardComponent = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
      <DashboardHeader/>
      <div className='flex'>
      <SideBar/>   
      <EmptyStateAction/>
      </div>
    </div>
  )
}

export default DashboardComponent;
