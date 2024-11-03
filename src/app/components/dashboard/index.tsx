"use server"
import React from 'react'
import DashboardHeader from './DashboardHeader';
import SideBar from './SideBar';
import EmptyStateAction from './EmptyStateAction';

const DashboardComponent = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
        <div className='fixed'>
        <DashboardHeader/>
         <SideBar/>
        </div>
      <div className='container'>
        <EmptyStateAction/>
      </div>
    </div>
  )
}

export default DashboardComponent;
