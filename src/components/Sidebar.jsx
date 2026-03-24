import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Layout.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="social-links-vertical">
        <a href="https://github.com/Sathvik003" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/sarvepalli-sathvik-0190a0284/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=s.sathvik999@gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={20} /></a>
      </div>
      <div className="sidebar-line"></div>
    </aside>
  );
};

export default Sidebar;
