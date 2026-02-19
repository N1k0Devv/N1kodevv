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
    requestIdleCallback(() => initializeCalculatorFunnel(), { timeout: 2400 });
    requestIdleCallback(() => initializeProjectFilters(), { timeout: 2800 });
  } else {
    setTimeout(initializeScrollAnimations, 50);
    setTimeout(initializeInteractiveEffects, 150);
    setTimeout(initializeContactForm, 300);
    setTimeout(initializeCalculatorFunnel, 360);
    setTimeout(initializeProjectFilters, 440);
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
    
    /* Navigation Optimizations */
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

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (isMenuOpen) {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
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
    { passive: true },
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
    { threshold: 0, rootMargin: "0px 0px -20px 0px" },
  );

  // Animate key cards and forms when entering viewport
  document
    .querySelectorAll(
      ".project-card, .about-card, .contact-info, .contact-form, .expertise-card, .calculator-shell",
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
          parseInt(entry.target.getAttribute("data-count")),
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
    // Hero typing copy aligned with agency positioning
    const text = "ციფრული სააგენტო: ვებ დეველოპმენტი და ბრენდინგი";
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

    requestAnimationFrame(() => banner.classList.add("show"));

    if (timeout > 0)
      setTimeout(() => {
        banner.classList.remove("show");
        setTimeout(() => banner.remove(), 520);
      }, timeout);
  }

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
        showInlineError(el, "გთხოვთ შეავსოთ ეს ველი.");
        valid = false;
      }
    });

    if (email && email.value) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email.value.trim())) {
        showInlineError(email, "გთხოვთ მიუთითოთ მართებული ელ. ფოსტა.");
        valid = false;
      }
    }

    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return valid;
  }

  form.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("input", () => clearInlineError(el));
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("#submit-btn");
    if (btn) btn.disabled = true;

    if (btn) btn.classList.add("sending");

    const isValid = validateContactForm();
    if (!isValid) {
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("sending");
      }
      return;
    }

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
        form,
      );
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

// Shared EmailJS send wrapper used by contact form and calculator
async function sendEmailJS(templateParams) {
  if (!window.EMAILJS_CONFIG || typeof emailjs === "undefined") {
    return Promise.reject(new Error("EmailJS not configured"));
  }

  try {
    return await emailjs.send(
      window.EMAILJS_CONFIG.SERVICE_ID,
      window.EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
    );
  } catch (err) {
    return Promise.reject(err);
  }
}
window.sendEmailJS = sendEmailJS;

