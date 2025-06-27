import BrandSlider from "@/components/homepage/brand-slider";
import WhyChooseUs from "@/components/homepage/choose-us-section";
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
      <WhyChooseUs />
      <div className='h-20' />
    </main>
  );
}
