// High-Performance JavaScript - Optimized for Speed and User Experience
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 N1kodevv პორტფოლიო ჩაიტვირთა!");

  // Initialize core functionality first for better performance
  initializePerformanceOptimizations();
  initializeNavigation();
  initializeSmoothScrolling();

  // Ultra-aggressive deferring for minimal lag
  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(() => initializeScrollAnimations(), { timeout: 1000 });
    requestIdleCallback(() => initializeInteractiveEffects(), {
      timeout: 1500,
    });
    requestIdleCallback(() => initializeContactForm(), { timeout: 2000 });
    requestIdleCallback(() => initializeProjectFilters(), { timeout: 2500 });
  } else {
    setTimeout(initializeScrollAnimations, 50);
    setTimeout(initializeInteractiveEffects, 150);
    setTimeout(initializeContactForm, 300);
    setTimeout(initializeProjectFilters, 400);
  }
});

// Enhanced Performance Optimizations
function initializePerformanceOptimizations() {
  optimizeCSSDelivery();
  lazyLoadResources();
  preloadCriticalResources();
  optimizeImages();
  addCriticalCSS();
  initializePerformanceMonitoring();
}

function optimizeCSSDelivery() {
  const style = document.createElement("style");
  style.textContent = `
    * { box-sizing: border-box; }
    .fa, .fas, .fab {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `;
  document.head.appendChild(style);
}

function lazyLoadResources() {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          imageObserver.unobserve(img);
        }
      });
    });
    document
      .querySelectorAll("img[data-src]")
      .forEach((img) => imageObserver.observe(img));
  }
}

function preloadCriticalResources() {
  const criticalResources = [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      as: "style",
    },
  ];
  criticalResources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = resource.as;
    link.href = resource.href;
    document.head.appendChild(link);
  });
}

function optimizeImages() {
  document.querySelectorAll("img").forEach((img, index) => {
    if (index > 2) img.loading = "lazy";
    if (!img.alt) img.alt = "N1kodevv Portfolio Image";
  });
}

