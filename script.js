// High-Performance JavaScript - Optimized for Speed and User Experience
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 N1kodevv პორტფოლიო ჩაიტვირთა!");

  // Initialize core functionality first for better performance
  initializePerformanceOptimizations();
  initializeNavigation();
  initializeSmoothScrolling();

  // Ultra-aggressive deferring for minimal lag
  if (typeof requestIdleCallback !== "undefined") {
    requestIdleCallback(
      () => {
        initializeScrollAnimations();
      },
      { timeout: 1000 }
    );

    requestIdleCallback(
      () => {
        initializeInteractiveEffects();
      },
      { timeout: 1500 }
    );

    requestIdleCallback(
      () => {
        initializeContactForm();
      },
      { timeout: 2000 }
    );

    requestIdleCallback(
      () => {
        initializeProjectFilters();
      },
      { timeout: 2500 }
    );
  } else {
    // Stagger initialization for better performance
    setTimeout(initializeScrollAnimations, 50);
    setTimeout(initializeInteractiveEffects, 150);
    setTimeout(initializeContactForm, 300);
    setTimeout(initializeProjectFilters, 400);
  }
});

// Enhanced Performance Optimizations
function initializePerformanceOptimizations() {
  // 1. Optimize CSS delivery
  optimizeCSSDelivery();

  // 2. Lazy load non-critical resources
  lazyLoadResources();

  // 3. Preload critical resources
  preloadCriticalResources();

  // 4. Optimize images
  optimizeImages();

  // 5. Add critical CSS for better performance
  addCriticalCSS();

  // 6. Performance monitoring
  initializePerformanceMonitoring();
}

function optimizeCSSDelivery() {
  // Font Awesome is now preloaded in HTML for better icon performance
  // Additional CSS optimizations
  const style = document.createElement("style");
  style.textContent = `
    /* Reduce repaints and reflows */
    * {
      box-sizing: border-box;
    }
    
    /* Optimize icon rendering */
    .fa, .fas, .fab {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `;
  document.head.appendChild(style);
}

function lazyLoadResources() {
  // Lazy load images when they come into view
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

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
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
  // Add loading="lazy" to images below the fold
  document.querySelectorAll("img").forEach((img, index) => {
    if (index > 2) {
      // Skip first 3 images (above fold)
      img.loading = "lazy";
    }
    // Add proper alt attributes if missing
    if (!img.alt) {
      img.alt = "N1kodevv Portfolio Image";
    }
  });
}

