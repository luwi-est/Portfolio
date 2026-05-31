import { useState } from 'react';
import { meta } from '../data/portfolio';
import styles from './Navbar.module.css';

const links = ['experience', 'projects', 'skills', 'education', 'contact'];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <a href="#hero" className={styles.logo} onClick={e => { e.preventDefault(); scrollTo('hero'); }}>
        {meta.shortName}<span className={styles.dot}>.</span>
      </a>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`} onClick={e => { e.preventDefault(); scrollTo(l); }}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Mobile Hamburger Menu */}
      <button 
        className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ''}`}>
        {links.map(l => (
          <a 
            key={l}
            href={`#${l}`} 
            onClick={e => { e.preventDefault(); scrollTo(l); }}
          >
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
