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
    className={`bg-white border-2 border-[#6366F1] text-[#6366F1] flex justify-center py-2 px-4 rounded-full hover:text-white hover:bg-[#6366F1] ${className}`}>
      {icon}
      {title}
    </button>
  )
}

export default SecondaryButton;
