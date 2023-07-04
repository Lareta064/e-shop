document.addEventListener("DOMContentLoaded", function (){
if ($('.container-module').length>0){
	console.log($('.container-module'));
		$('.container-module .tabs__active_line.mod_0').css({
			'width': $('.container-module .tabs__header__scroll .my-tabs#prodCatTab0 li.active').outerWidth(),
			'left': $('.container-module .tabs__header__scroll .my-tabs#prodCatTab0 li.active').offset().left - $('.container-module .tabs__header__scroll > .my-tabs#prodCatTab0').offset().left
			
		});
	
	
	$('.container-module .tabs__header__scroll .my-tabs#prodCatTab0 li a').click(function () {
		$('.container-module .tabs__active_line.mod_0').css({
			'width': $(this).outerWidth(),
			'left': $(this).parent().offset().left - $('.container-module .tabs__header__scroll > .my-tabs#prodCatTab0').offset().left
		});
		
		let width_block = $('.container-module .tabs__header__scroll').width();
		let li_width = $(this).outerWidth();
		let li_left = $(this).parent().offset().left - $('.container-module .tabs__header__scroll > .my-tabs#prodCatTab0').offset().left;
		let goLeft = li_left - (width_block / 2) + (li_width / 2);
		if (goLeft > 0) {
			$('.container-module .tabs__header__scroll').animate({ scrollLeft: goLeft })
		} else {
			$('.container-module .tabs__header__scroll').animate({ scrollLeft: 0 })
		}
	});
}	
	/*переключение контента у табов*/
	const customTabs = document.querySelectorAll('[custom-tabs]');
	if (customTabs.length > 0) {
		for (let item of customTabs) {

			const ctBtns = item.querySelectorAll('[data-tab]');
			const ctContents = item.querySelectorAll('[data-content]');

			for (let i = 0; i < ctBtns.length; i++) {
				ctBtns[i].addEventListener('click', function () {
					
					const thisData = this.getAttribute('data-tab');
					
					for (let content of ctContents) {
						content.classList.remove('tab-content--active');
						
						const contentData = content.getAttribute('data-content');
						if (contentData == thisData) {
							content.classList.add('tab-content--active');
						}
					}
					

				});
			}
		}
	}


});
