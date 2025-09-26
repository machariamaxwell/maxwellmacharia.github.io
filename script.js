// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger to 'X'
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Simple form submission handler (for demonstration)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message, Maxwell! This is a demo. For a real site, connect this to a backend service or use a form service like Formspree.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--must-white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate skill bars when section comes into view
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-level');
    const skillsSection = document.getElementById('skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const level = bar.getAttribute('data-level');
                    bar.style.width = level + '%';
                });
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
}

// Call the function when page loads
document.addEventListener('DOMContentLoaded', animateSkillBars);


// Enhanced Contact Form Functionality
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        organization: document.getElementById('organization').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Show loading state
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        // Success message
        showNotification('Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
        
        // Reset form
        this.reset();
        
        // Restore button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : 'exclamation'}"></i>
        ${message}
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);


// Debug floating button position
console.log('WhatsApp button position:', {
element: document.querySelector('.floating-whatsapp'),
computedStyle: window.getComputedStyle(document.querySelector('.floating-whatsapp'))
});
// Force position update
function fixButtonPosition() {
const button = document.querySelector('.floating-whatsapp');
if (button) {
button.style.position = 'fixed';
button.style.bottom = '25px';
button.style.right = '25px';
button.style.zIndex = '9999';
}
}
// Fix on load and resize
window.addEventListener('load', fixButtonPosition);
window.addEventListener('resize', fixButtonPosition);

// Portfolio Modal Functionality
document.querySelectorAll('.view-project').forEach(button => {
button.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
// For demo purposes, show an alert with project details
const projectTitle = this.closest('.portfolio-content').querySelector('h3').textContent;
Swal.fire({
title: projectTitle,
html: `
<div style="text-align: left;">
<p><strong>This is a sample project demonstration.</strong></p>
<p>In a real portfolio, this would link to:</p>
<ul>
<li>Full article PDF</li>
<li>Project documentation</li>
<li>Live demo or samples</li>
</ul>
<p><em>Tip: Create these projects using your MUST coursework materials!</em></p>
</div>
`,
icon: 'info',
confirmButtonText: 'Got it!',
confirmButtonColor: '#2c5e9a'
});
});
});