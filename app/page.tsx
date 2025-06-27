import BrandSlider from "@/components/homepage/brand-slider";
import HeroSection from "@/components/homepage/hero-section";
import OurServices from "@/components/homepage/our-services";
import TeamSlider from "@/components/homepage/team-slider";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServices />
      <BrandSlider />
      <TeamSlider />
    </main>
  );
}
