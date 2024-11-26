import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import {Switch} from '@radix-ui/react-switch';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import { PlusIcon } from '@heroicons/react/24/outline';

interface IProps {
    buttonType: 'primary' | 'secondary';
}

interface BookDataProps {
    name: string;
    description: string;
    category: 'Pending' | 'Active' | 'Completed';
  }

  const CATEGORY_OPTIONS = ['Pending', 'Active', 'Completed'] as const;

const AddBookModal = ({name, description, category, buttonType}: BookDataProps & IProps) => {
  const [showDescription, setShowDescription] = React.useState(false);
  const [bookData, setBookData] = React.useState<BookDataProps>({
    name: '',
    description: '',
    category: 'Pending',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Book Data Submitted:', bookData);
    setBookData({ name: '', description: '', category: 'Pending' });
    setShowDescription(false);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
      <button>
          {buttonType === 'primary' ? (
            <PrimaryButton
              title="Add Book"
              icon={<PlusIcon className="size-3 md:size-6" />}
              className="flex items-center gap-x-2 px-4 text-xs md:text-base"
            />
          ) : (
            <SecondaryButton
              title="Get Started"
              className="flex items-center gap-x-2 px-4 text-xs md:text-base"
            />
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-[#6366F1] p-6 rounded-md shadow-md">
          <Dialog.Title className="text-xl font-bold">Add a New Book</Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-md font-medium">
                Book Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={bookData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 mt-1 border rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="description-toggle" className="text-md font-medium">
                Add Description (Optional)
              </label>
              <Switch
                id="description-toggle"
                checked={showDescription}
                onCheckedChange={setShowDescription}
                className="w-12 h-6 bg-gray-200 rounded-full relative flex items-center transition-colors data-[state=checked]:bg-blue-500"
                >
                    <span
                  className={`block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    showDescription ? "translate-x-6" : "translate-x-1"
                  }`}
                /> 
                </Switch>
            </div>

            {showDescription && (
              <div>
                <label htmlFor="description" className="block text-md font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={bookData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded"
                />
              </div>
            )}

            <div>
              <label htmlFor="category" className="block text-md font-medium">
                Category
              </label>
              <select
                name="category"
                id="category"
                value={bookData.category}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
              >
                {CATEGORY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end space-x-2">
              <Dialog.Close asChild>
                <button type="button" className="px-4 py-2 text-gray-700 bg-gray-200 rounded">
                  Cancel
                </button>
              </Dialog.Close>
              <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
                Save
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddBookModal;
