import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
  {
    title: '3rd Rank - Binary Blitz Hackathon',
    date: 'March 2025',
    link: 'https://drive.google.com/file/d/1yBFGqxL-AJe-ZMMWimsSVbR3P2vr8x4L/view',
    details: 'Secured the prestigious 3rd Rank in the Binary Blitz Hackathon. Developed a fully functional, highly responsive website from scratch, utilizing HTML and CSS for an intuitive frontend, and JavaScript to engineer robust backend functionality and dynamic user interactions.'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title" style={{ textAlign: 'center' }}>ACHIEVEMENTS</h2>
      
      <div className="achievements-grid">
        {achievementsData.map((achievement, index) => (
          <motion.a 
            href={achievement.link}
            target="_blank"
            rel="noreferrer"
            className="achievement-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="achieve-icon-wrapper">
              <Trophy size={32} className="achieve-icon" />
            </div>
            <div className="achieve-content">
              <h3 className="achieve-title">{achievement.title}</h3>
              <p className="achieve-date">{achievement.date}</p>
              <div className="achieve-details">
                <p>{achievement.details}</p>
              </div>
            </div>
            <div className="achieve-action">
              <ExternalLink size={24} className="achieve-link-icon" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
