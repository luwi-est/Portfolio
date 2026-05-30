import { useState } from 'react';
import { meta } from '../data/portfolio';
import styles from './Footer.module.css';

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function GitHubIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
}
function EmailIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>;
}
function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>;
}

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ subject: '', email: '', message: '' });

  const openModal = () => { setModalOpen(true); setSent(false); setForm({ subject: '', email: '', message: '' }); };
  const closeModal = () => setModalOpen(false);

  const handleSend = () => {
    if (!form.subject || !form.email || !form.message) return;
    const body = encodeURIComponent(`From: ${form.email}\n\n${form.message}`);
    const mailto = `mailto:${meta.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSent(true);
    setTimeout(() => { window.location.href = mailto; }, 900);
  };

  return (
    <>
      <footer id="contact" className={styles.footer}>
        <div className="wrapper">
          <div className={styles.inner}>
            <div className={`reveal ${styles.left}`}>
              <div className={styles.name}>
                {meta.shortName}<span className={styles.dot}>.</span>
              </div>
              <p className={styles.tagline}>
                Full-Stack Developer &nbsp;·&nbsp; UI/UX Designer<br />
                Always looking for new and innovative ways to use my skills.
              </p>
              <button className="btn btn-primary" onClick={openModal}>Let's talk! ✉</button>
            </div>
            <div className={`reveal ${styles.right}`}>
              <div className={styles.linksLabel}>Find me on</div>
              <div className={styles.socials}>
                <a href={meta.linkedin} target="_blank" rel="noreferrer" className={styles.social}><LinkedInIcon /> LinkedIn</a>
                <a href={meta.github}   target="_blank" rel="noreferrer" className={styles.social}><GitHubIcon />  GitHub</a>
                <a href={`mailto:${meta.email}`} className={styles.social}><EmailIcon /> {meta.email}</a>
                <a href={`tel:${meta.phone.replace(/\s/g,'')}`} className={styles.social}><PhoneIcon /> {meta.phone}</a>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            Designed &amp; built with ✦ by <span>{meta.name}</span> &nbsp;·&nbsp; 2026
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {modalOpen && (
        <div className={styles.overlay} onClick={e => e.target === e.currentTarget && closeModal()}>
          <div className={`glass ${styles.modal}`}>
            <button className={styles.closeBtn} onClick={closeModal}>✕</button>
            {!sent ? (
              <>
                <div className={styles.modalHeader}>
                  <div className="section-tag" style={{ marginBottom: '0.5rem' }}>// Get in touch</div>
                  <h2 className={styles.modalTitle}>Let's <span className="highlight">talk!</span></h2>
                  <p className={styles.modalSub}>I'm always looking for new and innovative ways to use my skills.</p>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Subject</label>
                  <input className={styles.input} placeholder="What's this about?" value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email</label>
                  <input className={styles.input} type="email" placeholder="your@email.com" value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Message</label>
                  <textarea className={`${styles.input} ${styles.textarea}`} placeholder="Tell me about your project..." value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <div className={styles.formActions}>
                  <button className="btn btn-ghost" onClick={closeModal}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleSend}>Send Message ↗</button>
                </div>
              </>
            ) : (
              <div className={styles.success}>
                <div className={styles.successIcon}>✓</div>
                <p className={styles.successText}>Opening your email client…</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '0.5rem' }}>Your message has been prepared. Just hit send!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
