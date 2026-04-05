import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="px-6 py-10 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* 🔥 Left - Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold"
        >
          Manimozhi A
        </motion.h1>

        {/* 🔗 Center - Links */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex gap-6 text-gray-300"
        >
          <li>
            <a href="#hero" className="hover:text-purple-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </li>
        </motion.ul>

        {/* 📱 Right - Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex gap-4"
        >
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* 🔥 Bottom Line */}
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
