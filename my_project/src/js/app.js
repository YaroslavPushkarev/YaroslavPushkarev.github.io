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