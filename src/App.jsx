import { useEffect } from 'react';
import { useCursor, useScrollReveal } from './hooks';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import HeroInfo   from './components/HeroInfo';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Skills     from './components/Skills';
import Education  from './components/Education';
import Footer     from './components/Footer';
import './styles/globals.css';

export default function App() {
  useCursor();
  useScrollReveal();

  // Smooth scroll for all anchor links
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <div id="cursor-follower" />
      <div className="bg-canvas" />
      <div className="bg-grid" />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      <Navbar />
      <Hero />
      <div className="divider" />
      <HeroInfo />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Education />
      <div className="divider" />
      <Footer />
    </>
  );
}
