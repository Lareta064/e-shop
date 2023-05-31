document.addEventListener("DOMContentLoaded", function (){
	
	const starBlock = document.querySelectorAll('[data-rating]');
	let starCount = 5;
	if (starBlock.length > 0){
		for (item of starBlock){
			const itemSpanactive = item.querySelector('.stars-active');
			const itemSpanWidth = item.querySelector('.stars-passive').offsetWidth;
			const itemValue = item.getAttribute('data-rating');
			console.log(itemSpanWidth);
			
			itemSpanactive.style.width = itemValue * itemSpanWidth / starCount +"px";
			console.log(itemSpanactive.style.width);
		}
	}
});
