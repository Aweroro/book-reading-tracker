"use client"
import React, { ReactNode } from 'react'

interface IProps {
    title: string;
    onClick?:() => void;
    className?: string;
    icon?: ReactNode;
    type?: string;
    disabled?: boolean;
}

const PrimaryButton = ({title, onClick, className, type, icon, disabled} : IProps) => {
  return (
    <div 
    onClick={onClick}
    className={`bg-indigo-600 cursor-pointer text-white flex justify-center py-2 px-4 rounded-xl hover:saturate-200 ${className}`}>
      {icon}
      {title}
      {type}
      {disabled}
    </div>
  )
}

export default PrimaryButton;
