"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PrimaryButton from "../ui-components/Buttons/PrimaryButton";
import { 
    HomeIcon, 
    BookOpenIcon, 
    ChartBarIcon,  
    ArrowRightStartOnRectangleIcon,
    Bars4Icon 
} from "@heroicons/react/24/outline";

interface SidebarProps {
    onToggle: (isVisible: boolean) => void;
}

const Sidebar = ({ onToggle }: SidebarProps) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const currentPath = usePathname();

    const handleToggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
        onToggle(!isSidebarVisible);
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
        Icon: React.ComponentType<any>;
    }) => {
        const isActive = currentPath === href;
        return (
            <li>
                <a
                    href={href}
                    className={`flex items-center p-2 rounded-lg transition ${
                        isActive
                            ? "bg-[#6366F1] text-white"
                            : "text-[#6366F1] hover:bg-[#6366F1] hover: hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                >
                    <Icon className="mr-3 size-8" />
                    <span>{label}</span>
                </a>
            </li>
        );
    };

    return (
        <div className="relative">
            <div
                className={`absolute left-0 px-4 text-[#6366F1] hover:bg-indigo-100 ${
                    isSidebarVisible ? "bg-[#F3F4F6]" : "bg-white"
                }`}
            >
                <Bars4Icon
                    className="size-8 cursor-pointer"
                    onClick={handleToggleSidebar}
                    aria-label="Toggle sidebar"
                />
            </div>

            <aside
                className={`fixed top-22 left-0 w-[344px] bg-[#F3F4F6] min-h-screen flex flex-col transition-transform duration-300 ease-in-out z-50 ${
                    isSidebarVisible ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div
                    className={`absolute left-5 hover:bg-indigo-100 text-[#6366F1] ${
                        isSidebarVisible ? "bg-[#F3F4F6]" : "bg-white"
                    }`}
                >
                    <Bars4Icon
                        className="size-8 cursor-pointer"
                        onClick={handleToggleSidebar}
                        aria-label="Close sidebar"
                    />
                </div>

                <nav className="flex-1 p-6 flex flex-col mt-6">
                    <ul className="space-y-4 text-xl font-medium">
                        <NavItem href="/dashboard" label="Dashboard" Icon={HomeIcon} />
                        <NavItem href="/books" label="Books" Icon={BookOpenIcon} />
                        <NavItem href="/progress" label="Progress" Icon={ChartBarIcon} />
                    </ul>

                    <div className="p-4 border-t border-gray-700 mt-auto mb-16">
                        <PrimaryButton
                            title="Log Out"
                            className="w-full flex gap-x-4 align-middle items-center text-xl hover:opacity-95"
                            icon={<ArrowRightStartOnRectangleIcon className="size-8" />}
                            onClick={() => alert("Dey play")}
                        />
                    </div>
                </nav>
            </aside>

            {isSidebarVisible && isSmallScreen && (
                <div
                    className="fixed inset-0 bg-black opacity-20 z-40"
                    onClick={handleToggleSidebar}
                    aria-hidden="true"
                />
            )}
        </div>
    );
};

export default Sidebar;

