// Scroll Reveal
(function() {
    var reveals = document.querySelectorAll('.reveal');
    function check() {
        var h = window.innerHeight;
        reveals.forEach(function(el) {
            if (el.getBoundingClientRect().top < h - 60) el.classList.add('visible');
        });
    }
    window.addEventListener('scroll', check);
    window.addEventListener('load', check);
})();

// Mobile Nav
(function() {
    var toggle = document.getElementById('nav-toggle');
    var links = document.getElementById('nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', function() {
        links.classList.toggle('mobile-open');
    });
    links.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', function() {
            links.classList.remove('mobile-open');
        });
    });
    document.addEventListener('click', function(e) {
        if (!toggle.contains(e.target) && !links.contains(e.target)) {
            links.classList.remove('mobile-open');
        }
    });
})();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
        e.preventDefault();
        var t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
