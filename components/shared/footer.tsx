"use client";

// import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

export default function Component() {
  //   const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   };

  return (
    <footer
      className='bg-black text-white px-8 max-md:py-8'
      suppressHydrationWarning={true}
    >
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center min-h-[300px] container mx-auto'>
        {/* Left - Logo and description */}
        <div className='md:col-span-3 space-y-2 md:space-y-4'>
          <div className='text-2xl font-bold tracking-wider'>
            <span className='text-primary'>X</span>
            <span className='text-foreground pl-0.5 '>Factor</span>
          </div>
          <p className='text-sm text-foreground/70 leading-relaxed max-w-[200px]'>
            Elevating brands through strategic influencer marketing
          </p>
        </div>

        {/* Center - Social media labels only */}
        <div className='md:col-span-3 lg:col-span-2 flex md:flex-col items-center justify-center max-md:h-20  h-full'>
          <div className='flex items-center justify-center border md:border-b-0 md:border-t-0 border-border h-full w-full xl:w-10/12 group cursor-pointer'>
            <a
              href=''
              className='text-sm text-white font-medium tracking-wider group-hover:scale-110 group-hover:text-red-500 transform transition-all duration-300 '
            >
              YOUTUBE
            </a>
          </div>
          <div className='flex items-center justify-center border md:border-b-0 border-border h-full w-full xl:w-10/12  group cursor-pointer'>
            <a
              href=''
              className='text-sm text-white font-medium tracking-wider group-hover:scale-110 group-hover:text-sky-500 transform transition-all duration-300'
            >
              LINKEDIN
            </a>
          </div>
          <div className='flex items-center justify-center border md:border-b-0 border-border h-full w-full xl:w-10/12  group cursor-pointer'>
            <a
              href=''
              className='text-sm text-white font-medium tracking-wider group-hover:scale-110 group-hover:text-orange-600 transform transition-all duration-300'
            >
              INSTAGRAM
            </a>
          </div>
        </div>

        {/* Right - Let's Talk */}
        <div className='md:col-span-6 lg:col-span-7 flex justify-center md:justify-end items-center '>
          <motion.h2
            className='text-6xl lg:text-7xl xl:text-9xl xl:text-[140px] font-black bg-gradient-to-r from-sky-700 via-primary to-indigo-300 bg-clip-text text-transparent whitespace-nowrap leading-none tracking-tight'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {"LET'S TALK"}
          </motion.h2>
        </div>
      </div>

      {/* Bottom Row */}
      <div className='border-t border-gray-800 py-8 md:py-12 px-6  text-sm max-md:mt-6'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left'>
            <p className='text-foreground/70 text-xs'>
              © {new Date().getFullYear()} | Managed by X Factor Bizz | All
              rights reserved
            </p>
          </div>

          <div className='flex items-center gap-8 mt-4 md:mt-0'>
            <div className='flex gap-8'>
              <a
                href='#'
                className='text-xs text-foreground/70 hover:text-white transition-colors tracking-wider font-medium'
              >
                ABOUT US
              </a>
              <a
                href='#'
                className='text-xs text-foreground/70 hover:text-white transition-colors tracking-wider font-medium'
              >
                CONTACT
              </a>
              <a
                href='#'
                className='text-xs text-foreground/70 hover:text-white transition-colors tracking-wider font-medium'
              >
                Blogs
              </a>
              <a
                href='#'
                className='text-xs text-foreground/70 hover:text-white transition-colors tracking-wider font-medium'
              >
                FAQS
              </a>
            </div>

            {/* <Button
            size='icon'
            className='w-10 h-10 rounded-full bg-white text-black hover:bg-gray-200'
            onClick={scrollToTop}
          >
            <ArrowUp className='h-4 w-4' />
          </Button> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
