"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services, stats, steps, teamValues } from "@/data";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;

    if (!container || !sections) return;

    const sectionElements = sections.querySelectorAll(".scroll-section");
    const isMobile = window.innerWidth < 768;

    const createScrollTrigger = () => {
      // Force refresh first
      ScrollTrigger.refresh();

      // Manual calculation for more precision
      const containerWidth = container.offsetWidth;
      const sectionsWidth = sections.scrollWidth;
      const totalSections = sectionElements.length;

      console.log("Container width:", containerWidth);
      console.log("Sections width:", sectionsWidth);
      console.log("Total sections:", totalSections);

      // Calculate exact scroll distance
      const scrollDistance = sectionsWidth - containerWidth;

      // For mobile, use a much more aggressive approach
      const endDistance = isMobile ? scrollDistance * 2 : scrollDistance;

      return gsap.to(sections, {
        x: () => -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${endDistance}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // Enable markers temporarily to debug
          //   markers: true,
          id: "horizontal-scroll",
          onUpdate: (self) => {
            console.log(`Progress: ${Math.round(self.progress * 100)}%`);
            console.log(`Current x: ${gsap.getProperty(sections, "x")}`);
          },

          onToggle: (self) => {
            console.log("ScrollTrigger toggled:", self.isActive);
          },
        },
      });
    };

    // Add a delay for mobile to ensure everything is loaded
    const initDelay = isMobile ? 500 : 100;

    let horizontalScroll: gsap.core.Tween;

    setTimeout(() => {
      horizontalScroll = createScrollTrigger();
    }, initDelay);

    // Handle resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (horizontalScroll) {
          horizontalScroll.kill();
        }
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        // Wait longer before recreating
        setTimeout(() => {
          horizontalScroll = createScrollTrigger();
        }, 200);
      }, 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      if (horizontalScroll) {
        horizontalScroll.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='relative'>
      {/* Horizontal scroll container */}
      <div
        ref={containerRef}
        className='relative w-full h-screen overflow-hidden'
      >
        <div
          ref={sectionsRef}
          className='flex h-full will-change-transform'
          style={{ width: "fit-content" }}
        >
          {/* Section 1 - Innovation */}
          <div className='scroll-section w-screen h-screen flex items-center justify-center  flex-shrink-0 bg-gradient-to-br from-primary/20 to-background'>
            <div className='text-center max-w-2xl px-4 sm:px-6 md:px-8'>
              <h2 className='text-3xl sm:text-4xl md:text-5xl xl:text-8xl font-bold max-w-xl text-foreground'>
                Why Choose Us
              </h2>
            </div>
          </div>

          {/* Section 2 - Excellence */}
          <div className='scroll-section w-screen h-screen flex items-center justify-center flex-shrink-0'>
            <section className=' px-10 py-16 lg:pt-28'>
              <div className='w-full mx-auto'>
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                  {/* Left Content */}
                  <div className='lg:space-y-5 space-y-3'>
                    <div className='space-y-2'>
                      <p className='text-sm font-medium tracking-wider text-gray-400 uppercase'>
                        Choose Us For X Factor
                      </p>
                      <h1 className='text-base w-full max-w-xs text-pretty max-md:leading-8 leading-tight md:text-5xl lg:text-6xl font-bold '>
                        YOUR X FACTOR IN INFLUENCER MARKETING
                      </h1>
                    </div>

                    <p className='lg:text-lg text-sm text-gray-300 max-w-md'>
                      Unlock X Factor of your business with carefully curated
                      influencers by our team
                    </p>

                    {/* Service Tags */}
                    <div className='flex flex-wrap gap-2 lg:gap-3'>
                      {services.map((service, index) => (
                        <span
                          key={index}
                          className='px-6 py-2 border border-gray-600 rounded-full text-sm font-medium hover:border-white transition-colors'
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Content - Steps */}
                  <div className='lg:space-y-8 space-y-4'>
                    {steps.map((step, index) => (
                      <div key={index} className='flex items-start gap-6'>
                        <div className='flex-shrink-0'>
                          <div className='w-16 h-16 rounded-full border-2 border-white flex flex-col items-center justify-center'>
                            <p className='text-xs font-bold'>STEP</p>
                            <p className='text-xs font-bold'>{step.number}</p>
                          </div>
                        </div>
                        <div className='space-y-2 pt-2'>
                          <h3 className='lg:text-xl text-base font-bold'>
                            {step.title}
                          </h3>
                          <p className='text-gray-300 max-lg:text-sm leading-relaxed'>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Section 3 - Impact */}
          <div className='scroll-section w-screen h-screen flex items-center justify-center bg-gradient-to-tr from-primary/20 to-background  flex-shrink-0'>
            <section className='py-16 lg:py-24 relative overflow-hidden'>
              <div className='max-w-7xl mx-auto px-8'>
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
                  {/* Left - Stats */}
                  <div className='grid grid-cols-2 gap-8'>
                    {stats.map((stat, index) => (
                      <div key={index} className='text-center lg:text-left'>
                        <div className='text-4xl md:text-5xl lg:text-5xl font-bold mb-2'>
                          {stat.number}
                        </div>
                        <div className='text-gray-400 text-sm uppercase tracking-wider'>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right - Team Values with Decorative Elements */}
                  <div className='relative'>
                    {/* Decorative Stars */}

                    {/* Team Values */}
                    <div className='relative z-10 space-y-6'>
                      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {teamValues.map((value, index) => (
                          <div
                            key={index}
                            className='text-center p-4 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors'
                          >
                            <div className='w-12 h-12 mx-auto mb-2 bg-gray-800 rounded-full flex items-center justify-center'>
                              <Star className='w-5 h-5' />
                            </div>
                            <p className='text-xs text-foreground/80 uppercase tracking-wider'>
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Placeholder for team images */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Section 4 - Future */}
          <div className='scroll-section w-screen h-screen flex items-center justify-center flex-shrink-0'>
            <section className='py-16 lg:py-24'>
              <div className='max-w-4xl mx-auto text-center px-4'>
                <p className='text-foreground/70 mb-4'>
                  Have you project in mind?
                </p>

                <h2 className='text-3xl capitalize md:text-4xl lg:text-5xl font-bold mb-12 leading-tight'>
                  Looking for elevating
                  <br />
                  your brand visibility!
                </h2>

                <div className='flex justify-center'>
                  <Button
                    size='lg'
                    className='rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 !px-8 py-6 text-lg font-medium group transition-all duration-300'
                  >
                    Contact With Us
                    <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
