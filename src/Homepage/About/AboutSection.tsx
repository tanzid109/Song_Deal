"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="relative w-full overflow-hidden py-24 px-6 md:px-12 lg:px-24 text-white">
            {/* Background gradient blob */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-32 w-[400px] h-[400px] bg-[#635BFF]/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3D7DFF]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-6xl mx-auto text-center space-y-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-gray-800"
                >
                    About <span className="text-4xl md:text-6xl font-bold text-[#635BFF]">SongDeal</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-500"
                >
                    Every song begins with <span className="text-[#635BFF] font-medium">inspiration</span> — a story, a sound, a spark.
                    In today’s fast-changing music landscape, creators often struggle to turn that spark into
                    opportunity. <span className="text-[#635BFF] font-semibold">SongDeal</span> was built to change that.
                    We bridge creativity and commerce, helping artists, songwriters, and producers
                    uncover the true value of their music.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-500"
                >
                    Our platform blends <span className="text-[#635BFF] font-medium">AI-powered analytics</span>,
                    smart publishing tools, and a global community that celebrates collaboration and fairness.
                    For labels, publishers, and music professionals, we provide
                    transparent insights and data-driven discovery—turning guesswork into growth.
                    <br /><br />
                    <span className="text-[#635BFF] font-semibold">
                        Every song is more than a sound—it’s an asset.
                    </span>{" "}
                    And at SongDeal, we’re making sure every creator gets their fair share of its worth.
                </motion.div>
            </div>
        </section>
    );
}
