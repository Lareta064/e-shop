/** */
const displayToggleBlock = document.querySelectorAll(".filtered-block");

if (displayToggleBlock.length >0){
	for (item of displayToggleBlock){
		const mainCardWrapper = item.querySelector(".filtered-block-content");
		const displayToggleButtons = item.querySelectorAll("[data-display]");
		console.log(displayToggleButtons);
		
		for (let i = 0; i < displayToggleButtons.length; i++){
			displayToggleButtons[i].addEventListener('click', function(){
				const thisData = displayToggleButtons[i].getAttribute('data-display');
				for (item of displayToggleButtons){
					item.classList.remove('active');
				}
				if (thisData == 'row'){
					mainCardWrapper.classList.remove('wrapper-table');
					mainCardWrapper.classList.add('wrapper-column');
					displayToggleButtons[i].classList.add('active');
				} 
				else if (thisData == 'grid'){
					mainCardWrapper.classList.remove('wrapper-table');
					mainCardWrapper.classList.remove('wrapper-column');
					displayToggleButtons[i].classList.add('active');
				}
				else if (thisData == 'table'){
					mainCardWrapper.classList.add('wrapper-table');
					mainCardWrapper.classList.add('wrapper-column');
					displayToggleButtons[i].classList.add('active');
				}
			});
		}
		/* при ресайзе экрана <1200  выстраиваем карточки в ряды и колонки, делаем активной кнопку переключения в grid */
		window.addEventListener('resize',()=>{
			if(window.innerWidth <1200){
				mainCardWrapper.classList.remove('wrapper-table');
				mainCardWrapper.classList.remove('wrapper-column');
				for (item of displayToggleButtons) {
					item.classList.remove('active');
					if (item.getAttribute('data-display')=='grid'){
						item.classList.add('active');
					}
				}
			}
		
		});
	}
	
}