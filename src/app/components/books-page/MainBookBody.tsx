// import React, {useEffect, useState} from 'react';
// import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';
// import AddBookModal from '../ui-components/modal/AddBookModal';
// import {db, auth} from '@/app/config/firebase';
// import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
// import { toast } from 'react-toastify';
// import { TrashIcon } from '@heroicons/react/24/outline';
// import EditBookModal from '../ui-components/modal/EditBookModal';
// import EmptyStateAction from './EmptyStateAction';

// interface Book {
//   id: string;
//   title: string;
//   description: string;
//   status: 'Pending' | 'Active' | 'Completed';
// }

// const MainBookBody = () => {
//     const [bookList, setBookList] = useState<Book[]>([]);

//     const booksCollectionRef = collection(db, 'books');

//     console.log(auth.currentUser?.uid);

//     //fetch all books
//     const fetchBooks = async () => {
//       try {
//           const data = await getDocs(booksCollectionRef);
//           const filteredBooks: Book[] = data.docs.map((doc) => ({
//             ...(doc.data() as Omit<Book, 'id'>), id: doc.id,
//           }));
//           setBookList(filteredBooks);
//       } catch (error) {
//           console.error(error);
//       }
//   };

//    //Delete a book
//     const deleteBook = async (id: string) => {
//       if(confirm('Are you sure you want to remove this book?')){
//         try{
//           const bookDoc = doc(db, 'books', id);
//           await deleteDoc(bookDoc);
//           toast.success('Book Removed Successfully');
//           setBookList((prev) => prev.filter(book => book.id !== id));
//         } catch (error) {
//           toast.error('Failed to remove the book');
//           console.error(error);
//         }
//       }
//     };


//     useEffect(() => {
//       fetchBooks();
//   }, []);

//   // Sample data for rows, this can be updated dynamically
//   const groupedBooks = {
//     Pending: bookList.filter((book) => book.status === 'Pending'),
//     Active: bookList.filter((book) => book.status === 'Active'),
//     Completed: bookList.filter((book) => book.status === 'Completed'),
//   }

//   return (
//     <MaxWidthWrapper>
//       <div className="flex justify-end mt-10 mr-4 md:mr-20">
//         <AddBookModal fetchBooks={fetchBooks}/>
//       </div>
//       <div className="mt-2 mx-4 md:mx-20">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className='text-xs md:text-lg'>
//               <th className="w-1/3 border bg-[#f8bbd0] border-gray-300 px-4 py-2 text-left">Pending</th>
//               <th className="w-1/3 border bg-[#bbdefb] border-gray-300 px-4 py-2 text-left">Active</th>
//               <th className="w-1/3 border bg-[#64ffda] border-gray-300 px-4 py-2 text-left">Completed</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               {/* Pending Books */}
//               <td className="w-1/3 border border-gray-300 align-top">
//                 {groupedBooks.Pending.map((book) => (
//                   <div
//                     key={book.id}
//                     className="flex justify-between items-center border-b last:border-none p-2 hover:bg-gray-100"
//                   >
//                     <div>
//                       <p className="font-semibold">{book.title}</p>
//                       <p className="text-sm text-gray-500">{book.description}</p>
//                     </div>
//                    <div className='flex items-center gap-2'>
//                       <EditBookModal fetchBooks={fetchBooks} book={book}/>
//                     <button
//                       title='Delete'
//                       onClick={() => deleteBook(book.id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <TrashIcon className='w-5 h-5'/>
//                     </button>
//                    </div>
//                   </div>
//                 ))}
//               </td>

//               {/* Active Books */}
//               <td className="w-1/3 border border-gray-300 align-top">
//                 {groupedBooks.Active.map((book) => (
//                   <div
//                     key={book.id}
//                     className="flex justify-between items-center border-b last:border-none p-2 hover:bg-gray-100"
//                   >
//                     <div>
//                       <p className="font-semibold">{book.title}</p>
//                       <p className="text-sm text-gray-500">{book.description}</p>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                       <EditBookModal fetchBooks={fetchBooks} book={book}/>
//                     <button
//                       title='Delete'
//                       onClick={() => deleteBook(book.id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <TrashIcon  className='w-5 h-5'/>
//                     </button>
//                     </div>
//                   </div>
//                 ))}
//               </td>

