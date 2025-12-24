import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bedroomImage from '../assets/square 4.png';

const smoothFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const smoothImageReveal = {
  hidden: { opacity: 0, scale: 1.04, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WallCoverings() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  if (!contentLoaded) {
    return (
      <div className="py-16 px-4 md:px-8 animate-pulse">
        <div className="max-w-6xl mx-auto">
          {/* Title Skeleton */}
          <div className="h-10 bg-gray-200 rounded w-64 mb-6"></div>
          
          {/* Description Skeleton */}
          <div className="space-y-3 mb-18 max-w-5xl">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>

          {/* Content Grid Skeleton */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side Skeleton */}
            <div>
              <div className="h-6 bg-gray-200 rounded w-40 mb-6"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="py-3 border-b border-gray-200">
                    <div className="h-5 bg-gray-200 rounded w-48"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Image Skeleton */}
            <div className="h-64 md:h-80 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={smoothFadeUp}
          className="text-4xl font-bold text-[#18181B] mb-6 uppercase"
        >
          WALL COVERINGS
        </motion.h1>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={smoothFadeUp}
          transition={{ delay: 0.15 }}
          className="text-[#0C0C0D] text-sm md:text-base font-normal mb-18 max-w-5xl"
        >
          Transform your walls with our elegant wall covering products. We specialize in premium designs and finishes that enhance the aesthetic appeal of 
          your space while ensuring durability and longevity. Our team uses premium materials and advanced techniques to deliver flawless results that 
          exceed expectations. From modern wallpapers to classic patterns, we bring your vision to life.
        </motion.p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Wall Coverings List */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={smoothFadeUp}
          >
            <h2 className="text-xl font-semibold text-[#008A8A] mb-6">Wall coverings</h2>
            <div className="space-y-4">
              {[
                "Digital Wallpaper",
                "Fabric Backed Wallpaper",
                "Paper Backed Wallpaper",
                "Custom Made Wallpapers",
                "Mural Wallpaper",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="py-3 border-b border-[#7FC5C5]"
                >
                  <span className="text-[#211D1E] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={smoothImageReveal}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse">
                <div className="w-full h-full linear-to-r from-gray-200 via-gray-300 to-gray-200"></div>
              </div>
            )}

            <img
              src={bedroomImage}
              alt="Bedroom with decorative wall covering"
              className={`w-full h-auto object-cover transition-all duration-1000 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}