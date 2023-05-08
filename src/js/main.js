document.addEventListener("DOMContentLoaded", function (){
	/*======= скрипт, что бы отображить блок с результатми поиска */
	const headerSearch = document.querySelector('.header-search-form');
	if(headerSearch){
		const inputElement = headerSearch.querySelector('INPUT');
		const resultsBlock = headerSearch.querySelector('.search-form-results');
		inputElement.addEventListener('keyup', function(){
			resultsBlock.style.visibility = 'visible';
		});
		window.addEventListener('click', function(e){
		
			if(!e.target.closest('.header-search-form')){
				resultsBlock.style.visibility = 'hidden';
			}
		});
	}	
	

	/**====задать класс для пунктов меню каталога, у которых есть выпадашки */
	const catalogMenu = this.getElementById('cat-menu');
	if(catalogMenu){
		const catalogMenuSub = catalogMenu.getElementsByClassName('catalog-menu-submenu');
		for(let i = 0; i < catalogMenuSub.length; i++){
			const thisParent = catalogMenuSub[i].closest('li');
			thisParent.classList.add('li-submemu');
		}
	}
	/** =============== custom select ===============*/
	const mySelectBlocks = Array.from(document.getElementsByClassName('mySelect'));
	if(mySelectBlocks.length > 0){
		mySelectBlocks.forEach((item, i) =>{
			const mySelect = item.querySelector('.mySelect-input');
			const mySelectInput = item.querySelector('.selectValue');
			let mySelectOptions = item.querySelectorAll('.mySelect-options');
			// const mySelectIcon = item.querySelector('.mySelect-icon');
			const mySelecDrop = item.querySelector('.mySelect-drop');

			mySelect.addEventListener('click', ()=>{
				
				if(mySelecDrop.classList.contains('active')){
					mySelecDrop.classList.remove('active');
					// mySelectIcon.classList.remove('active');
					mySelect.classList.remove('open');


				}else{
					mySelecDrop.classList.add('active');
					// mySelectIcon.classList.add('active');
					mySelect.classList.add('open');
				}

			});
			for(let item of mySelectOptions){
				item.addEventListener('click', ()=>{
					mySelecDrop.classList.remove('active');
					mySelect.classList.remove('open');
					if(mySelectInput){mySelectInput.value = item.value;}
					
					/*=== отметить иконкой выбранную категорию в фильтрах формы поиска в шапке======= */
					if(item.closest('.header-search-filters')){
						for(let j=0; j<mySelectOptions.length; j++){
							mySelectOptions[j].classList.remove('current-filter');
							item.classList.add('current-filter');
						}
					}

				});
			}
		});
		
	}
	
	// =============== выбор валюты в шапке =============
	const switchCurrency = document.querySelector('.switch-currency');
	if(switchCurrency){
		const thisDropOpen = switchCurrency.querySelector('.switch-currency__val');
		const thisInput = switchCurrency.querySelector('.currency-type');
		const thisCurrencyItems = switchCurrency.querySelectorAll('[data-currency]');
		
		thisDropOpen.addEventListener('click', (e)=>{
			switchCurrency.classList.add('open');
		});

		for(let i = 0; i < thisCurrencyItems.length; i++){
			thisCurrencyItems[i].addEventListener('click', (e)=>{
				const itemDataVal = thisCurrencyItems[i].getAttribute('data-currency');
				thisInput.textContent = itemDataVal;
				switchCurrency.classList.remove('open');
				
			});
		}
	}
	/*========== закрыть mySelect по клику вне ===========*/
	window.addEventListener('click', function(e){
		
		if(!e.target.closest('.switch-currency')){
			switchCurrency.classList.remove('open');
		}
		if (!e.target.closest('.mySelect')){
			const mySelectOpenBlocks = Array.from(document.getElementsByClassName('mySelect'));
			
			if(mySelectOpenBlocks.length > 0){
				mySelectOpenBlocks.forEach((item, i) =>{
					const mySelect = item.querySelector('.mySelect-input');
					const mySelectInput = item.querySelector('.selectValue');
					let mySelectOptions = item.querySelectorAll('.mySelect-options');
					// const mySelectIcon = item.querySelector('.mySelect-icon');
					const mySelecDrop = item.querySelector('.mySelect-drop');
					
					mySelecDrop.classList.remove('active');
					// mySelectIcon.classList.remove('active');
					mySelect.classList.remove('open');
				});
			}
		}
		
	});


});
