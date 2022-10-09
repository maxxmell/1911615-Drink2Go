/**
 * Нарисует карту, главную метку и вернет методы для дальнейшего взаимодействия.
 * @param {Object} options Настройки Leaflet.
 */
function renderMap(options) {
  /**
   * Изображение главной метки.
   */
  const primaryPinIcon = L.icon({
    iconUrl: './img/icons/icon-map-pin.svg',
    iconSize: [38, 50],
    iconAnchor: [19, 52]
  });

  /**
   * Главная метка.
   */
  const primaryPin = L.marker(options.center, {
    icon: primaryPinIcon,
    draggable: false,
    autoPan: true,
    zIndexOffset: 1000
  });

  /**
   * Картографический слой.
   */
  const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

  /**
   * Карта.
   */
  const map = L.map('map-canvas', {
    // layers: [tileLayer, primaryPin, secondaryPinGroup],
    layers: [tileLayer, primaryPin],
    attributionControl: false,
    scrollWheelZoom: false,
    ...options
  });

  return {
    whenReady: map.whenReady.bind(map),
    primaryPin,
    primaryPinIcon,
    tileLayer,

    /**
     * Вернет местоположение и масштаб в исходное состояние.
     */
    reset() {
      const {center, zoom} = map.options;
      map.setView(center, zoom);
      primaryPin.setLatLng(center);
    }
  };
}

export default renderMap;

