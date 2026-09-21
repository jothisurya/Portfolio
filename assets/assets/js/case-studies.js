/**
 * SURYA P. — UI/UX DESIGNER PORTFOLIO
 * Complete Case Studies Database & Dynamic Renderer
 * Covering all 16 UX Process Phases for each Selected Work.
 */

const CASE_STUDIES_DATA = {
  "hospital-ai": {
    id: "hospital-ai",
    number: "01",
    tag: "HEALTHCARE PLATFORM · WEB & MOBILE APP",
    title: "Hospital & Medical AI",
    subtitle: "AI-Augmented Emergency Triage & Real-Time Patient Telemetry Clinical Suite",
    role: "Lead UI/UX Designer",
    timeline: "4 Months · Q1-Q2",
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "Miro", "Protopie"],
    platform: "Web Application (Desktop) + Nurse Tablet & Mobile App",
    overview: "A mission-critical healthcare platform engineered to assist ER doctors and triage nurses in rapidly classifying patient acuity, predicting hemodynamic deterioration up to 4 hours in advance, and cutting emergency waiting room bottlenecks by 42%.",
    
    problem: {
      summary: "In high-stress emergency departments, critical cognitive overload leads to delayed triage scoring and slow clinician handoffs. Legacy EHRs are notorious for clunky, 1990s table layouts with dense micro-text and zero hierarchy.",
      points: [
        "Clinicians spent an average of 4.8 minutes per patient entering manual vitals.",
        "Crucial early signs of septic shock were often obscured behind nested clinical tabs.",
        "Nurse burnout rate increased due to redundant data entry and confusing alert noise."
      ]
    },

    goals: [
      { metric: "40%+", desc: "Reduction in triage assessment turnaround time" },
      { metric: "100%", desc: "Accessibility compliance with WCAG 2.1 AA for dark & high-contrast mode" },
      { metric: "0", desc: "Zero fatal alert fatigue incidents in clinical usability testing" }
    ],

    research: {
      methodology: "Conducted 18 contextual inquiries with ICU nurses, ER physicians, and hospital IT administrators across 3 regional hospitals.",
      persona: {
        name: "Dr. Arvind Rao",
        role: "Chief Emergency Physician",
        need: "Instant visual triage snapshot, one-click AI risk validation, and zero friction drug dosage verification during shift transitions."
      },
      insights: [
        "Doctors prioritize trendlines over snapshot numbers (a sudden drop matters more than a static reading).",
        "Color coding must strictly adhere to medical alarm standards (Red = Immediate, Amber = Urgent, Green = Stable).",
        "High-contrast dark mode is critical during night shifts to reduce ambient light disturbance in trauma wards."
      ]
    },

    userFlow: [
      { step: "1. Intake", detail: "Automated scan of ID/vitals monitor sync" },
      { step: "2. AI Triage", detail: "Neural risk-scoring & automated priority tiering" },
      { step: "3. Physician Review", detail: "Telemetry inspection & one-tap order signoff" },
      { step: "4. Ward Routing", detail: "Automated bed dispatch & real-time telemetry lock" }
    ],

    wireframes: "Explored 3 distinct architectural patterns: Dense Table Grid, Kanban Triage Columns, and Modular Adaptive Cards. Kanban cards paired with persistent telemetry trendlines proved fastest in task-completion tests (reducing clinician clicks by 58%).",

    designDirection: {
      typography: "Space Grotesk for high-visibility telemetry numbers + Plus Jakarta Sans for rapid clinical reading.",
      colorTokens: [
        { name: "Emergency Red", hex: "#EF4444", role: "Acuity Level 1 / Immediate" },
        { name: "Warning Amber", hex: "#F59E0B", role: "Acuity Level 2 / Urgent" },
        { name: "Clinical Green", hex: "#10B981", role: "Stable / Verified" },
        { name: "Dark Base", hex: "#0E1117", role: "Reduced Eye Strain Canvas" }
      ]
    },

    uiExploration: "Tested multiple waveform visualization algorithms, micro-interaction states for rapid triage overrides, and smart collapsible patient drawers that adapt based on the doctor's active specialty.",

    finalUI: "Engineered a streamlined, multi-pane telemetry cockpit. The left column shows the live queue sorted by AI severity; the central viewport renders 12-lead ECG, SpO2, and respiratory trendlines; the right column delivers explainable AI diagnostic recommendations with verified confidence scores.",

    prototypeNote: "Built a high-fidelity 60 FPS interactive prototype in Figma with interactive patient triage swiping, live animated waveform generators, and sound-feedback toggles for emergency alert drills.",

    designSystem: {
      tokens: "64 atomic color & spacing tokens, 28 custom medical data visualization components, 14 clinical state badges, and an accessible typography scale.",
      governance: "Documented in Figma Tokens Studio with direct sync to front-end CSS custom properties."
    },

    challenges: "Balancing the density of life-critical medical telemetry with clean, uncluttered visual hierarchy. Addressed this by implementing an 'Information-On-Demand' progressive disclosure paradigm.",

    solution: "A unified AI clinical workstation that highlights what matters when seconds count, eliminating 9 redundant clicks per patient admission.",

    outcome: {
      stats: [
        "42% faster triage intake time in simulated emergency trials",
        "89% doctor satisfaction score across 45 pilot clinical evaluations",
        "Nominated for Best Healthcare UX at regional design showcase"
      ]
    },

    learned: "Healthcare design is not about decoration; it is about cognitive empathy and eliminating friction in high-stakes environments where clarity directly impacts human lives."
  },

  "vedic": {
    id: "vedic",
    number: "02",
    tag: "ASTROLOGY BOOKING PLATFORM · MOBILE APP + ADMIN",
    title: "Vedic",
    subtitle: "Modernized Vedic Astrology Consultation, Kundali Synthesizer & Live Video Booking",
    role: "Lead UI/UX Designer & Brand Strategist",
    timeline: "3 Months · Q3",
    tools: ["Figma", "Adobe Illustrator", "After Effects", "Spline"],
    platform: "iOS & Android Mobile App + Astrologer Admin Dashboard",
    overview: "Vedic reimagines ancient Indian astrology for modern digital natives. It combines precise astronomical ephemeris calculations with an Uber-like instant consultation booking experience, personalized daily transit horoscopes, and secure live 1-on-1 video sessions.",

    problem: {
      summary: "Traditional astrology apps were plagued by cluttered 2000s-era UI, dubious astrologer credentials, complicated horoscope charts that confused users, and insecure payment/booking handoffs.",
      points: [
        "Users dropped off during birth chart input due to ambiguous time-zone and city coordinates.",
        "Astrologers had no centralized calendar to manage sudden appointment influxes.",
        "Over 65% of younger users found traditional Vedic charts unintelligible."
      ]
    },

    goals: [
      { metric: "60%", desc: "Increase in consultation booking conversion rate" },
      { metric: "4.9/5", desc: "App Store user experience rating target" },
      { metric: "< 30s", desc: "Time required to generate a comprehensive Kundali birth chart" }
    ],

    research: {
      methodology: "Surveyed 240+ astrology enthusiasts and conducted 12 in-depth interviews with professional Vedic scholars and astrologers across Chennai and Bangalore.",
      persona: {
        name: "Pooja Sundaram",
        role: "27 y/o Product Manager",
        need: "Quick daily horoscope insights, verified astrologer reviews with transparent per-minute pricing, and a modern aesthetic that doesn't feel superstitious."
      },
      insights: [
        "Users demand verified astrologer credentials (degrees, experience, user ratings).",
        "Visualizing planetary transits as interactive celestial orbital rings increased engagement by 3x.",
        "Micro-payments via UPI with real-time per-minute call timers eliminated billing disputes."
      ]
    },

    userFlow: [
      { step: "1. Precise Onboarding", detail: "Geo-located birth date, time & planetary coordinates" },
      { step: "2. Interactive Chart", detail: "Generated Kundali with tap-to-learn planetary houses" },
      { step: "3. Astrologer Match", detail: "Filtered by language, specialty (Career/Marriage) & rating" },
      { step: "4. Live Consultation", detail: "Encrypted video/audio call with shared screen chart view" }
    ],

    wireframes: "Created low-fidelity flow prototypes testing 4 different birth chart input interactions. The progressive 3-step conversational input form reduced onboarding bounce rate from 38% to 9%.",

    designDirection: {
      typography: "Syne for ethereal modern luxury + Space Grotesk for astronomical data + Plus Jakarta Sans for UI readability.",
      colorTokens: [
        { name: "Cosmic Obsidian", hex: "#0D0A14", role: "Deep Space Canvas" },
        { name: "Electric Violet", hex: "#8B5CF6", role: "Primary Energy & Action" },
        { name: "Astral Gold", hex: "#FCD34D", role: "Muhurat / Auspicious Timings" },
        { name: "Nebula Purple", hex: "#A78BFA", role: "Mystical Secondary Gradient" }
      ]
    },

    uiExploration: "Crafted interactive SVG planetary orbit wheels, animated zodiac tarot cards with gyro tilt parallax, and a dark celestial theme with subtle ambient starlight particle systems.",

    finalUI: "A sleek, mystically modern mobile app where users can generate interactive Kundali charts in 3 clicks, filter verified astrologers with live status indicators, and hop into encrypted HD consultations instantly.",

    prototypeNote: "Designed comprehensive micro-animations including smooth modal bottom sheets, rotating zodiac wheels, and dynamic per-minute consultation timer states.",

    designSystem: {
      tokens: "Complete mobile design system with 48 components, custom zodiac icon library (12 signs, 9 planets, 27 nakshatras), and reusable chat/video interface modules.",
      governance: "Structured in Figma with strict auto-layout tokens and dark-mode elevation layers."
    },

    challenges: "Translating complex mathematical astrological chart calculations into an intuitive, visually stunning visual representation that beginners could easily understand.",

    solution: "Developed an interactive 'Plain English' breakdown mode that translates ancient Sanskrit house positions into simple actionable career and relationship insights.",

    outcome: {
      stats: [
        "120k+ app downloads in the first 6 months post-launch",
        "4.8/5 average rating on Google Play & Apple App Store",
        "3.4x higher repeat consultation rate compared to web competitor benchmarks"
      ]
    },

    learned: "Cultural and traditional products can achieve mainstream modern adoption when designed with modern visual dignity, transparency, and top-tier micro-interactions."
  },

  "mangalyacheppu": {
    id: "mangalyacheppu",
    number: "03",
    tag: "WEDDING & MATCHMAKING · MOBILE APP + ADMIN PORTAL",
    title: "Mangalyacheppu",
    subtitle: "Trust-First Matrimony & Matchmaking Ecosystem with Government ID Verification & Horoscope Matching",
    role: "End-to-End Product & UI/UX Designer",
    timeline: "5 Months · Q3-Q4",
    tools: ["Figma", "Adobe Illustrator", "Balsamiq", "FigJam"],
    platform: "Mobile Application (iOS/Android) + Web Admin Moderation Panel",
    overview: "Mangalyacheppu is a high-trust regional matrimonial and matchmaking platform built to eliminate fake profiles, simplify family astrological compatibility checks, and create a respectful, modern match discovery journey.",

    problem: {
      summary: "Traditional matrimony portals are riddled with privacy violations, spam matchmaking brokers, fake profiles, and unintuitive filtering interfaces that overwhelm families and singles alike.",
      points: [
        "Over 40% of users expressed severe concern regarding unauthorized photo scraping and spam calls.",
        "Astrological compatibility matching required manual consultation with external astrologers.",
        "Admin moderators were overwhelmed by manual identity proof verification backlogs."
      ]
    },

    goals: [
      { metric: "99.8%", desc: "Verified member ecosystem via automated Govt ID verification" },
      { metric: "50%+", desc: "Increase in meaningful two-way mutual connection acceptances" },
      { metric: "100%", desc: "Privacy control allowing users to blur photos until mutual interest" }
    ],

    research: {
      methodology: "Interviewed 35 active matchmaking seekers (ages 23–36) and 20 parents to understand the delicate balance between modern personal autonomy and traditional family values.",
      persona: {
        name: "Ananya Menon",
        role: "29 y/o Architect",
        need: "A secure, modern profile discovery experience with granular privacy settings, verified educational backgrounds, and instant 10-Porutham horoscope match scores."
      },
      insights: [
        "Women prioritized photo privacy and phone number masking before accepting initial chat invites.",
        "A split compatibility score (Personality Match % + Horoscope Match %) gave users both cultural reassurance and emotional alignment.",
        "Admins needed a rapid split-screen comparison dashboard to review submitted ID proofs in under 15 seconds."
      ]
    },

    userFlow: [
      { step: "1. Verified Signup", detail: "DigiLocker / Aadhaar identity proof upload" },
      { step: "2. Smart Discovery", detail: "Filtered by values, profession, location & horoscope score" },
      { step: "3. Mutual Request", detail: "Protected photo reveal upon mutually agreed match" },
      { step: "4. Family Chat / Call", detail: "In-app secure messaging with family group invite option" }
    ],

    wireframes: "Drafted extensive paper prototypes and medium-fidelity wireframes in Balsamiq exploring dual-card matching, traditional list views, and a visual story-like biodata format.",

    designDirection: {
      typography: "Space Grotesk for bold headers + Plus Jakarta Sans for crisp legible bio descriptions.",
      colorTokens: [
        { name: "Royal Obsidian", hex: "#0E0A18", role: "Primary Background" },
        { name: "Amethyst Violet", hex: "#8B5CF6", role: "Warmth & Primary CTAs" },
        { name: "Trust Emerald", hex: "#10B981", role: "Verified Badge Accent" },
        { name: "Golden Aura", hex: "#F59E0B", role: "Horoscope Match Highlight" }
      ]
    },

    uiExploration: "Designed full-bleed swipeable profile cards with expandable biodata drawers, 1-tap horoscope compatibility radar charts, and an automated verification admin suite.",

    finalUI: "A high-end, respectful matrimony interface featuring verified badges, protected contact privacy controls, instant horoscope score calculators, and a companion admin console for real-time KYC validation.",

    prototypeNote: "Simulated end-to-end user journeys including profile discovery, match request acceptance, photo unlocking, and admin document approval workflows in Figma.",

    designSystem: {
      tokens: "52 reusable UI components across mobile and web admin, featuring accessible form elements, verified trust badges, and custom matrimonial iconography.",
      governance: "Zero-dependency design system tokens implemented in collaboration with the frontend engineering team."
    },

    challenges: "Designing an experience that appeals equally to progressive millennial users seeking personal chemistry and traditional parents seeking family background and astrological compatibility.",

    solution: "Implemented a customizable 'Dual-Perspective View' allowing users to switch between a modern Personal Interest View and a traditional Family Biodata / Horoscope View with a single toggle.",

    outcome: {
      stats: [
        "Over 85,000 verified profiles registered in the first 9 months",
        "99.4% reduction in reported fraudulent/spam profiles",
        "Featured in regional media as the safest matchmaking platform in South India"
      ]
    },

    learned: "The highest form of UX design is building deep institutional trust in domains where personal vulnerability and major life decisions intersect."
  }
};

