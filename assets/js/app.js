/**
 * SURYA P. — UI/UX DESIGNER PORTFOLIO
 * Main Application Controller & Audio Synthesizer
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initAudioSynthesizer();
  initCaseStudyTriggers();
  initModals();
  initContactForm();
  initResumeViewer();
});

/**
 * 1. Navbar Glassmorphic Scroll Effect & Active Section Tracking
 */
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link highlighting
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * 2. Mobile Menu Drawer
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/**
 * 3. Web Audio API UI Sound Synthesizer (Zero External Audio Files Needed)
 */
let isAudioEnabled = false;
let audioCtx = null;

function initAudioSynthesizer() {
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  if (!audioToggleBtn) return;

  audioToggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    isAudioEnabled = !isAudioEnabled;
    audioToggleBtn.classList.toggle('active', isAudioEnabled);

    if (isAudioEnabled) {
      playTone(600, 0.08, 'sine');
      showToast('Sound Effects Enabled 🔊');
    } else {
      showToast('Sound Effects Muted 🔇');
    }
  });

  // Sound on interactive clicks
  document.querySelectorAll('button, .btn-primary, .btn-secondary, .service-item, .nav-link, .kinetic-skill-pill').forEach((el) => {
    el.addEventListener('click', () => {
      if (isAudioEnabled && audioCtx) {
        playTone(520, 0.04, 'sine');
      }
    });
  });
}

function playTone(freq, duration, type = 'sine') {
  if (!isAudioEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    console.warn('Audio play error:', err);
  }
}

/**
 * 4. Case Study Modal Triggers
 */
function initCaseStudyTriggers() {
  const triggers = document.querySelectorAll('[data-case-study]');
  triggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-case-study');
      if (projectId && typeof renderCaseStudyModal === 'function') {
        renderCaseStudyModal(projectId);
        if (isAudioEnabled) playTone(780, 0.1, 'triangle');
      }
    });
  });

  // Close when clicking modal backdrop
  const modalOverlay = document.getElementById('case-study-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        if (typeof closeCaseStudyModal === 'function') closeCaseStudyModal();
      }
    });
  }

  // Escape key listener for all modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (typeof closeCaseStudyModal === 'function') closeCaseStudyModal();
      closeContactModal();
      closeResumeModal();
    }
  });
}

/**
 * 5. Contact & Resume Modals
 */
function initModals() {
  // Contact Modal Triggers
  const contactButtons = document.querySelectorAll('.open-contact-modal');
  const contactModal = document.getElementById('contact-modal-overlay');
  const closeContactBtn = document.getElementById('close-contact-modal');

  contactButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (contactModal) {
        contactModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeContactBtn) {
    closeContactBtn.addEventListener('click', closeContactModal);
  }

  if (contactModal) {
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) closeContactModal();
    });
  }

  // Back to Top button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function closeContactModal() {
  const contactModal = document.getElementById('contact-modal-overlay');
  if (contactModal) {
    contactModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeResumeModal() {
  const resumeModal = document.getElementById('resume-modal-overlay');
  if (resumeModal) {
    resumeModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/**
 * 6. Contact Form Simulator
 */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = `<span>Sending...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = `<span>Message Sent ✓</span>`;
      submitBtn.style.backgroundColor = '#22c55e';
      submitBtn.style.borderColor = '#22c55e';

      showToast('Thank you! Surya will reply within 24 hours 🚀');

      setTimeout(() => {
        closeContactModal();
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.borderColor = '';
        submitBtn.disabled = false;
      }, 1800);
    }, 1000);
  });
}

/**
 * 7. Interactive Resume Modal Viewer
 */
function initResumeViewer() {
  const resumeTriggers = document.querySelectorAll('.open-resume-modal');
  const resumeModal = document.getElementById('resume-modal-overlay');
  const closeResumeBtn = document.getElementById('close-resume-modal');
  const printResumeBtn = document.getElementById('print-resume-btn');

  resumeTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (resumeModal) {
        resumeModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', closeResumeModal);
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/**
 * Toast Notification Utility
 */
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