function addCriticalCSS() {
  const style = document.createElement("style");
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translate3d(0, 10px, 0);
      transition: opacity 0.25s ease-out, transform 0.25s ease-out;
    }
    .fade-in.visible {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    
    /* Navigation Optimizations - removed conflicting contain/will-change properties */
    .nav-menu, .hamburger {
      backface-visibility: hidden;
    }
    
    .nav-link:hover, .btn:hover, .social-link:hover {
      will-change: transform;
    }

    .project-card {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .project-card.hidden {
      opacity: 0;
      transform: scale(0.8) translateY(20px);
      pointer-events: none;
      display: none;
    }
    
    .project-card.visible {
      opacity: 1;
      transform: scale(1) translateY(0);
      pointer-events: auto;
      display: block;
    }
  `;
  document.head.appendChild(style);
}

function initializePerformanceMonitoring() {
  if (typeof performance !== "undefined" && performance.mark) {
    performance.mark("script-start");
    window.addEventListener("load", () => {
      performance.mark("script-end");
      performance.measure("script-execution", "script-start", "script-end");
    });
  }
}

// FIXED: High-Performance Navigation with Slide-In & Backdrop Support
function initializeNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

  if (!hamburger || !navMenu || !navbar) return;

  const body = document.body;
  let isMenuOpen = false;
  let lastScrollTop = 0;
  let ticking = false;

  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  // Close menu when clicking outside (hits the backdrop or empty space)
  document.addEventListener("click", (e) => {
    if (isMenuOpen) {
      // Check if click is OUTSIDE the menu and NOT on the hamburger button
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        console.log("Clicked backdrop/outside, closing menu");
        closeMenu();
      }
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) closeMenu();
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    updateMenuState();
  }

  function closeMenu() {
    if (!isMenuOpen) return;
    isMenuOpen = false;
    updateMenuState();
  }

  function updateMenuState() {
    hamburger.classList.toggle("active", isMenuOpen);
    navMenu.classList.toggle("active", isMenuOpen);

    if (isMenuOpen) {
      body.classList.add("menu-open");
      body.style.overflow = "hidden"; // Lock body scroll
    } else {
      body.classList.remove("menu-open");
      body.style.overflow = ""; // Restore body scroll
    }

    hamburger.setAttribute("aria-expanded", isMenuOpen);
    navMenu.setAttribute("aria-hidden", !isMenuOpen);
  }

  // Scroll handling for Navbar
  function updateNavbar() {
    const scrollTop = window.pageYOffset;
    const isScrolled = scrollTop > 50;

    if (navbar.classList.contains("scrolled") !== isScrolled) {
      navbar.classList.toggle("scrolled", isScrolled);
    }

    lastScrollTop = scrollTop;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    },
    { passive: true }
  );
}

// Optimized smooth scrolling
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (targetId === "#") return;
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    });
  });
}

function initializeScrollAnimations() {
  if (!("IntersectionObserver" in window)) {
    document
      .querySelectorAll(".fade-in")
      .forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -20px 0px" }
  );

  document
    .querySelectorAll(
      ".project-card, .about-card, .contact-info, .contact-form"
    )
    .forEach((el) => {
      el.classList.add("fade-in");
      observer.observe(el);
    });

  setTimeout(initializeCounterAnimations, 200);
}

function initializeCounterAnimations() {
  const counters = document.querySelectorAll(".stat-number[data-count]");
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(
          entry.target,
          parseInt(entry.target.getAttribute("data-count"))
        );
        observer.unobserve(entry.target);
      }
    });
  });
  counters.forEach((c) => observer.observe(c));
}

function animateCounter(el, target) {
  let current = 0;
  const duration = 1000;
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (progress * (2 - progress)));
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

function initializeInteractiveEffects() {
  const typingEl = document.querySelector(".typing-text");
  if (typingEl) {
    const text = "ვებ დეველოპერი და გრაფიკული დიზაინერი";
    const cursor = typingEl.querySelector(".cursor");
    let i = 0;
    let content = "";

    function type() {
      if (i < text.length) {
        content += text.charAt(i);
        if (cursor) typingEl.innerHTML = content + cursor.outerHTML;
        else typingEl.textContent = content;
        i++;
        setTimeout(type, 60);
      }
    }
    setTimeout(type, 800);
  }
}

function initializeProjectFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  if (!btns.length || !cards.length) return;

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      cards.forEach((card) => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.classList.remove("hidden");
          card.classList.add("visible");
        } else {
          card.classList.remove("visible");
          card.classList.add("hidden");
        }
      });
    });
  });
}

function initializeContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  // Simple toast/banner helper (appended to body so it doesn't shift layout)
  function showBanner(message, type = "success", timeout = 4200) {
    const existing = document.body.querySelector(".success-banner");
    if (existing) existing.remove();

    const banner = document.createElement("div");
    banner.className = "success-banner";
    if (type === "error") banner.classList.add("error");

    const check = document.createElement("div");
    check.className = "check";
    check.innerHTML =
      type === "success"
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17L4 12" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17h.01" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const msg = document.createElement("div");
    msg.className = "msg";
    msg.textContent = message;

    banner.appendChild(check);
    banner.appendChild(msg);
    document.body.appendChild(banner);

    // trigger show animation
    requestAnimationFrame(() => banner.classList.add("show"));

    if (timeout > 0)
      setTimeout(() => {
        banner.classList.remove("show");
        setTimeout(() => banner.remove(), 520);
      }, timeout);
  }

  // Inline error helpers for contact form
  function clearInlineError(el) {
    if (!el) return;
    const wrapper = el.closest(".form-group") || el.parentElement;
    const existing = wrapper && wrapper.querySelector(".error-message");
    if (existing) existing.remove();
    el.classList.remove("input-error");
    el.removeAttribute("aria-invalid");
  }

  function showInlineError(el, message) {
    if (!el) return;
    clearInlineError(el);
    const wrapper = el.closest(".form-group") || el.parentElement;
    const msg = document.createElement("div");
    msg.className = "error-message";
    msg.setAttribute("role", "alert");
    msg.textContent = message;
    wrapper.appendChild(msg);
    el.classList.add("input-error");
    el.setAttribute("aria-invalid", "true");
  }

  function validateContactForm() {
    let valid = true;
    const name = form.querySelector("#from_name");
    const email = form.querySelector("#reply_to");
    const subject = form.querySelector("#subject");
    const message = form.querySelector("#message");

    [name, email, subject, message].forEach((el) => {
      if (!el) return;
      clearInlineError(el);
      const val = (el.value || "").trim();
      if (!val) {
        showInlineError(el, "გთხოვთ შეავსოთ ეს поле.");
        valid = false;
      }
    });

    if (email && email.value) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email.value.trim())) {
        showInlineError(email, "გთხოვთ მიუთითოთ მართლი ელ. ფოსტა.");
        valid = false;
      }
    }

    // focus first invalid
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return valid;
  }

  // Clear inline errors while typing
  form.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("input", () => clearInlineError(el));
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("#submit-btn");
    if (btn) btn.disabled = true;

    // Small UX: animate button to indicate sending
    if (btn) btn.classList.add("sending");

    // Validate required fields before attempting to send
    const isValid = validateContactForm();
    if (!isValid) {
      // stop and restore button
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("sending");
      }
      return;
    }

    // Check config
    if (
      !window.EMAILJS_CONFIG ||
      (window.EMAILJS_CONFIG.PUBLIC_KEY &&
        window.EMAILJS_CONFIG.PUBLIC_KEY.includes("YOUR"))
    ) {
      showBanner("EmailJS არ არის კონფიგურირებული.", "error");
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("sending");
      }
      return;
    }

    try {
      await emailjs.sendForm(
        window.EMAILJS_CONFIG.SERVICE_ID,
        window.EMAILJS_CONFIG.TEMPLATE_ID,
        form
      );
      // success animation: toast + button pulse
      showBanner("წერილი წარმატებით გაიგზავნა!", "success");
      if (btn) {
        btn.classList.remove("sending");
        btn.classList.add("sent");
        setTimeout(() => btn.classList.remove("sent"), 1000);
      }
      form.reset();
    } catch (error) {
      console.error(error);
      showBanner("შეცდომა გაგზავნისას.", "error");
      if (btn) btn.classList.remove("sending");
    } finally {
      if (btn) btn.disabled = false;
    }
  });
}
