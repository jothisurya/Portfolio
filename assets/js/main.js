/*==================== HOME SPLIT TEXT ====================*/
const { animate, text, stagger } = anime;

// Split text for Anime.js
const { chars: chars1 } = text.split(".home__profession-1", {
  chars: true,
});
const { chars: chars2 } = text.split(".home__profession-2", {
  chars: true,
});

animate(chars1, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

animate(chars2, {
  y: [{ to: ["100%", "0%"] }, { to: "-100%", delay: 4000, ease: "in(3)" }],
  duration: 900,
  ease: "out(3)",
  delay: stagger(80),
  loop: true,
});

/*==================== SWIPER PROJECTS ====================*/
const swiperProjects = new Swiper(".projects__swiper", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  speed: 600,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*==================== WORK TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetSelector = tab.dataset.target,
      targetContent = document.querySelector(targetSelector);

    // Disable all content and active tabs
    tabContents.forEach((content) => content.classList.remove("work-active"));
    tabs.forEach((t) => t.classList.remove("work-active"));

    // Active the tab and corresponding content
    tab.classList.add("work-active");
    targetContent.classList.add("work-active");
  });
});

/*==================== SERVICES ACCORDION ====================*/
const buttons = document.querySelectorAll(".services__button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const cards = document.querySelectorAll(".services__card");
    const card = button.closest(".services__card");
    const info = card.querySelector(".services__info");

    const isOpen = card.classList.contains("services__open");

    // Close all cards first
    cards.forEach((c) => {
      c.classList.remove("services__open");
      c.classList.add("services__close");

      const i = c.querySelector(".services__info");
      if (i) {
        i.style.height = "0px";
      }
    });

    // Open the clicked card
    if (!isOpen) {
      info.style.height = "auto";
      let height = info.scrollHeight + "px";

      card.classList.remove("services__close");
      card.classList.add("services__open");

      info.style.height = height;
    }
  });
});

/*==================== TESTIMONIALS DUPLICATE CARDS ====================*/
// Duplicate images to make the CSS infinite marquee animation work smoothly
const tracks = document.querySelectorAll(".testimonial__content");

tracks.forEach((track) => {
  const cards = [...track.children];

  // Duplicate cards only once
  for (const card of cards) {
    track.appendChild(card.cloneNode(true));
  }
});

/*==================== COPY EMAIL IN CONTACT ====================*/
const copyBtn = document.getElementById("contact-btn"),
  copyEmailEl = document.getElementById("contact-email");

if (copyBtn && copyEmailEl) {
  const copyEmail = copyEmailEl.textContent.trim();

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(copyEmail).then(() => {
      copyBtn.innerHTML = 'Email Copied <i class="ri-check-line"></i>';

      // Restore original text
      setTimeout(() => {
        copyBtn.innerHTML = 'Copy Email <i class="ri-file-copy-line"></i>';
      }, 2000);
    });
  });
}

/*==================== CURRENT YEAR OF FOOTER ====================*/
const textYear = document.getElementById("footer-year");
if (textYear) {
  textYear.textContent = new Date().getFullYear();
}

/*==================== SCROLL SECTION ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id,
      top = section.offsetTop - 50,
      height = section.offsetHeight,
      link = document.querySelector(".nav__menu a[href*=" + id + "]");

    if (!link) return;
    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height
    );
  });
};
window.addEventListener("scroll", scrollActive);

/*==================== CUSTOM CURSOR ====================*/
const cursor = document.querySelector(".cursor");
let mouseX = 0,
  mouseY = 0;

if (cursor) {
  const cursorMove = () => {
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
    cursor.style.transform = "translate(-50%, -50%)";

    requestAnimationFrame(cursorMove);
  };

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  cursorMove();

  /* Hide custom cursor on links and buttons */
  const interactiveElements = document.querySelectorAll("a, button, .projects__card");

  interactiveElements.forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("hide-cursor");
    });
    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("hide-cursor");
    });
  });
}

/*==================== SCROLL REVEAL ANIMATION ====================*/
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 300,
    reset: false,
  });

  sr.reveal(
    `.home__image, .projects__container, .work__container, .testimonials__container, .contact__container`
  );
  sr.reveal(`.home__data`, { delay: 900, origin: "bottom" });
  sr.reveal(`.home__info`, { delay: 1200, origin: "bottom" });
  sr.reveal(`.home__social, .home__cv`, { delay: 1200 });
  sr.reveal(`.about__data`, { origin: "left" });
  sr.reveal(`.about__image`, { origin: "right" });
  sr.reveal(`.services__card`, { interval: 100 });
}

/*==================== RESUME DOWNLOAD MOBILE HANDLER ====================*/
const resumeLinks = document.querySelectorAll('a[href*="Surya_P_Resume.pdf"], #resume-btn');
resumeLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.setAttribute("download", "Surya_P_Resume.pdf");
  });
});

