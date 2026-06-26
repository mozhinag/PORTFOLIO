

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { title } from 'framer-motion/client';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const projects = [
  {
    title: 'Firebase Movie App',
    desc: 'A full-stack movie management platform built with React and Firebase, featuring authentication, movie CRUD operations, AI-powered reviews, wishlist management, likes, search, and pagination.',
    tech: [
      'Firebase Authentication',
      'Firestore Database',
      'OpenRouter AI',
      'Formik & Yup',
      'Tailwind CSS',
      'React Icons',
      'React-Toastify',
      'Pagination',
      'Wishlist & Likes',
    ],
    github: 'https://github.com/mozhinag/FIREBASE-MOVIE-APP.git',
    live: 'https://fir-movie-2794f.web.app',
    image: 'src/assets/images/MovieApp.png',
  },

  {
    title: 'E-Commerce Website',
    desc: 'Full-stack MERN e-commerce app with authentication, cart, and payment integration.',
    tech: [
      'MERN Stack',
      'Payment Gateway',
      'Redux',
      'RTK - Query',
      'React-Toastify',
      'React-Icons',
      'Multer',
      'Node.js',

      'JWT',
    ],
    github: 'https://github.com/mozhinag/ECOM.git',
    live: 'https://ecom-r4qd.onrender.com',
    image: 'src/assets/images/proshop.png',
  },

  {
    title: 'Blog Application',
    desc: 'A simple yet elegant blog application built with React and Node.js.',
    tech: [
      'MERN Stack',
      'React-Redux',
      'cloudinary',
      'React-Bootstrap',
      'React-Toastify',
      'React-Icons',

      'authentication',
      'jwt',
      'bcrypt',
      'images - multer',
    ],
    github: 'https://github.com/mozhinag/Blog-APP.git',
    live: 'https://blog-app-q1gk.onrender.com',
    image: 'src/assets/images/BlogApp.png',
  },

  {
    title: 'Expense Tracker',
    desc: 'An Expense Tracker application built using React, Node.js, Express, and MongoDB to manage daily income and expenses.',
    tech: ['MERN Stack', 'ContextApi', 'Morgan', 'bcrypt', 'Axios', 'JWT', 'React-Icons'],
    github: 'https://github.com/mozhinag/expense-tracker.git',
    live: 'https://expense-tracker-cjvs.onrender.com/',
    image: 'src/assets/images/Expense-tracker.png',
  },

  {
    title: 'Goal Setter App',
    desc: 'A goal-setting application built using React, Node.js, Express, and MongoDB.',
    tech: [
      'MERN Stack',
      'React-Redux',
      'React-Toastify',
      'bcryptjs',
      'Axios',
      'JWT',
      'React-Icons',
    ],
    github: 'https://github.com/mozhinag/MERN-PRO2.git',
    live: 'https://mern-pro2-1.onrender.com',
    image: 'src/assets/images/GoalSetter.png',
  },

  {
    title: 'To-Do App',
    desc: 'A To-Do application built using React, Node.js, Express, and MongoDB for managing daily tasks efficiently.',
    tech: ['React', 'MongoDB', 'JWT', 'Redux', 'React-Toastify', 'bcrypt', 'Axios', 'React-Icons'],
    github: 'https://github.com/mozhinag/TODO-LIST.git',
    live: 'https://todo-list-rrk6.onrender.com',
    image: 'src/assets/images/To-Do.png',
  },
];
const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleTech = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
const sliderRef = useRef(null);

const scrollLeft = () => {
  sliderRef.current.scrollBy({
    left: -350,
    behavior: 'smooth',
  });
};

const scrollRight = () => {
  sliderRef.current.scrollBy({
    left: 350,
    behavior: 'smooth',
  });
};
  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
        {/* 🔥 Slider Wrapper */}
        <div className="relative">
          {/* ⬅ LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-500/40 transition text-4xl"
          >
            <IoIosArrowBack />
          </button>

          {/* ➡ RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-500/40 transition text-4xl"
          >
            <IoIosArrowForward />
          </button>

          {/* 🔥 Horizontal Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-14"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="
      min-w-[280px]
      max-w-[280px]
      flex flex-col
      rounded-2xl
      overflow-hidden
      bg-white/10
      backdrop-blur-lg
      border border-white/20
      shadow-lg
    "
              >
                {/* IMAGE */}
                <div className="w-full h-48 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-1">
                  {/* TITLE */}
                  <h3 className="text-lg font-semibold mb-2 h-12 overflow-hidden">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.desc}</p>

                  {/* TECH STACK */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {(expandedCards[index] ? project.tech : project.tech.slice(0, 4)).map(
                        (tech, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-purple-500/20 rounded-full">
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {project.tech.length > 4 && (
                      <button
                        onClick={() => toggleTech(index)}
                        className="mt-3 text-sm text-purple-300 hover:text-purple-400"
                      >
                        {expandedCards[index] ? 'Show Less' : `+${project.tech.length - 4} More`}
                      </button>
                    )}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
            flex-1
            text-center
            py-2
            text-sm
            rounded-full
            border border-gray-400
            hover:border-purple-400
            transition
          "
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
            flex-1
            text-center
            py-2
            text-sm
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-blue-500
            hover:scale-105
            transition
          "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
