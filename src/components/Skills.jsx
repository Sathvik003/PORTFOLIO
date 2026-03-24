import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiC, 
  SiCplusplus, 
  SiHtml5, 
  SiTailwindcss, 
  SiGit, 
  SiGithub, 
  SiVercel, 
  SiBootstrap, 
  SiPostgresql, 
  SiLinux, 
  SiPostman,
  SiExpress
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaAws, FaJs, FaPhp, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import './Skills.css';

const skillsData = [
  { name: 'C', icon: <SiC />, link: 'https://en.cppreference.com/w/c', color: '#A8B9CC' },
  { name: 'C++', icon: <SiCplusplus />, link: 'https://isocpp.org/', color: '#00599C' },
  { name: 'Java', icon: <FaJava />, link: 'https://www.java.com/', color: '#ED8B00' },
  { name: 'HTML', icon: <SiHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', color: '#E34F26' },
  { name: 'CSS', icon: <FaCss3Alt />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', color: '#1572B6' },
  { name: 'Tailwind', icon: <SiTailwindcss />, link: 'https://tailwindcss.com/', color: '#06B6D4' },
  { name: 'Bootstrap', icon: <SiBootstrap />, link: 'https://getbootstrap.com/', color: '#7952B3' },
  { name: 'Git', icon: <SiGit />, link: 'https://git-scm.com/', color: '#F05032' },
  { name: 'GitHub', icon: <SiGithub />, link: 'https://github.com/', color: '#FFFFFF' },
  { name: 'Vercel', icon: <SiVercel />, link: 'https://vercel.com/', color: '#FFFFFF' },
  { name: 'AWS', icon: <FaAws />, link: 'https://aws.amazon.com/', color: '#232F3E' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, link: 'https://www.postgresql.org/', color: '#4169E1' },
  { name: 'Linux', icon: <SiLinux />, link: 'https://www.linux.org/', color: '#FCC624' },
  { name: 'Postman', icon: <SiPostman />, link: 'https://www.postman.com/', color: '#FF6C37' },
  { name: 'JavaScript', icon: <FaJs />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', color: '#F7DF1E' },
  { name: 'PHP', icon: <FaPhp />, link: 'https://www.php.net/', color: '#777BB4' },
  { name: 'React', icon: <FaReact />, link: 'https://react.dev/', color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNodeJs />, link: 'https://nodejs.org/', color: '#339933' },
  { name: 'Express.js', icon: <SiExpress />, link: 'https://expressjs.com/', color: '#FFFFFF' },
  { name: 'Python', icon: <FaPython />, link: 'https://www.python.org/', color: '#3776AB' }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title" style={{ textAlign: 'center' }}>TECH STACK</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.a 
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            className="skill-card"
            style={{ '--hover-color': skill.color }}
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
