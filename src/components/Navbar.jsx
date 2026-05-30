import { meta } from '../data/portfolio';
import styles from './Navbar.module.css';

const links = ['experience', 'projects', 'skills', 'education', 'contact'];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    </nav>
  );
}
