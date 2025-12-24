import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import contactImg from '../assets/contact.png';

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

export default function Contact() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission (e.g. send to backend, show toast, reset form, etc.)
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!contentLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="h-12 md:h-14 bg-gray-200 rounded w-80 mb-4"></div>
          <div className="h-5 bg-gray-200 rounded w-64 mb-4"></div>
          <div className="space-y-3 max-w-xl">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>

        {/* Main Content Section Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form Skeleton */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="space-y-6">
                <div>
                  <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                </div>
                <div>
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-40 bg-gray-100 rounded"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Contact Information Card Skeleton */}
            <div className="bg-gray-200 rounded-lg h-full min-h-[500px]">
              <div className="p-8">
                <div className="h-8 bg-gray-300 rounded w-56 mb-8"></div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-gray-300 rounded mr-3"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-300 rounded w-full"></div>
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-gray-300 rounded mr-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-48"></div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-gray-300 rounded mr-3"></div>
                    <div className="h-4 bg-gray-300 rounded w-56"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={smoothFadeUp}
          className="mb-10"
        >
          <h1 className="text-5xl font-bold text-[#18181B]">
            CONTACT <span className="text-[#008A8A]">US</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Heading, Paragraph, Form */}
          <div className="flex flex-col">
            {/* Intro text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={smoothFadeUp}
              transition={{ delay: 0.15 }}
              className="mb-8"
            >
              <p className="text-[#008A8A] font-medium mb-2">
                Let's bring your ideas to life.
              </p>
              <p className="text-[#0C0C0D]">
                Whether you're planning a new interior project, renovation, or need reliable maintenance services, our team is here to help. Reach out to us and we'll get back to you promptly.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={smoothFadeUp}
              className="bg-[#D6E6E4] rounded-lg shadow-sm p-8 flex-1"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@xyz.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  ></textarea>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <button
                    onClick={handleSubmit}
                    className="w-full cursor-pointer bg-[#008A8A] hover:bg-[#009090] text-white font-medium py-3 px-6 rounded transition-colors duration-200"
                  >
                    Submit
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Information Card with background image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={smoothImageReveal}
            className="relative min-h-[500px] lg:min-h-0 rounded-lg overflow-hidden shadow-sm"
          >
            {/* Image loader overlay */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse">
                <div className="w-full h-full linear-to-r from-gray-200 via-gray-300 to-gray-200"></div>
              </div>
            )}

            <img
              src={contactImg}
              alt="Contact background"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />

            {/* Overlay content */}
            <div className="relative z-10 p-8 text-[#FFFFFF] h-full flex flex-col">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="text-2xl font-bold mb-8"
              >
                REACH US <span className="text-[#92E4E4]">DIRECTLY</span>
              </motion.h2>

              <div className="space-y-3 mt-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-start"
                >
                  <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0" />
                  <p className="text-sm">
                    Al Nakheel, P.O Box 382864, Ras Al Khaimah, UAE
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-start"
                >
                  <Mail className="w-5 h-5 mr-3 mt-1 shrink-0" />
                  <p className="text-sm">alaneeqgm@gmail.com</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex items-start"
                >
                  <Phone className="w-5 h-5 mr-3 mt-1 shrink-0" />
                  <p className="text-sm">
                    +97155 4308 183 , +97155 7727768
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}