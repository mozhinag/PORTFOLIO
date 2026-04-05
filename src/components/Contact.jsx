import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 text-white flex items-center">
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Get In{' '}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        {/* 💬 Short Message */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 text-lg mb-8"
        >
          I'm open to opportunities and collaborations. Feel free to reach out!
        </motion.p>

        {/* 🔥 Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition shadow-lg"
          >
            📧 Email Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            className="px-6 py-3 rounded-full border border-gray-400 hover:border-purple-400 hover:text-purple-300 transition"
          >
            💻 GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="px-6 py-3 rounded-full border border-gray-400 hover:border-blue-400 hover:text-blue-300 transition"
          >
            🔗 LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-full border border-green-400 hover:text-green-300 transition"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
