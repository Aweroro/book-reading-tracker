"use client";
import { signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { auth, googleProvider } from "@/app/config/firebase";
import { toast } from "react-toastify";

export const signInWithEmail = async (
  email: string,
  password: string,
  onSuccess: () => void,
  onError: (error: string) => void
) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Logged in successfully!");
    onSuccess();
  } catch (err) {
    const message = (err as { message?: string }).message ?? "Error during login.";
    toast.error(message);
    onError(message);
  }
};

export const signInWithGoogle = async (
  onSuccess: () => void,
  onError: (error: string) => void
) => {
  try {
    await signInWithPopup(auth, googleProvider);
    toast.success("Signed in successfully!");
    onSuccess();
  } catch (err) {
    const message = (err as { message?: string }).message ?? "Error during Google sign-in.";
    toast.error(message);
    onError(message);
  }
};
