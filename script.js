// Add animations on scroll
document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(".service-item");

  serviceItems.forEach((item, index) => {
    item.style.animationDelay = ${index * 0.2}s;
  });
});
