document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
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

    // Testimonials slider effect
    let index = 0;
    function showNextTestimonial() {
        const testimonials = document.querySelectorAll(".testimonial");
        testimonials.forEach((t, i) => {
            t.style.transform = translateX(-${index * 100}%);
        });
        index = (index + 1) % testimonials.length;
    }
    setInterval(showNextTestimonial, 3000);
});
