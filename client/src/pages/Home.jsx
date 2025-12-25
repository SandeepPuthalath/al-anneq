import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import rectangleImg6 from '../assets/Rectangle 6.png';
import rectangleImg8 from '../assets/Rectangle 8.png';
import rectangleImg9 from '../assets/Rectangle 9.png';
import rectangleImg10 from '../assets/Rectangle 10.png';
import square1 from '../assets/square 1.png';
import square2 from '../assets/square 2.png';
import square3 from '../assets/square 3.png';
import square4 from '../assets/square 4.png';

const smoothFadeUp = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.25, 0.1, 0.25, 1]   // smoother cubic-bezier
    }
  }
};

const smoothImageReveal = {
  hidden: { 
    opacity: 0, 
    scale: 1.04,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1]     // very smooth overshoot
    }
  }
};

export default function Home() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    hero: false,
    services: false,
    customer: false,
    team: false,
    gallery1: false,
    gallery2: false,
    gallery3: false,
    gallery4: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 400); // slightly faster skeleton → content transition
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (key) => {
    setImagesLoaded(prev => ({ ...prev, [key]: true }));
  };

  if (!contentLoaded) {
    return (
      <div className="max-w-7xl mx-auto animate-pulse">
        {/* Hero Section Skeleton */}
        <div className='mt-8 mb-8 px-4 md:px-8'>
          <div className='h-16 md:h-20 lg:h-24 bg-gray-200 rounded w-3/4 mb-2'></div>
          <div className='h-16 md:h-20 lg:h-24 bg-gray-200 rounded w-3/4'></div>
        </div>
        
        <div className='mb-16 px-8'>
          <div className='space-y-3 max-w-4xl'>
            <div className='h-4 bg-gray-200 rounded w-full'></div>
            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
          </div>
        </div>
        
        <div className='h-96 bg-gray-200 mb-16'></div>

        <section className="bg-gray-800 py-16 px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className='h-4 bg-gray-700 rounded w-24'></div>
                <div className='space-y-3'>
                  <div className='h-6 bg-gray-700 rounded w-full'></div>
                  <div className='h-6 bg-gray-700 rounded w-full'></div>
                  <div className='h-6 bg-gray-700 rounded w-3/4'></div>
                </div>
                <div className='space-y-2'>
                  <div className='h-4 bg-gray-700 rounded w-full'></div>
                  <div className='h-4 bg-gray-700 rounded w-5/6'></div>
                </div>
              </div>
              <div className="space-y-8">
                {[1, 2, 3].map(item => (
                  <div key={item} className="text-center">
                    <div className='h-16 bg-gray-700 rounded w-32 mx-auto mb-2'></div>
                    <div className='h-3 bg-gray-700 rounded w-40 mx-auto'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mb-16 px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="h-96 bg-gray-200"></div>
            <div className="bg-gray-100 px-8 md:px-12 py-8">
              <div className='h-6 bg-gray-200 rounded w-24 mb-6'></div>
              <div className='space-y-2 mb-8'>
                <div className='h-4 bg-gray-200 rounded w-full'></div>
                <div className='h-4 bg-gray-200 rounded w-3/4'></div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(item => (
                  <div key={item} className="h-8 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pb-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto space-y-16">
            {[1, 2].map(item => (
              <div key={item} className="grid md:grid-cols-2 gap-8">
                <div className='h-64 bg-gray-200 rounded'></div>
                <div className="space-y-4">
                  <div className='h-6 bg-gray-200 rounded w-48'></div>
                  <div className='space-y-2'>
                    <div className='h-4 bg-gray-200 rounded w-full'></div>
                    <div className='h-4 bg-gray-200 rounded w-full'></div>
                    <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 md:px-8 mb-16">
          <div className="grid grid-cols-2 gap-0">
            {[1, 2, 3, 4].map(item => (
              <div key={item} className="h-64 bg-gray-200"></div>
            ))}
          </div>
        </div>

        <div className="bg-gray-200 py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className='h-8 bg-gray-300 rounded w-64 mb-8'></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map(item => (
                <div key={item} className="bg-gray-300 p-6 rounded">
                  <div className='h-6 bg-gray-400 rounded w-3/4 mb-3'></div>
                  <div className='space-y-2 mb-4'>
                    <div className='h-3 bg-gray-400 rounded w-full'></div>
                    <div className='h-3 bg-gray-400 rounded w-full'></div>
                    <div className='h-3 bg-gray-400 rounded w-2/3'></div>
                  </div>
                  <div className='h-4 bg-gray-400 rounded w-24'></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="max-w-7xl mx-auto overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={smoothFadeUp}
        className='uppercase mt-8 mb-8 px-4 md:px-8'
      >
        <h1 className='text-[#18181B] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-semibold leading-none'>
          Creating Spaces
        </h1>
        <h1 className='text-[#18181B] text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-semibold leading-none'>
          That Last <span className='text-[#049E9E]'>Beyond Time.</span>
        </h1>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={smoothFadeUp}
        transition={{ delay: 0.15 }}
        className='mb-16 px-8'
      >
        <p className='text-[#0C0C0D] text-xs sm:text-sm md:text-base'>
          We integrate design innovation, skilled execution, and deep client understanding to create interiors that reflect elegance, comfort, and functionality.
        </p>
      </motion.div>

      {/* Hero Image – very smooth reveal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={smoothImageReveal}
        className='relative overflow-hidden'
      >
        {!imagesLoaded.hero && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img 
          src={rectangleImg6}
          alt="Interior design showcase" 
          className={`w-full h-auto object-cover transition-opacity duration-700 ${
            imagesLoaded.hero ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => handleImageLoad('hero')}
          loading="lazy"
        />
      </motion.div>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={smoothFadeUp}
        className="bg-[#1a1a1a] text-white py-16 px-4 md:px-8 mb-16"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-30">
            <motion.div variants={smoothFadeUp} className="space-y-8">
              <h3 className="text-xs uppercase tracking-wider text-[#92E4E4]">About Us</h3>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-[26px] leading-snug">
                  <span className="text-[#F8F8F8] font-semibold">AL ANEEQ GENERAL MAINTENANCE LLC established in 2014, is an expert interior design and contracting firm for Homes, Villas, and Hotel apartments, Residential and Commercial projects.</span>
                  <span className="text-[#979797] font-normal"> We ensure successful, on-time delivery through our skilled team and dedicated project management.</span>
                </h2>
              </div>
              <div className="pt-8">
                <p className="text-sm sm:text-base text-[#F8F8F8] leading-relaxed">
                  Our mission to attain a prominent position by conveying quality operations, maintenance and support services to all our esteemed clients who desires our skills and experience.
                </p>
              </div>
            </motion.div>

            <div className="flex flex-col items-center justify-center space-y-10">
              {[
                { num: "10", label: "Experience in the industry." },
                { num: "177", label: "Projects Completed." },
                { num: "95", suffix: "%", label: "Client Satisfaction Rate" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ scale: 1.08, transition: { duration: 0.4 } }}
                  className="text-center cursor-default"
                >
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#92E4E4] leading-none mb-2">
                    {stat.num}<span className="text-white">{stat.suffix || '+'}</span>
                  </div>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={smoothFadeUp}
        className="mb-16 px-4 md:px-8"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <motion.div 
            variants={smoothImageReveal}
            className="relative bg-gray-800 h-96 md:h-auto flex items-center justify-center overflow-hidden mb-8 md:mb-0"
          >
            {!imagesLoaded.services && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
            <img 
              src={rectangleImg8}
              alt="Bedroom interior" 
              className={`w-full h-full object-cover transition-all duration-1000 ${
                imagesLoaded.services ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              onLoad={() => handleImageLoad('services')}
              loading="lazy"
            />
          </motion.div>
          
          <div className="bg-white flex flex-col md:px-8 py-8 md:py-0">
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-xl font-normal text-[#008A8A] mb-6">Services</p>
              <p className="text-sm sm:text-base text-[#211D1E]">
                Our mission to attain a prominent position by conveying quality operations, maintenance and support services to all our esteemed clients who desires our skills and experience.
              </p>
            </motion.div>
            
            <nav className="space-y-5 mb-20">
              {[
                "Wall Coverings",
                "Flooring Solutions",
                "Wall Paintings",
                "Customized Wallpaper Supply",
                "Curtains & Blinds"
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
                >
                  <Link 
                    to={`/services/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="flex justify-between items-center py-3 border-b border-gray-200 hover:text-[#008A8A] transition-colors group"
                  >
                    <span className="text-sm font-medium">{item}</span>
                    <ArrowUpRight 
                      className="w-4 h-4 text-[#211D1E] group-hover:text-[#008A8A] transition-colors" 
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <Link 
                to="/services" 
                className="mt-8 rounded-lg bg-black text-white px-6 py-3 text-sm hover:bg-gray-900 transition w-fit flex items-center gap-2 shadow-sm"
              >
                View All Services
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Customer Satisfaction & Team */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={smoothFadeUp}
        className="pb-16 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-[#008A8A] text-xl font-normal mb-5">Customer satisfaction</h2>
              <p className="text-[#211D1E] text-base leading-relaxed">
                Customer satisfaction is our primary objective. We take time to understand our customer's needs so as to meet their demands to their satisfaction. The perfect blend of our superior workmanship and affordable pricing adds more to our customer satisfaction.
              </p>
            </motion.div>
            
            <motion.div variants={smoothImageReveal}>
              {!imagesLoaded.customer && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
              <img 
                src={rectangleImg9}
                alt="Bedroom with leaf wallpaper" 
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imagesLoaded.customer ? 'opacity-100 scale-100' : 'opacity-0 scale-104'
                }`}
                onLoad={() => handleImageLoad('customer')}
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={smoothImageReveal} className="order-2 md:order-1">
              {!imagesLoaded.team && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
              <img 
                src={rectangleImg10}
                alt="Bedroom with floral wallpaper" 
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imagesLoaded.team ? 'opacity-100 scale-100' : 'opacity-0 scale-104'
                }`}
                onLoad={() => handleImageLoad('team')}
                loading="lazy"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col justify-center order-1 md:order-2"
            >
              <h2 className="text-[#008A8A] text-xl font-normal mb-5">Our Team</h2>
              <p className="text-[#211D1E] text-base leading-relaxed">
                Our team includes qualified project engineers, project supervisors, and skilled and semi-skilled laborers. In this competitive market, AL ANEEQ GENERAL MAINTENANCE LLC stands out due to our dedication and exceptional service to our clients. We would welcome the opportunity to provide you with the same dedicated service currently enjoyed by our other privileged clients.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Gallery – staggered smooth reveal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={smoothFadeUp}
        className="px-4 md:px-8 mb-16"
      >
        <div className="grid grid-cols-2 gap-0">
          {[
            { src: square1, key: 'gallery1', alt: 'Interior 1' },
            { src: square2, key: 'gallery2', alt: 'Interior 2' },
            { src: square4, key: 'gallery3', alt: 'Interior 3' },
            { src: square3, key: 'gallery4', alt: 'Interior 4' },
          ].map((image, i) => (
            <motion.div
              key={image.key}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.1, 
                delay: i * 0.12,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ scale: 1.025, transition: { duration: 0.5 } }}
              className="relative overflow-hidden bg-gray-200 aspect-square"
            >
              {!imagesLoaded[image.key] && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
              <img 
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  imagesLoaded[image.key] ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                onLoad={() => handleImageLoad(image.key)}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials – staggered & smooth */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        variants={smoothFadeUp}
        className="bg-[#BDE1E1] py-20 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-10"
          >
            <p className="text-[#008A8A] text-sm mb-3">Testimonials</p>
            <h2 className="text-[#18181B] text-3xl md:text-4xl font-semibold">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Outstanding workmanship!", text: "AL AMEEQ's attention to detail and timely execution truly impressed us. Our new office interior exceeded expectations." },
              { title: "Professional and reliable.", text: "From planning to finishing touches, their team was responsive and professional throughout the project." },
              { title: "Great experience overall.", text: "They understood our requirements perfectly and provided elegant, practical solutions within budget." }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1,
                  delay: i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="bg-[#D8EEED] p-7 rounded-lg shadow-sm"
              >
                <h3 className="text-[#211D1E] font-semibold text-lg mb-4">
                  "{t.title}"
                </h3>
                <p className="text-[#211D1E] text-sm leading-relaxed mb-5">
                  {t.text}
                </p>
                <div className="flex gap-1">
                  {Array(4).fill(0).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-black stroke-black" />
                  ))}
                  <Star className="w-5 h-5 fill-none stroke-black" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}