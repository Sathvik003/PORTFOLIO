import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    year: 'Jun - Jul 2025',
    title: 'Mobile Application Developer Using Flutter',
    company: 'Training Program',
    description: 'Successfully completed a hands-on training program in building cross-platform mobile applications using Flutter and Dart. Gained practical experience in designing responsive, user-friendly interfaces with a widget-based architecture and implementing efficient state management techniques. Developed strong proficiency in integrating RESTful APIs, handling JSON data, and managing asynchronous operations.Additionally, acquired experience in Firebase backend services, including authentication, real-time databases, and cloud storage. Focused on writing clean, maintainable code and optimizing application performance to ensure smooth user experiences across both Android and iOS platforms.',
    certificateLink: 'https://drive.google.com/file/d/1ZG2XIiWJwYIjEowoZRQ4xJPgSTsRVYn0/view'
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="experience-section" ref={containerRef}>
      <h2 className="section-title">TRAINING</h2>
      <div className="timeline-container">
        <div className="timeline-line-bg">
          <motion.div className="timeline-line-fill" style={{ height: lineHeight }} />
        </div>
        
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-year">
              <h3>{exp.year}</h3>
              <div className="timeline-dot"></div>
            </div>
            <div className="timeline-content">
              <h4>{exp.title}</h4>
              <h5>{exp.company}</h5>
              <p>{exp.description}</p>
              {exp.certificateLink && (
                <a 
                  href={exp.certificateLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="certificate-link"
                >
                  View Certificate <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
