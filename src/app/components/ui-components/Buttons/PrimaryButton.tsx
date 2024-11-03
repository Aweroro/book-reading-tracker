"use client"
import React, { ReactNode } from 'react'

interface IProps {
    title: string;
    onClick?:() => void;
    className?: string;
    icon?: ReactNode;
}

const PrimaryButton = ({title, onClick, className, icon} : IProps) => {
  return (
    <button 
    onClick={onClick}
    className={`bg-[#6366F1] text-white flex justify-center py-2 px-4 rounded-xl ${className}`}>
      {icon}
      {title}
    </button>
  )
}

export default PrimaryButton;
