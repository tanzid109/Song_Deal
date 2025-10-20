import React from 'react';

const page = () => {
    return (
        <main className="p-3">
            <div className="grid grid-cols-1 gap-4 min-h-screen md:grid-cols-6 md:grid-rows-6">
                {/* Welcome section */}
                <div className="bg-amber-400 rounded-2xl p-4 md:col-span-2 md:row-span-2">1</div>

                {/* Customer and total earning */}
                <div className="bg-amber-400 rounded-2xl p-4 md:col-start-1 md:row-start-3 md:row-span-2">2</div>
                <div className="bg-amber-400 rounded-2xl p-4 md:col-start-2 md:row-start-3 md:row-span-2">3</div>

                {/* Performance chart */}
                <div className="bg-amber-400 rounded-2xl p-4 md:col-span-4 md:row-span-4 md:col-start-3 md:row-start-1">4</div>

                {/* Performance history */}
                <div className="bg-amber-400 rounded-2xl p-4 md:col-span-2 md:row-span-2 md:row-start-5">5</div>

                {/* Performance line */}
                <div className="bg-amber-400 rounded-2xl p-4 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-5">6</div>

                {/* Sales progress */}
                <div className="bg-amber-400 rounded-2xl p-4 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-5">7</div>
            </div>
        </main>

    );
};

export default page;