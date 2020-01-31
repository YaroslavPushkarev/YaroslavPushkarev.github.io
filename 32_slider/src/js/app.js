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

  function initMap() {
      const beetroot = {lat: 49.066589, lng: 33.413636};
      map = new google.maps.Map(document.getElementById('map'), {
        center: beetroot,
        zoom: 18,
        styles: mapStyles
      });
      var marker = new google.maps.Marker({
        position: beetroot,
        map: map,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png'
      });
    }
