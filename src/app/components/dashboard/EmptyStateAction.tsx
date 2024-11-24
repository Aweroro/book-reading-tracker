import React from "react";
import MainDashboardCard from "./MainCard";
import EmptyStatisticCard from "./StatisticsCard";
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import MaxWidthWrapper from "../ui-components/wrapper/MaxWidthWrapper";

const EmptyStateAction = () => {
    return (
        <MaxWidthWrapper>
            <div className="items-center p-10 md:p-20 space-y-10 ">
                <MainDashboardCard />
            <div className="border rounded-xl shadow-md hover:shadow-xl">
            <div className="flex justify-between items-center p-3 mx-3">
                <h3 className="font-medium text-xl">View Books</h3>
                <ArrowRightCircleIcon className="w-8 h-8 cursor-pointer"/>
            </div>
                <div className="grid lg:grid-flow-col gap-10 p-4">
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


