"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const visionPoints = [
    // ... (your visionPoints array remains the same)
    {
        id: 1,
        title: "Artist Application",
        description: "Artists submit their music catalogs for review a our Al-powered system provides a data-driven valuation",
        color: "from-purple-500 to-pink-500",
        delay: 0.2
    },
    {
        id: 2,
        title: "Investor Discovery",
        description: "Investors browse curated listings, analyze performance data, and purchase shares of royalty assets",
        color: "from-blue-500 to-cyan-500",
        delay: 0.4
    },
    {
        id: 3,
        title: "Shared Success",
        description: "Artists receive funding to grow their careers, while investors earn passive income from royalty distributions",
        color: "from-green-500 to-emerald-500",
        delay: 0.6
    }
];

export default function WorkCard() {
    return (
        <section className="w-11/12 mx-auto py-10">
            <div className="px-4 md:px-6 mx-auto">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ scale: 0.2, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        A clear and streamlined process for artists and investors to connect and grow
                    </motion.p>
                </motion.div>

                {/* work Points Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    // Add `relative` here to position the SVGs
                    className="relative grid md:grid-cols-3 gap-12"
                >
                    {/* SVG Connector 1 -> 2 */}
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full -z-10">
                        <svg width="100%" height="100%" preserveAspectRatio="none">
                            <path
                                d="M 28% 45% C 35% 85%, 45% 85%, 53% 45%"
                                stroke="#C3C0FD"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5 5"
                            />
                        </svg>
                    </div>

                    {/* SVG Connector 2 -> 3 */}
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full -z-10">
                        <svg width="100%" height="100%" preserveAspectRatio="none">
                            <path
                                d="M 62% 45% C 69% 5%, 79% 5%, 86% 45%"
                                stroke="#C3C0FD"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="5 5"
                            />
                        </svg>
                    </div>

                    {visionPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover="hover"
                            custom={index}
                        >
                            <Card className={`h-full bg-[#DBD9FC] border border-[#C3C0FD] shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
                                <CardContent className="relative p-4 text-center">
                                    <div className="absolute h-16 w-16 rounded-full bg-[#DBD9FC] border-[#C3C0FD] border -top-14 left-1/2 -translate-x-1/2 flex items-center justify-center shadow-lg">
                                        <h3 className="text-[#635BFF] font-bold text-2xl">{point.id}</h3>
                                    </div>
                                    {/* Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: point.delay + 0.2, duration: 0.6 }}
                                        className="text-2xl font-bold text-[#635BFF] mb-4"
                                    >
                                        {point.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: point.delay + 0.4, duration: 0.6 }}
                                        className="text-[#635BFF] text-lg leading-relaxed tracking-wider"
                                    >
                                        {point.description}
                                    </motion.p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}