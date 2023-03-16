


$(document).ready(function () {
	$('#dismiss, .overlay').on('click', function () {
		$('.menu-icon').removeClass('active');
		$('#sidebar').removeClass('active');
		$('.overlay').removeClass('active');
	});
  
	$('.menu-icon').on('click', function () {
		$('#sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.menu-icon').addClass('active');
	});
});
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 18,
		dots: false,
		items: 4,
		autoplay: true,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		nav: true,
		responsiveClass: true,

responsive: {
0: {
  items: 1,
},
450: {
	items: 1,
},
600: {
  items: 3,
},
992: {
  items: 3,
},
1200: {
  items: 4,
}
}
	});

});
$(document).ready(function() {
	var lFollowX = 0,
		lFollowY = 0,
		x = 0,
		y = 0,
		friction = 1 / 30;
	
	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  
	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
	
	  $('.bg').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
	  });
	
	  window.requestAnimationFrame(moveBackground);
	}
	
	$(window).on('mousemove click', function(e) {
	
	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	  lFollowX = (30 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	  lFollowY = (15 * lMouseY) / 100;
	
	});
	
	moveBackground();
	});