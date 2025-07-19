// Navigation and Section Management
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked nav item
    event.target.classList.add('active');
    
    // Smooth scroll to top of content
    document.querySelector('.main-content').scrollIntoView({
        behavior: 'smooth'
    });
}

// Resume Download Function
function downloadResume() {
    // Create a temporary link element
    const link = document.createElement('a');
    
    // Set the Google Drive download URL
    const driveFileId = '1wyyCIrPzRCykEOheUAG4COrt5UxRhWwN';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    
    // Set link properties
    link.href = downloadUrl;
    link.target = '_blank';
    link.download = 'Abhishek_Pudugosula_Resume.pdf';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Profile Image Error Handling
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.getElementById('profile-img');
    const profileIcon = document.getElementById('profile-icon');
    
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            profileImg.style.display = 'none';
            profileIcon.style.display = 'block';
        });
        
        profileImg.addEventListener('load', function() {
            profileImg.style.display = 'block';
            profileIcon.style.display = 'none';
        });
    }
});

// Smooth Scrolling for Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
});

// Intersection Observer for Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Add click animations to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .nav-item, .social-link');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .btn, .nav-item, .social-link {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);