function addCriticalCSS() {
  // Ultra-optimized critical CSS for minimal lag
  const style = document.createElement("style");
  style.textContent = `
    /* Ultra-smooth animations with reduced complexity */
    .fade-in {
      opacity: 0;
      transform: translate3d(0, 10px, 0);
      transition: opacity 0.25s ease-out, transform 0.25s ease-out;
    }
    
    .fade-in.visible {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    
    /* Maximum performance for interactive elements */
    .navbar, .nav-menu, .hamburger {
      will-change: auto;
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
      contain: layout style;
    }
    
    .nav-link, .btn, .social-link {
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
    }
    
    /* Optimize rendering */
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeSpeed;
    }
    
    /* Reduce paint areas */
    .navbar {
      contain: layout style paint;
      isolation: isolate;
    }
    
    /* Optimize hover states */
    .nav-link:hover,
    .btn:hover,
    .social-link:hover {
      will-change: transform;
    }
    
    /* Remove transitions that cause lag */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    /* Project filter animations */
    .project-card {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .project-card.hidden {
      opacity: 0;
      transform: scale(0.8) translateY(20px);
      pointer-events: none;
    }
    
    .project-card.visible {
      opacity: 1;
      transform: scale(1) translateY(0);
      pointer-events: auto;
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

      const measure = performance.getEntriesByName("script-execution")[0];
      console.log(`⚡ Script execution: ${Math.round(measure.duration)}ms`);

      // Log page performance metrics
      const navigation = performance.getEntriesByType("navigation")[0];
      console.log(
        `📊 Page load: ${Math.round(
          navigation.loadEventEnd - navigation.fetchStart
        )}ms`
      );
    });
  }
}

// High-Performance Navigation with Bug Fixes
function initializeNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

  if (!hamburger || !navMenu || !navbar) {
    console.warn("Navigation elements not found");
    return;
  }

  // Cache DOM queries and state
  const body = document.body;
  let isMenuOpen = false;
  let lastScrollTop = 0;
  let ticking = false;

  // Fix: Improved mobile menu toggle
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    isMenuOpen = !isMenuOpen;

    // Use more efficient class toggling
    hamburger.classList.toggle("active", isMenuOpen);
    navMenu.classList.toggle("active", isMenuOpen);

    // Prevent body scroll when menu is open
    body.style.overflow = isMenuOpen ? "hidden" : "";

    // Add accessibility attributes
    hamburger.setAttribute("aria-expanded", isMenuOpen);
    navMenu.setAttribute("aria-hidden", !isMenuOpen);
  });

  // Fix: Close menu when clicking on navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Fix: Close menu when clicking outside (improved performance)
  document.addEventListener("click", (e) => {
    if (
      isMenuOpen &&
      !hamburger.contains(e.target) &&
      !navMenu.contains(e.target) &&
      !e.target.closest(".nav-menu")
    ) {
      closeMenu();
    }
  });

  // Fix: Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      closeMenu();
    }
  });

  function closeMenu() {
    if (!isMenuOpen) return; // Prevent unnecessary operations

    isMenuOpen = false;
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.style.overflow = "";

    // Update accessibility attributes
    hamburger.setAttribute("aria-expanded", false);
    navMenu.setAttribute("aria-hidden", true);
  }

  // Ultra-optimized scroll handling for minimal lag
  function updateNavbar() {
    const scrollTop = window.pageYOffset;
    const scrollThreshold = 50;
    const hideThreshold = 120;

    // Batch DOM reads and writes for better performance
    const isScrolled = scrollTop > scrollThreshold;
    const isDesktop = window.innerWidth > 768;
    const shouldHide =
      isDesktop &&
      scrollTop > lastScrollTop &&
      scrollTop > hideThreshold &&
      !isMenuOpen &&
      Math.abs(scrollTop - lastScrollTop) > 5; // Reduce sensitivity

    // Efficient class toggle
    if (navbar.classList.contains("scrolled") !== isScrolled) {
      navbar.classList.toggle("scrolled", isScrolled);
    }

    // Only update transform when necessary
    const currentTransform = navbar.style.transform;
    const targetTransform = shouldHide ? "translateY(-100%)" : "translateY(0)";

    if (currentTransform !== targetTransform) {
      navbar.style.transform = targetTransform;
    }

    lastScrollTop = scrollTop;

    // Throttle active link updates more aggressively
    if (Math.abs(scrollTop - lastScrollTop) > 50 || scrollTop < 100) {
      updateActiveNavLink();
    }

    ticking = false;
  }

  // Fix: Use passive scroll listener for better performance
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

  // Fix: Handle resize events properly
  let resizeTimeout;
  window.addEventListener(
    "resize",
    () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 768 && isMenuOpen) {
          closeMenu();
        }
        // Reset navbar transform on resize
        navbar.style.transform = "translateY(0)";
      }, 100);
    },
    { passive: true }
  );

  // Initialize navbar state
  updateNavbar();
}

// Fix: Improved active navigation link detection
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  let currentSection = "";
  const scrollOffset = 150; // Increased offset for better detection

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + window.pageYOffset - scrollOffset;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionBottom
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  // Update active state efficiently
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentSection}`;
    link.classList.toggle("active", isActive);
  });
}

// Optimized smooth scrolling
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      if (targetId === "#") return; // Ignore empty anchors

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const navbarHeight = 70; // Fixed navbar height
        const offsetTop = targetSection.offsetTop - navbarHeight;

        // Use modern smooth scrolling with fallback
        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        } else {
          // Polyfill for older browsers
          smoothScrollTo(offsetTop, 500);
        }
      }
    });
  });
}

