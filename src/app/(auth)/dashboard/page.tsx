import CatalogCard from '@/dashboard/main/CatalogCard';
import CustomerCard from '@/dashboard/main/CustomerCard';
import PerformanceChart from '@/dashboard/main/PerformanceCart';
import PerformanceCartCard from '@/dashboard/main/PerformanceCartCard';
import PerformanceOrderCard from '@/dashboard/main/PerformanceOrderCard';
import SalesCard from '@/dashboard/main/SalesCard';
import WelcomeCard from '@/dashboard/main/WelcomeCard';
import React from 'react';

const Dashboard = () => {
    return (
        <main className="p-3 ">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-6 h-screen">
                {/* Welcome section */}
                <div className=" rounded-2xl md:col-span-2 md:row-span-2">
                    <WelcomeCard />
                </div>

                {/* Customer  */}
                <div className="rounded-2xl md:col-start-1 md:row-start-3 md:row-span-2">
                    <CustomerCard />
                </div>
                {/* CatalogCard */}
                <div className="rounded-2xl md:col-start-2 md:row-start-3 md:row-span-2">
                    <CatalogCard />
                </div>

                {/* Performance chart */}
                <div className="rounded-2xl md:col-span-4 md:row-span-4 md:col-start-3 md:row-start-1">
                    <PerformanceChart />
                </div>

                { /* Orders performance */}
                <div className="rounded-2xl md:col-span-2 md:row-span-2 md:row-start-5">
                    <PerformanceOrderCard />
                </div>

                {/* Performance line */}
                <div className="rounded-2xl md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-5">
                    <PerformanceCartCard />
                </div>

                {/* Sales progress */}
                <div className="rounded-2xl md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-5">
                    <SalesCard />
                </div>
            </div>
        </main>

    );
};

export default Dashboard;