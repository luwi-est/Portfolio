import { education } from '../data/portfolio';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education">
      <div className="wrapper">
        <div className="section-header reveal">
          <div className="section-tag">// Education</div>
          <h2 className="section-title">Academic <span className="highlight">Background</span></h2>
        </div>
        <div className="reveal glass">
          <div className={styles.card}>
            <div>
              <div className={styles.degree}>{education.degree}</div>
              <div className={styles.spec}>{education.specialization}</div>
              <div className={styles.school}>{education.school}</div>
              <div className={styles.honorWrap}>
                <span className={styles.honor}>{education.honor}</span>
              </div>
            </div>
            <div className={styles.dates}>{education.period}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