// Smooth scroll polyfill for older browsers
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Ultra-optimized scroll animations with minimal lag
function initializeScrollAnimations() {
  if (!("IntersectionObserver" in window)) {
    // Fallback: show all elements immediately
    const animateElements = document.querySelectorAll(".fade-in");
    animateElements.forEach((el) => el.classList.add("visible"));
    return;
  }

  // More aggressive options for better performance
  const observerOptions = {
    threshold: [0],
    rootMargin: "0px 0px -20px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    // Batch DOM updates
    const elementsToAnimate = [];

    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        elementsToAnimate.push(entry.target);
        observer.unobserve(entry.target); // Immediate unobserve
      }
    });

    // Apply all animations in one batch
    if (elementsToAnimate.length > 0) {
      requestAnimationFrame(() => {
        elementsToAnimate.forEach((el) => el.classList.add("visible"));
      });
    }
  }, observerOptions);

  // More selective element targeting for better performance
  const animateElements = document.querySelectorAll(
    ".project-card, .about-card, .contact-info, .contact-form"
  );

  // Batch DOM operations
  requestAnimationFrame(() => {
    animateElements.forEach((el) => {
      el.classList.add("fade-in");
      observer.observe(el);
    });
  });

  // Defer counter animations even more
  setTimeout(initializeCounterAnimations, 200);
}

// Counter animations for statistics
function initializeCounterAnimations() {
  const counters = document.querySelectorAll(".stat-number[data-count]");
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-count"));
        animateCounter(counter, target);
        counterObserver.unobserve(counter);
      }
    });
  });

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

function animateCounter(element, target) {
  let current = 0;
  const duration = 1000; // 1 second
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Use easing for smoother animation
    const easeProgress = progress * (2 - progress);
    current = Math.round(target * easeProgress);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target; // Ensure final value
    }
  };

  requestAnimationFrame(updateCounter);
}

// Interactive effects
function initializeInteractiveEffects() {
  // Initialize typing effect if element exists
  const typingElement = document.querySelector(".typing-text");
  if (typingElement) {
    initializeTypingEffect();
  }

  // Enhanced hover effects for all interactive elements
  initializeHoverEffects();
}

// Enhanced hover effects with better performance
function initializeHoverEffects() {
  // Create enhanced hover styles
  const hoverStyle = document.createElement("style");
  hoverStyle.textContent = `
    /* Enhanced hover effects */
    .enhanced-hover {
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .enhanced-hover:hover {
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
    
    .btn-hover:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    }
    
    .social-hover:hover {
      transform: translateY(-5px) scale(1.1) rotate(5deg);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    }
    
    .card-hover:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 25px 50px rgba(102, 126, 234, 0.15);
    }
    
    .icon-hover:hover {
      transform: scale(1.1) rotate(10deg);
      box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
    }
    
    .nav-link-hover:hover {
      transform: translateY(-2px);
      background: rgba(37, 99, 235, 0.1);
      color: #2563eb;
    }
  `;
  document.head.appendChild(hoverStyle);

  // Apply hover classes to elements
  const elements = [
    { selector: ".btn", class: "btn-hover" },
    { selector: ".social-link", class: "social-hover" },
    { selector: ".nav-link", class: "nav-link-hover" },
    {
      selector:
        ".project-card, .about-card, .skill-category, .advantage-card, .testimonial-card, .expertise-card",
      class: "card-hover",
    },
    {
      selector: ".card-icon, .advantage-icon, .expertise-icon, .category-icon",
      class: "icon-hover",
    },
  ];

  elements.forEach(({ selector, class: className }) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add("enhanced-hover", className);
    });
  });

  // Special hover effects for specific elements
  initializeSpecialHoverEffects();
}

function initializeSpecialHoverEffects() {
  // Tech tags hover effect
  document.querySelectorAll(".tech-tag, .skill-tag").forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
      tag.style.transform = "translateY(-2px) scale(1.05)";
      tag.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.4)";
    });

    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "";
      tag.style.boxShadow = "";
    });
  });

  // Project links hover effect
  document.querySelectorAll(".project-link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-2px)";
      link.style.background = "rgba(37, 99, 235, 0.1)";
      link.style.borderColor = "#2563eb";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
      link.style.background = "";
      link.style.borderColor = "";
    });
  });

  // Filter buttons hover effect
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      if (!btn.classList.contains("active")) {
        btn.style.transform = "translateY(-2px)";
        btn.style.background = "rgba(102, 126, 234, 0.1)";
      }
    });

    btn.addEventListener("mouseleave", () => {
      if (!btn.classList.contains("active")) {
        btn.style.transform = "";
        btn.style.background = "";
      }
    });
  });
}

