import { useMemo } from 'react';
import { skills } from '../data/portfolio';
import icons from '../data/icons.jsx';
import { useBelt } from '../hooks';
import styles from './Skills.module.css';

const CATEGORY_META = {
  'Languages':               { color: 'cyan',   direction: 'ltr' },
  'Frameworks & Libraries':  { color: 'violet', direction: 'rtl' },
  'Tools & Platforms':       { color: 'pink',   direction: 'ltr' },
};

function SkillBelt({ id, items, color, direction }) {
  useBelt(id, direction);
  const doubled = useMemo(() => [...items, ...items, ...items], [items]);
  return (
    <div className={styles.beltWrap}>
      <div className={`${styles.belt}`} id={id}>
        {doubled.map((skill, i) => (
          <div key={i} className={`skill-chip ${styles.chip} ${styles[color]}`}>
            <div className={styles.chipIcon}>{icons[skill.icon]}</div>
            <span className={styles.chipName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrapper">
        <div className="section-header reveal">
          <div className="section-tag">// Skills</div>
          <h2 className="section-title">My <span className="highlight">Toolkit</span></h2>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.entries(skills).map(([category, items]) => {
          const { color, direction } = CATEGORY_META[category];
          const id = `belt-${category.replace(/\W+/g, '-').toLowerCase()}`;
          return (
            <div key={category} className={`reveal ${styles.category}`}>
              <div className="wrapper">
                <div className={`${styles.catLabel} ${styles[`label-${color}`]}`}>
                  {category}
                </div>
              </div>
              <SkillBelt id={id} items={items} color={color} direction={direction} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
