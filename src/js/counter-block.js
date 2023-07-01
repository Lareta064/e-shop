/** Счетчик количества **/

let minusBtn = $('.counter-decrease');
let plusBtn = $('.counter-increase');


plusBtn.on('click', function (e) {
	e.preventDefault()
	startCount = $(this).siblings('.counter-value').val();
	startCount = ++startCount;
	$(this).siblings('.counter-value').val(startCount);
});

minusBtn.on('click', function (e) {
	e.preventDefault()
	startCount = $(this).siblings('.counter-value').val();
	if (startCount > 1) {
		startCount = --startCount;
		$(this).siblings('.counter-value').val(startCount);

	}
});