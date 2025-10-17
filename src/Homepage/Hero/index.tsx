// components/hero-section.tsx
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"
// import SolarSystemAnimation from "./SolarIamge"
import Image from "next/image"

export function HeroSection() {
    return (
        <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20">
            {/* Left Side - Text */}
            <div className="flex-1 flex flex-col items-start gap-4 text-center md:text-left">
                <div className="space-y-5">
                    <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl text-gray-900 dark:text-white mt-4">
                        Turn Songs Into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ">
                            Investable Assets.
                        </span>
                    </h1>
                    <p className="md:w-2/3 text-gray-600 md:text-xl dark:text-gray-300 mx-auto md:mx-0">
                        Songdeal helps artists monetize their work and investors discover new opportunities in the music industry.
                    </p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
                    <Button>
                        Explore Marketplace
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="secondary">
                        Sign up
                    </Button>
                </div>
            </div>
            {/* Right Side - Animation */}
            <div className="flex-1 flex justify-center items-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[370px]">
                    <Image
                        src="/assets/hero.png"
                        alt="hero"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 80vw, 400px"
                    />
                </div>
            </div>

        </section>
    )
}
