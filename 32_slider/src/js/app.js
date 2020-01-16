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
      stagePadding: 60,
      animateOut: true,
      animateIn: 'flipInX',
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

