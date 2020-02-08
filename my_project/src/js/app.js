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
        { src: "./img/bg.jpg" },
        { src: "./img/bg1.jpg" },
        { src: "./img/bg2.jpg" },
        { src: "./img/bg3.jpg" },
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
	},2000);
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


//buttot top

$(document).ready(function() {

  let btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
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
