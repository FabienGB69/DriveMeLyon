/**
 * Drive Me Lyon — Premium Luxury Chauffeur & Wine Tours
 * Frontend Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initHeaderScroll();
  initMobileNavigation();
  initReviewsCarousel();
  initBookingForm();
  initScrollAnimations();
});

/* ==========================================================================
   1. Language Switcher (FR / EN)
   ========================================================================== */
function initLanguageSwitcher() {
  const langFrBtn = document.getElementById('lang-fr-btn');
  const langEnBtn = document.getElementById('lang-en-btn');
  
  if (!langFrBtn || !langEnBtn) return;

  // 1. Determine active language (LocalStorage -> Browser Lang -> Default 'en')
  let currentLang = localStorage.getItem('dml_lang');
  
  if (!currentLang) {
    const browserLang = navigator.language || navigator.userLanguage;
    currentLang = browserLang.startsWith('fr') ? 'fr' : 'en';
  }

  // 2. Set active language
  setLanguage(currentLang);

  // 3. Bind click events
  langFrBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('fr');
  });

  langEnBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setLanguage('en');
  });
}

function setLanguage(lang) {
  // Update Body Class
  document.body.classList.remove('lang-fr', 'lang-en');
  document.body.classList.add(`lang-${lang}`);
  
  // Save Choice
  localStorage.setItem('dml_lang', lang);
  
  // Update HTML Lang Attribute
  document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr-FR' : 'en-US');
  
  // Update UI Selectors Active State
  const langFrBtn = document.getElementById('lang-fr-btn');
  const langEnBtn = document.getElementById('lang-en-btn');
  if (langFrBtn && langEnBtn) {
    if (lang === 'fr') {
      langFrBtn.setAttribute('aria-current', 'true');
      langEnBtn.removeAttribute('aria-current');
    } else {
      langEnBtn.setAttribute('aria-current', 'true');
      langFrBtn.removeAttribute('aria-current');
    }
  }

  // Update form inputs select options depending on selected language
  updateFormOptions(lang);
}

function updateFormOptions(lang) {
  const requestTypeSelect = document.getElementById('request-type');
  if (!requestTypeSelect) return;
  
  // Update placeholder options and select option labels dynamically if needed
  // Since we have sémantic FR/EN classes everywhere, option texts will display based on those!
  // But we can update the select options specifically if they aren't fully bilingual in DOM
}


/* ==========================================================================
   2. Header Scroll Effect
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Run on mount
  handleScroll();
  
  // Run on scroll with throttle
  window.addEventListener('scroll', handleScroll, { passive: true });
}


/* ==========================================================================
   3. Mobile Navigation Menu
   ========================================================================== */
function initMobileNavigation() {
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!mobileToggle || !navMenu) return;

  const toggleMenu = () => {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', !isExpanded);
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu open
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  };

  mobileToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking link, EXCEPT dropdown toggles
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // If the link is a dropdown toggle on mobile
      if (link.classList.contains('dropdown-toggle') && window.innerWidth <= 992) {
        e.preventDefault();
        const parentItem = link.closest('.nav-item.dropdown');
        parentItem.classList.toggle('active');
        return; // Don't close the menu
      }

      // Normal link, close menu
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}


/* ==========================================================================
   4. Google Reviews Carousel
   ========================================================================== */
