import { useEffect, useRef, useState, useCallback } from 'react';

/* ── Cursor follower ── */
export function useCursor() {
  useEffect(() => {
    const el = document.getElementById('cursor-follower');
    if (!el) return;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let cx = mx, cy = my;
    let rafId;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      el.classList.add('visible');
    };
    const onLeave = () => el.classList.remove('visible');

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    const attachHover = () => {
      document.querySelectorAll('a, button, .proj-item, .skill-chip, input, textarea').forEach(node => {
        node.addEventListener('mouseenter', () => el.classList.add('hovering'));
        node.addEventListener('mouseleave', () => el.classList.remove('hovering'));
      });
    };
    attachHover();
    const t = setTimeout(attachHover, 800);

    function loop() {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      el.style.transform = `translate(${cx - el.offsetWidth / 2}px, ${cy - el.offsetHeight / 2}px)`;
      rafId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
      clearTimeout(t);
    };
  }, []);
}

/* ── Scroll reveal ── */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Skill belt auto-scroll + scroll-driven ── */
export function useBelt(id, direction = 'ltr', speed = 0.4) {
  const posRef = useRef(0);
  const itemWidthRef = useRef(0);
  const rafRef = useRef(null);
  const lastScrollRef = useRef(window.scrollY);

  useEffect(() => {
    const belt = document.getElementById(id);
    if (!belt) return;

    // Wait a tick for content to render
    const init = setTimeout(() => {
      itemWidthRef.current = belt.scrollWidth / 3;
      if (direction === 'rtl') posRef.current = itemWidthRef.current;
    }, 100);

    const onScroll = () => {
      const dy = window.scrollY - lastScrollRef.current;
      lastScrollRef.current = window.scrollY;
      const dir = direction === 'ltr' ? 1 : -1;
      posRef.current += dy * 0.6 * dir;
      const w = itemWidthRef.current;
      if (posRef.current > w * 2) posRef.current -= w;
      if (posRef.current < 0) posRef.current += w;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    function drift() {
      const dir = direction === 'ltr' ? 1 : -1;
      posRef.current += speed * dir;
      const w = itemWidthRef.current;
      if (w > 0) {
        if (posRef.current > w * 2) posRef.current -= w;
        if (posRef.current < 0) posRef.current += w;
      }
      const belt = document.getElementById(id);
      if (belt) belt.style.transform = `translateX(${-posRef.current}px)`;
      rafRef.current = requestAnimationFrame(drift);
    }
    rafRef.current = requestAnimationFrame(drift);

    return () => {
      clearTimeout(init);
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [id, direction, speed]);
}

/* ── Scatter letter animation ── */
export function useScatter(allLettersRef) {
  useEffect(() => {
    const letters = allLettersRef.current;
    if (!letters || letters.length === 0) return;

    // Entrance
    letters.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = `translateY(-50px) rotate(${(Math.random() - 0.5) * 30}deg)`;
      el.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1)';
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) rotate(0deg)';
      }, 80 + i * 55);
    });

    // Assign random scatter params
    letters.forEach(el => {
      el.dataset.vx  = ((Math.random() - 0.5) * 2.8).toFixed(3);
      el.dataset.vy  = ((Math.random() < 0.35 ? 1 : -1) * (0.3 + Math.random() * 1.2)).toFixed(3);
      el.dataset.rot = ((Math.random() - 0.5) * 90).toFixed(1);
    });

    let scatterProgress = 0;
    let targetProgress = 0;
    let rafId = null;
    const SCATTER_SCROLL_PX = 320;

    function applyScatter(progress) {
      letters.forEach(el => {
        const vx  = parseFloat(el.dataset.vx);
        const vy  = parseFloat(el.dataset.vy);
        const rot = parseFloat(el.dataset.rot);
        const p   = Math.min(1, Math.max(0, progress));
        const e   = p < 0.5 ? 4*p*p*p : 1 - Math.pow(-2*p+2, 3) / 2;
        const tx  = vx * e * 260;
        const ty  = vy * e * 220;
        el.style.transform = `translate(${tx}px,${ty}px) rotate(${rot * e}deg)`;
        el.style.opacity   = String(1 - e * 0.85);
      });
    }

    function tick() {
      scatterProgress += (targetProgress - scatterProgress) * 0.12;
      applyScatter(scatterProgress);
      if (Math.abs(targetProgress - scatterProgress) > 0.001) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = null;
      }
    }

    const onScroll = () => {
      targetProgress = Math.min(1, window.scrollY / SCATTER_SCROLL_PX);
      const hint = document.querySelector('.hero-scroll-hint');
      if (hint) hint.style.opacity = window.scrollY > 20 ? '0' : '';
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [allLettersRef]);
}
