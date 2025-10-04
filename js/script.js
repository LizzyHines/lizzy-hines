const swiper = new Swiper('.swiper', {
      loop: true,              // infinite loop
      autoplay: {
        delay: 6000,           // auto-slide every 6s
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,       // allow clicking dots
      },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
      keyboard: true,          // allow arrow key navigation
      grabCursor: true,        // cursor turns into "grab hand"
    });