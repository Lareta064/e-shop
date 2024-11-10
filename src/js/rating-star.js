/** */
document.addEventListener("DOMContentLoaded", function (){
	
	const starBlock = document.querySelectorAll('[data-rating]');
	let starCount = 5;
	if (starBlock.length > 0){
		for (item of starBlock){
			const itemSpanactive = item.querySelector('.stars-active');
			const itemSpanWidth = item.querySelector('.stars-passive').offsetWidth;
			const itemValue = item.getAttribute('data-rating');
			
			itemSpanactive.style.width = itemValue * itemSpanWidth / starCount +"px";
			
		}
	}
    /*  ==== отзывы о магазине, закрасить прогрессбар */
	const storeRatingBar = document.querySelectorAll('.store-card__bar');
	if (storeRatingBar.length > 0){
		for (let item of storeRatingBar){
			const itemProgressLine = item.querySelector('.store-card__bar-line span');
			const itemProgressLineVal = item.querySelector('[data-percent]');
			const itemProgressLineWidth = itemProgressLineVal.dataset.percent;
			
			itemProgressLine.style.width = `${itemProgressLineWidth}%`;
			
		}
	}

	/*===== закрасить звездочки по клику в модальном окне Написать отзыв о магазине */
	const starsGroups = document.querySelectorAll('.star-rating-group');
	if (starsGroups.length > 0){
		for (let item of starsGroups){
			const itemLabels = item.querySelectorAll('.star-rating-label');
			for (let i = 0; i < itemLabels.length; i++){
				itemLabels[i].addEventListener('click', function(e){
					e.stopPropagation();
					for (let j = 0; j < itemLabels.length; j++){
						itemLabels[j].querySelector('input').checked = (j <= i ? true : false);
					}
				})
			}
		}
	}
});
