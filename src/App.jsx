import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Loader from './components/Loader';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Cursor />
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Sidebar />
          <main className="layout">
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Achievements />
            <Certificates />
            <Skills />
          </main>
          <Contact />
        </>
      )}
    </>
  );
}

export default App;

