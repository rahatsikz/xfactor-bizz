"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  EllipsisVertical,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";

const teamMembers = [
  {
    id: 1,
    name: "Rajesh Singh",
    role: "Co-Founder",
    username: "@rajeshsingh",
    gradient: "from-purple-500 to-pink-500",
    avatar: "RS",
    image:
      "https://images.pexels.com/photos/20542649/pexels-photo-20542649.jpeg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Content Creator",
    username: "@priyasharma",
    gradient: "from-green-500 to-teal-500",
    avatar: "PS",
    image:
      "https://images.pexels.com/photos/27103969/pexels-photo-27103969.jpeg",
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Video Creator",
    username: "@arjunpatel",
    gradient: "from-orange-500 to-red-500",
    avatar: "AP",
    image: "https://images.pexels.com/photos/7581004/pexels-photo-7581004.jpeg",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Social Media Manager",
    username: "@snehagupta",
    gradient: "from-blue-500 to-indigo-500",
    avatar: "SG",
    image: "https://images.pexels.com/photos/5419756/pexels-photo-5419756.jpeg",
  },
  {
    id: 5,
    name: "Vikram Kumar",
    role: "Brand Strategist",
    username: "@vikramkumar",
    gradient: "from-yellow-500 to-orange-500",
    avatar: "VK",
    image: "https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg",
  },
  {
    id: 6,
    name: "Anita Roy",
    role: "Creative Director",
    username: "@anitaroy",
    gradient: "from-pink-500 to-rose-500",
    avatar: "AR",
    image:
      "https://images.pexels.com/photos/32728036/pexels-photo-32728036.jpeg?auto=compress&cs=tinysrgb&w=960&h=550&dpr=1",
  },
];

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % teamMembers.length),
      3000
    );
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);

  const visible = [];
  const offset = 315;
  for (let i = -2; i <= 2; i++) {
    const idx = (currentIndex + i + teamMembers.length) % teamMembers.length;
    visible.push({ ...teamMembers[idx], position: i });
  }

  const getVisibleCards = () => {
    if (isMobile) {
      // Mobile: show only current card
      return [{ ...teamMembers[currentIndex], position: 0 }];
    } else {
      // Desktop: show 3 cards (current + adjacent)
      const visible = [];
      for (let i = -1; i <= 1; i++) {
        const idx =
          (currentIndex + i + teamMembers.length) % teamMembers.length;
        visible.push({ ...teamMembers[idx], position: i });
      }
      return visible;
    }
  };

  const visibleCards = getVisibleCards();

  return (
    <section className='py-20 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mb-0'>
          <h2 className='text-5xl font-bold text-white mb-4'>Meet Our Team</h2>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
            The creative minds behind our success. Each member brings unique
            expertise to deliver exceptional results.
          </p>
        </div>

        <div className='relative flex items-center justify-center h-[480px]'>
          <button
            onClick={goToPrevious}
            className='absolute left-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-transform duration-300 hover:scale-110'
          >
            <ChevronLeft className='w-6 h-6' />
          </button>
          <button
            onClick={goToNext}
            className='absolute right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-transform duration-300 hover:scale-110'
          >
            <ChevronRight className='w-6 h-6' />
          </button>

          <div
            className='relative w-full max-w-4xl h-full flex items-center justify-center '
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence initial={false}>
              {visibleCards
                .filter((member) => Math.abs(member.position) <= 1)
                .map((member) => (
                  <motion.div
                    key={member.id}
                    layout
                    animate={{
                      x: member.position * offset,
                      scale: member.position === 0 ? 1 : 0.75,
                      rotate: member.position * 10,
                      opacity:
                        member.position === 0
                          ? 1
                          : Math.abs(member.position) > 1
                          ? 0
                          : 0.6,
                    }}
                    transition={{
                      x: { type: "spring", stiffness: 50, damping: 25 },
                      opacity: { duration: 0.6 },
                    }}
                    className='absolute cursor-pointer'
                    style={{ zIndex: member.position === 0 ? 10 : 5 }}
                    onClick={() =>
                      member.position !== 0 &&
                      setCurrentIndex(
                        (prev) =>
                          (prev + member.position + teamMembers.length) %
                          teamMembers.length
                      )
                    }
                  >
                    <div className='w-80 flex flex-col justify-between bg-white rounded-3xl shadow-2xl  '>
                      {/* Header */}
                      <div className='flex items-center justify-between px-5 py-3.5 border-b border-gray-100'>
                        <div className='flex items-center gap-3'>
                          <div
                            className={`w-8 h-8 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-xs`}
                          >
                            {member.avatar}
                          </div>
                          <span className='font-semibold text-gray-900 text-sm'>
                            {member.username}
                          </span>
                        </div>
                        <EllipsisVertical className='text-slate-800' />
                      </div>

                      {/* Image & Overlay */}
                      <div className='relative h-56 w-full border-x-2 border-border overflow-hidden'>
                        <Image
                          src={member.image!}
                          alt={member.name}
                          fill
                          className='object-cover object-top '
                        />
                        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-4'>
                          <h3 className='text-lg font-bold text-white leading-tight'>
                            {member.name}
                          </h3>
                          <p className='text-xs text-white/90'>{member.role}</p>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className='px-5 py-4'>
                        <div className='flex items-center justify-between mb-1'>
                          <div className='flex items-center gap-3'>
                            <Heart className='w-5 h-5 text-background/65 hover:text-red-500 transition-colors cursor-pointer' />
                            <MessageCircle className='w-5 h-5 text-background/65 hover:text-blue-500 transition-colors cursor-pointer' />
                            <Send className='w-5 h-5 text-background/65 hover:text-green-500 transition-colors cursor-pointer' />
                          </div>
                          <Bookmark className='w-5 h-5 text-background/65 hover:text-yellow-500 transition-colors cursor-pointer' />
                        </div>
                        <p className='text-sm text-gray-600'>
                          <span className='font-semibold'>Team Member</span> •{" "}
                          <span>Professional</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2'>
            {teamMembers.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
