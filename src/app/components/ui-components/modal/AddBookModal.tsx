import * as Dialog from '@radix-ui/react-dialog';
import * as RadixSelect from '@radix-ui/react-select';
import React from 'react';
import {Switch} from '@radix-ui/react-switch';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import { PlusIcon } from '@heroicons/react/24/outline';
import {db} from '@/app/config/firebase';
import {collection, addDoc} from 'firebase/firestore';
import { toast } from 'react-toastify';

interface Book {
    title: string;
    description: string;
    status: 'Pending' | 'Active' | 'Completed' ;
  }

const STATUS_OPTIONS = ['Pending', 'Active', 'Completed'] as const;

const AddBookModal = ({fetchBooks}:  {fetchBooks: () => Promise<void>}) => {
  const [showDescription, setShowDescription] = React.useState(false);
  const [bookData, setBookData] = React.useState<Book>({
    title: '',
    description: '',
    status: 'Pending',
  });

  const [isOpen, setIsOpen] = React.useState(false);

  const booksCollectionRef = collection(db, 'books');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: Book['status']) => {
    setBookData((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(booksCollectionRef, bookData);
      toast.success('Book Added Successfully');
      setBookData({
        title: '',
        description: '',
        status: 'Pending',
      });
      await fetchBooks();
      setShowDescription(false);
      setIsOpen(false);
    } catch (error) {
      toast.error('Unable to add Book');
    }
  };

  const statusStyles = {
    Pending: 'bg-[#f8bbd0] text-xs md:text-lg', 
    Active: 'bg-[#bbdefb] text-xs md:text-lg',
    Completed: 'bg-[#64ffda] text-xs md:text-lg'
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button>
            <PrimaryButton
              title="Add Book"
              icon={<PlusIcon className="size-3 md:size-6" />}
              className="flex items-center gap-x-2 px-4 text-xs md:text-base"
            />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-64 md:w-96 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-md">
          <Dialog.Title className="text-md md:text-xl font-bold">Add Book</Dialog.Title>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-xs md:text-lg font-medium">
                 Name
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={bookData.title}
                onChange={handleInputChange}
                required
                className="w-full p-2 mt-1 border rounded hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 text-xs md:text-xl"
              />
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="description-toggle" className="text-xs md:text-lg font-medium">
                Description (Optional)
              </label>
              <Switch
                id="description-toggle"
                checked={showDescription}
                onCheckedChange={setShowDescription}
                className="w-12 h-6 bg-gray-200 rounded-full relative flex items-center transition-colors data-[state=checked]:bg-[#6366F1]"
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
                <textarea
                  name="description"
                  id="description"
                  value={bookData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-1 border rounded hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 text-xs md:text-lg"
                />
              </div>
            )}

            <div className="py-4">
              <label htmlFor="status" className="block text-xs md:text-lg font-medium">
                Status
              </label>
              <RadixSelect.Root value={bookData.status} onValueChange={handleStatusChange}>
                <RadixSelect.Trigger
                  className={`w-full p-2 mt-1 border rounded flex justify-between items-center ${statusStyles[bookData.status]}`}
                >
                  <RadixSelect.Value className="text-md">{bookData.status}</RadixSelect.Value>
                  <RadixSelect.Icon className="ml-2">▼</RadixSelect.Icon>
                </RadixSelect.Trigger>
                <RadixSelect.Portal>
                  <RadixSelect.Content className="bg-white shadow-md rounded mt-2">
                    <RadixSelect.Viewport>
                      {STATUS_OPTIONS.map((option) => (
                        <RadixSelect.Item
                          key={option}
                          value={option}
                          className={`p-2 cursor-pointer hover:outline-none hover:font-semibold ${statusStyles[option]}`}
                        >
                          <RadixSelect.ItemText>{option}</RadixSelect.ItemText>
                        </RadixSelect.Item>
                      ))}
                    </RadixSelect.Viewport>
                  </RadixSelect.Content>
                </RadixSelect.Portal>
              </RadixSelect.Root>
            </div>

            <div className="flex justify-center md:justify-end w-full space-x-2 items-center">
              <Dialog.Close asChild>
                <SecondaryButton
                  title="Cancel"
                  className="!rounded"
                />
              </Dialog.Close>
             <button type='submit'>
              <PrimaryButton
                  title="Save"
                  className="!rounded"
                />
             </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddBookModal;
