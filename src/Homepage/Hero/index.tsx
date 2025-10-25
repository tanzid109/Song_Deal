"use client";
import RoleSelectionModal from "@/auth/register/RoleSelectionModal";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import RotatingOrbit from "./DualOrbitAnimation";
import PhoneAnimation from "./PhoneAnimation";

export function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between md:gap-10 px-6 md:px-20">
                {/* Left Side - Text */}
                <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
                    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight">
                        Turn Songs Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Investable Assets.
                        </span>
                    </h1>

                    <p className="text-gray-600 md:text-lg lg:text-xl dark:text-gray-300 max-w-md leading-relaxed">
                        <span className="text-[#635BFF] font-bold tracking-widest">SongDeal</span> helps artists monetize their work and investors discover new opportunities in the music industry.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <Link href="/marketplace">
                            <Button>
                                Explore Marketplace
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                            Sign up
                        </Button>
                    </div>
                </div>

                {/* Right Side - Animation */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="hidden md:flex relative h-auto md:w-[420px] md:h-auto">
                        <RotatingOrbit />
                    </div>
                    <div className="md:hidden"> 
                        <PhoneAnimation/>
                    </div>
                </div>
            </section>

            {/* Role Selection Modal */}
            <RoleSelectionModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </>
    );
}
