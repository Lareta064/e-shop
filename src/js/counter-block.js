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
/*----ВСПЛЫВАЮЩАЯ ПОДСКАЗКА TOOLTIP СТРАНИЦА ОФОРМЛЕНИЯ ЗАКАЗА----*/
const tooltip = document.querySelector('.tooltip-div');
const tooltipShowIcon = document.querySelector('.tooltip-icon');

if (tooltip) {
	const tooltipCloseIcon = tooltip.querySelector('.close-toooltip');
	tooltipShowIcon.addEventListener('click', function (e) {
		e.preventDefault();
		tooltip.classList.toggle('active');
	});
	tooltipCloseIcon.addEventListener('click', function (e) {
		e.preventDefault();
		tooltip.classList.remove('active');
	});
}