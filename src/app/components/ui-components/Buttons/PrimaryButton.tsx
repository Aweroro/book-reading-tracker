import React from 'react'

interface IProps {
    title: string;
    onClick?:() => void;
    className?: string;
}

const PrimaryButton = ({title, onClick, className} : IProps) => {
  return (
    <button 
    onClick={onClick}
    className={`bg-[#6366F1] text-white py-2 px-4 rounded-xl ${className}`}>
      {title}
    </button>
  )
}

export default PrimaryButton;
