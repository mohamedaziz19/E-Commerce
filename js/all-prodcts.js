// open & Close Filter

let filter = document.querySelector(".filter")

function openAndCloseFilter(){
  filter.classList.toggle("active")
}


fetch("js/items.json")
  .then((response) => response.json())
  .then((data) => {

      allProductsJson = data;

    // The Element For The Second Slide3
    const allProductsDiv = document.getElementById("products-div");

    // Add Items For All Products Page
    data.forEach((product) => {

      const oldPriceP = product.oldPrice
        ? `<p class="old-price"> $ ${product.oldPrice}</p>`
        : ""; 

      const presentDiscountDiv = product.oldPrice ? 
      `<span class="sale-present"> % ${Math.floor(((product.oldPrice - product.price) / product.oldPrice) * 100)}</span>`
      : "" ;

      allProductsDiv.innerHTML += `
      
              <div class="product swiper-slide">

                <!-- Icons -->
                <div class="icons">
                  <span> <i onclick = "addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"> </i> </span>
                  <span> <i class="fa-solid fa-heart">     </i> </span>
                  <span> <i class="fa-solid fa-share">     </i> </span>
                </div>

                <!-- sale present -->
                ${presentDiscountDiv}

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
                ${oldPriceP}
              </div>
              <!-- End Price -->
              </div>
              `;
    });


  });
