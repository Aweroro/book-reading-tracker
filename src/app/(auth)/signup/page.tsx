"use client";
import React, { useState, useCallback } from "react";
import AuthHeader from "@/app/components/page-compoents/AuthHeader";
import GoogleIcon from "@/app/components/ui-components/icons/GoogleIcon";
import PrimaryButton from "@/app/components/ui-components/Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { auth, googleProvider } from "@/app/config/firebase";
import { toast } from "react-toastify";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const signUp = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Signed up successfully!");
      router.push("/dashboard"); 
    } catch (err) {
      const message = (err as { message?: string }).message || "An error occurred during sign-up.";
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
    <div className="flex flex-col container mx-auto max-w-xl">
      <AuthHeader />
      <div className="relative mt-20 min-h-[80vh]">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold ml-24 lg:ml-2 mt-16 md:mt-24 lg:mt-28">
          Sign up
        </h1>
        <div className="flex flex-col items-center mt-10 max-w-xl">
          <button
            onClick={signInWithGoogle}
            className="flex items-center gap-x-2 lg:gap-x-4 font-bold text-base lg:text-2xl border px-28 lg:px-32 py-3 rounded-md shadow-sm hover:bg-gray-100"
          >
            <GoogleIcon className="size-5 lg:size-7" />
            Continue with Google
          </button>
          <form
            className="flex flex-col justify-start mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-[420px] lg:w-[550px] rounded-md shadow pl-2 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150"
              placeholder="Enter your email..."
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-[420px] lg:w-[550px] px-2 rounded-md shadow pl-2 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150"
              placeholder="Enter your password..."
              required
            />
            <PrimaryButton
              disabled={loading}
              className="text-base lg:text-2xl"
              title={loading ? "Signing up..." : "Sign up with Email"}
            />
          </form>
          {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
          <div className="flex space-x-2 text-sm lg:text-lg font-light mt-10 text-gray-700">
            <p>Already have an account?</p>
            <button onClick={() => router.push("/login")} className="underline">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
