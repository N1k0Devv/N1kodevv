// Main JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  console.log("N1kodevv Portfolio loaded!");

  // Initialize all functionality
  initializeNavigation();
  initializeScrollAnimations();
  initializeContactForm();
  initializeSmoothScrolling();
  initializeParallaxEffects();
  initializeInteractiveEffects();
  initializePerformanceOptimizations();
});

// Navigation functionality
function initializeNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) return;

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Add animation delay for menu items
    if (navMenu.classList.contains("active")) {
      navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.classList.add("fadeInUp");
      });
    }
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });

  // Update active nav link on scroll
  window.addEventListener(
    "scroll",
    throttle(() => {
      updateActiveNavLink();
      updateNavbarBackground();
    }, 16)
  );
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Update navbar background on scroll
function updateNavbarBackground() {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Add visual feedback
        targetSection.classList.add("glow");
        setTimeout(() => {
          targetSection.classList.remove("glow");
        }, 2000);
      }
    });
  });
}

// Enhanced scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Add stagger effect for project cards
        if (entry.target.classList.contains("project-card")) {
          const cards = document.querySelectorAll(".project-card");
          const index = Array.from(cards).indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }
      }
    });
  }, observerOptions);

  // Add fade-in class to elements that should animate
  const animateElements = document.querySelectorAll(
    ".project-card, .skill-category, .about-text, .contact-info, .contact-form"
  );
  animateElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Parallax effects
function initializeParallaxEffects() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${rate}px)`;
      }
    }, 16)
  );
}

// Interactive effects
function initializeInteractiveEffects() {
  // Add hover sound effects (visual feedback)
  const interactiveElements = document.querySelectorAll(
    ".btn, .social-link, .project-card, .skill-tag"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.transform = element.style.transform || "";
    });

    element.addEventListener("mouseleave", () => {
      element.style.transform = "";
    });
  });

  // Add typing effect to hero title
  initializeTypingEffect();

  // Add floating animation to social links
  initializeFloatingAnimation();

  // Add particle effect on click
  initializeClickEffects();
}

// Typing effect for hero title
function initializeTypingEffect() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  const text = "Hi, I'm N1kodevv";
  const highlight = "N1kodevv";

  // Only run on first load
  if (sessionStorage.getItem("typingComplete")) return;

  heroTitle.innerHTML = "";
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      if (text.substring(i, i + highlight.length) === highlight) {
        heroTitle.innerHTML += `<span class="highlight">${highlight}</span>`;
        i += highlight.length;
      } else {
        heroTitle.innerHTML += text.charAt(i);
        i++;
      }
      setTimeout(typeWriter, 100);
    } else {
      sessionStorage.setItem("typingComplete", "true");
    }
  }

  setTimeout(typeWriter, 1000);
}

// Floating animation for social links
function initializeFloatingAnimation() {
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link, index) => {
    link.style.animationDelay = `${index * 0.2}s`;
    link.classList.add("float");
  });
}

// Click effects
function initializeClickEffects() {
  document.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("btn") ||
      e.target.classList.contains("social-link") ||
      e.target.classList.contains("project-link")
    ) {
      createRippleEffect(e);
    }
  });
}

function createRippleEffect(e) {
  const ripple = document.createElement("span");
  const rect = e.target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;

  e.target.style.position = "relative";
  e.target.style.overflow = "hidden";
  e.target.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Enhanced contact form functionality
function initializeContactForm() {
  // Initialize EmailJS (replace with your actual credentials)
  if (typeof emailjs !== "undefined") {
    emailjs.init("YOUR_EMAILJS_USER_ID");
  }

  const contactForm = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  if (!contactForm || !submitBtn) return;

  const btnText = submitBtn.querySelector(".btn-text");
  const btnLoading = submitBtn.querySelector(".btn-loading");

  // Add real-time validation
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("blur", validateField);
    input.addEventListener("input", clearFieldError);
  });

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!validateForm()) {
      showMessage("Please fill in all required fields correctly.", "error");
      return;
    }

    // Show loading state
    setLoadingState(true);

    // Get form data
    const formData = new FormData(contactForm);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      to_email: "n1kodevv@example.com",
    };

    try {
      await simulateEmailSend(templateParams);
      showMessage(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      contactForm.reset();

      // Add success animation
      contactForm.classList.add("success-animation");
      setTimeout(() => {
        contactForm.classList.remove("success-animation");
      }, 1000);
    } catch (error) {
      console.error("Error sending email:", error);
      showMessage(
        "Failed to send message. Please try again or contact me directly.",
        "error"
      );
    } finally {
      setLoadingState(false);
    }
  });

  function validateField(e) {
    const field = e.target;
    const value = field.value.trim();

    clearFieldError(e);

    if (field.hasAttribute("required") && !value) {
      showFieldError(field, "This field is required");
      return false;
    }

    if (field.type === "email" && value && !isValidEmail(value)) {
      showFieldError(field, "Please enter a valid email address");
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
    const errorElement = document.createElement("div");
    errorElement.className = "field-error";
    errorElement.textContent = message;
    errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.8rem;
            margin-top: 0.25rem;
            animation: slideInDown 0.3s ease;
        `;

    field.style.borderColor = "#ef4444";
    field.parentNode.appendChild(errorElement);
  }

  function validateForm() {
    const inputs = contactForm.querySelectorAll(
      "input[required], textarea[required]"
    );
    let isValid = true;

    inputs.forEach((input) => {
      if (!validateField({ target: input })) {
        isValid = false;
      }
    });

    return isValid;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function setLoadingState(loading) {
    if (loading) {
      submitBtn.disabled = true;
      submitBtn.classList.add("loading");
      if (btnText) btnText.style.display = "none";
      if (btnLoading) btnLoading.style.display = "inline-flex";
    } else {
      submitBtn.disabled = false;
      submitBtn.classList.remove("loading");
      if (btnText) btnText.style.display = "inline";
      if (btnLoading) btnLoading.style.display = "none";
    }
  }

  function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = contactForm.querySelectorAll(
      ".form-success, .form-error"
    );
    existingMessages.forEach((msg) => msg.remove());

    // Create new message element
    const messageEl = document.createElement("div");
    messageEl.className = type === "success" ? "form-success" : "form-error";
    messageEl.textContent = message;

    // Insert message at the top of the form
    contactForm.insertBefore(messageEl, contactForm.firstChild);

    // Remove message after 5 seconds
    setTimeout(() => {
      messageEl.remove();
    }, 5000);
  }

  // Simulate email sending
  function simulateEmailSend(templateParams) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate success (95% success rate)
        if (Math.random() > 0.05) {
          console.log("Email would be sent with params:", templateParams);
          resolve();
        } else {
          reject(new Error("Simulated network error"));
        }
      }, 2000);
    });
  }
}

