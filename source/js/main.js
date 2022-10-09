import renderMap from './map.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const map = renderMap({
  center: [59.968307, 30.317532],
  zoom: 20
});

const swiper = new Swiper(".swiper", {
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".best-deal__button--next",
    prevEl: ".best-deal__button--prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

