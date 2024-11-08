document.addEventListener('DOMContentLoaded', function(){
	let pageTabs = document.querySelector('.custom-tabs');
	if(pageTabs){
		let tabsButtons = pageTabs.querySelectorAll('.tabs__nav-item');
		let tabsContents = pageTabs.querySelectorAll('.custom-tab__box');
		for(let i =0; i < tabsButtons.length; i++ ){
			tabsButtons[i].addEventListener('click', function(){
				for(let item of tabsButtons){
					item.classList.remove('active');
				}
				for(let item of tabsContents){
					item.classList.remove('active');
				}
				this.classList.add('active');
				let thisData = this.getAttribute('data-tab');
				for(let j=0; j<tabsContents.length; j++ ){
					let contentData = tabsContents[j].getAttribute('data-content');
					if(contentData == thisData ){
						tabsContents[j].classList.add('active');
					}
				}
			})
	
		}
	}
	// CUSTOM ACCORDION
	let accordionBlock = document.querySelector('.custom-accordion');
	if(accordionBlock){

		let accordionCardsHead = accordionBlock.querySelectorAll('button');
		let accordionCardsContent = accordionBlock.querySelectorAll('article');
		
		for(let i= 0; i < accordionCardsHead.length; i++){
		
			accordionCardsHead[i].addEventListener('click', function(e){
				
				let accordionBtnArr = accordionBlock.querySelectorAll('button');
				for(let item of accordionCardsHead){
					if(item !== e.target){
						item.setAttribute('data-state', 'hide');
						item.nextElementSibling.classList.remove('show');
						item.querySelector('.accordion-card-icon').classList.remove('rotate');
						
					}
					else{
						
						let thisAttrValue = item.getAttribute('data-state');
						let thisSibling = item.nextElementSibling;
						let accordHeadIcon = item.querySelector('.accordion-card-icon');
						if(thisAttrValue == 'hide'){
							item.setAttribute('data-state', 'show');
							thisSibling.classList.add('show');
							accordHeadIcon.classList.add('rotate');
						}
						else{
							item.setAttribute('data-state', 'hide');
							item.nextElementSibling.classList.remove('hide');
							thisSibling.classList.remove('show');
							accordHeadIcon.classList.remove('rotate');
						}
					}
				}
				
			});
		}
	}
})