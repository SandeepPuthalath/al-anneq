import { useState, useEffect } from 'react';
import curtainsAndblindsImg from '../assets/curtains&blinds.png';

export default function CurtainsAndBlinds() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!contentLoaded) {
    return (
      <div className="py-16 px-4 animate-pulse">
        <div className="max-w-6xl mx-auto">
          {/* Title Skeleton */}
          <div className="h-10 bg-gray-200 rounded w-64 mb-6"></div>
          
          {/* Description Skeleton */}
          <div className="space-y-3 mb-12 max-w-4xl">
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
                {[1, 2, 3, 4].map((item) => (
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
    <div className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-[#18181B] mb-6 uppercase">Curtains & Blinds</h1>
        
        {/* Description */}
        <p className="text-[#0C0C0D] text-sm md:text-base font-normal mb-18 max-w-5xl">
          Complete your interior design with our premium curtains and blinds solutions. We offer a stunning collection of window treatments that combine functionality with aesthetic appeal, providing privacy, light control, and energy efficiency. Our extensive range includes custom-made options. Whether you need elegant drapes for your living room or practical blinds for your office, we have the perfect solution.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Roller Blinds List */}
          <div>
            <h2 className="text-xl font-semibold text-[#008A8A] mb-6">Curtains & Blinds</h2>
            <div className="space-y-4">
              <div className="py-3 border-b border-[#7FC5C5]">
                <span className="text-[#211D1E] font-medium">Roller Blinds</span>
              </div>
              <div className="py-3 border-b border-[#7FC5C5]">
                <span className="text-[#211D1E] font-medium">Venetian Blinds</span>
              </div>
              <div className="py-3 border-b border-[#7FC5C5]">
                <span className="text-[#211D1E] font-medium">Vertical Blinds</span>
              </div>
              <div className="py-3 border-b border-[#7FC5C5]">
                <span className="text-[#211D1E] font-medium">Motorized Curtains & Blinds</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image with Skeleton */}
          <div className="relative overflow-hidden">
            {/* Skeleton Loader */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse">
                <div className="w-full h-full linear-to-r from-gray-200 via-gray-300 to-gray-200"></div>
              </div>
            )}
            
            {/* Actual Image */}
            <img 
              src={curtainsAndblindsImg} 
              alt="Curtains and Blinds" 
              className={`w-full h-auto object-cover transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}