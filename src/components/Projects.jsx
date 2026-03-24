
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'SkillUp',
    category: 'Online Learning Platform',
    description: 'A full-stack e-learning platform (PHP/MySQL) automating secure student enrollment, course management, progress tracking, and certificate issuance with a highly responsive, mobile-optimized Tailwind frontend.',
    tech: ['PHP', 'MySQL', 'HTML', 'Tailwind CSS', 'JavaScript'],
    link: 'https://skillup04.netlify.app/',
    github: 'https://github.com/Sathvik003/skill-up',
    image: '/skillup_logo.jpg'
  },
  {
    id: '02',
    title: 'Integrated Health Care Portal',
    category: 'Healthcare Web Application',
    description: 'An end-to-end portal featuring centralized appointment booking, medical record management, and secure role-based access for patients, doctors, and admins. Built to ensure smooth navigation and highly reliable healthcare workflows, reducing manual effort and wait times.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    link: 'https://integrated-health-care-portal.vercel.app/login',
    github: 'https://github.com/Sathvik003/Integrated-Health-Care-Portal',
    image: '/Screenshot 2026-03-22 184438.png'
  },
  {
    id: '03',
    title: 'Public Transit Tracker',
    category: 'AI Chatbot System',
    description: 'Built an intelligent web-based chatbot system specifically designed to handle dynamic transit scheduling, fare calculations, and real-time route optimization. This platform eliminates the friction of manual travel searches by employing advanced Natural Language Processing to understand user queries, pulling live data from transportation APIs, and displaying optimized itineraries instantaneously within an intuitive chat interface.',
    tech: ['Natural Language Processing', 'APIs', 'React.js', 'Node.js'],
    link: 'https://public-transist-tracker-7i35.onrender.com',
    github: '#',
    image: '/transit_tracker_natural.png'
  }
];

const Projects = () => {
  return (
    <section id="work" className="projects-section">
      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-number">{project.id}</div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.link && project.link !== '#' && (
                  <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                    Live Preview <ArrowUpRight size={16} />
                  </a>
                )}
                {project.github && project.github !== '#' && (
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                    Source Code <Github size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className="project-image-placeholder">
              {project.image ? (
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div className="placeholder-overlay"></div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
