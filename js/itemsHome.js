
fetch ('js/items.json')
.then(response => response.json())
.then(data => {
  // The Element For The First Slide
  const swiperItemsSale = document.getElementById("items-sale");

  // The Element For The Second Slide1
  const otherProductSwiper1 = document.getElementById("other-product-swiper1");

  // The Element For The Second Slide2
  const otherProductSwiper2 = document.getElementById("other-product-swiper2");

  // The Element For The Second Slide3
  const otherProductSwiper3 = document.getElementById("other-product-swiper3");

  allProductsJson = data;

  // Add Items For The First Slide
  data.forEach((product) => {
    if (product.oldPrice) {
      const presentDiscount = Math.floor(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
      );
      swiperItemsSale.innerHTML += `
      
              <div class="product swiper-slide">

                <!-- Icons -->
                <div class="icons">
                  <span> <i onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"> </i> </span>
                  <span> <i class="fa-solid fa-heart">     </i> </span>
                  <span> <i class="fa-solid fa-share">     </i> </span>
                </div>


                <!-- sale present -->
                <span class="sale-present"> % ${presentDiscount}</span>


                <!-- start product img & hover -->
                <div class="img-product">
                  <img src="${product.img}" alt="">
                  <img class="img-hover" src="${product.imgHover}" alt="">
                </div>
                <!-- end product img & hover -->
                
                <!-- start product name & link --> 
                <h3 class="name-product">
                  <a href="item.html" target="_blank">
                  ${product.name}
                  </a>
                </h3>
                <!-- end product name & link -->
                
                <!-- rate -->
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <!-- end rate -->

              <!-- start Price -->
              <div class="price">
                <p><span>$ ${product.price}</span></p>
                <p class="old-price"> $ ${product.oldPrice}</p>
              </div>
              <!-- End Price -->
              </div>
              `;
    }
  });

  // Add Items For The Second Slide1
  data.forEach((product) => {

      otherProductSwiper1.innerHTML += `
      
              <div class="product swiper-slide">

                <!-- Icons -->
                <div class="icons">
                  <span> <i onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"> </i> </span>
                  <span> <i class="fa-solid fa-heart">     </i> </span>
                  <span> <i class="fa-solid fa-share">     </i> </span>
                </div>



                <!-- start product img & hover -->
                <div class="img-product">
                  <img src="${product.img}" alt="">
                  <img class="img-hover" src="${product.imgHover}" alt="">
                </div>
                <!-- end product img & hover -->
                
                <!-- start product name & link --> 
                <h3 class="name-product">
                  <a href="item.html" target="_blank">
                  ${product.name}
                  </a>
                </h3>
                <!-- end product name & link -->
                
                <!-- rate -->
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <!-- end rate -->

              <!-- start Price -->
              <div class="price">
                <p><span>$ ${product.price}</span></p>
              </div>
              <!-- End Price -->
              </div>
              `;
  });
  // Add Items For The Second Slide2
  data.forEach((product) => {

      otherProductSwiper2.innerHTML += `
      
              <div class="product swiper-slide">

                <!-- Icons -->
                <div class="icons">
                  <span> <i onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"> </i> </span>
                  <span> <i class="fa-solid fa-heart">     </i> </span>
                  <span> <i class="fa-solid fa-share">     </i> </span>
                </div>



                <!-- start product img & hover -->
                <div class="img-product">
                  <img src="${product.img}" alt="">
                  <img class="img-hover" src="${product.imgHover}" alt="">
                </div>
                <!-- end product img & hover -->
                
                <!-- start product name & link --> 
                <h3 class="name-product">
                  <a href="item.html" target="_blank">
                  ${product.name}
                  </a>
                </h3>
                <!-- end product name & link -->
                
                <!-- rate -->
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <!-- end rate -->

              <!-- start Price -->
              <div class="price">
                <p><span>$ ${product.price}</span></p>
              </div>
              <!-- End Price -->
              </div>
              `;
  });

  // Add Items For The Second Slide3
  data.forEach((product) => {

      otherProductSwiper3.innerHTML += `
      
              <div class="product swiper-slide">

                <!-- Icons -->
                <div class="icons">
                  <span> <i onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"> </i> </span>
                  <span> <i class="fa-solid fa-heart">     </i> </span>
                  <span> <i class="fa-solid fa-share">     </i> </span>
                </div>



                <!-- start product img & hover -->
                <div class="img-product">
                  <img src="${product.img}" alt="">
                  <img class="img-hover" src="${product.imgHover}" alt="">
                </div>
                <!-- end product img & hover -->
                
                <!-- start product name & link --> 
                <h3 class="name-product">
                  <a href="item.html" target="_blank">
                  ${product.name}
                  </a>
                </h3>
                <!-- end product name & link -->
                
                <!-- rate -->
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <!-- end rate -->

              <!-- start Price -->
              <div class="price">
                <p><span>$ ${product.price}</span></p>
              </div>
              <!-- End Price -->
              </div>
              `;
  });















})