// Performance optimizations
function initializePerformanceOptimizations() {
  // Lazy load images when they come into view
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));

  // Preload critical resources
  preloadCriticalResources();
}

function preloadCriticalResources() {
  const criticalResources = [
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = resource;
    document.head.appendChild(link);
  });
}

// Utility functions
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

// Enhanced mouse tracking for hero section
document.addEventListener(
  "mousemove",
  throttle((e) => {
    const hero = document.querySelector(".hero");
    if (hero && window.scrollY < window.innerHeight) {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      const newGradient = `linear-gradient(${135 + x * 0.1}deg, #667eea ${
        y * 0.1
      }%, #764ba2 ${100 - y * 0.1}%)`;
      hero.style.background = newGradient;
    }
  }, 50)
);

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
        box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
    `;
  document.body.appendChild(progressBar);

  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrolled =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      progressBar.style.width = Math.min(scrolled, 100) + "%";
    }, 16)
  );
}

// Initialize scroll progress
addScrollProgress();

// Add CSS animations dynamically
function addDynamicStyles() {
  const style = document.createElement("style");
  style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .float {
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .success-animation {
            animation: successPulse 1s ease;
        }
        
        @keyframes successPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        
        .field-error {
            animation: slideInDown 0.3s ease;
        }
        
        .loading {
            position: relative;
            overflow: hidden;
        }
        
        .loading::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
            0% { left: -100%; }
            100% { left: 100%; }
        }
    `;
  document.head.appendChild(style);
}

// Initialize dynamic styles
addDynamicStyles();

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }
});

// Add focus management for accessibility
function initializeAccessibility() {
  const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );

  focusableElements.forEach((element) => {
    element.addEventListener("focus", () => {
      element.classList.add("focused");
    });

    element.addEventListener("blur", () => {
      element.classList.remove("focused");
    });
  });
}

// Initialize accessibility features
initializeAccessibility();

// Add Easter eggs for developers
console.log(`
🚀 Welcome to N1kodevv's Portfolio!
👨‍💻 Built with vanilla HTML, CSS, and JavaScript
🎨 Enhanced with modern animations and interactions
📱 Fully responsive and accessible
⚡ Optimized for performance
🎭 Packed with hover effects and smooth transitions

Interested in the code? Check out the source!

Features:
✨ Parallax scrolling
🌊 Smooth animations
🎯 Interactive hover effects
📊 Real-time form validation
🎨 Dynamic gradient backgrounds
🔄 Scroll progress indicator
💫 Click ripple effects
🎪 Floating animations

Press F12 to explore the code!
`);

// Add performance monitoring
if ("performance" in window) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType("navigation")[0];
      console.log(
        `⚡ Page loaded in ${Math.round(
          perfData.loadEventEnd - perfData.fetchStart
        )}ms`
      );
    }, 0);
  });
}
