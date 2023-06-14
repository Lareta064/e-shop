document.addEventListener("DOMContentLoaded", function () {

	/*======= header slider =========== */
	const productsCarousel = $('.products-carousel');
	$(productsCarousel).owlCarousel({
		items: 2,
		loop: true,
		smartSpeed: 700,
		// autoplay: true,
		nav: true,
		dots:false,
		margin: 20,
		navText: [
			'<svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" fill="none" viewBox="0 0 5 9"><path fill="#000" fill-rule="evenodd" d="M1.935 4.209a.5.5 0 00.004.65l2.439 2.814a.5.5 0 01-.756.655L1.183 5.514a1.5 1.5 0 01-.01-1.952L3.618.677a.5.5 0 11.763.646L1.935 4.21z" clip-rule="evenodd"></path></svg>',
			'<svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" fill="none" viewBox="0 0 5 9"><path fill="#000" fill-rule="evenodd" d="M3.065 4.791a.5.5 0 00-.004-.65L.622 1.327a.5.5 0 01.756-.655l2.439 2.814a1.5 1.5 0 01.01 1.952L1.382 8.323a.5.5 0 11-.763-.646L3.065 4.79z" clip-rule="evenodd"></path></svg>'],
		responsive:{
			600:{
				items: 2	
			},

			992:{
					items: 3
				},
			1200:{
					items:4,
					margin:10
				},
			1500:{
				items: 5
			}
		}
	});
    
	const columnSliders = $('.column-slider');
	$(columnSliders).owlCarousel({
		items:1,
		nav:true,
		margin:10,
		smartSpeed:700,
		navSpeed:700,
		navText: [
			'<svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" fill="none" viewBox="0 0 5 9"><path fill="#000" fill-rule="evenodd" d="M1.935 4.209a.5.5 0 00.004.65l2.439 2.814a.5.5 0 01-.756.655L1.183 5.514a1.5 1.5 0 01-.01-1.952L3.618.677a.5.5 0 11.763.646L1.935 4.21z" clip-rule="evenodd"></path></svg>',
			'<svg xmlns="http://www.w3.org/2000/svg" width="5" height="9" fill="none" viewBox="0 0 5 9"><path fill="#000" fill-rule="evenodd" d="M3.065 4.791a.5.5 0 00-.004-.65L.622 1.327a.5.5 0 01.756-.655l2.439 2.814a1.5 1.5 0 01.01 1.952L1.382 8.323a.5.5 0 11-.763-.646L3.065 4.79z" clip-rule="evenodd"></path></svg>'],
		responsive: {
			600:{items:2},
			992: { items: 1 },
			1499: { margin: 20, }
		}
			
	});
	
});
