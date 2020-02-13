//nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
		navLinks.classList.toggle('open');
		links.forEach(link => {
			link.classList.toggle('fade');
		});
});

//scrool
$(window).on("scroll", function(){
   if($(window).scrollTop()){
     $('nav').addClass('grey');
   }
   else{
    $('nav').removeClass('grey');
   }
})



//vegas-bg
$("body").vegas({
	delay: 4000,
    transition: 'zoomOut',
    slides: [
        { src: "/img/bg.jpg" },
        { src: "/img/bg1.jpg" },
        { src: "/img/bg2.jpg" },
        { src: "/img/bg3.jpg" },
    ],
     overlay: true,
     cover:true
});

//preloader
document.body.onload = function(){
	setTimeout(function(){
		let preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
	},100);
}

//product

document.querySelector('#sort-asc').onclick = function () {
    sortList('data-price');
}
document.querySelector('#sort-desc').onclick = function () {
    sortListDesc('data-price');
}
document.querySelector('#sort-rating').onclick = function () {
    sortListDesc('data-rating');
}

function sortList(sortType) {
    let items = document.querySelector('.product__wrap');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) > +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}

function sortListDesc(sortType) {
    let items = document.querySelector('.product__wrap');
    for (let i = 0; i < items.children.length - 1; i++) {
        for (let j = i; j < items.children.length; j++) {
            if (+items.children[i].getAttribute(sortType) < +items.children[j].getAttribute(sortType)) {
                console.log(1);
                let replacedNode = items.replaceChild(items.children[j], items.children[i]);
                insertAfter(replacedNode, items.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

//carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
        items:3,
      lazyLoad: true,
      autoplay:true,
      autoplayTimeout:1500,
      autoplayHoverPause:true,
        center:true,
        loop:true,
      margin:20,
      nav:true,
      navText: ['<i class="fas fa-chevron-circle-left"></i>','<i class="fas fa-chevron-circle-right"></i>'],
        autoHeight:true,
      smartSpeed:1150,
        responsive:{
          320:{
            items:1
          },
            600:{
            items:3
            }
        }
   })
});


//fetch

document.getElementById('list').addEventListener('click',fetchUserData);

function fetchUserData(){

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users =>{
    let output =  '<h2>List of Users</h2>';
    output += '<ul>';
    users.forEach(function(user)
    {
        output += `
        <li>
           ${user.name}
        </li>
        `;
    });
    output += '</ul>';
    document.getElementById("response").innerHTML = output;
  });
}

//modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlayModal')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



//buttot top

$(document).ready(function() {

  let btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 1400) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});


//add to cart

if(document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
   ready()
}

function ready(){
  let removeCart = document.getElementsByClassName('btn-danger');
  for(let i = 0;i < removeCart.length; i++){
    let button = removeCart[i]
    button.addEventListener('click', removeCartItem)
  }
  let quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for(let i = 0; i < quantityInputs.length; i++){
    let input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }
  let addToCartButtons = document.getElementsByClassName('shop-item-button')
  for(let i = 0; i < addToCartButtons.length; i++){
    let button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

  }

function purchaseClicked(){
  alert('Thank you for your purchase')
 let cartItems = document.getElementsByClassName('cart-items')[0]
 while(cartItems.hasChildNodes()){
  cartItems.removeChild(cartItems.firstChild)
 }
 updateCartTotal()
}

function quantityChanged(event){
  let input = event.target
  if(isNaN(input.value) || input.value <= 0){
      input.value =1
    }
    updateCartTotal()
}


function removeCartItem(event){
  let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
     updateCartTotal()
}

function addToCartClicked(event){
  let button = event.target
  let shopItem = button.parentElement.parentElement
 let price = shopItem.getElementsByClassName('cart-price')[0].innerText
 let imgCard = shopItem.getElementsByClassName('shop-img')[0].src
 addItemToCard(price,imgCard)
 updateCartTotal()
}

function addItemToCard(price,imgCard){
  let cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  let cartItems = document.getElementsByClassName ('cart-items')[0]
  let cartItemNames = cartItems.getElementsByClassName('cart-price')
  for (let i = 0; i < cartItemNames.length; i++){
    if(cartItemNames[i].innerText == price){
      alert('This item is already added to the cart')
      return
    }
  }
  let cartRowContents = `
  <div class="cart-item cart-column">
    <img class="cart-item-image " src="${imgCard}">
  </div>
  <span class="cart-price cart-column">${price}</span>
  <form class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">-</button>
  </form>
  `
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}




function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0]
  let cartRows = cartItemContainer.getElementsByClassName('cart-row')
  let total = 0
  for(let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i]
    let priceElement = cartRow.getElementsByClassName('cart-price')[0]
    let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
    [0]
    let price = parseFloat(priceElement.innerText.replace('$',''))
    let quantity = quantityElement.value
    total = total + (price * quantity)

  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = `$ ${total}`
}


