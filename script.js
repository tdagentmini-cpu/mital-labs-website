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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all service cards, work cards, and about elements
const animateElements = document.querySelectorAll('.service-card, .work-card, .about-content, .visual-card');
animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Parallax effect for hero background
let lastScrollY = window.scrollY;
let ticking = false;

function updateParallax() {
    const scrollY = window.scrollY;
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroBg) {
        const offset = scrollY * 0.5;
        heroBg.style.transform = `translateY(${offset}px)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});

// Nav background on scroll
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 14, 39, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 102, 255, 0.1)';
    } else {
        nav.style.background = 'rgba(10, 14, 39, 0.95)';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Button ripple effect enhancement
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.className = 'ripple';
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Cursor effect for hero section (subtle)
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const xPercent = (clientX / innerWidth - 0.5) * 20;
        const yPercent = (clientY / innerHeight - 0.5) * 20;
        
        const heroCard = document.querySelector('.hero-card');
        if (heroCard) {
            heroCard.style.transform = `perspective(1000px) rotateX(${-yPercent * 0.1}deg) rotateY(${xPercent * 0.1}deg)`;
        }
    });
    
    hero.addEventListener('mouseleave', () => {
        const heroCard = document.querySelector('.hero-card');
        if (heroCard) {
            heroCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
    });
}

// Add dynamic gradient animation to hero background
function animateGradient() {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            heroBg.style.background = `
                radial-gradient(circle at 30% 50%, hsla(${hue}, 100%, 50%, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 70% 50%, hsla(${(hue + 60) % 360}, 100%, 50%, 0.1) 0%, transparent 50%)
            `;
        }, 100);
    }
}

// Initialize gradient animation
animateGradient();

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Track scroll depth for analytics (optional)
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
    }
});

// Add hover effect to metrics
document.querySelectorAll('.metric').forEach(metric => {
    metric.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    metric.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Performance optimization: debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle responsive adjustments if needed
        const width = window.innerWidth;
        if (width < 768) {
            // Mobile optimizations
            document.querySelectorAll('.service-card').forEach(card => {
                card.style.minHeight = 'auto';
            });
        }
    }, 250);
});

console.log('🚀 Mital Labs website loaded successfully');