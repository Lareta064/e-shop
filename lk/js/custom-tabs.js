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