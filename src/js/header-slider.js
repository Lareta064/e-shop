/* */
document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;

	/*======= header slider =========== */
	const bannerSlider = $('.banner-slider');
	$(bannerSlider).slick({
		slidesToShow: 1, 
		infinite: true,
		fade: true,
		speed: 1000,
		dots: true,
		nextArrow: '<button class="slick-next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M10.2668 22.4001C10.1441 22.4005 10.0226 22.3766 9.90915 22.3298C9.79573 22.2831 9.6927 22.2143 9.60599 22.1275C9.43226 21.9515 9.33485 21.7141 9.33485 21.4667C9.33485 21.2194 9.43226 20.982 9.60599 20.8059L16.4268 14.0001L9.60599 7.19419C9.43073 7.01893 9.33228 6.78124 9.33228 6.53339C9.33228 6.28554 9.43073 6.04784 9.60599 5.87259C9.78124 5.69733 10.0189 5.59888 10.2668 5.59888C10.5146 5.59888 10.7523 5.69733 10.9276 5.87259L18.3943 13.3393C18.568 13.5153 18.6654 13.7527 18.6654 14.0001C18.6654 14.2474 18.568 14.4848 18.3943 14.6609L10.9276 22.1275C10.8409 22.2143 10.7378 22.2831 10.6244 22.3298C10.511 22.3766 10.3895 22.4005 10.2668 22.4001Z" fill="#191D23"/></svg></button>',

		prevArrow: '<button class="slick-prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M17.7333 22.4001C17.6106 22.4005 17.4891 22.3766 17.3757 22.3298C17.2623 22.2831 17.1592 22.2143 17.0725 22.1275L9.60585 14.6609C9.43212 14.4848 9.33472 14.2474 9.33472 14.0001C9.33472 13.7527 9.43212 13.5153 9.60585 13.3393L17.0725 5.87259C17.2478 5.69733 17.4855 5.59888 17.7333 5.59888C17.9812 5.59888 18.2189 5.69733 18.3941 5.87259C18.5694 6.04784 18.6678 6.28554 18.6678 6.53339C18.6678 6.78124 18.5694 7.01893 18.3941 7.19419L11.5733 14.0001L18.3941 20.8059C18.5679 20.982 18.6653 21.2194 18.6653 21.4667C18.6653 21.7141 18.5679 21.9515 18.3941 22.1275C18.3074 22.2143 18.2044 22.2831 18.091 22.3298C17.9776 22.3766 17.856 22.4005 17.7333 22.4001Z" fill="#191D23" /></button>',
	});
});