function initReviewsCarousel() {
  const track = document.getElementById('carousel-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dotsContainer = document.getElementById('carousel-dots');
  
  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  const slides = Array.from(track.children);
  const slideCount = slides.length;
  let currentIndex = 0;
  let slidesPerView = getSlidesPerView();

  // Create Indicator Dots
  const totalDots = Math.ceil(slideCount / slidesPerView);
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('button');
    dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to slide group ${i + 1}`);
    dot.addEventListener('click', () => goToSlideGroup(i));
    dotsContainer.appendChild(dot);
  }

  function getSlidesPerView() {
    if (window.innerWidth <= 768) return 1;
    return 2;
  }

  function updateCarousel() {
    slidesPerView = getSlidesPerView();
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = 32; // Gap of 2rem in CSS
    const transformX = currentIndex * (slideWidth + gap);
    
    track.style.transform = `translateX(-${transformX}px)`;

    // Update Dots
    const activeDotIndex = Math.floor(currentIndex / slidesPerView);
    const dots = Array.from(dotsContainer.children);
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeDotIndex);
    });

    // Disable buttons at boundaries
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= slideCount - slidesPerView;
    prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
    nextBtn.style.opacity = currentIndex >= slideCount - slidesPerView ? '0.4' : '1';
  }

  function goToSlideGroup(dotIndex) {
    slidesPerView = getSlidesPerView();
    currentIndex = dotIndex * slidesPerView;
    // Bounds check
    if (currentIndex > slideCount - slidesPerView) {
      currentIndex = slideCount - slidesPerView;
    }
    updateCarousel();
  }

  // Next Slide Event
  nextBtn.addEventListener('click', () => {
    slidesPerView = getSlidesPerView();
    if (currentIndex < slideCount - slidesPerView) {
      currentIndex += 1;
      updateCarousel();
    }
  });

  // Prev Slide Event
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateCarousel();
    }
  });

  // Responsive Resizing
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      currentIndex = 0; // Reset to start
      // Re-evaluate dots
      slidesPerView = getSlidesPerView();
      const newTotalDots = Math.ceil(slideCount / slidesPerView);
      dotsContainer.innerHTML = '';
      for (let i = 0; i < newTotalDots; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlideGroup(i));
        dotsContainer.appendChild(dot);
      }
      updateCarousel();
    }, 250);
  });

  // Touch Swipe Integration for Mobile Devices
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    
    if (Math.abs(diffX) > 50) { // 50px threshold
      if (diffX > 0) {
        nextBtn.click();
      } else {
        prevBtn.click();
      }
      isDragging = false;
    }
  }, { passive: true });

  track.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Initial call
  updateCarousel();
}


/* ==========================================================================
   5. Booking Form & Success Handling
   ========================================================================== */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  const successOverlay = document.getElementById('form-success');
  const closeSuccessBtn = document.getElementById('close-success-btn');

  if (!form || !successOverlay) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Gather values for validation
    const requestType = document.getElementById('request-type').value;
    const pickup = document.getElementById('pickup').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const language = document.getElementById('preferred-language').value;
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();

    // 2. Perform luxury alert validation on required fields
    if (!requestType || !pickup || !date || !phone || !email) {
      alert(
        document.body.classList.contains('lang-fr') 
        ? 'Veuillez remplir tous les champs obligatoires (indiqués par *).' 
        : 'Please fill in all required fields (marked with *).'
      );
      return;
    }

    // 3. Simulate high-end server-side delivery submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = document.body.classList.contains('lang-fr') 
      ? '<i class="fas fa-spinner fa-spin"></i> Traitement...' 
      : '<i class="fas fa-spinner fa-spin"></i> Processing...';

    // Premium micro-animation fake delay (1.2s)
    setTimeout(() => {
      // Show elegant success panel overlay
      successOverlay.classList.add('active');
      
      // Reset form
      form.reset();
      
      // Restore submit button state
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      // Smooth scroll back to form container top
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  });

  if (closeSuccessBtn) {
    closeSuccessBtn.addEventListener('click', (e) => {
      e.preventDefault();
      successOverlay.classList.remove('active');
    });
  }
}


/* ==========================================================================
   6. Scroll Reveal Animations (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
  // If browser doesn't support IntersectionObserver, skip gracefully
  if (!('IntersectionObserver' in window)) return;

  const revealElements = document.querySelectorAll(
    '.card, .intl-image-stack, .feature-item, .reviews-header-bar, .fleet-card, .contact-card, .booking-form-wrapper'
  );

  // Set initial opacity and translation
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        observer.unobserve(el); // Stop listening once animated
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px' // Trigger slightly before element enters fully
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}
