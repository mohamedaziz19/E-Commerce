// Swiper Slide Side-bar
    var swiper = new Swiper(".slide-swp", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullests: true,
        clickable: true,
      },
      autoplay: {
        delay: 1300,
      },
      loop: true,
    });

    // Swiper Slide sale-slide
    var swiper = new Swiper(".sale-sec", {
      // pagination: {
      //   el: ".swiper-pagination",
      //   dynamicBullests: true,
      //   clickable: true,
      // },
      slidesPerView: 5,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
      },
      navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev ",
      },
      loop: true,
      breakpoints: {
        1600: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 4,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });

        // Swiper To Second Slide 
            var swiper = new Swiper(".product-swip", {
              slidesPerView: 4,
              spaceBetween: 30,
              autoplay: {
                delay: 2000,
              },
              navigation: {
                nextEl: ".swiper-button-next ",
                prevEl: ".swiper-button-prev ",
              },
              loop: true,
              breakpoints: {
                1500: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              },
            });