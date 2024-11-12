"use client";
import React from "react";
import StatisticsCard from "./StatisticsCard";
import RecentActivityCard from "./RecentActivityCard";

const EmptyStateAction = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-8 p-20">
            <StatisticsCard />
            <RecentActivityCard />
        </div>
    );
};

export default EmptyStateAction;


