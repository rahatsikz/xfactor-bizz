"use client";

import { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

const navItems = [
  { name: "HOME", href: "#" },
  { name: "ABOUT US", href: "#" },
  { name: "OUR SERVICES", href: "#" },
  { name: "PORTFOLIO", href: "#" },
  { name: "BLOGS", href: "#" },
  { name: "CONTACT US", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery("(max-width: 1023px)");

  useLayoutEffect(() => {
    if (!isTablet) setIsOpen(false);
  }, [isTablet]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='bg-[#080c1d] text-foreground max-lg:px-8 px-5 py-6 sticky top-0 z-[60] shadow-sm'
      suppressHydrationWarning={true}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className='flex items-center'
        >
          <div className='text-2xl font-bold tracking-wider'>
            <span className='text-primary'>X</span>
            <span className='text-foreground pl-0.5 '>Factor</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-8'>
          {navItems.slice(0, -1).map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              //   whileHover={{ y: -2 }}
              className='text-sm font-medium tracking-wide hover:text-primary transition-colors duration-300 relative group'
            >
              {item.name}
              {/* <motion.div
                className='absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300'
                whileHover={{ width: "100%" }}
              /> */}
            </motion.a>
          ))}
        </div>

        {/* Right Side */}
        <div className='flex items-center space-x-4'>
          {/* Desktop Contact Us Button */}
          <motion.div
            className='hidden lg:block'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              className='relative  text-white font-medium px-8 py-2 rounded-full  border border-primary shadow-[0_0_12px_2px_rgba(153,85,255,0.5)] transition hover:brightness-110 capitalize'
              size='lg'
              style={{
                background: `linear-gradient(120deg, #0094d3, #297eb6, #4B1FA6)`,
                backgroundSize: "200% 200%",
                animation: "flow-button 5.5s ease-in-out infinite",
                boxShadow: `inset 0 4px 8px rgba(255, 255, 255, 0.1),
                inset 0 -4px 8px rgba(0, 0, 0, 0.3),
                0 0 10px rgba(153,85,255,0.6)`,
              }}
            >
              Contact us
            </Button>
            <style jsx>{`
              @keyframes flow-button {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}</style>
          </motion.div>

          {/* Mobile Drawer - Only on smaller screens */}
          {isTablet && (
            <Drawer direction='right' open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant='ghost'
                    size='icon'
                    className='text-white hover:text-primary hover:bg-gray-800'
                  >
                    <Menu className='h-8 w-8' />
                  </Button>
                </motion.div>
              </DrawerTrigger>

              <DrawerContent className='bg-[#080c1d] text-white border-gray-800 h-full w-full! md:w-80 ml-auto [&>div:first-child]:hidden z-[70]'>
                <DrawerHeader className='border-b border-gray-800'>
                  <div className='flex items-center justify-between'>
                    <DrawerTitle className='text-2xl font-bold tracking-wider'>
                      <span className='text-primary'>X</span>
                      <span className='text-foreground pl-[1px]'>factor</span>
                    </DrawerTitle>
                    <DrawerClose asChild>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='text-white hover:text-orange-500 hover:bg-gray-800'
                      >
                        <X className='h-8 w-8' />
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerHeader>

                {/* Drawer Navigation */}
                <div className='flex flex-col p-6 space-y-4'>
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.001, duration: 0.3 }}
                      whileHover={{ x: 10, color: "#0094d3" }}
                      className='text-lg font-medium tracking-wide hover:text-primary transition-colors duration-300 py-3 border-b border-gray-800/50 last:border-b-0'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  {/* Contact Us in Mobile Drawer */}
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>

      {/* Animated border bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className='absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent'
      />
    </motion.nav>
  );
}
