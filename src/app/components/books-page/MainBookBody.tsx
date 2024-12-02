import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';
import AddBookModal from '../ui-components/modal/AddBookModal';
import { db } from '@/app/config/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { TrashIcon } from '@heroicons/react/24/outline';
import EditBookModal from '../ui-components/modal/EditBookModal';
import EmptyStateAction from './EmptyStateAction';
import Spinner from '../ui-components/spinner/Spinner';

interface Book {
  id: string;
  title: string;
  description: string;
  status: 'Pending' | 'Active' | 'Completed';
}

const MainBookBody = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  const booksCollectionRef = collection(db, 'books');

  // Fetch all books
  const fetchBooks = async () => {
    try {
      setLoading(true); // Set loading to true before fetching
      const data = await getDocs(booksCollectionRef);
      const filteredBooks: Book[] = data.docs.map((doc) => ({
        ...(doc.data() as Omit<Book, 'id'>),
        id: doc.id,
      }));
      setBookList(filteredBooks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Delete a book
  const deleteBook = async (id: string) => {
    if (confirm('Are you sure you want to remove this book?')) {
      try {
        const bookDoc = doc(db, 'books', id);
        await deleteDoc(bookDoc);
        toast.success('Book Removed Successfully');
        setBookList((prev) => prev.filter((book) => book.id !== id));
      } catch (error) {
        toast.error('Failed to remove the book');
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Group books by status
  const groupedBooks = {
    Pending: bookList.filter((book) => book.status === 'Pending'),
    Active: bookList.filter((book) => book.status === 'Active'),
    Completed: bookList.filter((book) => book.status === 'Completed'),
  };

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <Spinner />
    );
  }

  // Show empty state if no books are available
  if (bookList.length === 0) {
    return <EmptyStateAction fetchBooks={fetchBooks} />;
  }

  return (
    <MaxWidthWrapper>
      <div className="mt-2 mx-4 md:mx-20">
        <div className="flex justify-end mt-10 mb-2">
          <AddBookModal fetchBooks={fetchBooks} />
        </div>
        <table className="table-fixed w-full border-collapse border border-gray-300">
          <thead>
            <tr className="text-xs md:text-lg">
              <th className="w-1/3 border bg-[#f8bbd0] border-gray-300 px-4 py-2 text-left">Pending</th>
              <th className="w-1/3 border bg-[#bbdefb] border-gray-300 px-4 py-2 text-left">Active</th>
              <th className="w-1/3 border bg-[#64ffda] border-gray-300 px-4 py-2 text-left">Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* Pending Books */}
              <td className="w-1/3 border border-gray-300 align-top break-words whitespace-normal">
                {groupedBooks.Pending.map((book) => (
                  <div
                    key={book.id}
                    className="border-b last:border-none p-2 hover:bg-gray-100"
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-xs md:text-lg break-words overflow-hidden">{book.title}</p>
                      <div className="flex items-center justify-end gap-0 md:gap-2 mt-0 md:mt-2">
                        <EditBookModal fetchBooks={fetchBooks} book={book} />
                        <button
                          title="Delete"
                          onClick={() => deleteBook(book.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <TrashIcon className="w-3 h-3 md:w-5 md:h-5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 break-words overflow-hidden pr-4 md:pr-14">{book.description}</p>
                  </div>
                ))}
              </td>

              {/* Active Books */}
              <td className="w-1/3 border border-gray-300 align-top break-words whitespace-normal">
                {groupedBooks.Active.map((book) => (
                  <div
                    key={book.id}
                    className="border-b last:border-none p-2 hover:bg-gray-100"
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-xs md:text-lg break-words overflow-hidden">{book.title}</p>
                      <div className="flex items-center justify-end gap-0 md:gap-2 mt-0 md:mt-2">
                        <EditBookModal fetchBooks={fetchBooks} book={book} />
                        <button
                          title="Delete"
                          onClick={() => deleteBook(book.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <TrashIcon className="w-3 h-3 md:w-5 md:h-5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 break-words overflow-hidden pr-4 md:pr-14">{book.description}</p>
                  </div>
                ))}
              </td>

              {/* Completed Books */}
              <td className="w-1/3 border border-gray-300 align-top break-words whitespace-normal">
                {groupedBooks.Completed.map((book) => (
                  <div
                    key={book.id}
                    className="border-b last:border-none p-2 hover:bg-gray-100"
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-xs md:text-lg break-words overflow-hidden">{book.title}</p>
                      <div className="flex items-center justify-end gap-0 md:gap-2 mt-0 md:mt-2">
                        <EditBookModal fetchBooks={fetchBooks} book={book} />
                        <button
                          title="Delete"
                          onClick={() => deleteBook(book.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <TrashIcon className="w-3 h-3 md:w-5 md:h-5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 break-words overflow-hidden pr-4 md:pr-14">{book.description}</p>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MaxWidthWrapper>
  );
};

export default MainBookBody;


