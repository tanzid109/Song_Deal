"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function DualOrbitAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const orbit1 = document.querySelector(".orbit-1");
            const orbit2 = document.querySelector(".orbit-2");

            // Outer orbit (clockwise)
            gsap.to(orbit1, {
                rotation: 360,
                duration: 20,
                ease: "none",
                repeat: -1,
                transformOrigin: "center center",
            });

            // Inner orbit (counterclockwise)
            gsap.to(orbit2, {
                rotation: -360,
                duration: 16,
                ease: "none",
                repeat: -1,
                transformOrigin: "center center",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center md:w-full h-auto"
        >
            {/* Center Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden shadow-md">
                <video
                    src="/animation/music.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                />
            </div>


            {/* Inner Orbit */}
            <div className="absolute w-[380px] h-[380px] rounded-full border-2 border-dashed border-gray-300/40 orbit-2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                        <Image
                            src="/assets/image1.jpg"
                            alt="orbit-1a"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                        <Image
                            src="/assets/image2.jpg"
                            alt="orbit-1b"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Outer Orbit */}
            <div className="absolute w-[520px] h-[520px] rounded-full border-2 border-dashed border-gray-300/40 orbit-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                        <Image
                            src="/assets/image3.jpg"
                            alt="orbit-2a"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                        <Image
                            src="/assets/image4.jpg"
                            alt="orbit-2b"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
