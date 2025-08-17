import React from "react";
import { motion } from "framer-motion";
import Hero from "./component/Hero"; // correct path to Hero.jsx

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-cyan-400 mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I am <span className="font-semibold text-white">Rudra Pratap Singh</span>, currently an intern specializing in <span className="text-cyan-400">MERN Stack Full Stack Web Development</span>. 
          I have beginner-level knowledge in <span className="text-blue-400">Node.js</span> and <span className="text-blue-400">React</span>, along with hands-on experience in <span className="text-green-400">HTML, CSS, and JavaScript</span>. 
          Passionate about building scalable web applications and eager to grow in the field of modern web technologies.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-cyan-400 mb-6"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Social media toggler</h3>
            <p className="text-gray-400 mb-4">
            Social Icon Toggler is an interactive web application that allows users to dynamically show or hide social media icons on a webpage. The project demonstrates the use of JavaScript, HTML, and CSS to manipulate DOM elements and create a smooth, user-friendly interface.

Key Features:

Dynamic Toggling: Users can click a button to show or hide social icons.

Smooth Animations: Icons appear/disappear with elegant transitions.

Responsive Design: Icons and toggler work seamlessly across different devices and screen sizes.

Customizable: Users can easily add or remove icons and adjust their style.

Technologies Used:

HTML & CSS – for structure and styling, including hover effects and transitions.

JavaScript – for DOM manipulation, toggling functionality, and interactivity.
            </p>
            <a href="https://rudraaaa04.github.io/3Dsocialmedia/" className="text-cyan-400 hover:underline">
              View Project →
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-cyan-400 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">
              My personal portfolio showcasing skills, projects, and experiences using React, Tailwind, and Framer Motion animations.
            </p>
            <a href="#" className="text-cyan-400 hover:underline">
              View Project →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-cyan-400 mb-6"
        >
          Skills
        </motion.h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          {["MERN Stack", "Node.js", "React", "HTML", "CSS", "JavaScript"].map(skill => (
            <li key={skill} className="bg-gray-900 py-3 px-4 rounded-xl text-center border border-gray-800 hover:border-cyan-400 transition">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-cyan-400 mb-6"
        >
          Contact
        </motion.h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaborations, internships, or project discussions.
        </p>
        <a
          href="mailto:rudra@example.com"
          className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-xl shadow-lg hover:bg-cyan-600 transition"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}

