"use client";

import React, { useEffect, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  HomeIcon,
  BookOpenIcon,
  ChartBarIcon,
  ArrowRightStartOnRectangleIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import { signOut } from "@firebase/auth";
import { auth } from "@/app/config/firebase";
import { toast } from "react-toastify";
import PrimaryButton from "../ui-components/buttons/PrimaryButton";

interface SidebarProps {
  onToggle?: (isVisible: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggle }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const currentPath = usePathname();
  const router = useRouter();

  const logOut = useCallback(async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      router.push("/login");
    } catch (err) {
      const error = (err as { message?: string }).message ?? "Error during logout.";
      toast.error(error);
    }
  }, [router]);

  const handleToggleSidebar = () => {
    const newState = !isSidebarVisible;
    setIsSidebarVisible(newState);
    onToggle?.(newState); 
  };

  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 1200;
      setIsSmallScreen(smallScreen);
      setIsSidebarVisible(!smallScreen);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavItem = ({
    href,
    label,
    Icon,
  }: {
    href: string;
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }) => {
    const isActive = currentPath === href;

    return (
      <li>
        <Link
          href={href}
          className={`flex items-center p-2 rounded-lg transition ${
            isActive
              ? "bg-indigo-600 text-white"
              : "text-indigo-600 hover:bg-gray-300 hover:text-"
          }`}
          aria-current={isActive ? "page" : undefined}
        >
          <Icon className="mr-3 w-6 h-6" />
          <span>{label}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className="relative">
      {/* Sidebar Toggle Button */}
      <div className="absolute left-0 px-4 text-indigo-600 hover:bg-indigo-100">
        <Bars4Icon
          className="w-8 h-8 cursor-pointer"
          onClick={handleToggleSidebar}
          aria-label="Toggle sidebar"
        />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-72 bg-gray-100 min-h-screen flex flex-col transition-transform duration-300 ease-in-out z-50 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <Bars4Icon
            className="w-8 h-8 text-indigo-600 cursor-pointer"
            onClick={handleToggleSidebar}
            aria-label="Close sidebar"
          />
        </div>
        <nav className="flex-1 p-6 flex flex-col">
          <ul className="space-y-4 text-lg font-medium">
            <NavItem href="/dashboard" label="Dashboard" Icon={HomeIcon} />
            <NavItem href="/books" label="Books" Icon={BookOpenIcon} />
            <NavItem href="/progress" label="Progress" Icon={ChartBarIcon} />
          </ul>

          <div className="p-4 border-t border-gray-300 mt-auto">
           <PrimaryButton
                title="Log Out"
                className="w-full flex gap-x-4 align-middle items-center text-xl hover:opacity-95"
                icon={<ArrowRightStartOnRectangleIcon className="size-8" />}
                 onClick={logOut}
             />
          </div>
        </nav>
      </aside>

      {/* Overlay for Small Screens */}
      {isSidebarVisible && isSmallScreen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-40"
          onClick={handleToggleSidebar}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Sidebar;
