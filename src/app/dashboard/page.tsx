"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardComponent from "@/app/components/dashboard";
import { auth } from "@/app/config/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import Spinner from "../components/ui-components/spinner/Spinner";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  console.log(auth.currentUser?.email);
  console.log(auth.currentUser?.uid);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
     <Spinner />
    );
  }

  return (
   <div>
    <DashboardComponent />
   </div>
  );
};

export default DashboardPage;


