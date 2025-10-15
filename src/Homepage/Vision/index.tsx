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
    {
        title: "Empower Artists",
        description: "Provide artists with direct access to capital and promotional support, allowing them to maintain creative control and accelerate their careers.",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-white",
        delay: 0.2
    },
    {
        title: "Unlock Potential",
        description: "Offer investors a unique opportunity to participate in the growth of the music industry through a diversified, data-driven portfolio.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-white",
        delay: 0.4
    },
    {
        title: "Ensure Transparency",
        description: "Build a trusted marketplace with verified data, secure transactions, and clear reporting to ensure confidence for all parties.",
        color: "from-green-500 to-emerald-500",
        bgColor: "bg-white",
        delay: 0.6
    }
];

export default function VisionSection() {
    return (
        <section className="w-11/12 mx-auto py-10 bg-[#F9F9FB]">
            <div className=" px-4 md:px-6 mx-auto">
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                    >
                        <motion.span
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                        Our Vision : { "" }
                        </motion.span>
                          A Fairer Music Economy
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        We &apos; re revolutionizing music financing by directly connecting artists with investors,fostering a more transparent, equitable, and innovative industry for all.
                    </motion.p>
                </motion.div>

                {/* Vision Points Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {visionPoints.map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover="hover"
                            custom={index}
                        >
                            <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${point.bgColor}`}>
                                <CardContent className="p-8 text-center">
                                    {/* Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: point.delay + 0.2, duration: 0.6 }}
                                        className="text-2xl font-bold text-gray-900 mb-4"
                                    >
                                        {point.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: point.delay + 0.4, duration: 0.6 }}
                                        className="text-gray-600 leading-relaxed tracking-wider"
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