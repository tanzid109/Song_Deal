import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const PerformanceCartCard = () => {
    return (
        <Card className=" border-0 shadow-lg bg-gradient-to-br from-slate-50 to-purple-50">
            <CardContent className="">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-1">Your Performance</h3>
                        <p className="text-sm text-slate-500">Last check on 25 february</p>
                    </div>
                    <span className="text-emerald-600 font-semibold text-sm">+26%</span>
                </div>

                <div className="relative h-34 mb-4">
                    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                        <path
                            d="M0,70 Q30,65 50,55 T100,45 Q130,50 160,40 T220,35 Q250,45 280,30 L300,25"
                            fill="none"
                            stroke="rgb(139, 92, 246)"
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                        <span className="text-slate-600">April 08- April 24</span>
                    </div>
                    <span className="font-semibold text-slate-900">6,877</span>
                </div>
            </CardContent>
        </Card>
    );
};

export default PerformanceCartCard;