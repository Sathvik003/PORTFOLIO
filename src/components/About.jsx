import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-visuals">
        <motion.div
          className="about-terminal"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="close"></span>
              <span className="minimize"></span>
              <span className="maximize"></span>
            </div>
            <div className="terminal-title">sathvik.js</div>
          </div>
          <div className="terminal-window">
            <div className="terminal-body">
              <p className="code-line"><span className="keyword">const</span> <span className="variable">developer</span> = {'{'} </p>
              <p className="code-line indent">name: <span className="string">"S Sathvik"</span>,</p>
              <p className="code-line indent">role: <span className="string">"Full Stack Developer"</span>,</p>
              <p className="code-line indent">skills: [<span className="string">"React"</span>, <span className="string">"Node.js"</span>, <span className="string">"Tailwind"</span>],</p>
              <p className="code-line indent">hardWorker: <span className="boolean">true</span>,</p>
              <p className="code-line indent">problemSolver: <span className="boolean">true</span></p>
              <p className="code-line">{'}'};</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="about-content">
        <motion.p
          className="about-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          ABOUT ME
        </motion.p>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <p>
            I am a Full-Stack Developer and Computer Science Engineering student from India. I build scalable web applications and responsive user interfaces focused on performance and usability.

            My skills include React, Node.js, PHP, MySQL, and Tailwind CSS, along with experience in REST APIs, secure authentication, and mobile-friendly platforms. I also explore cross-platform development using Flutter and Firebase.

            Currently pursuing B.Tech in CSE at Lovely Professional University, Punjab, I have developed projects like an E-learning platform and an Integrated Healthcare Portal.
          </p>
          {/* <p>
            My expertise includes full-stack development using technologies like React, Node.js, PHP, MySQL, and Tailwind CSS. I have experience designing secure authentication systems, REST APIs, and mobile-friendly platforms. I also explore cross-platform mobile development using Flutter and Firebase.
          </p>
          <p>
            Currently pursuing my Bachelor of Technology in Computer Science and Engineering at Lovely Professional University, Punjab, I have built impactful projects like an E-learning platform (SkillUp) and an Integrated Healthcare Portal, focusing on clean architecture and seamless user experience.
          </p>
          <p>
            I have a strong problem-solving mindset, proven through my achievement of securing 3rd rank in the Binary Blitz Hackathon. I enjoy working in collaborative environments and continuously learning new technologies to stay ahead in the ever-evolving tech world.
          </p> */}
          <p>
            Code is not just logic for me—it's a way to create meaningful solutions that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
