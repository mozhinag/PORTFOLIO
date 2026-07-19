import React from "react";
import { motion } from "framer-motion";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import contactImage from '../assets/images/Contact.jpeg';
import resumePDF from '../assets/ResumeLinksNew.pdf';
const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 text-white flex items-center">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* 🖼️ LEFT SIDE IMAGE */}
        <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}>
          <img
            src={contactImage}
            alt="contact"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* 👉 RIGHT SIDE CONTENT */}
        <div className="text-center md:text-left">
          {/* Heading */}
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

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg mb-8"
          >
            I'm open to opportunities and collaborations. Feel free to reach out!
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            {/* Email */}
            <a
              href="mailto:manimozhinagooran06@gmail.com"
              className="px-6 py-3 hover:scale-105 transition shadow-lg flex items-center gap-2"
            >
              <MdAttachEmail /> Email
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mozhinag"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 hover:text-purple-300 transition flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manimozhi-a-75aba2297"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 hover:text-blue-300 transition flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>

            {/* Resume */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noreferrer"
              download
              className="px-6 py-3   hover:text-green-300 transition"
            >
              📄 Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
