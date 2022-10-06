import renderMap from './map.js';

const map = renderMap({
  center: [59.968307, 30.317532],
  zoom: 20
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