function initializeCalculatorFunnel() {
  const shell = document.getElementById("calculator-shell");
  if (!shell) return;

  const form = document.getElementById("calculator-form");
  const stepContent = document.getElementById("calculator-step-content");
  const validationBox = document.getElementById("calculator-validation");
  const backBtn = document.getElementById("calculator-back");
  const nextBtn = document.getElementById("calculator-next");
  const stepCounter = document.getElementById("calculator-step-counter");
  const stepTitle = document.getElementById("calculator-step-title");
  const progressBar = document.getElementById("calculator-progress-bar");
  const progressTrack = shell.querySelector(".calculator-progress-track");
  const estimateWrap = document.getElementById("calculator-estimate");
  const estimateOld = document.getElementById("calculator-estimate-old");
  const estimateToday = document.getElementById("calculator-estimate-today");
  const estimateBadge = document.getElementById("calculator-estimate-badge");
  const stepFrame = shell.querySelector(".calculator-step-frame");
  const thanksBox = document.getElementById("calculator-thanks");
  const fallbackBox = document.getElementById("calculator-fallback");
  const fallbackSummary = document.getElementById(
    "calculator-fallback-summary",
  );
  const copySummaryBtn = document.getElementById("calculator-copy-summary");
  const mailtoLink = document.getElementById("calculator-mailto-link");

  if (
    !form ||
    !stepContent ||
    !validationBox ||
    !backBtn ||
    !nextBtn ||
    !stepCounter ||
    !stepTitle ||
    !progressBar
  ) {
    return;
  }

  const STORAGE_KEY = "n1kodev_calculator_state_v1";
  const DEFAULT_COPY_LABEL = "შეჯამების კოპირება";
  const steps = [
    {
      key: "businessType",
      shortTitle: "ბიზნესის ტიპი",
      type: "single",
      question: "რომელი ტიპის ბიზნესისთვის გჭირდებათ ვებგვერდი?",
      options: [
        { value: "restaurant_cafe", label: "რესტორანი / კაფე" },
        { value: "medical_clinic", label: "სამედიცინო ცენტრი / კლინიკა" },
        {
          value: "service_business",
          label: "მომსახურების ბიზნესი (სალონი, სერვისი, ოფისი და ა.შ.)",
        },
        { value: "store", label: "მაღაზია" },
        { value: "other", label: "სხვა" },
      ],
    },
    {
      key: "websiteType",
      shortTitle: "ვებსაიტის ტიპი",
      type: "single",
      question: "რომელი ტიპის ვებგვერდი გჭირდებათ?",
      options: [
        { value: "informational", label: "მარტივი, საინფორმაციო ვებგვერდი" },
        { value: "booking", label: "ბიზნეს ვებგვერდი ონლაინ ჯავშნით" },
        { value: "ecommerce", label: "ონლაინ მაღაზია (E-commerce)" },
        { value: "custom", label: "ინდივიდუალური / რთული პროექტი" },
      ],
    },
    {
      key: "branding",
      shortTitle: "ბრენდინგი",
      type: "multi",
      question: "გაინტერესებთ დამატებით ბრენდინგი?",
      options: [
        { value: "logo", label: "ლოგო" },
        {
          value: "visual_identity",
          label: "ვიზუალური იდენტობა (ფერები, შრიფტები, გიდლაინი)",
        },
        {
          value: "social_media_design",
          label: "სოც. მედიის დიზაინი (პოსტები/სტორიები)",
        },
        {
          value: "print_assets",
          label: "ბანერები / პრინტი (პოსტერი, ვიზიტკა, მენიუ)",
        },
        { value: "none", label: "არა" },
      ],
    },
    {
      key: "pages",
      shortTitle: "გვერდები",
      type: "multi",
      question: "რომელი გვერდები გჭირდებათ?",
      options: [
        { value: "home", label: "მთავარი" },
        { value: "about", label: "ჩვენს შესახებ" },
        { value: "services", label: "სერვისები" },
        { value: "products", label: "პროდუქცია" },
        { value: "portfolio", label: "პორტფოლიო / ნამუშევრები" },
        { value: "blog", label: "ბლოგი" },
        { value: "contact", label: "კონტაქტი" },
        { value: "faq", label: "FAQ" },
        { value: "other", label: "სხვა" },
      ],
    },
    {
      key: "features",
      shortTitle: "ფუნქციები",
      type: "multi",
      question: "რომელი ფუნქციები გსურთ?",
      options: [
        { value: "contact_form", label: "საკონტაქტო ფორმა" },
        { value: "whatsapp", label: "WhatsApp ღილაკი" },
        { value: "messenger", label: "Messenger ღილაკი" },
        { value: "google_maps", label: "Google Maps" },
        { value: "multilingual", label: "მრავალენოვანი (KA/EN)" },
        { value: "seo_basic", label: "SEO ბაზისი" },
        { value: "speed_optimization", label: "სიჩქარის ოპტიმიზაცია" },
        { value: "booking_system", label: "დაჯავშნა / ჩაწერა" },
        { value: "cms_panel", label: "ადმინ პანელი / CMS" },
        { value: "analytics_pixel", label: "Analytics + Pixel" },
      ],
    },
    {
      key: "contact",
      shortTitle: "კონტაქტი",
      type: "contact",
      question: "კონტაქტის დეტალები",
    },
    {
      key: "readiness",
      shortTitle: "თანამშრომლობა",
      type: "single",
      question:
        "ხართ თუ არა მზად ჩვენთან თანამშრომლობისთვის, თუ ვებგვერდი და მისი დამზადების ფასი სრულად დააკმაყოფილებს თქვენს ბიზნეს მიზნებს?",
      options: [
        { value: "yes", label: "დიახ" },
        {
          value: "consult",
          label:
            "ჯერ არ ვარ დარწმუნებული, მირჩევნია გავიარო საკონსულტაციო შეხვედრა",
        },
      ],
    },
  ];

  const defaultState = {
    businessType: "",
    businessTypeOther: "",
    websiteType: "",
    branding: [],
    pages: [],
    pagesOther: "",
    features: [],
    timeline: "",
    budget: "",
    contact: {
      name: "",
      businessName: "",
      city: "",
      phone: "",
      email: "",
      preferredContact: "",
      notes: "",
    },
    readiness: "",
  };

  const optionLabels = buildOptionLabels();
  let answers = cloneState(defaultState);
  let currentStep = 0;
  let submitting = false;
  let historyStack = [];

  // Central state object
  const surveyState = {
    get answers() {
      return answers;
    },
    get currentStep() {
      return currentStep;
    },
    get history() {
      return historyStack.slice();
    },
  };

  // Expose save/load functions required by spec
  function saveState() {
    persistState();
  }
  function loadState() {
    restoreState();
    renderStep(false);
  }
  window.surveyState = surveyState;
  window.saveState = saveState;
  window.loadState = loadState;

  restoreState();
  renderStep(false);

  backBtn.addEventListener("click", () => {
    if (submitting) return;
    // Use history stack to go to the real previous step
    if (historyStack.length > 0) {
      const prev = historyStack.pop();
      currentStep =
        typeof prev === "number" ? prev : Math.max(0, currentStep - 1);
      persistState();
      renderStep(true);
    } else if (currentStep > 0) {
      currentStep = Math.max(0, currentStep - 1);
      persistState();
      renderStep(true);
    }
  });

  nextBtn.addEventListener("click", async () => {
    if (submitting) return;
    collectCurrentStepValues();
    if (!validateCurrentStep()) return;

    if (currentStep === steps.length - 1) {
      await submitLead();
      return;
    }

    // push current step to history before moving forward
    historyStack.push(currentStep);
    currentStep += 1;
    persistState();
    renderStep(true);
  });

  stepContent.addEventListener("change", (event) => {
    normalizeExclusiveOptions(event);
    collectCurrentStepValues();
    syncOptionStates();
    clearValidation();
    clearFieldError(event.target);
    persistState();
    // Do not update estimate on intermediate steps; estimate revealed only on final step
  });

  stepContent.addEventListener("input", (event) => {
    collectCurrentStepValues();
    clearValidation();
    clearFieldError(event.target);
    persistState();
    // Intentionally avoid calling updateEstimate here
  });

  if (copySummaryBtn) {
    copySummaryBtn.addEventListener("click", async () => {
      const summaryText = fallbackSummary ? fallbackSummary.value.trim() : "";
      if (!summaryText) return;

      try {
        await navigator.clipboard.writeText(summaryText);
      } catch (_) {
        if (fallbackSummary) {
          fallbackSummary.focus();
          fallbackSummary.select();
          document.execCommand("copy");
        }
      }

      copySummaryBtn.textContent = "დაკოპირდა";
      setTimeout(() => {
        copySummaryBtn.textContent = DEFAULT_COPY_LABEL;
      }, 1300);
    });
  }

  function buildOptionLabels() {
    const labels = {};
    steps.forEach((step) => {
      if (!step.options) return;
      labels[step.key] = {};
      step.options.forEach((option) => {
        labels[step.key][option.value] = option.label;
      });
    });
    labels.preferredContact = {
      call: "დარეკვა",
      whatsapp: "WhatsApp",
      facebook: "Facebook",
    };
    return labels;
  }

  function cloneState(data) {
    return JSON.parse(JSON.stringify(data));
  }

  function restoreState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.answers) {
        answers = mergeWithDefaults(parsed.answers);
      }
      if (typeof parsed.step === "number") {
        currentStep = Math.max(0, Math.min(steps.length - 1, parsed.step));
      }
      if (Array.isArray(parsed.history)) {
        historyStack = parsed.history.filter((n) => typeof n === "number");
      }
    } catch (error) {
      console.warn("Calculator restore failed:", error);
      answers = cloneState(defaultState);
      currentStep = 0;
    }
  }

  function mergeWithDefaults(saved) {
    const merged = cloneState(defaultState);
    if (!saved || typeof saved !== "object") return merged;

    merged.businessType =
      typeof saved.businessType === "string" ? saved.businessType : "";
    merged.businessTypeOther =
      typeof saved.businessTypeOther === "string"
        ? saved.businessTypeOther
        : "";
    merged.websiteType =
      typeof saved.websiteType === "string" ? saved.websiteType : "";
    merged.branding = Array.isArray(saved.branding)
      ? saved.branding.filter(Boolean)
      : [];
    merged.pages = Array.isArray(saved.pages)
      ? saved.pages.filter(Boolean)
      : [];
    merged.pagesOther =
      typeof saved.pagesOther === "string" ? saved.pagesOther : "";
    merged.features = Array.isArray(saved.features)
      ? saved.features.filter(Boolean)
      : [];
    merged.timeline = typeof saved.timeline === "string" ? saved.timeline : "";
    merged.budget = typeof saved.budget === "string" ? saved.budget : "";
    merged.readiness =
      typeof saved.readiness === "string" ? saved.readiness : "";

    const contact =
      saved.contact && typeof saved.contact === "object" ? saved.contact : {};
    merged.contact.name = typeof contact.name === "string" ? contact.name : "";
    merged.contact.businessName =
      typeof contact.businessName === "string" ? contact.businessName : "";
    merged.contact.city = typeof contact.city === "string" ? contact.city : "";
    merged.contact.phone =
      typeof contact.phone === "string" ? contact.phone : "";
    merged.contact.email =
      typeof contact.email === "string" ? contact.email : "";
    merged.contact.preferredContact =
      typeof contact.preferredContact === "string"
        ? contact.preferredContact
        : "";
    merged.contact.notes =
      typeof contact.notes === "string" ? contact.notes : "";
    return merged;
  }

  function persistState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          step: currentStep,
          answers,
          history: historyStack,
          updatedAt: Date.now(),
        }),
      );
    } catch (error) {
      console.warn("Calculator autosave failed:", error);
    }
  }

  function renderStep(animate = true) {
    const doRender = () => {
      const step = steps[currentStep];
      stepContent.innerHTML =
        step.type === "contact"
          ? buildContactStep(step)
          : buildChoiceStep(step);
      syncOptionStates();
      updateProgress();
      updateButtons();
      // Only calculate and reveal estimate on the final result step
      if (currentStep === steps.length - 1) updateEstimate();
      clearValidation();
    };

    if (!animate) {
      doRender();
      return;
    }

    stepContent.classList.add("is-transitioning");
    setTimeout(() => {
      doRender();
      requestAnimationFrame(() =>
        stepContent.classList.remove("is-transitioning"),
      );
    }, 140);
  }

  function buildChoiceStep(step) {
    const inputType = step.type === "multi" ? "checkbox" : "radio";
    const selected = new Set(
      Array.isArray(answers[step.key])
        ? answers[step.key]
        : [answers[step.key]],
    );

    let html = `<h3 class="calc-question">${step.question}</h3>`;
    html += '<div class="calc-options-grid">';
    step.options.forEach((option) => {
      const checked = selected.has(option.value);
      html += `
        <label class="calc-option${checked ? " is-selected" : ""}">
          <input type="${inputType}" name="calc-${step.key}" value="${
            option.value
          }" ${checked ? "checked" : ""} />
          <span class="calc-option-text">${option.label}</span>
        </label>
      `;
    });
    html += "</div>";

    if (step.key === "businessType" && answers.businessType === "other") {
      html += `
        <div class="calc-other-input-wrap">
          <input
            type="text"
            id="calc-business-other"
            class="calc-input"
            placeholder="მიუთითეთ სფერო"
            value="${escapeHtml(answers.businessTypeOther)}"
          />
        </div>
      `;
    }

    if (step.key === "pages" && answers.pages.includes("other")) {
      html += `
        <div class="calc-other-pages-wrap">
          <input
            type="text"
            id="calc-pages-other"
            class="calc-input"
            placeholder="მიუთითეთ დამატებითი გვერდები"
            value="${escapeHtml(answers.pagesOther)}"
          />
        </div>
      `;
    }
    return html;
  }

  function buildContactStep(step) {
    const preferredOptions = [
      { value: "call", label: "დარეკვა" },
      { value: "whatsapp", label: "WhatsApp" },
      { value: "facebook", label: "Facebook" },
    ];

    let html = `<h3 class="calc-question">${step.question}</h3>`;
    html += `
      <div class="calc-contact-grid">
        <div class="calc-field">
          <label for="calc-name">სახელი <span class="calc-required">*</span></label>
          <input type="text" id="calc-name" class="calc-input" autocomplete="name"
            value="${escapeHtml(answers.contact.name)}" />
        </div>
        <div class="calc-field">
          <label for="calc-business-name">ბიზნესის სახელი</label>
          <input type="text" id="calc-business-name" class="calc-input" autocomplete="organization"
            value="${escapeHtml(answers.contact.businessName)}" />
        </div>
        <div class="calc-field">
          <label for="calc-city">ქალაქი</label>
          <input type="text" id="calc-city" class="calc-input" autocomplete="address-level2"
            value="${escapeHtml(answers.contact.city)}" />
        </div>
        <div class="calc-field">
          <label for="calc-phone">ტელეფონი <span class="calc-required">*</span></label>
          <input type="tel" id="calc-phone" class="calc-input" inputmode="tel"
            placeholder="+9955XXXXXXXX ან 5XXXXXXXX"
            value="${escapeHtml(answers.contact.phone)}" />
        </div>
        <div class="calc-field">
          <label for="calc-email">ელ-ფოსტა</label>
          <input type="email" id="calc-email" class="calc-input" autocomplete="email"
            value="${escapeHtml(answers.contact.email)}" />
        </div>
        <div class="calc-field full" id="calc-preferred-contact-group">
          <label>სასურველი კონტაქტი <span class="calc-required">*</span></label>
          <div class="calc-options-grid">
    `;

    preferredOptions.forEach((option) => {
      const checked = answers.contact.preferredContact === option.value;
      html += `
        <label class="calc-option${checked ? " is-selected" : ""}">
          <input type="radio" name="calc-preferred-contact" value="${option.value}"
            ${checked ? "checked" : ""} />
          <span class="calc-option-text">${option.label}</span>
        </label>
      `;
    });

    html += `
          </div>
        </div>
        <div class="calc-field full">
          <label for="calc-notes">დამატებითი ინფორმაცია</label>
          <textarea id="calc-notes" class="calc-textarea"
            placeholder="აღწერეთ პროექტის მნიშვნელოვანი დეტალები">${escapeHtml(
              answers.contact.notes,
            )}</textarea>
        </div>
      </div>
    `;

    return html;
  }

  function collectCurrentStepValues() {
    const step = steps[currentStep];

    if (step.type === "contact") {
      answers.contact.name = getInputValue("#calc-name");
      answers.contact.businessName = getInputValue("#calc-business-name");
      answers.contact.city = getInputValue("#calc-city");
      answers.contact.phone = getInputValue("#calc-phone");
      answers.contact.email = getInputValue("#calc-email");
      answers.contact.notes = getInputValue("#calc-notes");
      answers.contact.preferredContact =
        getCheckedValue('input[name="calc-preferred-contact"]') || "";
      return;
    }

    if (step.type === "single") {
      answers[step.key] =
        getCheckedValue(`input[name="calc-${step.key}"]`) || "";
      if (step.key === "businessType") {
        answers.businessTypeOther =
          answers.businessType === "other"
            ? getInputValue("#calc-business-other")
            : "";
      }
      return;
    }

    if (step.type === "multi") {
      answers[step.key] = getCheckedValues(`input[name="calc-${step.key}"]`);
      if (step.key === "pages") {
        answers.pagesOther = answers.pages.includes("other")
          ? getInputValue("#calc-pages-other")
          : "";
      }
      return;
    }
  }

  function getCheckedValue(selector) {
    const el = stepContent.querySelector(`${selector}:checked`);
    return el ? el.value : "";
  }

  function getCheckedValues(selector) {
    return Array.from(stepContent.querySelectorAll(`${selector}:checked`)).map(
      (el) => el.value,
    );
  }

  function getInputValue(selector) {
    const el = stepContent.querySelector(selector);
    return el ? (el.value || "").trim() : "";
  }

  function normalizeExclusiveOptions(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    if (target.name !== "calc-branding" || target.type !== "checkbox") return;

    if (target.value === "none" && target.checked) {
      stepContent
        .querySelectorAll('input[name="calc-branding"]')
        .forEach((input) => {
          if (input.value !== "none") input.checked = false;
        });
      return;
    }

    if (target.value !== "none" && target.checked) {
      const none = stepContent.querySelector(
        'input[name="calc-branding"][value="none"]',
      );
      if (none) none.checked = false;
    }
  }

  function syncOptionStates() {
    stepContent.querySelectorAll(".calc-option").forEach((optionEl) => {
      const input = optionEl.querySelector("input");
      if (!input) return;
      optionEl.classList.toggle("is-selected", input.checked);
    });
  }

  function updateButtons() {
    backBtn.disabled = submitting || currentStep === 0;
    backBtn.style.visibility = currentStep === 0 ? "hidden" : "visible";
    nextBtn.disabled = submitting;
    nextBtn.textContent =
      currentStep === steps.length - 1
        ? submitting
          ? "იგზავნება..."
          : "გაგზავნა"
        : "შემდეგი";
  }

  function updateProgress() {
    const progress = ((currentStep + 1) / steps.length) * 100;
    progressBar.style.width = `${progress}%`;
    if (progressTrack) {
      progressTrack.setAttribute("aria-valuenow", `${Math.round(progress)}`);
    }

    stepCounter.textContent = `ნაბიჯი ${currentStep + 1} / ${steps.length}`;
    stepTitle.textContent = steps[currentStep].shortTitle || "";
  }

  function validateCurrentStep() {
    clearValidation();
    clearAllFieldErrors();

    const step = steps[currentStep];
    let valid = true;
    let validationMessage = "";

    if (step.type === "single") {
      const value = answers[step.key];
      if (!value) {
        valid = false;
        validationMessage = "აირჩიეთ ერთი პასუხი გასაგრძელებლად.";
      }

      if (step.key === "businessType" && value === "other") {
        const other = getInputValue("#calc-business-other");
        answers.businessTypeOther = other;
        if (!other) {
          valid = false;
          validationMessage = "დააზუსტეთ „სხვა“ ველი.";
          showFieldError(
            stepContent.querySelector("#calc-business-other"),
            "ველი სავალდებულოა.",
          );
        }
      }
    }

    if (step.type === "multi") {
      const selected = answers[step.key];
      if (!Array.isArray(selected) || selected.length === 0) {
        valid = false;
        validationMessage = "აირჩიეთ მინიმუმ ერთი ვარიანტი.";
      }

      if (step.key === "pages" && answers.pages.includes("other")) {
        const otherPages = getInputValue("#calc-pages-other");
        answers.pagesOther = otherPages;
        if (!otherPages) {
          valid = false;
          validationMessage = "დააზუსტეთ „სხვა“ გვერდები.";
          showFieldError(
            stepContent.querySelector("#calc-pages-other"),
            "გთხოვთ მიუთითოთ დამატებითი გვერდები.",
          );
        }
      }
    }

    if (step.type === "contact") {
      if (!answers.contact.name) {
        valid = false;
        showFieldError(
          stepContent.querySelector("#calc-name"),
          "სახელი სავალდებულოა.",
        );
      }

      if (!answers.contact.phone) {
        valid = false;
        showFieldError(
          stepContent.querySelector("#calc-phone"),
          "ტელეფონი სავალდებულოა.",
        );
      } else if (!isValidGeorgianPhone(answers.contact.phone)) {
        valid = false;
        showFieldError(
          stepContent.querySelector("#calc-phone"),
          "მიუთითეთ სწორი ქართული ნომერი (+995 ან 5XXXXXXXX).",
        );
      }

      if (
        answers.contact.email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answers.contact.email)
      ) {
        valid = false;
        showFieldError(
          stepContent.querySelector("#calc-email"),
          "მიუთითეთ სწორი ელ-ფოსტა.",
        );
      }

      if (!answers.contact.preferredContact) {
        valid = false;
        showGroupError(
          stepContent.querySelector("#calc-preferred-contact-group"),
          "აირჩიეთ სასურველი კონტაქტი.",
        );
      }

      if (!valid) {
        validationMessage = "გთხოვთ შეავსოთ სავალდებულო ველები სწორად.";
      }
    }

    if (!valid && validationMessage) {
      showValidation(validationMessage);
    }

    return valid;
  }

  function showValidation(message) {
    validationBox.textContent = message;
    validationBox.classList.add("is-visible");
  }

  function clearValidation() {
    validationBox.textContent = "";
    validationBox.classList.remove("is-visible");
  }

  function clearAllFieldErrors() {
    stepContent
      .querySelectorAll(".calc-field-error")
      .forEach((el) => el.remove());
    stepContent
      .querySelectorAll(".input-error")
      .forEach((el) => el.classList.remove("input-error"));
  }

  function clearFieldError(target) {
    if (!(target instanceof HTMLElement)) return;
    target.classList.remove("input-error");
    const host = target.closest(".calc-field") || target.parentElement;
    if (!host) return;
    const err = host.querySelector(".calc-field-error");
    if (err) err.remove();
  }

  function showFieldError(el, message) {
    if (!el) return;
    const host = el.closest(".calc-field") || el.parentElement;
    if (!host) return;
    const existing = host.querySelector(".calc-field-error");
    if (existing) existing.remove();

    const err = document.createElement("div");
    err.className = "calc-field-error";
    err.textContent = message;
    host.appendChild(err);
    el.classList.add("input-error");
  }

  function showGroupError(group, message) {
    if (!group) return;
    const existing = group.querySelector(".calc-field-error");
    if (existing) existing.remove();

    const err = document.createElement("div");
    err.className = "calc-field-error";
    err.textContent = message;
    group.appendChild(err);
  }

  function isValidGeorgianPhone(raw) {
    const cleaned = (raw || "").replace(/[^\d+]/g, "");
    if (!cleaned) return false;

    if (cleaned.startsWith("+995")) {
      return /^5\d{8}$/.test(cleaned.slice(4));
    }
    if (cleaned.startsWith("995")) {
      return /^5\d{8}$/.test(cleaned.slice(3));
    }

    const digits = cleaned.replace(/\D/g, "");
    return /^0?5\d{8}$/.test(digits);
  }

  function normalizeGeorgianPhone(raw) {
    const cleaned = (raw || "").replace(/[^\d+]/g, "");
    if (cleaned.startsWith("+995")) return cleaned;
    if (cleaned.startsWith("995")) return `+${cleaned}`;

    const digits = cleaned.replace(/\D/g, "");
    if (/^0?5\d{8}$/.test(digits)) {
      const local = digits.startsWith("0") ? digits.slice(1) : digits;
      return `+995${local}`;
    }
    return raw.trim();
  }

  function calculateEstimate() {
    if (!answers.websiteType) return null;
    const PRICE_REDUCTION_FACTOR = 0.70;

    const base = {
      informational: { min: 650, max: 1100 },
      booking: { min: 1100, max: 2100 },
      ecommerce: { min: 1900, max: 3600 },
      custom: { min: 2800, max: 5200 },
    };
    const featureCosts = {
      contact_form: { min: 45, max: 95 },
      whatsapp: { min: 30, max: 60 },
      messenger: { min: 30, max: 60 },
      google_maps: { min: 35, max: 70 },
      multilingual: { min: 220, max: 480 },
      seo_basic: { min: 120, max: 260 },
      speed_optimization: { min: 110, max: 230 },
      booking_system: { min: 260, max: 640 },
      cms_panel: { min: 220, max: 530 },
      analytics_pixel: { min: 85, max: 180 },
    };
    const brandingCosts = {
      logo: { min: 250, max: 520 },
      visual_identity: { min: 420, max: 980 },
      social_media_design: { min: 180, max: 450 },
      print_assets: { min: 140, max: 360 },
    };
    const timelineMods = {
      asap: { min: 180, max: 360 },
      this_month: { min: 95, max: 220 },
      one_two_months: { min: 0, max: 0 },
      exploring: { min: -60, max: -30 },
    };
    const businessMods = {
      medical_clinic: { min: 90, max: 210 },
      restaurant_cafe: { min: 30, max: 90 },
      service_business: { min: 45, max: 130 },
      store: { min: 60, max: 160 },
      other: { min: 50, max: 140 },
    };

    let min = base[answers.websiteType].min;
    let max = base[answers.websiteType].max;

    const businessMod = businessMods[answers.businessType];
    if (businessMod) {
      min += businessMod.min;
      max += businessMod.max;
    }

    const pageCount =
      answers.pages.filter((item) => item !== "other").length +
      (answers.pagesOther ? 1 : 0);
    const extraPages = Math.max(0, pageCount - 4);
    min += extraPages * 85;
    max += extraPages * 150;

    answers.features.forEach((item) => {
      const cost = featureCosts[item];
      if (!cost) return;
      min += cost.min;
      max += cost.max;
    });

    if (!answers.branding.includes("none")) {
      answers.branding.forEach((item) => {
        const cost = brandingCosts[item];
        if (!cost) return;
        min += cost.min;
        max += cost.max;
      });
    }

    const timelineMod = timelineMods[answers.timeline];
    if (timelineMod) {
      min += timelineMod.min;
      max += timelineMod.max;
    }

    min *= PRICE_REDUCTION_FACTOR;
    max *= PRICE_REDUCTION_FACTOR;

    min = Math.max(350, min);
    max = Math.max(min + 100, max);

    const todayMin = roundToTen(min);
    const todayMax = roundToTen(max);
    const oldMin = roundToTen(todayMin * 1.18);
    const oldMax = roundToTen(todayMax * 1.22);

    // Enforce non-ecommerce cap: never exceed 1700 GEL unless e-commerce
    const NON_ECOMMERCE_MAX = 1700;
    const websiteLabel =
      (optionLabels.websiteType &&
        optionLabels.websiteType[answers.websiteType]) ||
      "";
    const isEcom =
      answers.websiteType === "ecommerce" ||
      websiteLabel.includes("ონლაინ მაღაზია");

    let cappedTodayMin = todayMin;
    let cappedTodayMax = todayMax;
    if (!isEcom) {
      cappedTodayMin = Math.min(cappedTodayMin, NON_ECOMMERCE_MAX);
      cappedTodayMax = Math.min(cappedTodayMax, NON_ECOMMERCE_MAX);
      if (cappedTodayMin > cappedTodayMax) cappedTodayMin = cappedTodayMax;
    }

    const cappedOldMin = Math.min(
      oldMin,
      Math.max(cappedTodayMin, NON_ECOMMERCE_MAX),
    );
    const cappedOldMax = Math.min(
      oldMax,
      Math.max(cappedTodayMax, NON_ECOMMERCE_MAX),
    );

    return {
      todayMin: cappedTodayMin,
      todayMax: cappedTodayMax,
      oldMin: cappedOldMin,
      oldMax: cappedOldMax,
    };
  }

  function roundToTen(value) {
    return Math.round(value / 10) * 10;
  }

  function updateEstimate() {
    if (!estimateWrap || !estimateOld || !estimateToday || !estimateBadge)
      return;

    // Only show estimate on final step
    if (currentStep !== steps.length - 1) {
      estimateWrap.classList.remove("is-visible");
      return;
    }

    const estimate = calculateEstimate();
    if (!estimate) {
      estimateWrap.classList.remove("is-visible");
      return;
    }

    estimateOld.textContent = formatRange(estimate.oldMin, estimate.oldMax);
    estimateToday.textContent = `დღეს: ${formatRange(estimate.todayMin, estimate.todayMax)}`;
    estimateBadge.textContent =
      answers.timeline === "asap" || answers.timeline === "this_month"
        ? "დღეს"
        : "შეთავაზება";

    // Reveal with animation
    estimateWrap.classList.remove("is-visible", "is-hidden");
    estimateWrap.style.opacity = 0;
    estimateWrap.style.transform = "translateY(8px)";
    estimateWrap.classList.add("is-visible");
    requestAnimationFrame(() => {
      estimateWrap.style.transition =
        "opacity 360ms ease, transform 360ms ease";
      estimateWrap.style.opacity = 1;
      estimateWrap.style.transform = "translateY(0)";
      setTimeout(() => {
        estimateWrap.style.transition = "";
      }, 400);
    });
  }

  function formatRange(min, max) {
    const gelToUsd = 0.37;
    const usdMin = Math.round(min * gelToUsd);
    const usdMax = Math.round(max * gelToUsd);
    return `$${formatNumber(usdMin)} - $${formatNumber(usdMax)}`;
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  function getLabel(group, value) {
    const table = optionLabels[group] || {};
    return table[value] || value || "-";
  }

  function getLabels(group, values) {
    if (!Array.isArray(values) || values.length === 0) return "-";
    return values.map((value) => getLabel(group, value)).join(", ");
  }

  function buildPayload() {
    const estimate = calculateEstimate();
    return {
      source: "survey_calculator",
      submittedAt: new Date().toISOString(),
      answers: {
        businessType: {
          value: answers.businessType,
          label: getLabel("businessType", answers.businessType),
          otherText: answers.businessTypeOther || "",
        },
        websiteType: {
          value: answers.websiteType,
          label: getLabel("websiteType", answers.websiteType),
        },
        branding: {
          values: answers.branding,
          labels: answers.branding.map((item) => getLabel("branding", item)),
        },
        pages: {
          values: answers.pages,
          labels: answers.pages.map((item) => getLabel("pages", item)),
          otherText: answers.pagesOther || "",
        },
        features: {
          values: answers.features,
          labels: answers.features.map((item) => getLabel("features", item)),
        },
        timeline: {
          value: answers.timeline,
          label: getLabel("timeline", answers.timeline),
        },
        budget: {
          value: answers.budget,
          label: getLabel("budget", answers.budget),
        },
        contact: {
          name: answers.contact.name,
          businessName: answers.contact.businessName,
          city: answers.contact.city,
          phone: normalizeGeorgianPhone(answers.contact.phone),
          email: answers.contact.email,
          preferredContact: {
            value: answers.contact.preferredContact,
            label: getLabel(
              "preferredContact",
              answers.contact.preferredContact,
            ),
          },
          notes: answers.contact.notes,
        },
        readiness: {
          value: answers.readiness,
          label: getLabel("readiness", answers.readiness),
        },
      },
      estimateRange: estimate
        ? {
            old: { min: estimate.oldMin, max: estimate.oldMax },
            today: { min: estimate.todayMin, max: estimate.todayMax },
          }
        : null,
    };
  }

  function buildFallbackSummary(payload) {
    const answersData = payload.answers;
    const summaryRows = [
      "კალკულატორის ლიდის შეჯამება",
      `თარიღი: ${new Date().toLocaleString("ka-GE")}`,
      "",
      `ბიზნესის ტიპი: ${answersData.businessType.label}${
        answersData.businessType.otherText
          ? ` (${answersData.businessType.otherText})`
          : ""
      }`,
      `ვებსაიტის ტიპი: ${answersData.websiteType.label}`,
      `ბრენდინგი: ${getLabels("branding", answersData.branding.values)}`,
      `გვერდები: ${getLabels("pages", answersData.pages.values)}${
        answersData.pages.otherText ? ` (${answersData.pages.otherText})` : ""
      }`,
      `ფუნქციები: ${getLabels("features", answersData.features.values)}`,
      `ვადა: ${answersData.timeline.label}`,
      `ბიუჯეტი: ${answersData.budget.label || "-"}`,
      "",
      `სახელი: ${answersData.contact.name}`,
      `ბიზნესის სახელი: ${answersData.contact.businessName || "-"}`,
      `ქალაქი: ${answersData.contact.city || "-"}`,
      `ტელეფონი: ${answersData.contact.phone}`,
      `ელ-ფოსტა: ${answersData.contact.email || "-"}`,
      `სასურველი კონტაქტი: ${answersData.contact.preferredContact.label}`,
      `დამატებითი ინფორმაცია: ${answersData.contact.notes || "-"}`,
      "",
      `თანამშრომლობის მზადყოფნა: ${answersData.readiness.label}`,
    ];

    if (payload.estimateRange) {
      summaryRows.push(
        "",
        `მიახლოებითი დიაპაზონი (დღეს): ${formatRange(
          payload.estimateRange.today.min,
          payload.estimateRange.today.max,
        )}`,
      );
    }

    return summaryRows.join("\n");
  }

  function buildMailto(summary) {
    const subject = encodeURIComponent("კალკულატორის ახალი მოთხოვნა");
    const body = encodeURIComponent(summary);
    return `mailto:n1kodevv1@gmail.com?subject=${subject}&body=${body}`;
  }

  async function submitLead() {
    submitting = true;
    updateButtons();
    clearValidation();

    const payload = buildPayload();
    console.log("Calculator payload:", payload);

    // Build template params for EmailJS - include a formatted message plus fields
    const summary = buildFallbackSummary(payload);
    const templateParams = {
      from_name: payload.answers.contact.name || "Survey Lead",
      reply_to: payload.answers.contact.email || "",
      subject: "ახალი კალკულატორის ლიდი",
      message: summary,
      contact_phone: payload.answers.contact.phone || "",
      contact_city: payload.answers.contact.city || "",
      business_name: payload.answers.contact.businessName || "",
      preferred_contact: payload.answers.contact.preferredContact.label || "",
      estimate_old_range: payload.estimateRange
        ? formatRange(
            payload.estimateRange.old.min,
            payload.estimateRange.old.max,
          )
        : "-",
      estimate_today_range: payload.estimateRange
        ? formatRange(
            payload.estimateRange.today.min,
            payload.estimateRange.today.max,
          )
        : "-",
      source: payload.source,
    };

    try {
      // Send via EmailJS and server endpoint in parallel; success if either succeeds
      const emailPromise = sendEmailJS(templateParams);
      const fetchPromise = fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const results = await Promise.allSettled([emailPromise, fetchPromise]);
      const ok = results.some((r) => r.status === "fulfilled");

      if (!ok) throw results;

      // Success path
      localStorage.removeItem(STORAGE_KEY);
      if (stepFrame) stepFrame.hidden = true;
      if (thanksBox) thanksBox.hidden = false;
      if (fallbackBox) fallbackBox.hidden = true;
      backBtn.disabled = true;
      nextBtn.disabled = true;
      nextBtn.textContent = "გაგზავნილია";
    } catch (error) {
      console.error(error);
      if (fallbackSummary) fallbackSummary.value = summary;
      if (mailtoLink) mailtoLink.href = buildMailto(summary);
      if (fallbackBox) fallbackBox.hidden = false;
      showValidation(
        "გაგზავნა ვერ მოხერხდა. გამოიყენეთ ალტერნატიული გაგზავნა.",
      );
      backBtn.disabled = false;
      nextBtn.disabled = false;
      nextBtn.textContent = "გაგზავნა";
    } finally {
      submitting = false;
      updateButtons();
    }
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
}
// Countdown Timer for Limited Offer
function initializeCountdown() {
  // Set the date we're counting down to
  const countDownDate = new Date("Jan 31, 2026 23:59:59").getTime();

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display results
    const dEl = document.getElementById("days");
    const hEl = document.getElementById("hours");
    const mEl = document.getElementById("minutes");

    if (dEl && hEl && mEl) {
      dEl.innerHTML = days.toString().padStart(2, "0");
      hEl.innerHTML = hours.toString().padStart(2, "0");
      mEl.innerHTML = minutes.toString().padStart(2, "0");
    }

    // If countdown finished
    if (distance < 0) {
      clearInterval(x);
      const timerDisplay = document.querySelector(".timer-display");
      if (timerDisplay) timerDisplay.innerHTML = "შეთავაზება დასრულდა";
    }
  }, 1000);
}

// Call inside your DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", function () {
  // ... existing code ...
  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(() => initializeCountdown(), { timeout: 3000 });
  } else {
    setTimeout(initializeCountdown, 500);
  }
});

