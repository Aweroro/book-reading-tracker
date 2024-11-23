"use client";
import React from "react";
import MainDashboardCard from "./MainCard";
import EmptyStatisticCard from "./EmptyStatisticsCard";
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import MaxWidthWrapper from "../ui-components/wrapper/MaxWidthWrapper";

const EmptyStateAction = () => {
    return (
        <MaxWidthWrapper>
            <div className="items-center p-20 space-y-10 ">
            <div className="">
                <MainDashboardCard />
            </div>
            <div className="border rounded-xl shadow-md">
            <div className="flex justify-between items-center p-3 mx-3">
                <h3 className="font-medium text-xl">View Books</h3>
                <ArrowRightCircleIcon className="w-8 h-8 cursor-pointer"/>
            </div>
                <div className="grid md:grid-flow-col gap-10 p-4">
                        <EmptyStatisticCard
                        title="Pending Books"
                        description="No pending books yet"
                        />
                        <EmptyStatisticCard
                        className="!bg-[#bbdefb]"
                        title="Active Books"
                        description="No active books yet"
                        />
                        <EmptyStatisticCard
                        className="bg-[#64ffda]"
                        title="Completed Books"
                        description="No completed books yet"
                        />
                </div>
            </div>
        </div>
        </MaxWidthWrapper>
    );
};

export default EmptyStateAction;


