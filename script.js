// Main JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  console.log("N1kodevv პორტფოლიო ჩაიტვირთა!");

  // Initialize all functionality
  initializeNavigation();
  initializeScrollAnimations();
  initializeContactForm();
  initializeSmoothScrolling();
  initializeParallaxEffects();
  initializeInteractiveEffects();
  initializePerformanceOptimizations();
  initializeProjectFiltering();
});

// Enhanced Navigation functionality
function initializeNavigation() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbar = document.querySelector(".navbar");

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

  // Enhanced scroll handling for navbar
  let lastScrollTop = 0;
  let scrollTimeout;

  window.addEventListener(
    "scroll",
    throttle(() => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Add scrolled class for styling
      if (scrollTop > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      // Hide/show navbar on scroll
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.style.transform = "translateY(-100%)";
      } else {
        // Scrolling up
        navbar.style.transform = "translateY(0)";
      }

      lastScrollTop = scrollTop;

      // Update active nav link and other scroll effects
      updateActiveNavLink();

      // Reset navbar position after scroll stops
      scrollTimeout = setTimeout(() => {
        navbar.style.transform = "translateY(0)";
      }, 150);
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

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;

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

        // Add stagger effect for footer sections
        if (entry.target.classList.contains("footer-section")) {
          const sections = document.querySelectorAll(".footer-section");
          const index = Array.from(sections).indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.2}s`;
        }
      }
    });
  }, observerOptions);

  // Add fade-in class to elements that should animate
  const animateElements = document.querySelectorAll(
    ".project-card, .skill-category, .about-text, .contact-info, .contact-form, .benefit-card, .expertise-card, .footer-section, .footer-brand"
  );
  animateElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Project filtering functionality
function initializeProjectFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectCards.forEach((card, index) => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "block";
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";

          // Animate card appearance with stagger
          setTimeout(() => {
            card.style.transition = "all 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 100);
        } else {
          card.style.transition = "all 0.3s ease";
          card.style.opacity = "0";
          card.style.transform = "translateY(-20px)";

          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
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
    ".btn, .social-link, .project-card, .skill-tag, .benefit-card, .expertise-card, .footer-social-link"
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

  // Initialize footer animations
  initializeFooterAnimations();
}

// Footer specific animations
function initializeFooterAnimations() {
  const footerLinks = document.querySelectorAll(".footer-links a");
  const footerSocialLinks = document.querySelectorAll(".footer-social-link");

  // Animate footer links on hover
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateX(10px)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateX(0)";
    });
  });

  // Add ripple effect to social links
  footerSocialLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      createRippleEffect(e);
    });
  });
}

// Typing effect for hero title
function initializeTypingEffect() {
  const heroTitle = document.querySelector(".hero-title");
  if (!heroTitle) return;

  const text = "გამარჯობა, მე ვარ N1kodevv";
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
  const socialLinks = document.querySelectorAll(
    ".social-link, .footer-social-link"
  );

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
      e.target.classList.contains("project-link") ||
      e.target.classList.contains("filter-btn") ||
      e.target.classList.contains("footer-social-link")
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
      showMessage("გთხოვთ შეავსოთ ყველა აუცილებელი ველი სწორად.", "error");
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
        "შეტყობინება წარმატებით გაიგზავნა! მე მალე დაგიკავშირებთ.",
        "success"
      );
      contactForm.reset();

      // Add success animation
      contactForm.classList.add("success-animation");
      setTimeout(() => {
        contactForm.classList.remove("success-animation");
      }, 1000);
    } catch (error) {
      console.error("შეტყობინების გაგზავნის შეცდომა:", error);
      showMessage(
        "შეტყობინების გაგზავნა ვერ მოხერხდა. სცადეთ ახლიდან ან მომმართეთ პირდაპირ.",
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
      showFieldError(field, "ეს ველი აუცილებელია");
      return false;
    }

    if (field.type === "email" && value && !isValidEmail(value)) {
      showFieldError(field, "გთხოვთ, შეიყვანოთ ვალიდური ელ.ფოსტის მისამართი");
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
          console.log(
            "ელ.ფოსტა გაიგზავნებოდა შემდეგი პარამეტრებით:",
            templateParams
          );
          resolve();
        } else {
          reject(new Error("სიმულირებული ქსელის შეცდომა"));
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
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
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
        background: linear-gradient(90deg, #667eea, #764ba2, #fbbf24);
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

        .navbar {
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
🚀 კეთილი იყოს თქვენი თავი N1kodevv-ს განახლებულ პორტფოლიოში!
👨‍💻 განვვითარდა სუფთა HTML, CSS და JavaScript-ით
🎨 გაუმჯობესებულია თანამედროვე ანიმაციებით და ინტერაქციებით
📱 სრულად რეაგირებადი და ხელმისაწვდომი
⚡ ოპტიმიზირებული წარმადობისთვის
🎭 დატვირთულია ჰოვერ-ეფექტებით და გლუვი ტრანზიციებით
🌟 ახალი სტილური ჰედერი და ფუტერი

ახალი ფუნქციები:
✨ დინამიური ნავიგაციის ზოლი
🌊 გაუმჯობესებული ანიმაციები
🎯 ინტერაქტიული ჰოვერ-ეფექტები
📊 რეალურ დროში ფორმის ვალიდაცია
🎨 დინამიური გრადიენტის ფონები
🔄 სკროლ პროგრესის მაჩვენებელი
💫 კლიკის რიპლ-ეფექტები
🎪 დაფარვითი ანიმაციები
🔍 პროექტების ფილტრაცია
🏠 სტილური ფუტერი სოციალური ბმულებით

დააჭირეთ F12 კოდის სანახავად!
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
