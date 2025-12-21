import { useState, useEffect } from 'react';
import wallpaperSupply from '../assets/wallpaperSupply.png';

export default function WallpaperSupply() {
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
                {[1, 2].map((item) => (
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
        <h1 className="text-4xl font-bold text-[#18181B] mb-6 uppercase">Specialized for Customized Wallpaper supply</h1>
        
        {/* Description */}
        <p className="text-[#0C0C0D] text-sm md:text-base font-normal mb-18 max-w-5xl">
          Give your space a fresh new look with our professional wall painting services. We specialize in interior and exterior painting, using premium quality paints and modern techniques to deliver exceptional results. Our skilled painters ensure smooth, even coverage with attention to detail at every step. From surface preparation to final finishing, we maintain the highest standards of workmanship.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Wall Coverings List */}
          <div>
            <h2 className="text-xl font-semibold text-[#008A8A] mb-6">Specialized for Customized Wallpaper supply</h2>
            <p className="text-sm font-semibold text-[#211D1E] mb-6">We are specialized wallpaper suppliers offering an extensive collection of premium wallpapers for residential and commercial projects.</p>
            <div className="space-y-4">
              <div className="py-3 border-b border-[#7FC5C5]">
                <span className="text-[#211D1E] font-medium">Wallpaper Supply & Sale</span>
              </div>
              <div className="py-3 border-b border-[#7FC5C5]">
                <span className="text-[#211D1E] font-medium">Custom Wallpaper Designs</span>
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
              src={wallpaperSupply} 
              alt="Wallpaper Supply" 
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