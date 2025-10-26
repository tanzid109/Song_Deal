import FeaturedMarket from "@/Homepage/Featured";
import FeaturedAfrica from "@/Homepage/Featured_Africa";
import { HeroSection } from "@/Homepage/Hero";
import Revolution from "@/Shared/Revolution";
import VisionSection from "@/Homepage/Vision";
import Works from "@/Homepage/Works";
import FAQ from "@/Homepage/FAQ/FAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-[#F9F9FB] pb-5">
        <VisionSection />
        <FeaturedMarket />
        <FeaturedAfrica />
      </div>
      <Works />
      <FAQ/>
      <Revolution />
    </>
  );
}
