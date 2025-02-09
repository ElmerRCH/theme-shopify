document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".mySwiper", {
      loop: true, // Repetir el slider
      autoplay: {
        delay: 3000, // Cambia de slide cada 3s
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
  