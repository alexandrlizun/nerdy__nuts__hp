//  SLIDER //
const swiper = new Swiper('.swiper', {

    loop: false,
    simulateTouch: false,
    speed: 1000,
    slidesPerView: 4,
    direction: 'horizontal',
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, 
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });
