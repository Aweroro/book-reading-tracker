"use client";
import React, { useState, useCallback } from "react";
import AuthHeader from "@/app/components/page-compoents/AuthHeader";
import GoogleIcon from "@/app/components/ui-components/icons/GoogleIcon";
import PrimaryButton from "@/app/components/ui-components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import { auth, googleProvider } from "@/app/config/firebase";
import MaxWidthWrapper from "@/app/components/ui-components/wrapper/MaxWidthWrapper";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const signIn = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      router.push("/dashboard"); 
    } catch (err) {
      const message = (err as { message?: string }).message ?? "Error during login.";
      // setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, [email, password, router]);

  const signInWithGoogle = useCallback(async () => {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in successfully!");
      router.push("/dashboard"); 
    } catch (err) {
      const message = (err as { message?: string }).message ?? "Error during Google sign-in.";
      // setError(message);
      toast.error(message);
    }
  }, [router]);

  return (
   <MaxWidthWrapper>
     <div className="flex flex-col mx-auto">
      <AuthHeader />
      <div className="relative mt-7 md:mt-2 md:min-h-[80vh]">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ml-8 md:ml-20 lg:ml-48 mt-16 md:mt-24 lg:mt-36">
          Log in
        </h1>
        <div className="flex flex-col items-center mt-10">
          <button
            onClick={signInWithGoogle}
            className="flex items-center gap-x-2 text-nowrap lg:gap-x-4 font-bold text-xs md:text-md lg:text-2xl border px-14 md:px-40 lg:px-56 py-3 rounded-md shadow-sm hover:bg-gray-100"
          >
            <GoogleIcon className="size-5 lg:size-7" />
            Continue with Google
          </button>
          <form
            className="flex flex-col justify-start mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full px-28 md:w-[470px] lg:w-[740px] rounded-md shadow pl-2 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 placeholder:text-xs text-xs lg:text-xl lg:placeholder:text-lg"
              placeholder="Enter your email..."
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full px-28 md:w-[470px] lg:w-[740px] rounded-md shadow pl-2 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 placeholder:text-xs text-xs lg:text-xl lg:placeholder:text-lg"
              placeholder="Enter your password..."
              required
            />
            <PrimaryButton
              disabled={loading}
              className="text-sm md:text-lg lg:text-2xl"
              title={loading ? "Logging in..." : "Log in with Email"}
            />
          </form>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          <div className="flex space-x-2 text-xs lg:text-lg font-light mt-4 text-gray-700">
            <p>Don&apos;t have an account?</p>
            <button onClick={() => router.push("/signup")} className="underline">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
   </MaxWidthWrapper>
  );
};

export default LoginPage;


