// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { auth } from "@/app/config/firebase";
// import { onAuthStateChanged } from "@firebase/auth";
// import ProgressComponent from "../components/progress-page";

// const ProgressPage = () => {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   console.log(auth.currentUser?.email);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         router.push("/login");
//       } else {
//         setLoading(false);
//       }
//     });

//     return () => unsubscribe();
// }, [router]);

    
//   return <ProgressComponent />;
// };

// export default ProgressPage;