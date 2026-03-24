import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HI, I'M
        </motion.p>
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          S SATHVIK.
        </motion.h1>
        <motion.h2
          className="hero-title outline-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          FULLSTACK WEB-DEVELOPER
        </motion.h2>
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I build modern, responsive, and high-performance web applications.
          Bridging the gap between user-friendly design and efficient development.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#work" className="btn-primary">View My Projects</a>
          <a href="#contact" className="btn-secondary">Let's Talk</a>
        </motion.div>
      </div>
      <div className="hero-visuals">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: -20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img src="/profile.jpg" alt="S Sathvik" className="hero-profile-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
