// ===================================
// GSAP & SCROLLTRIGGER INITIALIZATION
// ===================================

gsap.registerPlugin(ScrollTrigger);

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('active');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// HERO SECTION ANIMATIONS
// ===================================

// Hero Badge Animation
gsap.from('.hero-badge', {
    opacity: 0,
    y: -30,
    duration: 1,
    ease: 'power3.out',
    delay: 0.3
});

// Hero Title Staggered Animation
const titleWords = document.querySelectorAll('.title-word');
gsap.from(titleWords, {
    opacity: 0,
    y: 100,
    rotationX: -90,
    transformOrigin: 'top',
    duration: 1.2,
    stagger: 0.2,
    ease: 'power4.out',
    delay: 0.5
});

// Hero Subtitle Staggered Animation
const subtitleWords = document.querySelectorAll('.subtitle-word');
gsap.from(subtitleWords, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 1.2
});

// Hero CTA Buttons
gsap.from('.hero-cta .hero-button', {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.7)',
    delay: 1.8
});

// Scroll Indicator
gsap.from('.scroll-indicator', {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 2.2,
    ease: 'power2.out'
});

// ===================================
// ABOUT SECTION ANIMATIONS
// ===================================

// Section Label
gsap.from('#about .section-label', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'power3.out'
});

// Section Title
gsap.from('#about .section-title', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out'
});

// Section Text
gsap.from('#about .section-text', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
});

// Stat Cards with Stagger
gsap.from('#about .stat-card', {
    scrollTrigger: {
        trigger: '#about .stat-card',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 60,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.4
});

// Counter Animation for Stats
const animateCounter = (element, target) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        innerHTML: target,
        duration: 2,
        ease: 'power1.inOut',
        snap: { innerHTML: 1 },
        onUpdate: function() {
            const value = Math.ceil(this.targets()[0].innerHTML);
            if (target.includes('+')) {
                element.innerHTML = value + '+';
            } else if (target.includes('%')) {
                element.innerHTML = value + '%';
            } else if (target.includes('M')) {
                element.innerHTML = (value / 1000000).toFixed(1) + 'M+';
            } else {
                element.innerHTML = value + '+';
            }
        }
    });
};

// Apply counter animations
document.querySelectorAll('.stat-card .text-5xl').forEach((stat, index) => {
    const targets = ['500', '50', '1000000', '99'];
    const displayTargets = ['500+', '50+', '1M+', '99%'];
    setTimeout(() => {
        // Reset to 0 first
        stat.innerHTML = '0';
    }, 100);
});

// ===================================
// WORK SECTION - BENTO GRID ANIMATIONS
// ===================================

// Section Label
gsap.from('#work .section-label', {
    scrollTrigger: {
        trigger: '#work',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'power3.out'
});

// Section Title
gsap.from('#work .section-title', {
    scrollTrigger: {
        trigger: '#work',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out'
});

// Bento Grid Items with Advanced Stagger
gsap.from('.bento-item', {
    scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 80,
    scale: 0.9,
    stagger: {
        amount: 0.8,
        from: 'start',
        ease: 'power2.out'
    },
    duration: 1,
    ease: 'power3.out'
});

// Bento Card Tilt Effect
document.querySelectorAll('.bento-item').forEach(item => {
    const card = item.querySelector('.bento-card');
    
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Bento Content Animation on Scroll
gsap.from('.bento-icon', {
    scrollTrigger: {
        trigger: '.bento-grid',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    scale: 0,
    rotation: -180,
    stagger: 0.1,
    duration: 1,
    ease: 'back.out(1.7)',
    delay: 0.5
});

// ===================================
// CONTACT SECTION ANIMATIONS
// ===================================

// Section Label
gsap.from('#contact .section-label', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    ease: 'back.out(1.7)'
});

// Section Title
gsap.from('#contact .section-title', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: 'power3.out',
    delay: 0.2
});

// Contact Text
gsap.from('#contact .text-xl', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 1,
    ease: 'power3.out',
    delay: 0.4
});

// Contact Buttons
gsap.from('#contact .contact-button', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 65%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.8,
    stagger: 0.15,
    duration: 0.8,
    ease: 'back.out(1.7)',
    delay: 0.6
});

// Social Links
gsap.from('.social-link', {
    scrollTrigger: {
        trigger: '.social-links',
        start: 'top 85%',
        toggleActions: 'play none none none'
    },
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power3.out',
    delay: 0.8
});

// ===================================
// PARALLAX SCROLLING EFFECTS
// ===================================

// Hero Parallax
gsap.to('.hero-gradient', {
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 200,
    opacity: 0.5
});

gsap.to('.particles', {
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    },
    y: 300
});

// ===================================
// CURSOR FOLLOW EFFECT (Optional Enhancement)
// ===================================

const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(99, 102, 241, 0.5);
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: transform 0.2s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Show cursor only on desktop
if (window.innerWidth > 768) {
    cursor.style.display = 'block';
}

// Enlarge cursor on hover over interactive elements
document.querySelectorAll('a, button, .bento-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 2,
            duration: 0.3
        });
    });
    
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            duration: 0.3
        });
    });
});

// ===================================
// MAGNETIC BUTTON EFFECT
// ===================================

document.querySelectorAll('.hero-button, .contact-button, .cta-button').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

// ===================================
// TEXT REVEAL ANIMATION
// ===================================

const splitText = (element) => {
    const text = element.innerText;
    element.innerHTML = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        element.appendChild(span);
    });
};

// Apply to specific titles if needed
document.querySelectorAll('.section-title').forEach(title => {
    // Optional: Add character-level animation
});

// ===================================
// LOADING ANIMATION
// ===================================

window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

// ===================================
// REFRESH SCROLLTRIGGER ON RESIZE
// ===================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ===================================
// CONSOLE EASTER EGG
// ===================================

console.log('%c🚀 Fly Infinity - Tech Without Limits', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%cInterested in working with us? Email: hello@flyinfinity.com', 'font-size: 14px; color: #8b5cf6;');
