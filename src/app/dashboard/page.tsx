"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DashboardComponent from "@/app/components/dashboard";
import { auth } from "@/app/config/firebase";
import { Spinner } from "@material-tailwind/react";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push("/login");
    } else {
        setLoading(false)
    }
  }, [router]);

  if (loading) {
    return (
        <div>
            <Spinner 
            color="purple"
            onPointerEnterCapture={undefined} 
            onPointerLeaveCapture={undefined}/>
        </div>
    )
  }

  return <DashboardComponent />;
};

export default DashboardPage;
