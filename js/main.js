// Homepage Animation Logic

// Create particles - Snowfall Effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = window.innerWidth > 768 ? 80 : 40;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * 100;
        const y = Math.random() * -50; // Start above viewport
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 8 + 10; // 10-18 seconds for varied snowfall
        const delay = Math.random() * 10;
        
        particle.style.left = x + '%';
        particle.style.top = y + '%';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        particle.style.setProperty('--random-x', (Math.random() * 200 - 100) + 'px');
        
        particlesContainer.appendChild(particle);
    }
}

// Smooth scroll for navigation
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    setupNavigation();
});

// Setup navigation active state
function setupNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Update active nav on page load
window.addEventListener('load', setupNavigation);
