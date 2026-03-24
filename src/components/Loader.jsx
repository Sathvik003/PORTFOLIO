import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 100 steps, around 2.5 seconds total
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300); // slight delay after hitting 100 before hiding
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader-container">
      <div className="loader-header">
         <div className="loader-logo">S</div>
         <div className="loader-equalizer">
           <span></span>
           <span></span>
           <span></span>
           <span></span>
         </div>
      </div>
      <div className="loader-background-text-wrapper">
         <h1 className="loader-background-text">
            FULL STACK DEVELOPER
         </h1>
      </div>
      <div className="loader-pill-wrapper">
        <div className="loader-pill">
          <span className="loader-text">LOADING</span>
          <span className="loader-number">
             {progress}
             <span className="loader-block"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
