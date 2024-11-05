import React from 'react'
import DashboardHeader from '../page-compoents/DashboardHeader';
import SideBar from '../page-compoents/SideBar';
import EmptyStateAction from './EmptyStateAction';

const DashboardComponent = () => {
  return (
    <div className='min-h-screen overflow-hidden'>
    <DashboardHeader />
    <div className='flex pt-14'> 
      <div className='fixed'>
        <SideBar />
      </div>
      <div className='container ml-80'> 
        <EmptyStateAction />
      </div>
    </div>
  </div>
  )
}

export default DashboardComponent;