// Ultra-optimized typing effect
function initializeTypingEffect() {
  const typingElement = document.querySelector(".typing-text");
  if (!typingElement) {
    console.warn("Typing element not found");
    return;
  }

  const text = "ვებ დეველოპერი და UI/UX დიზაინერი";
  const cursor = typingElement.querySelector(".cursor");
  let i = 0;
  let textContent = "";
  let typingTimeout = null;

  // More efficient typing using text accumulation
  function typeWriter() {
    try {
      if (i < text.length && typingElement) {
        textContent += text.charAt(i);

        // Update DOM less frequently for better performance
        if (cursor) {
          typingElement.innerHTML = textContent + cursor.outerHTML;
        } else {
          typingElement.textContent = textContent;
        }

        i++;
        typingTimeout = setTimeout(typeWriter, 60); // Faster typing for better UX
      }
    } catch (error) {
      console.error("Typing effect error:", error);
      // Fallback: show complete text
      if (typingElement) {
        typingElement.textContent = text;
      }
    }
  }

  // Clear and start typing effect
  try {
    typingElement.innerHTML = cursor ? cursor.outerHTML : "";
    setTimeout(typeWriter, 800);
  } catch (error) {
    console.error("Failed to initialize typing effect:", error);
    // Fallback: show static text
    typingElement.textContent = text;
  }

  // Cleanup function for memory management
  window.addEventListener("beforeunload", () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  });
}

// Project Filter Functionality
function initializeProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const projectsSection = document.querySelector("#projects .container");
  const projectsGrid = document.querySelector("#projects .projects-grid");

  if (!filterButtons.length || !projectCards.length) {
    console.warn("Project filter elements not found");
    return;
  }

  // Accessibility: set aria-pressed and labels
  filterButtons.forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.classList.contains("active") ? "true" : "false");
    if (!btn.hasAttribute("aria-label")) {
      btn.setAttribute("aria-label", `Filter: ${btn.textContent.trim()}`);
    }
  });

  // Status region (live region for screen readers)
  let statusEl = document.querySelector("#projects-filter-status");
  if (!statusEl && projectsSection) {
    statusEl = document.createElement("div");
    statusEl.id = "projects-filter-status";
    statusEl.setAttribute("aria-live", "polite");
    statusEl.style.cssText = "margin: 0.5rem 0 1rem; color: #6b7280; font-size: 0.95rem;";
    const filterBar = projectsSection.querySelector(".projects-filter");
    if (filterBar) filterBar.insertAdjacentElement("afterend", statusEl);
  }

  // No results element
  let noResultsEl = document.querySelector("#projects-no-results");
  if (!noResultsEl && projectsGrid) {
    noResultsEl = document.createElement("div");
    noResultsEl.id = "projects-no-results";
    noResultsEl.textContent = "ვერ მოიძებნა პროექტები ამ ფილტრისთვის";
    noResultsEl.style.cssText = "display:none;padding:1.25rem;border:1px dashed #cbd5e1;border-radius:12px;color:#475569;background:#f8fafc;text-align:center;";
    projectsGrid.insertAdjacentElement("beforebegin", noResultsEl);
  }

  // Initialize all cards as visible
  projectCards.forEach((card) => {
    card.classList.add("visible");
    card.style.display = "block";
  });

  function setActiveButton(filter) {
    filterButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-filter") === filter;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function updateStatus() {
    const visibleCount = Array.from(projectCards).filter((c) => c.classList.contains("visible") && c.style.display !== "none").length;
    const totalCount = projectCards.length;
    if (statusEl) {
      statusEl.textContent = `ნაჩვენებია ${visibleCount} / ${totalCount} პროექტი`;
    }
    if (noResultsEl) {
      noResultsEl.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  function applyFilter(filter) {
    setActiveButton(filter);
    // Update URL hash (deep-linking)
    try {
      const newHash = `#filter=${encodeURIComponent(filter)}`;
      if (location.hash !== newHash) {
        history.replaceState(null, "", newHash);
      }
    } catch (_) {}

    // Apply filtering logic
    filterProjects(filter, projectCards);

    // After animation delay, update status
    setTimeout(updateStatus, 450);
  }

  function getFilterFromHash() {
    const match = window.location.hash.match(/filter=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  // Wire up button clicks
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = button.getAttribute("data-filter") || "all";
      applyFilter(filter);
    });
  });

  // Handle back/forward navigation (hash changes)
  window.addEventListener("hashchange", () => {
    const hashFilter = getFilterFromHash();
    if (hashFilter) {
      applyFilter(hashFilter);
    }
  });

  // Initial filter from hash or default active button
  const initial = getFilterFromHash() || (document.querySelector(".filter-btn.active")?.getAttribute("data-filter")) || "all";
  applyFilter(initial);
}

