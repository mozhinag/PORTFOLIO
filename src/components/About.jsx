import React from "react";
import { motion } from "framer-motion";
import profile  from '../assets/images/profile.jpeg';
const About = () => {
  return (
    <section id="about" className="min-h-screen px-6 py-20 flex items-center justify-center">
      {/* ✅ SINGLE CONTAINER */}
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🧑‍💻 LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a passionate{' '}
            <span className="text-purple-400 font-semibold">Full Stack Developer</span> specializing
            in building modern and scalable web applications.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I work with{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              MERN Stack
            </span>{' '}
            to create responsive, efficient, and user-friendly applications.
          </p>

          <p className="text-gray-400 text-md leading-relaxed">
            I enjoy solving real-world problems, learning new technologies, and continuously
            improving my skills.
          </p>
        </motion.div>

        {/* 🎨 RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 20 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-2xl opacity-30 rounded-full"></div>

            {/* Image */}
            <img
              src={profile}
              alt="profile"
              className="relative w-full h-full object-cover rounded-full border-4 border-white/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
