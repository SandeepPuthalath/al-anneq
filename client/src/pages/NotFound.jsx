import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <motion.div
        className="text-center max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Big 404 Number */}
        <motion.h1
          className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-[#008A8A] leading-none mb-4"
          variants={numberVariants}
        >
          404
        </motion.h1>

        {/* Main Message */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#18181B] mb-6"
          variants={itemVariants}
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[#0C0C0D] text-base sm:text-lg md:text-xl mb-10 max-w-xl mx-auto"
          variants={itemVariants}
        >
          Sorry, the page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Back to Home Button */}
        <motion.div variants={itemVariants}>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#008A8A] text-white font-medium rounded-lg hover:bg-[#006f6f] transition-colors shadow-md hover:shadow-lg text-lg group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>

        {/* Optional subtle decoration */}
        <motion.div
          className="mt-12 text-[#008A8A] opacity-30 text-sm"
          variants={itemVariants}
          transition={{ delay: 0.8 }}
        >
          AL ANEEQ GENERAL MAINTENANCE LLC
        </motion.div>
      </motion.div>
    </div>
  );
}