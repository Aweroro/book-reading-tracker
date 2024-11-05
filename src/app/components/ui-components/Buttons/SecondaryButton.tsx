"use client"
import React, { ReactNode } from 'react'

interface IProps {
    title: string;
    onClick?:() => void;
    className?: string;
    icon?: ReactNode;
}

const SecondaryButton = ({title, onClick, className, icon} : IProps) => {
  return (
    <button 
    onClick={onClick}
    className={`bg-white border-2 border-[#00b0ff] text-[#00b0ff] flex justify-center py-2 px-4 rounded-full hover:text-white hover:bg-[#00b0ff] ${className}`}>
      {icon}
      {title}
    </button>
  )
}

export default SecondaryButton;
