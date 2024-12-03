import React, { useEffect, useState } from "react";
import MainDashboardCard from "./MainCard";
import StatisticCard from "./StatisticsCard";
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import MaxWidthWrapper from "../ui-components/wrapper/MaxWidthWrapper";
import Link from "next/link";
import { auth, db } from "@/app/config/firebase";
import { query, where, getDocs, collection } from "firebase/firestore";

interface Book{
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'active' | 'completed';
}

const MainDashboardBody = () => {

    const [loading, setLoading] = useState(true);

    const [bookCount, setBookCount] = useState({
        pending: 0,
        active: 0,
        completed: 0
    });

    const [bookTitle, setBookTitle] = useState<{
        pending: Book[],
        active: Book[],
        completed: Book[]
    }>({
        pending: [],
        active: [],
        completed: []
    });

    const fetchBookCount = async () => {
        try{
            const booksCollectionRef = collection(db, 'books');
            const userId = auth.currentUser?.uid;


        if (!userId) {
            throw new Error("User is not authenticated.");
        }

            const q = query(booksCollectionRef, where('userId', '==', userId));
            const data = await getDocs((q));

            const books: Book[] = data.docs.map((doc) => doc.data() as Book);

            const counts = {
                pending: books.filter((book) => book.status.toLowerCase() === 'pending').length,
                active: books.filter((book) => book.status.toLowerCase() === 'active').length,
                completed: books.filter((book) => book.status.toLowerCase() === 'completed').length,
           };

           setBookCount(counts);

           setBookTitle({
            pending: books.filter((book) => book.status.toLowerCase() === 'pending').slice(0, 3),
            active: books.filter((book) => book.status.toLowerCase() === 'active').slice(0, 3),
            completed: books.filter((book) => book.status.toLowerCase() === 'completed').slice(0, 3),
           });

           setLoading(false);

        }  catch (error) {
           console.error("Error fetching book count:", error);
        }
    }

    useEffect(() => {
        fetchBookCount();
    }, []);

    return (
        <MaxWidthWrapper>
            <div className="items-center p-5 md:p-20 space-y-10 ">
                <MainDashboardCard/>
            <div className="border rounded-xl shadow-md hover:shadow-xl">
            <div className="flex justify-between items-center p-3 mx-3">
                <h3 className="font-medium text-xl">View Books</h3>
                <Link href={"/books"}>
                    <ArrowRightCircleIcon className="w-8 h-8 cursor-pointer"/>
                </Link>
            </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
                        <StatisticCard
                        className=""
                        title="Pending Books"
                        description="No pending books yet"
                        count={bookCount.pending}
                        bookTitles={bookTitle.pending.map((book) => book.title)}
                        isLoading={loading}
                        />
                        <StatisticCard
                        className="!bg-[#bbdefb]"
                        title="Active Books"
                        description="No active books yet"
                        count={bookCount.active}
                        bookTitles={bookTitle.active.map((book) => book.title)}
                        isLoading={loading}
                        />
                        <StatisticCard
                        className="!bg-[#64ffda] col-span-1 md:col-span-2 lg:col-span-1"
                        title="Completed Books"
                        description="No completed books yet"
                        count={bookCount.completed}
                        bookTitles={bookTitle.completed.map((book) => book.title)}
                        isLoading={loading}
                        />
                </div>
            </div>
        </div>
    </MaxWidthWrapper>
    );
};

export default MainDashboardBody;


