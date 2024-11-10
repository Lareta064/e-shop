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
				
				
				if(window.pageYOffset > 100){
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
				// e.preventDefault();
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

	/*======= header slider =========== */
	const bannerSlider = $('.banner-slider');
	$(bannerSlider).slick({
		slidesToShow: 1, 
		infinite: true,
		fade: true,
		speed: 1000,
		dots: true,
		nextArrow: '<button class="slick-next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M10.2668 22.4001C10.1441 22.4005 10.0226 22.3766 9.90915 22.3298C9.79573 22.2831 9.6927 22.2143 9.60599 22.1275C9.43226 21.9515 9.33485 21.7141 9.33485 21.4667C9.33485 21.2194 9.43226 20.982 9.60599 20.8059L16.4268 14.0001L9.60599 7.19419C9.43073 7.01893 9.33228 6.78124 9.33228 6.53339C9.33228 6.28554 9.43073 6.04784 9.60599 5.87259C9.78124 5.69733 10.0189 5.59888 10.2668 5.59888C10.5146 5.59888 10.7523 5.69733 10.9276 5.87259L18.3943 13.3393C18.568 13.5153 18.6654 13.7527 18.6654 14.0001C18.6654 14.2474 18.568 14.4848 18.3943 14.6609L10.9276 22.1275C10.8409 22.2143 10.7378 22.2831 10.6244 22.3298C10.511 22.3766 10.3895 22.4005 10.2668 22.4001Z" fill="#191D23"/></svg></button>',

		prevArrow: '<button class="slick-prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M17.7333 22.4001C17.6106 22.4005 17.4891 22.3766 17.3757 22.3298C17.2623 22.2831 17.1592 22.2143 17.0725 22.1275L9.60585 14.6609C9.43212 14.4848 9.33472 14.2474 9.33472 14.0001C9.33472 13.7527 9.43212 13.5153 9.60585 13.3393L17.0725 5.87259C17.2478 5.69733 17.4855 5.59888 17.7333 5.59888C17.9812 5.59888 18.2189 5.69733 18.3941 5.87259C18.5694 6.04784 18.6678 6.28554 18.6678 6.53339C18.6678 6.78124 18.5694 7.01893 18.3941 7.19419L11.5733 14.0001L18.3941 20.8059C18.5679 20.982 18.6653 21.2194 18.6653 21.4667C18.6653 21.7141 18.5679 21.9515 18.3941 22.1275C18.3074 22.2143 18.2044 22.2831 18.091 22.3298C17.9776 22.3766 17.856 22.4005 17.7333 22.4001Z" fill="#191D23" /></button>',
	});


	/*======= header slider =========== */
	const productsCarousel = $('.products-carousel');
	$(productsCarousel).slick({
		slidesToShow: 5,
		infinite: true,
		speed: 700,
		dots:false,
		
		nextArrow: '<button class="slick-next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M10.2668 22.4001C10.1441 22.4005 10.0226 22.3766 9.90915 22.3298C9.79573 22.2831 9.6927 22.2143 9.60599 22.1275C9.43226 21.9515 9.33485 21.7141 9.33485 21.4667C9.33485 21.2194 9.43226 20.982 9.60599 20.8059L16.4268 14.0001L9.60599 7.19419C9.43073 7.01893 9.33228 6.78124 9.33228 6.53339C9.33228 6.28554 9.43073 6.04784 9.60599 5.87259C9.78124 5.69733 10.0189 5.59888 10.2668 5.59888C10.5146 5.59888 10.7523 5.69733 10.9276 5.87259L18.3943 13.3393C18.568 13.5153 18.6654 13.7527 18.6654 14.0001C18.6654 14.2474 18.568 14.4848 18.3943 14.6609L10.9276 22.1275C10.8409 22.2143 10.7378 22.2831 10.6244 22.3298C10.511 22.3766 10.3895 22.4005 10.2668 22.4001Z" fill="#191D23"/></svg></button>',

		prevArrow: '<button class="slick-prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M17.7333 22.4001C17.6106 22.4005 17.4891 22.3766 17.3757 22.3298C17.2623 22.2831 17.1592 22.2143 17.0725 22.1275L9.60585 14.6609C9.43212 14.4848 9.33472 14.2474 9.33472 14.0001C9.33472 13.7527 9.43212 13.5153 9.60585 13.3393L17.0725 5.87259C17.2478 5.69733 17.4855 5.59888 17.7333 5.59888C17.9812 5.59888 18.2189 5.69733 18.3941 5.87259C18.5694 6.04784 18.6678 6.28554 18.6678 6.53339C18.6678 6.78124 18.5694 7.01893 18.3941 7.19419L11.5733 14.0001L18.3941 20.8059C18.5679 20.982 18.6653 21.2194 18.6653 21.4667C18.6653 21.7141 18.5679 21.9515 18.3941 22.1275C18.3074 22.2143 18.2044 22.2831 18.091 22.3298C17.9776 22.3766 17.856 22.4005 17.7333 22.4001Z" fill="#191D23" /></button>',
		responsive: [
			{
				breakpoint: 1499,
				settings: {
					slidesToShow: 4,
					
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,

				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow:1 ,

				}
			}
		]
	});

	const columnSliders = $('.column-slider');
	$(columnSliders).slick({
		slidesToShow: 1,
		
		speed:700,
		dots: false,
		
		nextArrow: '<button class="slick-next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M10.2668 22.4001C10.1441 22.4005 10.0226 22.3766 9.90915 22.3298C9.79573 22.2831 9.6927 22.2143 9.60599 22.1275C9.43226 21.9515 9.33485 21.7141 9.33485 21.4667C9.33485 21.2194 9.43226 20.982 9.60599 20.8059L16.4268 14.0001L9.60599 7.19419C9.43073 7.01893 9.33228 6.78124 9.33228 6.53339C9.33228 6.28554 9.43073 6.04784 9.60599 5.87259C9.78124 5.69733 10.0189 5.59888 10.2668 5.59888C10.5146 5.59888 10.7523 5.69733 10.9276 5.87259L18.3943 13.3393C18.568 13.5153 18.6654 13.7527 18.6654 14.0001C18.6654 14.2474 18.568 14.4848 18.3943 14.6609L10.9276 22.1275C10.8409 22.2143 10.7378 22.2831 10.6244 22.3298C10.511 22.3766 10.3895 22.4005 10.2668 22.4001Z" fill="#191D23"/></svg></button>',

		prevArrow: '<button class="slick-prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M17.7333 22.4001C17.6106 22.4005 17.4891 22.3766 17.3757 22.3298C17.2623 22.2831 17.1592 22.2143 17.0725 22.1275L9.60585 14.6609C9.43212 14.4848 9.33472 14.2474 9.33472 14.0001C9.33472 13.7527 9.43212 13.5153 9.60585 13.3393L17.0725 5.87259C17.2478 5.69733 17.4855 5.59888 17.7333 5.59888C17.9812 5.59888 18.2189 5.69733 18.3941 5.87259C18.5694 6.04784 18.6678 6.28554 18.6678 6.53339C18.6678 6.78124 18.5694 7.01893 18.3941 7.19419L11.5733 14.0001L18.3941 20.8059C18.5679 20.982 18.6653 21.2194 18.6653 21.4667C18.6653 21.7141 18.5679 21.9515 18.3941 22.1275C18.3074 22.2143 18.2044 22.2831 18.091 22.3298C17.9776 22.3766 17.856 22.4005 17.7333 22.4001Z" fill="#191D23" /></button>',
		
	});

	$('.aside-column-slider').slick({
		slidesToShow: 1,

		nextArrow: '<button class="slick-next"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M10.2668 22.4001C10.1441 22.4005 10.0226 22.3766 9.90915 22.3298C9.79573 22.2831 9.6927 22.2143 9.60599 22.1275C9.43226 21.9515 9.33485 21.7141 9.33485 21.4667C9.33485 21.2194 9.43226 20.982 9.60599 20.8059L16.4268 14.0001L9.60599 7.19419C9.43073 7.01893 9.33228 6.78124 9.33228 6.53339C9.33228 6.28554 9.43073 6.04784 9.60599 5.87259C9.78124 5.69733 10.0189 5.59888 10.2668 5.59888C10.5146 5.59888 10.7523 5.69733 10.9276 5.87259L18.3943 13.3393C18.568 13.5153 18.6654 13.7527 18.6654 14.0001C18.6654 14.2474 18.568 14.4848 18.3943 14.6609L10.9276 22.1275C10.8409 22.2143 10.7378 22.2831 10.6244 22.3298C10.511 22.3766 10.3895 22.4005 10.2668 22.4001Z" fill="#191D23"/></svg></button>',

		prevArrow: '<button class="slick-prev"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M17.7333 22.4001C17.6106 22.4005 17.4891 22.3766 17.3757 22.3298C17.2623 22.2831 17.1592 22.2143 17.0725 22.1275L9.60585 14.6609C9.43212 14.4848 9.33472 14.2474 9.33472 14.0001C9.33472 13.7527 9.43212 13.5153 9.60585 13.3393L17.0725 5.87259C17.2478 5.69733 17.4855 5.59888 17.7333 5.59888C17.9812 5.59888 18.2189 5.69733 18.3941 5.87259C18.5694 6.04784 18.6678 6.28554 18.6678 6.53339C18.6678 6.78124 18.5694 7.01893 18.3941 7.19419L11.5733 14.0001L18.3941 20.8059C18.5679 20.982 18.6653 21.2194 18.6653 21.4667C18.6653 21.7141 18.5679 21.9515 18.3941 22.1275C18.3074 22.2143 18.2044 22.2831 18.091 22.3298C17.9776 22.3766 17.856 22.4005 17.7333 22.4001Z" fill="#191D23" /></button>',
	})

    if ($('.container-module').length>0){
	 
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
	/* displayToggleBlock */
	const displayToggleBlock = document.querySelectorAll(".filtered-block");

	if (displayToggleBlock.length >0){
		for (item of displayToggleBlock){
			const mainCardWrapper = item.querySelector(".filtered-block-content");
			const displayToggleButtons = item.querySelectorAll("[data-display]");
			
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
	/** Счетчик количества **/

	let minusBtn = $('.counter-decrease');
	let plusBtn = $('.counter-increase');


	plusBtn.on('click', function (e) {
		e.preventDefault()
		startCount = $(this).siblings('.counter-value').val();
		startCount = ++startCount;
		$(this).siblings('.counter-value').val(startCount);
	});

	minusBtn.on('click', function (e) {
		e.preventDefault()
		startCount = $(this).siblings('.counter-value').val();
		if (startCount > 1) {
			startCount = --startCount;
			$(this).siblings('.counter-value').val(startCount);

		}
	});
	/*----ВСПЛЫВАЮЩАЯ ПОДСКАЗКА TOOLTIP СТРАНИЦА ОФОРМЛЕНИЯ ЗАКАЗА----*/
	const tooltip = document.querySelector('.tooltip-div');
	const tooltipShowIcon = document.querySelector('.tooltip-icon');

	if (tooltip) {
		const tooltipCloseIcon = tooltip.querySelector('.close-toooltip');
		tooltipShowIcon.addEventListener('click', function (e) {
			e.preventDefault();
			tooltip.classList.toggle('active');
		});
		tooltipCloseIcon.addEventListener('click', function (e) {
			e.preventDefault();
			tooltip.classList.remove('active');
		});
	}
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
	/*=== показать скрытый список на карточке магазина по категориям */
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
	}
		/* галерея на странице одного товара */
	Fancybox.bind('[data-fancybox]', {
		Toolbar: {
			display: {
				left: [""],
				middle: [""],
				right: ["close"],
			},
		},
		wheel: "slide",
	});
    
	/* слайдер  на странице одного продукта*/
	$('.double-slider-frame').slick({
		draggable: true,
		centerMode: true,
		swipeToSlide: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		initialSlide: 0,
		fade: true,
		adaptiveHeight: false,
		asNavFor: '.double-slider-nav'
	});

	$(".double-slider-nav").slick({
		vertical: true,
		focusOnSelect: true,
		asNavFor: '.double-slider-frame',
		adaptiveHeight: true,
		infinite: false,
		slidesToShow: 4,
		prevArrow: "<div class='btn-slick-prev-v'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 49' width='40' height='16'><path d=\"M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z\"></path></svg></div>",
		nextArrow: "<div class='btn-slick-next-v'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 49' width='40' height='16'><path d=\"M14.5824 24.2177L0.169802 1.64078C-0.133787 1.16522 -0.0203484 0.520408 0.43077 0.190628C0.896295 -0.149684 1.53586 -0.0208369 1.84885 0.469445L17 24.2034L1.85515 48.5205C1.54761 49.0143 0.909647 49.151 0.440354 48.8163C-0.0145324 48.4918 -0.134893 47.8483 0.163502 47.3692L14.5824 24.2177Z\"></path></svg></div>",
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 5,
				vertical: false,
				
				arrows: false
			}
		},
		{
			breakpoint: 300,
			settings: { slidesToShow: 3 }
		}
		]
	});
});