document.addEventListener("DOMContentLoaded", function (){

	const bodyEl=document.querySelector('body');
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
	const catalogMenu = document.getElementById('cat-menu');
	/*===== зафиксировать часть шапки по скроллу на экранах от 992пикс*/
	 window.addEventListener('scroll', function(){
		const headerFix = document.getElementById('header-fixed');
		if (headerFix){
			if(window.innerWidth >=992){
				
				
				if(window.pageYOffset > 170){
					headerFix.classList.add('header-fixed');
				}
				else{headerFix.classList.remove('header-fixed');}
			}
		}
	 });
	 /*  для второй версии шапки отслеживать пока слайдер не прокрутится */
	window.addEventListener('scroll', function () {
		const headerFixLong = document.getElementById('header-fix');
		if (headerFixLong){
			const headerFixLongCatalogy = document.querySelector('.catalog-menu-wrapper');
			if (window.innerWidth >= 1440 ) {
				

				if (window.pageYOffset > 800) {
					headerFixLong.classList.add('header-fixed');
					
					headerFixLongCatalogy.classList.remove('catalog-menu--visible');
					catalogMenu.classList.add('cat-menu--scroll');
				}
				else { 
					headerFixLong.classList.remove('header-fixed'); 
					headerFixLongCatalogy.classList.add('catalog-menu--visible');
					catalogMenu.classList.remove('cat-menu--scroll');
				}
			}
			if (window.innerWidth >= 992) {
				

				if (window.pageYOffset > 500) {
					headerFixLong.classList.add('header-fixed');
					headerFixLongCatalogy.classList.remove('catalog-menu--visible');
					catalogMenu.classList.add('cat-menu--scroll');
				}
				else {
					headerFixLong.classList.remove('header-fixed');
					headerFixLongCatalogy.classList.add('catalog-menu--visible');
					catalogMenu.classList.remove('cat-menu--scroll');
				}
			}
		}
	});
	/**====задать класс для пунктов меню Каталог товаров, у которых есть подменю */
	
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

	/* =====  показать вложенный .drop-block по клику на родит элемент .drop-open (корзина в шапке)  ===========  */
	const dropOpen = document.querySelectorAll('.drop-open');
	if(dropOpen.length >0){
		for(let drop of dropOpen){
			const dropContent = drop.querySelector('.drop-block');
			drop.addEventListener('click', (e)=>{
				e.preventDefault();
				if(!drop.classList.contains('drop-open--active')){
					dropContent.classList.add('visible');
					drop.classList.add('drop-open--active');
				}
				else{
					dropContent.classList.remove('visible');
					drop.classList.remove('drop-open--active');
				}
				
			});
			window.addEventListener('click', function(e){
				if(!e.target.closest('.drop-open')){
					dropContent.classList.remove('visible');
					drop.classList.remove('drop-open--active');
				}
			});
		}

	}
    
         /* =============== modal с атрибутом frame-modal ===============*/ 
    const modalFramesOpen = document.querySelectorAll('[frame-btn]');
    const modalFrames = document.querySelectorAll('[frame-modal]');
    if( modalFrames.length > 0){
      const modalFramesClose = document.querySelectorAll('[frame-close]');

      for(let item of modalFramesOpen){
        item.addEventListener('click', function(e){
          for(let item of  modalFrames){
            item.classList.remove('visible');
            
            bodyEl.classList.remove('lock');
          }
          e.preventDefault();
          const itemAttr = item.getAttribute('frame-btn');

          for(let frame of modalFrames){
            const frameAttr =frame.getAttribute('frame-modal');	
            if(frameAttr == itemAttr){
              frame.classList.add('visible');
              bodyEl.classList.add('lock');
			 
            }
          }
        });
      }
      /*==  закрыть модалки  frame-modal по клику на крестик ======*/
      for(let item of modalFramesClose){
        item.addEventListener('click', function(e){
          e.preventDefault();
          item.closest('[frame-modal]').classList.remove('visible');
          bodyEl.classList.remove('lock');
		  
		  
        });
      }
      /*=============== закрыть модалки по клику вне ===============*/
      for(let frame of modalFrames){
        frame.addEventListener('click', function(e){
          if(e.target === e.currentTarget){
            this.classList.remove(`visible`);
            bodyEl.classList.remove('lock');
          }
        });
      }
    }

	/*======= показать строку поиска на моб версии по клику на иконку */
	const openSearchMobile = document.querySelector('.header-search-open');
	if(openSearchMobile){
		 openSearchMobile.addEventListener('click', function(e){
			
			document.querySelector('.header-search-form').classList.toggle('open');
			
		 });
		
	}

});
