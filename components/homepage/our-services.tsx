"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Share2,
  Megaphone,
  Code,
  Video,
} from "lucide-react";
import Image from "next/image";
import business from "@/assets/business.png";
import influencer from "@/assets/influencer.png";
import socialMedia from "@/assets/social-media.png";
import marketting from "@/assets/marketting.png";
import it from "@/assets/it.png";
import reel from "@/assets/reel.png";

const services = [
  {
    id: 1,
    title: "Influencer Marketing",
    description:
      "X Factor army know exactly how to discover and track the right influencer for you to maximize engagement and visibility.",
    icon: Users,
    image: influencer,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Business Growth Consultancy",
    description:
      "Unlock your business's full potential with tailored strategies and expert guidance.",
    icon: TrendingUp,
    image: business,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "Transforming brands through strategic social media and management tailored for maximum impact.",
    icon: Share2,
    image: socialMedia,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 6,
    title: "Creative Instagram Reels",
    description:
      "Unleash creativity with dynamic shots, vibrant edits, and engaging storytelling. Elevate your brand with captivating videos.",
    icon: Video,
    image: reel,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    title: "IT Solutions",
    description:
      "Revolutionize your business with bespoke IT services driving efficiency, innovation, and growth in a dynamic digital landscape.",
    icon: Code,
    image: it,
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 4,
    title: "Marketing Campaign & Event Promotion",
    description:
      "Empowering brands through expertly crafted campaigns, event launches and dynamic strategies.",
    icon: Megaphone,
    image: marketting,
    color: "from-orange-500 to-red-500",
  },
];

export default function OurServices() {
  return (
    <section className='py-28 px-5 lg:px-8'>
      <div className='container mx-auto max-w-7xl'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-5xl font-bold mb-1.5'>OUR SERVICES</h2>
          <p className='text-base text-foreground/70 max-w-lg mx-auto'>
            Comprehensive solutions to elevate your brand and drive meaningful
            growth across all digital platforms
          </p>
        </div>

        {/* Compact Grid */}
        <div className='lg:columns-3 max-lg:gap-5 space-y-5 max-lg:grid  md:max-lg:grid-cols-2 '>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className='lg:inline-block w-full lg:break-inside-avoid h-full'
              >
                <Card className='group relative overflow-hidden border-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl pt-1 max-lg:h-full'>
                  <CardContent className='p-4'>
                    {/* Service Badge */}
                    <div className='flex items-center justify-between mb-3'>
                      <Badge
                        className={`bg-gradient-to-r ${service.color} text-white border-0 px-2 py-1 text-xs`}
                      >
                        <Icon className='w-3 h-3 mr-1' />
                        Service
                      </Badge>
                      <ArrowRight className='w-4 h-4 text-white/60 group-hover:text-white invisible group-hover:visible group-hover:translate-x-1 transition-all duration-300' />
                    </div>

                    {/* Image */}
                    <div className='mb-4 flex items-center justify-center h-40 w-full '>
                      <Image
                        src={service.image.src ?? "/next.svg"}
                        alt={service.title}
                        width={100}
                        height={100}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='w-full h-full object-top object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className='text-lg font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300'>
                        {service.title}
                      </h3>
                      <p className='text-slate-300 text-sm leading-relaxed text-pretty'>
                        {service.description}
                      </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Bottom Gradient Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    />
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
