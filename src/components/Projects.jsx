import { useState } from 'react';
import { projects } from '../data/portfolio';
import styles from './Projects.module.css';

function TechTag({ label, color }) {
  return <span className={`tech-tag${color === 'purple' ? ' purple' : color === 'pink' ? ' pink' : ''}`}>{label}</span>;
}

function ProjectMockInternConnect() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <div className={styles.mockBar}>
        <div className={styles.dot} style={{ background: '#ff5f57' }} />
        <div className={styles.dot} style={{ background: '#febc2e' }} />
        <div className={styles.dot} style={{ background: '#28c840' }} />
        <div className={styles.mockUrl} />
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <div className={styles.miSidebar}>
          <div className={`${styles.miNavItem} ${styles.active}`} />
          <div className={styles.miNavItem} style={{ width: '65%' }} />
          <div className={styles.miNavItem} style={{ width: '55%' }} />
        </div>
        <div className={styles.miMain}>
          {[['#7DF9FF','#B06EFF','Matched'],['#B06EFF','#FF6EC7','Pending'],['#FF6EC7','#7DF9FF','New']].map(([c1,c2,label],i) => (
            <div key={i} className={styles.miCard}>
              <div className={styles.miAvatar} style={{ background: `linear-gradient(135deg,${c1},${c2})` }} />
              <div className={styles.miLines}>
                <div className={styles.miLine} style={{ width: '70%' }} />
                <div className={styles.miLine} style={{ width: '45%' }} />
              </div>
              <div className={styles.miBadge} style={{ color: c1 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectMockPortal() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <div className={styles.mockBar}>
        <div className={styles.dot} style={{ background: '#ff5f57' }} />
        <div className={styles.dot} style={{ background: '#febc2e' }} />
        <div className={styles.dot} style={{ background: '#28c840' }} />
        <div className={styles.mockUrl} />
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <div className={styles.mpTopbar}>
          <div className={`${styles.mpTab} ${styles.active}`} />
          <div className={styles.mpTab} />
          <div className={styles.mpTab} />
        </div>
        <div className={styles.mpContent}>
          <div className={styles.mpRow}>
            <div className={styles.mpFormItem} />
            <div className={styles.mpFormItem} />
          </div>
          <div className={styles.mpRow}>
            <div className={styles.mpFormItem} style={{ flex: 2 }} />
            <div className={styles.mpBtn} />
          </div>
          <div className={styles.mpTable}>
            <div className={styles.mpTh} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectMockCOD() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div className={styles.mcSky} />
      <div className={styles.mcHud}>
        <div className={styles.mcHp}><div className={styles.mcHeart}/><div className={styles.mcHeart}/><div className={styles.mcHeart}/></div>
        <div className={styles.mcScore}>SCORE: 420</div>
      </div>
      <div className={`${styles.mcBuilding} ${styles.b1}`} />
      <div className={`${styles.mcBuilding} ${styles.b2}`} />
      <div className={`${styles.mcBuilding} ${styles.b3}`} />
      <div className={`${styles.mcBuilding} ${styles.b4}`} />
      <div className={styles.mcPkg} />
      <div className={styles.mcPlayer} />
      <div className={styles.mcGround} />
    </div>
  );
}

function ProjectMockHotel() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}>
      <div className={styles.mhHeader}>
        <div className={styles.mhLogo} />
        <div className={styles.mhNav}>
          <div className={styles.mhNavItem}/><div className={styles.mhNavItem}/><div className={styles.mhNavItem}/>
        </div>
      </div>
      <div className={styles.mhContent}>
        {[
          'linear-gradient(135deg,rgba(255,160,50,0.15),rgba(255,200,80,0.08))',
          'linear-gradient(135deg,rgba(255,120,30,0.15),rgba(255,180,60,0.08))',
          'linear-gradient(135deg,rgba(200,100,20,0.15),rgba(255,160,40,0.08))',
          'linear-gradient(135deg,rgba(255,140,40,0.12),rgba(220,140,30,0.08))',
        ].map((bg, i) => (
          <div key={i} className={styles.mhRoom}>
            <div className={styles.mhRoomImg} style={{ background: bg }} />
            <div className={styles.mhRoomLine} />
            <div className={`${styles.mhRoomLine} ${styles.short}`} />
            <div className={styles.mhRoomBtn} />
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCKS = [ProjectMockInternConnect, ProjectMockPortal, ProjectMockCOD, ProjectMockHotel];

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="projects">
      <div className="wrapper">
        <div className="section-header reveal">
          <div className="section-tag">// Projects</div>
          <h2 className="section-title">What I've <span className="highlight">Built</span></h2>
        </div>
        <div className={styles.accordion}>
          {projects.map((proj, i) => {
            const Mock = MOCKS[i];
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`reveal proj-item ${styles.item} ${isOpen ? styles.active : ''}`}
                onMouseEnter={() => setOpenIndex(i)}
              >
                <div className={styles.header}>
                  <div className={styles.headerNum}>{proj.num}</div>
                  <div className={styles.headerName}>{proj.title}</div>
                  <div className={styles.headerTags}>
                    {proj.tags.slice(0, 3).map((t, j) => <TechTag key={j} {...t} />)}
                  </div>
                </div>
                <div className={`${styles.body} ${isOpen ? styles.bodyOpen : ''}`}>
                  <div className={styles.bodyInner}>
                    <div className={styles.bodyContent}>
                      <div className={styles.imgSide} style={{ background: proj.previewBg }}>
                        {proj.image
                          ? <img src={proj.image} alt={proj.title} className={styles.screenshot} />
                          : <Mock />
                        }
                      </div>
                      <div className={styles.infoSide}>
                        <div className={styles.typeLabel}>{proj.type}</div>
                        <div className={styles.fullTitle}>{proj.title}</div>
                        <p className={styles.fullDesc}>{proj.description}</p>
                        <div className={styles.tags}>
                          {proj.tags.map((t, j) => <TechTag key={j} {...t} />)}
                        </div>
                        <div className={styles.highlights}>
                          {proj.highlights.map((h, j) => (
                            <div key={j} className={styles.highlight}>{h}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
