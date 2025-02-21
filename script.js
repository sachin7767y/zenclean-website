document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for menu links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                document.querySelector(this.hash).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Simple animation on scroll
    const animatedElements = document.querySelectorAll(".animate-fade, .animate-slide, .animate-pop, .animate-zoom");
    function checkScroll() {
        animatedElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
                el.style.opacity = "1";
                el.style.transform = "none";
            }
        });
    }
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
