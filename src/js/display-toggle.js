const displayToggleBlock = document.querySelectorAll(".filtered-block");

if (displayToggleBlock.length >0){
	for (item of displayToggleBlock){
		const mainCardWrapper = item.querySelector(".filtered-block-content");
		const displayToggleButtons = item.querySelectorAll("[data-display]");
		console.log(displayToggleButtons);
		
		for (let i = 0; i < displayToggleButtons.length; i++){
			displayToggleButtons[i].addEventListener('click', function(){
				const thisData = displayToggleButtons[i].getAttribute('data-display');
				if (thisData == 'row'){
					mainCardWrapper.classList.remove('wrapper-table');
					mainCardWrapper.classList.add('wrapper-column');
					
				} 
				else if (thisData == 'grid'){
					mainCardWrapper.classList.remove('wrapper-table');
					mainCardWrapper.classList.remove('wrapper-column');
				}
				else{
					mainCardWrapper.classList.add('wrapper-table');
					mainCardWrapper.classList.add('wrapper-column');
				}
			});
		}
		window.addEventListener('resize',()=>{
			if(window.innerWidth <1200){
				mainCardWrapper.classList.remove('wrapper-table');
				mainCardWrapper.classList.remove('wrapper-column');
			}
		
		});
	}
	
}