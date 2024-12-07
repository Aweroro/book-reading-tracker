"use client";
import React, { useState, useCallback } from "react";
import AuthHeader from "@/app/components/page-compoents/AuthHeader";
import GoogleIcon from "@/app/components/ui-components/icons/GoogleIcon";
import PrimaryButton from "@/app/components/ui-components/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "@firebase/auth";
import { auth, googleProvider } from "@/app/config/firebase";
import { toast } from "react-toastify";
import MaxWidthWrapper from "@/app/components/ui-components/wrapper/MaxWidthWrapper";

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const signUp = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with first and last name
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      toast.success("Signed up successfully!");
      router.push("/dashboard"); 
    } catch (err) {
      const message = (err as { message?: string }).message || "An error occurred during sign-up.";
      // setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, [email, password, firstName, lastName, router]);

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
     <AuthHeader />
     <div className="flex flex-col mx-auto">
      <div className="relative mt-0 md:min-h-[80vh]">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ml-8 md:ml-20 lg:ml-48 mt-16 md:mt-24 lg:mt-36">
          Sign up
        </h1>
        <div className="flex flex-col items-center mt-10">
        <button
            onClick={signInWithGoogle}
            className="flex items-center gap-x-2 text-nowrap md:text-md md:px-48 lg:gap-x-4 font-bold text-xs lg:text-2xl border px-14 lg:px-56 py-3 rounded-md shadow-sm hover:bg-gray-100"
          >
            <GoogleIcon className="size-5 lg:size-7" />
            Continue with Google
          </button>
          <h1 className="text-xs mt-2">OR</h1>
          <form
            className="flex flex-col justify-start mt-4 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              signUp();
            }}
          >  
           <div className="space-y-4 md:space-y-0 md:space-x-2 w-full items-center flex flex-col md:flex-row">
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border rounded-md shadow pl-2 px-28 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 placeholder:text-xs text-xs lg:text-xl lg:placeholder:text-lg"
                placeholder="Enter your first name..."
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border rounded-md shadow pl-2 px-28 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 placeholder:text-xs text-xs lg:text-xl lg:placeholder:text-lg"
                placeholder="Enter your last name..."
                required
              />
           </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border lg:w-[739px] rounded-md shadow pl-2 px-28 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 placeholder:text-xs text-xs lg:text-xl lg:placeholder:text-lg"
              placeholder="Enter your email..."
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border lg:w-[739px] rounded-md shadow pl-2 px-28 py-3 hover:ring-2 hover:ring-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1] transition duration-150 placeholder:text-xs text-xs lg:text-xl lg:placeholder:text-lg"
              placeholder="Enter your password..."
              required
            />
            <PrimaryButton
                onClick={signUp}
                disabled={loading}
                className="text-sm md:text-lg lg:text-2xl"
                title={loading ? "Signing up..." : "Sign up with Email"}
              />
          </form>
          {error && <p className="mt-10 text-sm text-red-500">{error}</p>}
          <div className="flex space-x-2 text-xs lg:text-lg font-light mt-4 text-gray-700">
            <p>Already have an account?</p>
            <button onClick={() => router.push("/login")} className="underline">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
   </MaxWidthWrapper>
  );
};

export default SignUpPage;
