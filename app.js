
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const items = document.querySelectorAll('.grid-item, .testimonial, .team-member');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => {
        observer.observe(item);
    });
});
// Add Intersection Observer for Partner Logos
const partnerItems = document.querySelectorAll('.partner-item');
const partnerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            partnerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

partnerItems.forEach(item => {
    partnerObserver.observe(item);
});
