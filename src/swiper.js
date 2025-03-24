import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Swiper-initialisatie
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

export default swiper;