function filterProjects(filter, projectCards) {
  if (!filter || !projectCards || projectCards.length === 0) {
    console.warn("Invalid filter parameters");
    return;
  }

  projectCards.forEach((card, index) => {
    if (!card) return; // Skip null/undefined cards
    
    const category = card.getAttribute("data-category") || "";
    const shouldShow = filter === "all" || category === filter;

    // Add staggered animation delay
    const delay = Math.max(0, index * 50); // Ensure positive delay
    setTimeout(() => {
      try {
        if (shouldShow) {
          card.classList.remove("hidden");
          card.classList.add("visible");
          card.style.display = "block";
        } else {
          card.classList.remove("visible");
          card.classList.add("hidden");
          // Hide after animation completes
          setTimeout(() => {
            if (card && card.classList.contains("hidden")) {
              card.style.display = "none";
            }
          }, 400);
        }
      } catch (error) {
        console.error("Error filtering project card:", error);
      }
    }, delay);
  });
}

// Enhanced contact form with validation
function initializeContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (!contactForm) return;

  const submitBtn = contactForm.querySelector("#submit-btn");
  const inputs = contactForm.querySelectorAll("input, textarea");

  // Real-time validation
  inputs.forEach((input) => {
    input.addEventListener("blur", validateField);
    input.addEventListener("input", debounce(clearFieldError, 300));
  });

  contactForm.addEventListener("submit", handleFormSubmit);

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (!validateAllFields()) {
      showMessage("გთხოვთ შეავსოთ ყველა სავალდებულო ველი სწორად.", "error");
      return;
    }

    // Check if EmailJS is configured
    if (!window.EMAILJS_CONFIG || 
        window.EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY_HERE' ||
        window.EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID_HERE' ||
        window.EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID_HERE') {
      showMessage(
        "EmailJS არ არის კონფიგურირებული. გთხოვთ იხილოთ emailjs-config.js ფაილი.",
        "error"
      );
      return;
    }

    setLoadingState(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        window.EMAILJS_CONFIG.SERVICE_ID,
        window.EMAILJS_CONFIG.TEMPLATE_ID,
        contactForm
      );
      
      console.log('📧 Email sent successfully:', result);
      showMessage(
        "წერილი წარმატებით გაიგზავნა! მალე დაგიკავშირდებით.",
        "success"
      );
      contactForm.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      showMessage(
        "წერილის გაგზავნა ვერ მოხერხდა. გთხოვთ სცადოთ ხელახლა.",
        "error"
      );
    } finally {
      setLoadingState(false);
    }
  }

  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();

    clearFieldError(e);

    if (field.hasAttribute("required") && !value) {
      showFieldError(field, "ეს ველი სავალდებულოა");
      return false;
    }

    if (field.type === "email" && value && !isValidEmail(value)) {
      showFieldError(field, "გთხოვთ შეიყვანოთ სწორი ელ-ფოსტა");
      return false;
    }

    if (field.name === "from_name" && value && value.length < 2) {
      showFieldError(field, "სახელი უნდა იყოს მინიმუმ 2 სიმბოლო");
      return false;
    }

    return true;
  }

  function clearFieldError(e) {
    const field = e.target;
    const errorElement = field.parentNode.querySelector(".field-error");
    if (errorElement) {
      errorElement.remove();
    }
    field.style.borderColor = "";
  }

  function showFieldError(field, message) {
    // Remove existing error
    clearFieldError({ target: field });

    const errorElement = document.createElement("div");
    errorElement.className = "field-error";
    errorElement.textContent = message;
    errorElement.style.cssText = `
      color: #ef4444;
      font-size: 0.8rem;
      margin-top: 0.25rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;

    field.style.borderColor = "#ef4444";
    field.parentNode.appendChild(errorElement);

    // Animate in
    setTimeout(() => {
      errorElement.style.opacity = "1";
    }, 10);
  }

  function validateAllFields() {
    const requiredInputs = contactForm.querySelectorAll(
      "input[required], textarea[required]"
    );
    let isValid = true;

    requiredInputs.forEach((input) => {
      if (!validateField({ target: input })) {
        isValid = false;
      }
    });

    return isValid;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setLoadingState(loading) {
    if (submitBtn) {
      submitBtn.disabled = loading;
      const btnText = submitBtn.querySelector(".btn-text");
      const btnLoading = submitBtn.querySelector(".btn-loading");

      if (btnText) btnText.style.display = loading ? "none" : "inline";
      if (btnLoading)
        btnLoading.style.display = loading ? "inline-flex" : "none";
    }
  }

  function showMessage(message, type) {
    // Remove existing messages
    contactForm
      .querySelectorAll(".form-message")
      .forEach((msg) => msg.remove());

    const messageEl = document.createElement("div");
    messageEl.className = `form-message form-${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      text-align: center;
      background: ${
        type === "success"
          ? "linear-gradient(135deg, #10b981, #059669)"
          : "linear-gradient(135deg, #ef4444, #dc2626)"
      };
      color: white;
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.3s ease;
    `;

    contactForm.insertBefore(messageEl, contactForm.firstChild);

    // Animate in
    requestAnimationFrame(() => {
      messageEl.style.opacity = "1";
      messageEl.style.transform = "translateY(0)";
    });

    // Auto remove
    setTimeout(() => {
      messageEl.style.opacity = "0";
      messageEl.style.transform = "translateY(-10px)";
      setTimeout(() => messageEl.remove(), 300);
    }, 5000);
  }

}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Enhanced console output for developers
console.log(
  `
%c🚀 N1kodevv Portfolio
%c⚡ Performance Optimized
%c📱 Mobile First Design  
%c🔧 Bug Fixed & Enhanced
%c🎯 Project Filters Added
%c✨ Hover Effects Enhanced

%cBuilt with ❤️ in Georgia 🇬🇪
%cReady for Production 🚀
`,
  "color: #667eea; font-size: 16px; font-weight: bold;",
  "color: #10b981; font-size: 12px;",
  "color: #f59e0b; font-size: 12px;",
  "color: #8b5cf6; font-size: 12px;",
  "color: #ec4899; font-size: 12px;",
  "color: #06b6d4; font-size: 12px;",
  "color: #6b7280; font-size: 10px;",
  "color: #ec4899; font-size: 10px; font-weight: bold;"
);

// Performance monitoring with memory management
window.addEventListener("load", () => {
  if (typeof performance !== "undefined") {
    const navigation = performance.getEntriesByType("navigation")[0];
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    console.log(`📊 Total load time: ${Math.round(loadTime)}ms`);
    console.log(
      `⚡ DOM Interactive: ${Math.round(
        navigation.domInteractive - navigation.fetchStart
      )}ms`
    );

    // Log performance metrics with cleanup
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lastEntry = entries[entries.length - 1];
          console.log(`🎯 LCP: ${Math.round(lastEntry.startTime)}ms`);
        }
        observer.disconnect(); // Clean up observer
      });
      observer.observe({ entryTypes: ["largest-contentful-paint"] });

      // Auto-disconnect after 5 seconds
      setTimeout(() => observer.disconnect(), 5000);
    }

    // Memory usage monitoring (if available)
    if (performance.memory) {
      console.log(
        `🧠 Memory: ${Math.round(
          performance.memory.usedJSHeapSize / 1024 / 1024
        )}MB used`
      );
    }
  }

  // Clean up performance marks
  setTimeout(() => {
    if (typeof performance !== "undefined" && performance.clearMarks) {
      performance.clearMarks();
      performance.clearMeasures();
    }
  }, 10000);
});
