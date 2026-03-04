// Atlantic Tutoring - Main JavaScript
// Dynamic features for the redesigned website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initScrollReveal();
    initSmartNav();
    initMobileMenu();
    initMarquee();
    initTestimonialAutoScroll();
    initHeroShapeEntrance();
});

// 1. Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// 2. Smart Navigation Behavior
function initSmartNav() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNav() {
        const scrollY = window.scrollY;
        
        // Add shadow when past 100px
        if (scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
        
        // Hide/show nav based on scroll direction
        if (scrollY > 300) {
            if (scrollY > lastScrollY) {
                nav.classList.add('nav-hidden');
            } else {
                nav.classList.remove('nav-hidden');
            }
        } else {
            nav.classList.remove('nav-hidden');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNav);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// 3. Mobile Menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (!hamburger || !mobileMenu) return;
    
    hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open', isOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    
    // Close menu when clicking links
    const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// 4. Marquee Enhancement
function initMarquee() {
    const marqueeTracks = document.querySelectorAll('.marquee-track');
    
    marqueeTracks.forEach(track => {
        // Clone content for seamless loop
        const content = track.innerHTML;
        track.innerHTML = content + content;
    });
}

// 5. Testimonial Auto-Scroll
function initTestimonialAutoScroll() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (!testimonialsContainer) return;
    
    const cards = testimonialsContainer.querySelectorAll('.testimonial-card');
    if (cards.length <= 1) return;
    
    let currentIndex = 0;
    let scrollInterval;
    let isPaused = false;
    
    function scrollToNext() {
        if (isPaused) return;
        
        currentIndex = (currentIndex + 1) % cards.length;
        cards[currentIndex].scrollIntoView({
            behavior: 'smooth',
            inline: 'start',
            block: 'nearest'
        });
    }
    
    function startAutoScroll() {
        scrollInterval = setInterval(scrollToNext, 4500);
    }
    
    function pauseAutoScroll() {
        isPaused = true;
        clearInterval(scrollInterval);
    }
    
    function resumeAutoScroll() {
        isPaused = false;
        startAutoScroll();
    }
    
    // Start auto-scroll
    startAutoScroll();
    
    // Pause on interaction
    testimonialsContainer.addEventListener('pointerdown', pauseAutoScroll);
    testimonialsContainer.addEventListener('pointerup', resumeAutoScroll);
    testimonialsContainer.addEventListener('touchstart', pauseAutoScroll);
    testimonialsContainer.addEventListener('touchend', resumeAutoScroll);
}

// 6. Hero Swoosh and Carton Entrance Animation
function initHeroShapeEntrance() {
    // Swoosh entrance — scales in gently
    const swoosh = document.querySelector('.fluid-swoosh');
    if (swoosh) {
        swoosh.style.opacity = '0';
        swoosh.style.transform = 'scale(0.92)';
        swoosh.style.transition = 'opacity 1.2s 0.1s cubic-bezier(0.22,1,0.36,1), transform 1.2s 0.1s cubic-bezier(0.22,1,0.36,1)';
        requestAnimationFrame(() => requestAnimationFrame(() => {
            swoosh.style.opacity = '1';
            swoosh.style.transform = 'scale(1)';
        }));
    }

    // Carton entrance — fades and lifts in after swoosh
    const carton = document.querySelector('.hero-carton');
    if (carton) {
        carton.style.opacity = '0';
        carton.style.transform = 'translateY(30px)';
        carton.style.transition = 'opacity 1s 0.4s cubic-bezier(0.22,1,0.36,1), transform 1s 0.4s cubic-bezier(0.22,1,0.36,1)';
        requestAnimationFrame(() => requestAnimationFrame(() => {
            carton.style.opacity = '1';
            carton.style.transform = 'translateY(0)';
        }));
    }
}

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
