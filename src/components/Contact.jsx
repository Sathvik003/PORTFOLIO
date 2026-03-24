import React from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-heading">LET'S WORK<br/>TOGETHER</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=s.sathvik999@gmail.com" className="contact-email" target="_blank" rel="noopener noreferrer">
            <Mail size={24} /> s.sathvik999@gmail.com
          </a>
          <a href="tel:+919398046757" className="contact-email">
            <Phone size={24} /> +91 9398046757
          </a>
        </div>
      </div>
      
      <div className="contact-footer">
        <div className="social-links-horizontal">
          <a href="https://www.linkedin.com/in/sarvepalli-sathvik-0190a0284/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
          <a href="https://github.com/Sathvik003" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} S Sathvik. All rights reserved.</p>
        </div>
      </div>
      
      <a href="/cv.pdf" className="resume-download-btn" download="Sarvepalli_Sathvik_CV.pdf">
        RESUME
      </a>
    </footer>
  );
};

export default Contact;
