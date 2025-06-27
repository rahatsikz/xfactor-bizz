"use client";
// import { useMount } from "@/hooks/use-mount";
import BrandModal from "./brand-modal";
import InfluencerModal from "./influencer-modal";
import Mobile from "./mobile-ui";
import { motion } from "framer-motion";

export default function HeroSection() {
  // const isMounted = useMount();

  // if (!isMounted) return null;

  return (
    <div
      className='max-w-7xl mx-auto max-md:pb-20 px-5 lg:px-8 pt-8 lg:pt-20 2xl:pt-40'
      suppressHydrationWarning={true}
    >
      <div className='grid grid-cols-12 gap-y-16 md:gap-y-20 lg:gap-12'>
        {/* Text div */}
        <motion.div
          className='col-span-12 lg:col-span-6 lg:py-10 lg:pr-10 lg:max-w-lg max-md:max-w-xs md:w-full max-w-lg max-lg:mx-auto md:max-lg:text-center'
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <h1 className='lg:text-7xl text-4xl font-bold text-pretty capitalize'>
            Find the perfect influencer for your brand
          </h1>
          <p className='text-foreground/70 mt-5 text-pretty'>
            Skip the guesswork. We match you with influencers who already speak
            your audience&#39;s language—so your brand gets seen, heard, and
            loved.
          </p>
          <div className='mt-5 flex max-md:flex-col justify-start items-center gap-3.5'>
            <InfluencerModal />
            <BrandModal />
          </div>
        </motion.div>
        {/* Video div */}
        <motion.div
          className='lg:col-span-6 col-span-12 relative h-full'
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className='h-16' />
          <video
            src='/perahin.mp4'
            autoPlay
            loop
            muted
            className='rounded-lg w-full h-auto'
          />
          <div className='h-16' />
          <div className='absolute rounded-xl top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full'>
            <Mobile />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
