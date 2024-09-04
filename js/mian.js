// Open Cart & Close Cart
let cart = document.querySelector(".cart");

// function Open Cart
function openCart() {
  cart.classList.add("active");
}
// function Close Cart
function closeCart() {
  cart.classList.remove("active");
}

// Responsive
// Open Menu & Close Menu

let menu = document.getElementById("menu")

// function Open Menu
function openMenu() {
  menu.classList.add("active");
}
// function Close Menu
function closeMenu() {
  menu.classList.remove("active");
}



//  Add Item In Cart
let allProductsJson ;

// the item in html
let itemsInCart = document.querySelector(".items-in-cart");

// array of products
let productCart = [];

function addToCart(id, btn) {
  productCart.push(allProductsJson[id]);

  btn.classList.add("active");

  getCartItems();
  // console.log(productCart)
}

  // ele Total Num of Products To the Head Of Cart
let countItemsHead = document.querySelector(".count-items-head");

//  ele Total Price In HTML Head Of Cart
let priceCartHead = document.querySelector(".price-cart-head")

// ele Total Num of Products In Cart 
let countItemCart = document.querySelector(".count-item-cart");

// ele Total Price of Products In Cart
let priceCartTotal = document.querySelector(".price-cart-total");


// function To Add Items To Cart
function getCartItems() {
  let totalPrice = 0;
  let itemsC = "";
  for (let i = 0; i < productCart.length; i++) {
    itemsC += `
    
    <div class="item-cart">
      <img src="${productCart[i].img}" alt="">
      <div class="content">
      <h4>$${productCart[i].name}</h4>
      <p class="price-cart"> $ ${productCart[i].price} </p>
      </div>
      <button onclick = "removeFromCart(${i})" class="delete-item" >
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
    `;
    totalPrice += productCart[i].price;
  }
  //  Add Items in HTML
  itemsInCart.innerHTML = itemsC;

  // Add Total Num of Products To the Head Of Cart
  countItemsHead.innerHTML = productCart.length;

  // Add Total Price In HTML Head Of Cart
  priceCartHead.innerHTML = "$" + totalPrice;

  // Add Total Num of Products In Cart
  countItemCart.innerHTML = `( ${productCart.length} Item In Cart)`;

  // Add Total Price of Products In Cart
  priceCartTotal.innerHTML = "$" + totalPrice;
}

// function To Remove Items From Cart
function removeFromCart(index) {
  productCart.splice(index, 1);
  getCartItems();

  let addToCartButton = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < addToCartButton.length; i++) {
    addToCartButton[i].classList.remove("active");

    productCart.forEach((product) => {
      if (product.id === i) {
        addToCartButton[i].classList.add("active");
      }
    });
  }
}

// Back To Top
let backToTop = document.querySelector(".back-to-top");
backToTop.addEventListener ("click",function(){
  window.scrollTo({
    top : 0 ,
    behavior : "smooth"
  })
})



//   Items-details-Page 

 // change item-img
let bigImg = document.getElementById("big-img");

function changeItemImg(img){
  bigImg.src = img
}


  // // Login 
  // document.querySelector(".form-btn").onclick = function (){
  // // Prompt Window To Ask For Name
  // let yourName = prompt("What's Your Name");
  // }
