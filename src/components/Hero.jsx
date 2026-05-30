import { useRef, useEffect } from 'react';
import { useScatter } from '../hooks';
import { meta } from '../data/portfolio';
import styles from './Hero.module.css';

const COLORS = ['c1', 'c2', 'c3', 'c4'];
const ROWS = ['Lance Louise', 'M. Estrella'];

function LetterRow({ text, colorStart }) {
  const refs = useRef([]);
  return (
    <div className={styles.nameRow}>
      {[...text].map((ch, i) =>
        ch === ' ' ? (
          <span key={i} className={styles.gap} />
        ) : (
          <span
            key={i}
            ref={el => { if (el) refs.current[i] = el; }}
            className={`scatter-letter ${styles.letter} ${styles[COLORS[(colorStart + i) % COLORS.length]]}`}
          >
            {ch}
          </span>
        )
      )}
    </div>
  );
}

export default function Hero() {
  const allLettersRef = useRef([]);

  useEffect(() => {
    allLettersRef.current = Array.from(document.querySelectorAll('.scatter-letter'));
  }, []);

  useScatter(allLettersRef);

  return (
    <section id="hero" className={styles.hero}>
      <div
        className={styles.nameScreen}
        aria-label={meta.name}
        id="scatter-name"
      >
        {ROWS.map((row, ri) => (
          <LetterRow key={ri} text={row} colorStart={ri * 5} />
        ))}
      </div>
      <p className={styles.tagline}>{meta.tagline}</p>
      <div className={styles.scrollHint}>
        <span>Scroll to explore</span>
        <div className={styles.arrow} />
      </div>
    </section>
  );
}