/**
 * Render complete Case Study modal view
 */
function renderCaseStudyModal(projectId) {
  const data = CASE_STUDIES_DATA[projectId];
  if (!data) return;

  const modalContainer = document.getElementById('case-study-modal');
  const panel = document.getElementById('case-study-content');

  panel.innerHTML = `
    <!-- Top Close Bar -->
    <button class="modal-close-btn" id="close-cs-btn" aria-label="Close Case Study">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <!-- Case Study Hero Banner -->
    <div class="case-study-hero-banner">
      <span class="cs-tag">${data.tag}</span>
      <h1 class="cs-title">${data.title}</h1>
      <p class="cs-block-text" style="font-size: 1.25rem; color: var(--text-primary); font-weight: 500;">
        ${data.subtitle}
      </p>

      <!-- Quick Specs Bar -->
      <div class="cs-quick-specs">
        <div class="cs-spec-col">
          <h5>My Role</h5>
          <p>${data.role}</p>
        </div>
        <div class="cs-spec-col">
          <h5>Timeline</h5>
          <p>${data.timeline}</p>
        </div>
        <div class="cs-spec-col">
          <h5>Platform</h5>
          <p>${data.platform}</p>
        </div>
        <div class="cs-spec-col">
          <h5>Tools Used</h5>
          <p>${data.tools.join(" · ")}</p>
        </div>
      </div>
    </div>

    <!-- 01. Project Overview -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">01</span> Project Overview</h3>
      <p class="cs-block-text">${data.overview}</p>
    </div>

    <!-- 02. The Problem -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">02</span> The Problem</h3>
      <p class="cs-block-text">${data.problem.summary}</p>
      <div class="cs-callout-box">
        <div class="cs-callout-title">Core Friction Points Identified:</div>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-top: 8px;">
          ${data.problem.points.map(pt => `<li style="font-size: 0.95rem; color: var(--text-secondary);">🔴 ${pt}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- 03. Goals & Key Metrics -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">03</span> Goals & Target Metrics</h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px;">
        ${data.goals.map(g => `
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-subtle); padding: 20px; border-radius: 16px;">
            <div style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 4px;">${g.metric}</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">${g.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 04. Research & Understanding -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">04</span> Research & User Insights</h3>
      <p class="cs-block-text">${data.research.methodology}</p>
      
      <div style="background: var(--bg-secondary); border: 1px solid var(--border-strong); border-radius: 16px; padding: 24px; margin: 20px 0;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); text-transform: uppercase;">Primary User Persona</div>
        <h4 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 6px 0;">${data.research.persona.name} — <span style="font-size: 0.95rem; color: var(--text-secondary); font-weight: 400;">${data.research.persona.role}</span></h4>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;"><em>"${data.research.persona.need}"</em></p>
      </div>

      <div class="cs-callout-title" style="margin-top: 20px;">Key Research Discoveries:</div>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; margin-top: 10px;">
        ${data.research.insights.map(ins => `<li style="font-size: 0.95rem; color: var(--text-secondary);">💡 ${ins}</li>`).join('')}
      </ul>
    </div>

    <!-- 05. User Flow -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">05</span> Information Architecture & User Flow</h3>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 16px;">
        ${data.userFlow.map(f => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-strong); padding: 18px; border-radius: 12px;">
            <div style="font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--accent); margin-bottom: 6px;">${f.step}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">${f.detail}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 06. Wireframing & Iteration -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">06</span> Wireframing & Structural Exploration</h3>
      <p class="cs-block-text">${data.wireframes}</p>
    </div>

    <!-- 07. Design Direction & Tokens -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">07</span> Visual Design Direction & Tokens</h3>
      <p class="cs-block-text"><strong>Typography:</strong> ${data.designDirection.typography}</p>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-top: 16px;">
        ${data.designDirection.colorTokens.map(c => `
          <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 14px;">
            <div style="width: 100%; height: 40px; background-color: ${c.hex}; border-radius: 6px; margin-bottom: 10px; border: 1px solid rgba(255,255,255,0.1);"></div>
            <div style="font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">${c.name}</div>
            <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--accent); margin-bottom: 4px;">${c.hex}</div>
            <div style="font-size: 0.7rem; color: var(--text-muted);">${c.role}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 08. Final UI & Solution -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">08</span> Final UI & Interaction Polish</h3>
      <p class="cs-block-text">${data.finalUI}</p>
      <p class="cs-block-text"><strong>Prototype & Micro-interactions:</strong> ${data.prototypeNote}</p>
    </div>

    <!-- 09. Design System Governance -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">09</span> Design System & Developer Handoff</h3>
      <p class="cs-block-text">${data.designSystem.tokens}</p>
      <div class="cs-callout-box">
        <div class="cs-callout-title">Handoff & Architecture:</div>
        <p style="font-size: 0.95rem; color: var(--text-secondary);">${data.designSystem.governance}</p>
      </div>
    </div>

    <!-- 10. Challenges & Solutions -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">10</span> Key Challenge & Breakthrough</h3>
      <p class="cs-block-text"><strong>The Challenge:</strong> ${data.challenges}</p>
      <p class="cs-block-text"><strong>The Solution:</strong> ${data.solution}</p>
    </div>

    <!-- 11. Outcomes & Impact -->
    <div class="cs-section-block">
      <h3 class="cs-block-heading"><span class="cs-step-num">11</span> Measurable Outcomes & Impact</h3>
      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 14px;">
        ${data.outcome.stats.map(st => `
          <div style="padding: 16px 20px; background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.25); border-radius: 12px; color: #4ade80; font-family: var(--font-display); font-weight: 600; font-size: 1rem;">
            ✓ ${st}
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 12. What I Learned -->
    <div class="cs-section-block" style="border-top: 1px solid var(--border-subtle); padding-top: 40px;">
      <h3 class="cs-block-heading"><span class="cs-step-num">12</span> Designer's Reflection & Takeaways</h3>
      <blockquote style="font-size: 1.15rem; color: var(--text-primary); font-style: italic; border-left: 3px solid var(--accent); padding-left: 20px; line-height: 1.7;">
        "${data.learned}"
      </blockquote>
    </div>

    <!-- Bottom Navigation Footer inside modal -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 60px; padding-top: 30px; border-top: 1px solid var(--border-subtle);">
      <button class="btn-secondary" id="cs-back-to-portfolio">← Back to Portfolio</button>
      <a href="#contact" class="btn-primary" id="cs-contact-btn">Discuss This Project ↗</a>
    </div>
  `;

  modalContainer.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Attach event listener for close buttons
  document.getElementById('close-cs-btn').addEventListener('click', closeCaseStudyModal);
  document.getElementById('cs-back-to-portfolio').addEventListener('click', closeCaseStudyModal);
  document.getElementById('cs-contact-btn').addEventListener('click', () => {
    closeCaseStudyModal();
  });
}

function closeCaseStudyModal() {
  const modalContainer = document.getElementById('case-study-modal');
  if (modalContainer) {
    modalContainer.classList.remove('open');
    document.body.style.overflow = '';
  }
}
