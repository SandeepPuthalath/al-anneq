import { Link } from "react-router-dom";
import serviceSectionImg from '../assets/Rectangle 12.png';
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

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

const Services = () => {
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
      <div className="pt-16 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header Skeleton */}
          <div className="mb-8">
            <div className="h-12 md:h-16 bg-gray-200 rounded w-80 mb-4"></div>
            <div className="space-y-3 mb-6 max-w-4xl">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="h-6 bg-gray-200 rounded w-24 mb-4"></div>
          </div>

          {/* Service List Skeleton */}
          <div className="mb-4 space-y-0">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="px-2 py-4 border-b border-gray-200 flex justify-between items-center">
                <div className="h-5 bg-gray-200 rounded w-48"></div>
                <div className="h-10 w-10 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section Skeleton */}
        <div className="h-64 md:h-96 bg-gray-200"></div>
      </div>
    );
  }

  return (
    <div className="pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={smoothFadeUp}
          className="mb-8"
        >
          <h1 className="uppercase text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#18181B]">OUR </span>
            <span className="text-[#008A8A]">SERVICE</span>
          </h1>
          <p className="max-w-5xl text-[#0C0C0D] text-sm md:text-base font-normal mb-6">
            At AL ANEEQ GENERAL MAINTENANCE LLC, we offer a complete range of interior and maintenance solutions designed to bring functionality, comfort, and elegance to every space. Since 2014, we’ve been transforming Homes, Villas, and Hotel apartments with a perfect blend of creativity, precision, and craftsmanship.
          </p>
          <h2 className="text-[#008A8A] font-semibold text-lg mb-4">Services</h2>
        </motion.div>

        {/* Service List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={smoothFadeUp}
          className="mb-4"
        >
          {[
            { title: "Wall Coverings", path: "/services/wall-coverings" },
            { title: "Flooring Solutions", path: "/services/flooring-solutions" },
            { title: "Wall Paintings", path: "/services/wall-paintings" },
            { title: "Customized Wallpaper", path: "/services/customized-wallpaper" },
            { title: "Curtains & Blinds", path: "/services/curtains-blinds" },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Link
                to={service.path}
                className="group px-2 py-4 border-b border-[#7FC5C5] flex justify-between items-center hover:bg-[#BDE1E1] transition-all duration-300"
              >
                <h3 className="text-[#211D1E] font-medium transition-colors group-hover:text-[#008A8A]">
                  {service.title}
                </h3>
                <svg
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  width="20"
                  height="20"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2084 12.2086C12.7088 11.7082 13.52 11.7082 14.0204 12.2086L28.5412 26.7295C29.0416 27.2298 29.0416 28.0409 28.5412 28.5413C28.0409 29.0417 27.2296 29.0417 26.7292 28.5413L12.2084 14.0206C11.708 13.5202 11.708 12.7089 12.2084 12.2086Z"
                    fill="#211D1E"
                  />
                  <path
                    d="M27.6353 10.9791C28.3429 10.9791 28.9166 11.5527 28.9166 12.2603V27.6354C28.9166 28.343 28.3429 28.9166 27.6353 28.9166H12.2603C11.5526 28.9166 10.979 28.343 10.979 27.6354C10.979 26.9276 11.5526 26.3541 12.2603 26.3541H26.3541V12.2603C26.3541 11.5527 26.9276 10.9791 27.6353 10.9791Z"
                    fill="#211D1E"
                  />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={smoothImageReveal}
        className="relative overflow-hidden shadow-lg"
      >
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse">
            <div className="w-full h-full linear-to-r from-gray-200 via-gray-300 to-gray-200"></div>
          </div>
        )}

        <img
          src={serviceSectionImg}
          alt="Service showcase"
          className={`w-full h-auto object-cover transition-all duration-1000 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default Services;