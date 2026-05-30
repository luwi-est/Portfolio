import { experience } from '../data/portfolio';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrapper">
        <div className="section-header reveal">
          <div className="section-tag">// Work Experience</div>
          <h2 className="section-title">Professional <span className="highlight">Journey</span></h2>
        </div>
        <div className={styles.grid}>
          {experience.map((exp, i) => (
            <div key={i} className={`reveal glass ${styles.card}`}>
              <div className={styles.dotLine}>
                <div className={styles.dot} />
                <div className={styles.line} />
              </div>
              <div>
                <div className={styles.date}>{exp.date}</div>
                <div className={styles.role}>{exp.role}</div>
                <div className={styles.company}>{exp.company}</div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
