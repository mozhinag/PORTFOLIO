import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold"
        >
          Manimozhi A
        </motion.h1>

        {/* Center */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex gap-6 text-gray-300"
        >
          <li><a href="#hero" className="hover:text-purple-400">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400">About</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </motion.ul>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex gap-6 text-2xl"
        >
          <a href="https://github.com/mozhinag" target="_blank">
            <FaGithub className="hover:text-purple-400 transition" />
          </a>

          <a href="https://www.linkedin.com/in/manimozhi-a-75aba2297" target="_blank">
            <FaLinkedin className="hover:text-blue-400 transition" />
          </a>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-gray-400 text-sm mt-6"
      >
        © {new Date().getFullYear()} Manimozhi A. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
