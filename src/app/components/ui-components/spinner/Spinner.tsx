import React from 'react';
import MaxWidthWrapper from '../wrapper/MaxWidthWrapper';

interface IProps {
  className?: string;
}

const Spinner = ({className}: IProps) => {
  return (
    <MaxWidthWrapper>
      <div className={`flex justify-center items-center h-screen ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
  </MaxWidthWrapper>
  )
}

export default Spinner
