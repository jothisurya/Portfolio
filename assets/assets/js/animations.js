/**
 * SURYA P. — UI/UX DESIGNER PORTFOLIO
 * Animations & Micro-Interactions Controller
 * Features: Custom Magnetic Cursor, Magnetic Buttons, Scroll Reveals, Kinetic Typography, Live IST Clock.
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initMagneticButtons();
  initScrollAnimations();
  initPhilosophyScroll();
  initLiveClock();
  initAmbientHeroGlow();
});

/**
 * 1. Custom Smooth Magnetic Cursor
 */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.cursor-follower');

  if (!cursor || !follower || window.innerWidth < 1024) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // RAF Smooth Lerp loop
  function updateCursor() {
    // Dot lerp
    cursorX += (mouseX - cursorX) * 0.5;
    cursorY += (mouseY - cursorY) * 0.5;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;

    // Follower lerp (softer easing)
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);

  // Hover states
  const clickables = document.querySelectorAll('a, button, input, textarea, select, .service-item, .process-step-card, .kinetic-skill-pill');
  clickables.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hovering');
      follower.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering');
      follower.classList.remove('hovering');
    });
  });

  // Project Stage Hover State ("VIEW ↗")
  const projectCards = document.querySelectorAll('.project-mockup-stage, .project-showcase-card');
  projectCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      cursor.classList.add('project-hover');
      follower.classList.add('project-hover');
    });
    card.addEventListener('mouseleave', () => {
      cursor.classList.remove('project-hover');
      follower.classList.remove('project-hover');
    });
  });
}

/**
 * 2. Magnetic Buttons Physics
 */
function initMagneticButtons() {
  const magnets = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-contact-talk, .brand-logo, .audio-toggle-btn');

  magnets.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.28}px, ${y * 0.28}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0px, 0px)';
    });
  });
}

/**
 * 3. Scroll Reveal & Intersection Observer Animations
 */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.timeline-card, .process-step-card, .skills-col, .service-item, .project-showcase-card, .metric-card');

  revealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(36px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * 4. Philosophy Typography Scroll Animation
 */
function initPhilosophyScroll() {
  const philosophySection = document.querySelector('.philosophy-section');
  const quoteStart = document.querySelector('.philosophy-quote-start');
  const quoteEnd = document.querySelector('.philosophy-quote-end');

  if (!philosophySection || !quoteStart || !quoteEnd) return;

  window.addEventListener('scroll', () => {
    const rect = philosophySection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Progress within section (0 to 1)
    const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);

    if (progress > 0.35) {
      quoteStart.style.opacity = '0.35';
      quoteStart.style.transform = 'scale(0.98)';
      quoteEnd.style.opacity = '1';
      quoteEnd.style.transform = 'scale(1.02)';
    } else {
      quoteStart.style.opacity = '1';
      quoteStart.style.transform = 'scale(1)';
      quoteEnd.style.opacity = '0.4';
      quoteEnd.style.transform = 'scale(0.98)';
    }
  });
}

/**
 * 5. Live Chennai (IST UTC+5:30) Time Clock
 */
function initLiveClock() {
  const clockEl = document.getElementById('chennai-live-clock');
  if (!clockEl) return;

  function updateTime() {
    const now = new Date();
    // Format to Asia/Kolkata timezone
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    clockEl.textContent = `${timeString} IST (Chennai)`;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

/**
 * 6. Ambient Hero Spotlight & Portrait Parallax Tracking
 */
function initAmbientHeroGlow() {
  const hero = document.querySelector('.hero-section');
  const blob = document.querySelector('.home-purple-blob');
  const photo = document.querySelector('.home-profile-photo');

  if (!hero) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (blob) {
      blob.style.transform = `translate(calc(-50% + ${x * 0.05}px), calc(-50% + ${y * 0.05}px))`;
    }
    if (photo) {
      photo.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
    }
  });

  hero.addEventListener('mouseleave', () => {
    if (blob) blob.style.transform = 'translate(-50%, -50%)';
    if (photo) photo.style.transform = 'translate(0px, 0px)';
  });
}

