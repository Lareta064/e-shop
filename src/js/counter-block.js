/** Счетчик количества **/

let plusBtn = $('.counter-decrease');
let minusBtn = $('.counter-increase');


plusBtn.on('click', function (e) {
	e.preventDefault()
	startCount = $(this).siblings('.counter-value').val();
	if (startCount < 20) {
		startCount = ++startCount;
		$(this).siblings('.counter-value').val(startCount);
		
	}

});

minusBtn.on('click', function (e) {
	e.preventDefault()
	startCount = $(this).siblings('.counter-value').val();
	if (startCount > 1) {
		startCount = --startCount;
		$(this).siblings('.counter-value').val(startCount);

	}
});