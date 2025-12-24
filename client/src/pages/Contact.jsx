import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import contactImg from '../assets/contact.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [contentLoaded, setContentLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!contentLoaded) {
    return (
      <div className="min-h-screen bg-gray-50 animate-pulse">
        {/* Hero Section Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          {/* Title Skeleton */}
          <div className="h-12 md:h-14 bg-gray-200 rounded w-80 mb-4"></div>
          
          {/* Subtitle Skeleton */}
          <div className="h-5 bg-gray-200 rounded w-64 mb-4"></div>
          
          {/* Description Skeleton */}
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
                {/* Name Field Skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                </div>

                {/* Email Field Skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
                  <div className="h-12 bg-gray-100 rounded"></div>
                </div>

                {/* Message Field Skeleton */}
                <div>
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-40 bg-gray-100 rounded"></div>
                </div>

                {/* Submit Button Skeleton */}
                <div className="h-12 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Contact Information Card Skeleton */}
            <div className="bg-gray-200 rounded-lg h-full min-h-[500px]">
              <div className="p-8">
                {/* Title Skeleton */}
                <div className="h-8 bg-gray-300 rounded w-56 mb-8"></div>
                
                {/* Contact Details Skeleton */}
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
    <div className="min-h-screen">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
         <h1 className="text-5xl font-bold mb-4 text-[#18181B]">
                CONTACT <span className="text-[#008A8A]">US</span>
              </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Heading, Paragraph, and Form */}
          <div className="flex flex-col">
            {/* Hero Section */}
            <div className="mb-8">
              <p className="text-[#008A8A] font-medium mb-2">Let's bring your ideas to life.</p>
              <p className="text-[#0C0C0D]">
                Whether you're planning a new interior project, renovation, or need reliable maintenance services, our team is here to help. Reach out to us and we'll get back to you promptly.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-[#D6E6E4] rounded-lg shadow-sm p-8 flex-1">
              <div className="space-y-6">
                <div>
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
                </div>

                <div>
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
                </div>

                <div>
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
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full cursor-pointer bg-[#008A8A] hover:bg-[#009090] text-white font-medium py-3 px-6 rounded transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information Card (Full Height) */}
          <div className="relative min-h-[500px] lg:min-h-0">
            <div className="overflow-hidden h-full relative">
              {/* Image Skeleton Loader */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse">
                  <div className="w-full h-full linear-to-r from-gray-200 via-gray-300 to-gray-200"></div>
                </div>
              )}

              {/* Actual Background Image */}
              <img
                src={contactImg}
                alt="Contact background"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
              
              {/* Content */}
              <div className="relative z-10 p-8 text-[#FFFFFF]">
                <h2 className="text-2xl font-bold mb-8">REACH US <span className='text-[#92E4E4]'>DIRECTLY</span></h2>
                
                <div className="space-y-2">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 mt-1 shrink-0" />
                    <p className="text-sm">
                      Al Nakheel, P.O Box 382864, Ras Al Khaimah, UAE
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 mt-1 shrink-0" />
                    <p className="text-sm">
                      alaneeqgm@gmail.com
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 mt-1 shrink-0" />
                    <p className="text-sm">
                      +97155 4308 183 , +97155 7727768
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}