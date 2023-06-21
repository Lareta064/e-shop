document.addEventListener("DOMContentLoaded", function (){

	/*======= header slider =========== */
	const bannerSlider = $('.banner-slider');
	$(bannerSlider).owlCarousel({
		items: 1,
		loop:true,
		animateOut: 'fadeOut',
		smartSpeed:1000,
		autoplay:true,
		nav:true,
		
	});

});
