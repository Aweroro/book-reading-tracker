"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/app/config/firebase";
import { onAuthStateChanged } from "@firebase/auth";
import ProgressComponent from "../components/progress-page";

const ProgressPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  console.log(auth.currentUser?.email);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
}, [router]);

    if (loading) {
        return (
          <div className="flex items-center justify-center h-screen">
            {/* <Spinner color="purple" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} /> */}   
          </div>
        );
      }

  return <ProgressComponent />;
};

export default ProgressPage;