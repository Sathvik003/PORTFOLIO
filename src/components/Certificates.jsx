import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import './Certificates.css';

const certificatesData = [
  {
    title: 'Privacy and security in online and social media',
    issuer: 'NPTEL',
    link: 'https://drive.google.com/file/d/1h0A2VAxr26eoxth_cwr0luqo31ABHxSP/view',
    details: 'Learned about data privacy mechanisms, cryptography fundamentals, secure authentication, and advanced strategies to defend against social engineering and online platform threats.'
  },
  {
    title: 'Introduction to hardware and operating systems',
    issuer: 'Coursera',
    link: 'https://drive.google.com/file/d/14QnfETQHgnWLkE2r2hOq78hVRK-YmlNk/view',
    details: 'Gained core knowledge in computer architecture, assembling hardware components, and the hands-on installation, configuration, and management of modern operating systems.'
  },
  {
    title: 'Fundamentals of network communication',
    issuer: 'Udemy',
    link: 'https://drive.google.com/file/d/10NMM-UGWk6plrBTG534wUeK3tMXsdGGD/view',
    details: 'Mastered the OSI model, TCP/IP protocols, IP addressing, routing principles, and foundational network troubleshooting techniques necessary for reliable data transmission.'
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">
      <h2 className="section-title" style={{ textAlign: 'center' }}>CERTIFICATES</h2>
      
      <div className="certificates-grid">
        {certificatesData.map((cert, index) => (
          <motion.a 
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="certificate-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="cert-icon-wrapper">
              <Award size={32} className="cert-icon" />
            </div>
            <div className="cert-content">
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer} Certificate</p>
              <div className="cert-details">
                <p>{cert.details}</p>
              </div>
            </div>
            <div className="cert-action">
              <ExternalLink size={24} className="cert-link-icon" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
