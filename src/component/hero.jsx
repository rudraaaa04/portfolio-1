
import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/rudra.jpeg"; // note the relative path

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-6">
      <motion.img
        src={myPhoto}
        alt="Rudra Pratap Singh"
        className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white shadow-lg object-cover mb-6 md:mb-0 md:mr-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="text-center md:text-left"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Rudra Pratap Singh</h1>
        <p className="text-xl">Full-Stack Developer & AI Enthusiast</p>
      </motion.div>
    </div>
  );
};

export default Hero;
