"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Analytics = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6">

                {/* Image Section */}
                <div className="flex-1 flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative w-full"
                    >
                        <Image
                            src="/assets/chart.png"
                            alt="Analytics Dashboard Preview"
                            width={700}
                            height={420}
                            className="rounded-xl shadow-lg"
                        />
                    </motion.div>
                </div>
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-center space-y-6 text-center lg:text-left">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                    >
                        Analytics Preview: <br /> Data-Driven Decisions
                    </motion.h3>

                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed tracking-wide">
                        Our dashboard provides comprehensive analytics, including historical streaming data, revenue trends, and AI-powered ROI forecasts to help you make informed investment choices.
                    </p>

                    <p className="text-gray-600 text-base lg:text-lg tracking-wide">
                        Future API integrations with leading DSPs will offer real-time performance tracking.
                    </p>

                    <div>
                        <Button className="mt-4">Explore Analytics</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Analytics;
