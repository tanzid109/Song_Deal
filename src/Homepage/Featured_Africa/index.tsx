"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';
import FeaturedSongs from './Songs';

const FeaturedAfricaMarket = () => {
    return (
        <div className='w-11/12 mx-auto mb-10'>
            <div className='flex justify-between items-center lg:p-5 mb-3'>
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 15, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="lg:text-5xl text-2xl text-center font-bold text-gray-900"
                >
                    SongDeal Africa
                </motion.h3>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: -25, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="hidden lg:flex text-xl font-semibold text-blue-600">
                    <Link href="/marketplace" className='flex items-center gap-1'>Explore African Catalogs <ArrowRight /></Link>
                </motion.div>
            </div>
            <div>
                <FeaturedSongs />
            </div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 25, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="lg:hidden md:hidden text-xl font-semibold text-blue-600">
                <Link href="/marketplace" className='flex items-center gap-1'>Explore African Catalogs <ArrowRight /></Link>
            </motion.div>
        </div>
    );
};

export default FeaturedAfricaMarket;