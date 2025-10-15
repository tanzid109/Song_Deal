"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function SolarSystemAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const orbits = gsap.utils.toArray<HTMLElement>(".orbit");

            orbits.forEach((orbit, i) => {
                gsap.to(orbit, {
                    rotation: 360,
                    duration: 8 + i * 2, // smooth rotation
                    ease: "none",
                    repeat: -1,
                    transformOrigin: "center center",
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center w-full h-[400px]" // smaller height
        >
            {/* Central "Sun" */}
            <div className="absolute w-32 h-32 rounded-full bg-[#e8e4ff] flex items-center justify-center shadow-lg">
                <Image
                    src="/assets/center.png"
                    alt="Central"
                    width={110}
                    height={110}
                    className="rounded-xl shadow-md"
                />
            </div>

            {/* Orbit Layers (scaled down) */}
            <div className="absolute w-[250px] h-[250px] rounded-full border border-dashed border-gray-300 orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <Image
                        src="/assets/img1.png"
                        alt="orbit-1"
                        width={45}
                        height={45}
                        className="rounded-full shadow-md"
                    />
                </div>
            </div>

            <div className="absolute w-[350px] h-[350px] rounded-full border border-dashed border-gray-300 orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <Image
                        src="/assets/img2.png"
                        alt="orbit-2"
                        width={50}
                        height={50}
                        className="rounded-full shadow-md"
                    />
                </div>
            </div>

            <div className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-gray-300 orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <Image
                        src="/assets/img3.png"
                        alt="orbit-3"
                        width={55}
                        height={55}
                        className="rounded-full shadow-md"
                    />
                </div>
            </div>

            <div className="absolute w-[550px] h-[550px] rounded-full border border-dashed border-gray-300 orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <Image
                        src="/assets/img4.png"
                        alt="orbit-4"
                        width={60}
                        height={60}
                        className="rounded-full shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}
