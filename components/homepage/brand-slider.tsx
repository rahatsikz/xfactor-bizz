"use client";

import { useState } from "react";
import client1 from "@/assets/clients/1.png";
import client2 from "@/assets/clients/2.png";
import client3 from "@/assets/clients/3.png";
import client4 from "@/assets/clients/4.png";
import client5 from "@/assets/clients/5.png";
import client6 from "@/assets/clients/6.png";
import client7 from "@/assets/clients/7.png";
import client8 from "@/assets/clients/8.png";
import client9 from "@/assets/clients/9.png";
import client10 from "@/assets/clients/10.png";
import client11 from "@/assets/clients/11.png";
import client12 from "@/assets/clients/12.png";
import client13 from "@/assets/clients/13.png";
import client14 from "@/assets/clients/14.png";
import client15 from "@/assets/clients/15.png";
import client16 from "@/assets/clients/16.png";
import Image from "next/image";

const brandImages = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
  client16,
];

export default function BrandSlider() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the brands array to create seamless infinite scroll
  const duplicatedBrands = [...brandImages, ...brandImages];

  return (
    <section className='py-20 bg-gradient-to-br from-slate-900 to-background overflow-hidden'>
      <div className='container mx-auto px-4 mb-16'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold text-foreground mb-2'>
            Trusted by Leading Brands
          </h2>
          <p className='text-base text-foreground/70 max-w-lg mx-auto leading-relaxed'>
            Join thousands of companies that trust us to amplify their brand
            presence and drive meaningful engagement
          </p>
        </div>
      </div>

      {/* Infinite Slider */}
      <div className='relative '>
        {/* Gradient Overlays */}
        <div className='absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-900/50 to-transparent z-10 pointer-events-none' />
        <div className='absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none' />

        <div
          className='flex gap-7 w-fit animate-scroll'
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand}-${index}`}
              className='flex-shrink-0 w-72 h-36  backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative overflow-hidden group border border-input'
            >
              {/* Subtle background pattern */}
              <div className='absolute inset-0 bg-gradient-to-br from-slate-900/90 to-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              {/* Logo container */}
              <div className='relative z-10 p-4 flex items-center justify-center w-full h-full'>
                <Image
                  src={brand.src || "/placeholder.svg"}
                  alt={`${brand} Logo`}
                  width={200}
                  height={100}
                  className='max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300'
                  priority={index < 8}
                />
              </div>

              {/* Subtle hover border effect */}
              <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-slate-500/30 transition-all duration-300' />

              {/* Bottom shine effect */}
              <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500' />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
