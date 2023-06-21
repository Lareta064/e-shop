document.addEventListener("DOMContentLoaded", function (){
	/*=== показать скрытый список на карточке магащина по категориям */
	const shopCarCards = document.querySelectorAll('.shop-card');
	if (shopCarCards.length>0){
		for (let item of shopCarCards){
			const itemBtn = item.querySelector('.shop-card__btn');
			const itemList= item.querySelector('.shop-card__list');
			if (itemBtn){
				itemBtn.addEventListener('click', function(){
					itemList.classList.toggle('open');
				});
			}
		}
	};
	
});
