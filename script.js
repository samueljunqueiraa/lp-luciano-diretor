document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Intersection Observer for Scroll Animations ---
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .slide-in-left, .slide-in-right, .reveal-from-bottom, .zoom-in'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once visible if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => scrollObserver.observe(el));

    // --- 2. Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('.nav-link, .btn-primary, .logo').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const dest = this.getAttribute('href');
            if (dest.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(dest);
                if (section) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const offsetTop = section.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 3. Active Menu State on Scroll ---
    const sections = document.querySelectorAll('.observer-target');
    const navLinks = document.querySelectorAll('.nav-link');

    const activityObserverOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Center of viewport
        threshold: 0
    };

    const activityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remove active from all
                navLinks.forEach(link => link.classList.remove('active'));

                // Add active to current
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, activityObserverOptions);

    sections.forEach(section => activityObserver.observe(section));

    // Smooth ticker logic for duplication if JS manipulation is preferred
    // Already handled nicely by CSS, but can add cloning for absolute seamlessness if needed.
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        const clone = tickerContent.innerHTML;
        tickerContent.innerHTML += clone; // duplicates for seamless infinite CSS scroll
    }

    // --- 4. Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');

    if (mobileBtn && navLinksContainer) {
        mobileBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }
});
