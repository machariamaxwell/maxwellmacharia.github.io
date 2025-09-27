// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');
hamburger.classList.toggle('active');
});
}
// Close mobile menu when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
navLinks.classList.remove('active');
hamburger.classList.remove('active');
});
});
// Smooth scrolling for navigation links
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
// Navbar background on scroll
window.addEventListener('scroll', () => {
const navbar = document.getElementById('navbar');
if (window.scrollY > 100) {
navbar.style.background = 'rgba(255, 255, 255, 0.95)';
navbar.style.backdropFilter = 'blur(10px)';
} else {
navbar.style.background = 'var(--must-white)';
navbar.style.backdropFilter = 'none';
}
});
// Form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
contactForm.addEventListener('submit', function(e) {
e.preventDefault();
alert('Thank you for your message! I will get back to you soon.');
this.reset();
});
}
// Touch device detection
function isTouchDevice() {
return 'ontouchstart' in window || navigator.maxTouchPoints;
}
if (isTouchDevice()) {
document.body.classList.add('touch-device');
}
// Load animations
window.addEventListener('load', () => {
document.body.classList.add('loaded');
});