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
  // effect: "creative",
  // creativeEffect: {
  //   prev: {
  //     translate: ["-20%", 0, -1],
  //   },
  //   next: {
  //     translate: ["100%", 0, 0],
  //   },
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

// map.whenReady(async () => {
//   try {
//     const ads = await getAds();
//     const replacePins = debounce(() => map.replacePins(mapForm.filter(ads)));

//     mapForm.setDisabled(false).on('change', replacePins).fire('change');

//   } catch (exception) {
//     showMessage('error',`Ошибка: ${exception.status || exception.message}`);
//   }

//   adForm.setDisabled(false);
//   map.primaryPin.fire('move');
// });
