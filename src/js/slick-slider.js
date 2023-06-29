document.addEventListener("DOMContentLoaded", function () {

	Fancybox.bind("[data-fancybox]", {
		// Your custom options
	});
    /* слайдер  на странице одного продукта*/
	$('.double-slider-frame').slick({
		draggable: true,
		centerMode: true,
		swipeToSlide: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		initialSlide: 0,
		fade: true,
		adaptiveHeight: false,
		asNavFor: '.double-slider-nav'
	});

	$(".double-slider-nav").slick({
		vertical: true,
		focusOnSelect: true,
		asNavFor: '.double-slider-frame',
		adaptiveHeight: true,
		infinite: false,
		slidesToShow: 4,
		prevArrow: "<div class='btn-slick-prev-v'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 49' width='40' height='16'><path d=\"M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z\"></path></svg></div>",
		nextArrow: "<div class='btn-slick-next-v'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 49' width='40' height='16'><path d=\"M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z\"></path></svg></div>",
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
				vertical: false,
				prevArrow: "<div class='btn-slick-prev-h'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 49' width='15' height='24'><path d=\"M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z\"></path></svg></div>",
				nextArrow: "<div class='btn-slick-next-h'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 49' width='15' height='24'><path d=\"M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z\"></path></svg></div>",
			}
		},
		{
			breakpoint: 300,
			settings: { slidesToShow: 3 }
		}
		]
	});

});