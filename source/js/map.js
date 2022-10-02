ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [59.938631, 30.323055],
            zoom: 16.5,
            controls: []
        }),

        myPlacemark1 = new ymaps.Placemark([59.938631, 30.323055], {
            balloonContent: 'Магазин изделий ручной работы "Мишка"'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [67, 100]],
            iconImageHref: 'img/icons/icon-map-pin.svg',
            iconImageSize: [67, 100],
            iconImageOffset: [-40, -100],
        });

    myMap.geoObjects.add(myPlacemark1)
}
