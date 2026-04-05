import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
      {/* 🔥 Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          className="w-full h-full object-cover opacity-20"
          alt="bg"
        />
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* 🔥 Small Title */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-gray-400 mb-4"
        >
          MERN Stack Developer
        </motion.p>

        {/* 🔥 Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">
            Manimozhi A
          </span>
        </motion.h1>

        {/* 🔥 Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed"
        >
          Crafting modern, scalable and high-performance web applications using{' '}
          <span className="font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            MERN Stack
          </span>
        </motion.p>

        {/* 🔥 Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4"
        >
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition shadow-lg">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-full border border-gray-400 hover:border-purple-400 hover:text-purple-300 transition">
            Contact Me
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
