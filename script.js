document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".hero p", { opacity: 0, y: -30, duration: 1.2, delay: 0.3 });
    gsap.from(".btn", { opacity: 0, scale: 0.8, duration: 1.2, delay: 0.6 });
});