//               {/* Completed Books */}
//               <td className="w-1/3 border border-gray-300 align-top">
//                 {groupedBooks.Completed.map((book) => (
//                   <div
//                     key={book.id}
//                     className="flex justify-between items-center border-b last:border-none p-2 hover:bg-gray-100"
//                   >
//                     <div>
//                       <p className="font-semibold">{book.title}</p>
//                       <p className="text-sm text-gray-500">{book.description}</p>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                      <EditBookModal fetchBooks={fetchBooks} book={book}/>
//                     <button
//                       title='Delete'
//                       onClick={() => deleteBook(book.id)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <TrashIcon className='w-5 h-5'/>
//                     </button>
//                     </div>
//                   </div>
//                 ))}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </MaxWidthWrapper>
//   );
// };

// export default MainBookBody;

import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../ui-components/wrapper/MaxWidthWrapper';
import AddBookModal from '../ui-components/modal/AddBookModal';
import { db } from '@/app/config/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { TrashIcon } from '@heroicons/react/24/outline';
import EditBookModal from '../ui-components/modal/EditBookModal';
import EmptyStateAction from './EmptyStateAction';

interface Book {
  id: string;
  title: string;
  description: string;
  status: 'Pending' | 'Active' | 'Completed';
}

const MainBookBody = () => {
  const [bookList, setBookList] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const booksCollectionRef = collection(db, 'books');

  // Fetch all books
  const fetchBooks = async () => {
    try {
      setLoading(true); // Set loading to true when fetching starts
      const data = await getDocs(booksCollectionRef);
      const filteredBooks: Book[] = data.docs.map((doc) => ({
        ...(doc.data() as Omit<Book, 'id'>),
        id: doc.id,
      }));
      setBookList(filteredBooks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after fetching completes
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

  // Show Empty State if no books exist
  if (!loading && bookList.length === 0) {
    return <EmptyStateAction fetchBooks={fetchBooks} />;
  }

  // Show main page content when books are available
  return (
    <MaxWidthWrapper>
      <div className="mt-2 mx-4 md:mx-20">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p>Loading books...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-end mt-10 mr-4 md:mr-20">
              <AddBookModal fetchBooks={fetchBooks} />
            </div>
            <table className="table-auto w-full border-collapse border border-gray-300">
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
                  <td className="w-1/3 border border-gray-300 align-top">
                    {groupedBooks.Pending.map((book) => (
                      <div
                        key={book.id}
                        className="flex justify-between items-center border-b last:border-none p-2 hover:bg-gray-100"
                      >
                        <div>
                          <p className="font-semibold">{book.title}</p>
                          <p className="text-sm text-gray-500">{book.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <EditBookModal fetchBooks={fetchBooks} book={book} />
                          <button
                            title="Delete"
                            onClick={() => deleteBook(book.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </td>

                  {/* Active Books */}
                  <td className="w-1/3 border border-gray-300 align-top">
                    {groupedBooks.Active.map((book) => (
                      <div
                        key={book.id}
                        className="flex justify-between items-center border-b last:border-none p-2 hover:bg-gray-100"
                      >
                        <div>
                          <p className="font-semibold">{book.title}</p>
                          <p className="text-sm text-gray-500">{book.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <EditBookModal fetchBooks={fetchBooks} book={book} />
                          <button
                            title="Delete"
                            onClick={() => deleteBook(book.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </td>

                  {/* Completed Books */}
                  <td className="w-1/3 border border-gray-300 align-top">
                    {groupedBooks.Completed.map((book) => (
                      <div
                        key={book.id}
                        className="flex justify-between items-center border-b last:border-none p-2 hover:bg-gray-100"
                      >
                        <div>
                          <p className="font-semibold">{book.title}</p>
                          <p className="text-sm text-gray-500">{book.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <EditBookModal fetchBooks={fetchBooks} book={book} />
                          <button
                            title="Delete"
                            onClick={() => deleteBook(book.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </MaxWidthWrapper>
  );
};

export default MainBookBody;
