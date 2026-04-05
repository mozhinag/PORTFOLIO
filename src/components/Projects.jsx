import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Website',
    desc: 'Full-stack MERN e-commerce app with authentication, cart, and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/mozhinag/ECOM.git',
    live: 'https://ecom-r4qd.onrender.com',
    image: 'src/assets/images/Ecom.jpeg',
  },
  {
    title: 'Blog Application',
    desc: 'A simple yet elegant blog application built with React and Node.js.',
    tech: ['React', 'Node.js', 'Express'],
    github: 'https://github.com/mozhinag/Blog-APP.git',
    live: 'https://blog-app-q1gk.onrender.com',
    image: 'src/assets/images/blog.jpeg',
  },
  {
    title: 'Goal Setter App',
    desc: 'A goal-setting application built using React,Node.js,express, and MongoDB.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redux', 'Mongoose', 'bcrypt', 'Axios', 'React Router', 'React Icons', 'MongoDB Atlas'],
    github: 'https://github.com/mozhinag/MERN-PRO2.git',
    live: 'https://mern-pro2-1.onrender.com',
    image: 'src/assets/images/Goal.jpeg',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        {/* 🔥 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          My{' '}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>

        {/* 🔥 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
            >
              {/* 🖼 Image */}
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

              {/* 📦 Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

                {/* 🛠 Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-purple-500/20 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* 🔗 Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full border border-gray-400 hover:border-purple-400 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
