/* Nav Icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function(){
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

/* Phone Mask */
mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInput = document.querySelectorAll('[data-tel-input]');
phoneInput.forEach((input)=>{
    input.addEventListener('input', ()=>{
        if(input.value == '+') input.value = '';
    })
    input.addEventListener('blur', ()=>{
        if(input.value == '+') input.value = '';
    })
});

/* Yandex Map */

// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [41.311153, 69.279729],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12
    });

    var myPlacemark = new ymaps.Placemark([41.326105, 69.328762], 
        {balloonContent: `
            <div class="balloon">
                <div class="balloon__address">Место для встречи</div>
                <div class="balloon__contacts">
                    <a href="tel:+998930097215">EDE NAXOY :)</a>
                </div>
            </div>
        `}, 
    {
        iconLayout: 'default#image',
        iconImageHref: '/img/map/location-pin.svg',
        icon_imagesize: [40, 40],
        iconImageOffset: [-3, -42]
    });

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    // myMap.controls.remove('fullScreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // myMap.controls.remove('zoomControl'); // удаляем контроль зуммирования
    myMap.controls.remove('ruleControl'); // удаляем контроль правил
    // myMap.behaviors.disable('[scrollZoom]'); // отключаем скролл карты (опционально)

    myMap.geoObjects.add(myPlacemark);
    // myPlacemark.balloon.open();
}



