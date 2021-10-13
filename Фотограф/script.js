

document.addEventListener('DOMContentLoaded', function () {

  new Swiper('.image-slider', {
    //стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
    //бесконечная прокрутка
    loop: true,
    //скорость
    speed: 1500,

  });

})
