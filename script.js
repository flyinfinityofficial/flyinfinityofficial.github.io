document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = (show) => {
        if (show) {
            mobileMenu.classList.remove('hidden');
            gsap.fromTo(mobileMenu, { opacity: 0 }, { opacity: 1, duration: 0.3 });
            gsap.fromTo(mobileLinks,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, delay: 0.1, duration: 0.4 }
            );
        } else {
            gsap.to(mobileMenu, { opacity: 0, duration: 0.3, onComplete: () => mobileMenu.classList.add('hidden') });
        }
    };

    menuToggle.addEventListener('click', () => toggleMenu(true));
    closeMenu.addEventListener('click', () => toggleMenu(false));
    mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

    // Hero Animations
    const heroTimeline = gsap.timeline();

    heroTimeline
        .from('.hero-badge', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from('.title-word', { y: 50, opacity: 0, stagger: 0.2, duration: 1, ease: 'power4.out' }, '-=0.4')
        .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.hero-cta', { scale: 0.9, opacity: 0, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.4');

    // Bento Grid Animations
    gsap.from('.bento-item', {
        scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // About Section
    gsap.from('#about .w-full', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: 'power3.out'
    });

    // Magnetic Buttons (Desktop Only)
    if (window.matchMedia("(min-width: 1024px)").matches) {
        const magneticButtons = document.querySelectorAll('.cta-button, .hero-badge');

        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
            });
        });
    }

    // Particle Interaction (Parallax)
    document.addEventListener('mousemove', (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5);
        const yPos = (e.clientY / window.innerHeight - 0.5);

        gsap.to('.particles', {
            x: xPos * 20,
            y: yPos * 20,
            duration: 1,
            ease: 'power2.out'
        });
    });
});
