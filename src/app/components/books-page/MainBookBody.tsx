import React from 'react';
import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';
import PrimaryButton from '../ui-components/buttons/PrimaryButton';
import { PlusIcon } from '@heroicons/react/24/outline';

const MainBookBody = () => {
  // Sample data for rows, this can be updated dynamically
  const rows = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    pending: `Pending Book ${index + 1}`,
    active: `Active Book ${index + 1}`,
    completed: `Completed Book ${index + 1}`,
  }));

  return (
    <MaxWidthWrapper>
      <div className="flex justify-end mt-10 mr-4 md:mr-20">
        <PrimaryButton
          title="Add Book"
          icon={<PlusIcon className="size-3 md:size-6" />}
          className="flex items-center gap-x-2 px-4 text-xs md:text-base"
          onClick={() => alert('Add book functionality')}
        />
      </div>
      <div className="mt-2 mx-4 md:mx-20">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className='text-xs md:text-lg'>
              <th className="border bg-[#f8bbd0] border-gray-300 px-4 py-2 text-left">Pending</th>
              <th className="border bg-[#bbdefb] border-gray-300 px-4 py-2 text-left">Active</th>
              <th className="border bg-[#64ffda] border-gray-300 px-4 py-2 text-left">Completed</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className='text-xs md:text-base items-center'>
                <td className="border border-gray-300 px-4 py-4">{row.pending}</td>
                <td className="border border-gray-300 px-4 py-4">{row.active}</td>
                <td className="border border-gray-300 px-4 py-4">{row.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MaxWidthWrapper>
  );
};

export default MainBookBody;
