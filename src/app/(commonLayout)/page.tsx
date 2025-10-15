import FeaturedMarket from "@/Homepage/Featured";
import FeaturedAfrica from "@/Homepage/Featured_Africa";
import { HeroSection } from "@/Homepage/Hero";
import VisionSection from "@/Homepage/Vision";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-[#F9F9FB]">
        <VisionSection />
        <FeaturedMarket />
        <FeaturedAfrica/>
      </div>
    </>
  );
}
