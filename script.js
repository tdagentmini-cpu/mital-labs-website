// Smooth scroll for navigation links
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

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = 'none';
    } else {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe case studies
document.querySelectorAll('.case-study').forEach((study) => {
    study.style.opacity = '0';
    study.style.transform = 'translateY(30px)';
    study.style.transition = 'all 0.8s ease';
    observer.observe(study);
});

// Observe about section
const aboutContent = document.querySelector('.about-content');
if (aboutContent) {
    aboutContent.style.opacity = '0';
    aboutContent.style.transform = 'translateY(30px)';
    aboutContent.style.transition = 'all 0.8s ease';
    observer.observe(aboutContent);
}

// Add mobile menu toggle (for future enhancement)
const createMobileMenu = () => {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';
    
    if (window.innerWidth <= 640) {
        menuToggle.style.display = 'block';
        menuToggle.style.background = 'none';
        menuToggle.style.border = 'none';
        menuToggle.style.fontSize = '24px';
        menuToggle.style.cursor = 'pointer';
        
        menuToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'white';
            navMenu.style.padding = '20px';
            navMenu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        });
        
        document.querySelector('.nav-container').appendChild(menuToggle);
    }
};

// Initialize on load
window.addEventListener('load', () => {
    createMobileMenu();
});

// Parallax effect for hero gradient blob
window.addEventListener('scroll', () => {
    const blob = document.querySelector('.hero-gradient-blob');
    if (blob) {
        const scrolled = window.pageYOffset;
        blob.style.transform = `translate(-50%, -50%) scale(${1 + scrolled * 0.0005})`;
    }
});

// Add cursor effect for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0)';
    });
});

// Console message for developers
console.log('%c🚀 Mital Labs', 'font-size: 20px; font-weight: bold; color: #0066ff;');
console.log('%cBuilt with modern web technologies', 'font-size: 14px; color: #8892ab;');
console.log('%cInterested in working together? tony@mital.ai', 'font-size: 14px; color: #0066ff;');