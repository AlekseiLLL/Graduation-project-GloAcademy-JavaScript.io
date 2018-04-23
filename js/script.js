/*jshint esversion: 6 */

// Скрипты должны начинать работу только после загрузки DOM

window.addEventListener( 'DOMContentLoaded',  function () {

// Модальное окно

	let overlay = document.getElementsByClassName( 'overlay' )[0],
		popup = document.getElementsByClassName( 'popup' )[0],
		popupBtn = document.getElementById( 'popup-btn' ),
		main = document.getElementsByClassName( 'main' )[0],
		custom = document.getElementsByClassName( 'custom' )[0],
		customInfo = custom.getElementsByClassName( 'custom-info' )[0],
		customChar = custom.getElementsByClassName( 'custom-char' )[0],
		customStyle = custom.getElementsByClassName( 'custom-style' )[0];

// Событие нажатия на кнопку в модальном окне
	popupBtn.addEventListener( 'click', function () {
		
	// Скрываем модальное окно, подложку и главный блок
		overlay.classList.add( 'hide' );
		popup.classList.add( 'hide' );
		main.classList.add( 'hide' );

	// Выводим на экран блок кастомизации
		custom.classList.add( 'flex' );
		customInfo.classList.add( 'block' );
		customChar.classList.add( 'block' );
		customStyle.classList.add( 'block' );
	});

//////////////////////////////////////////////////////

// Создание новой карточки кандидата

	let readyBtn = document.getElementById( 'ready' ),
		mainCard = document.getElementsByClassName('main-cards')[0],
		nameLabel = document.getElementsByTagName( 'label' )[0],
		ageLabel = document.getElementsByTagName( 'label' )[1],

	// Создаем блоки для карточки кандидана
		ourCandidate = document.createElement( 'div' ),
		ourCandidateBlock = document.createElement( 'div' ),
		ourCandidatePhoto = document.createElement( 'div' ),
		ourCandidateSkin = document.createElement( 'div' ),
		ourCandidateHair = document.createElement( 'div' ),
		ourCandidateClothes = document.createElement( 'div' ),
		ourCandidateShoes = document.createElement( 'div' ),
		ourCandidateResult = document.createElement( 'div' ),
		ourCandidateResultCount = document.createElement( 'div' ),
		ourCandidateProgress = document.createElement( 'div' ),
		ourCandidateProgressBar = document.createElement( 'div' ),
		ourCandidateName = document.createElement( 'div' ),
		ourCandidateAge = document.createElement( 'div' ),
		ourCandidateSex = document.createElement( 'div' ),
		ourCandidateViews = document.createElement( 'div' ),
		ourCandidateBio = document.createElement( 'div' );

// Добавляем нужные классы для блоков в карточке

	ourCandidate.classList.add( 'main-cards-item' );
	ourCandidateBlock.classList.add( 'candidate-block' );
	ourCandidatePhoto.classList.add( 'photo' );
	ourCandidatePhoto.classList.add( 'photo-3' );
	ourCandidateSkin.classList.add( 'person-skin' );
	ourCandidateHair.classList.add( 'person-hair' );
	ourCandidateShoes.classList.add( 'person-shoes' );
	ourCandidateClothes.classList.add( 'person-clothes' );
	ourCandidateResult.classList.add( 'result' );
	ourCandidateResultCount.classList.add( 'result-count' );
	ourCandidateProgress.classList.add( 'progress' );
	ourCandidateProgressBar.classList.add( 'progress-bar' );
	ourCandidateName.classList.add( 'name' );
	ourCandidateAge.classList.add( 'age' );
	ourCandidateSex.classList.add( 'sex' );
	ourCandidateViews.classList.add( 'views' );
	ourCandidateBio.classList.add( 'bio' );

	
	

// Создаем подписи для блоков карточки
	let sexLabel = document.createTextNode( 'Пол:' ),
		viewsLabel = document.createTextNode( 'Полит.взгляды:' ),
		bioLabel = document.createTextNode( 'Биография' ),

	// Считываем данные для нашего кандидата
		getCandidateName = document.getElementById( 'name' ),
		getCandidateAge = document.getElementById( 'age' ),
		getCandidateSex = document.getElementsByName( 'sex' ),
		getCandidateViews =  document.getElementById( 'select' ),
		getCandidateBio = document.getElementById( 'bio' );

// Стандартные данные кандидата
	getCandidateName.value = '';
	getCandidateAge.value = '';
	getCandidateSex[0].checked = true;
	getCandidateViews.value = 'Либеральные';
	getCandidateBio.value = '';
	
// Имя кандидата

	getCandidateName.addEventListener( 'keyup', function () {
		
	// Регулярное выражения для ввода имени кандидата
		let regExpName = /[А-яЁё\s]$/i;
	// Проверка на соответствие регулярному выражению
		if ( getCandidateName.value.match( regExpName )) {
		// Длина строки не больше 50 символов
			if ( getCandidateName.value.length < 50 ) {
			// Записываем значения в карточку кандидата
				ourCandidateName.textContent = getCandidateName.value;
				getCandidateName.style.border = '2px solid rgba(31, 140, 226, 0.8)';
				nameLabel.textContent = 'Фамилия Имя Отчество';

			} else {
			// Удаляем последний символ, если он не соответствует условию
				getCandidateName.value = getCandidateName.value.substring( 0, getCandidateName.value.length - 1 );
				nameLabel.textContent = 'Имя должно быть введено кириллицой';
			}  
		} else {
		// Удаляем последний символ, если он не соответствует условию
			getCandidateName.value = getCandidateName.value.substring( 0, getCandidateName.value.length - 1 );
			nameLabel.textContent = 'Имя должно быть введено кириллицой';
		}
	});

// Возраст кандидата

	getCandidateAge.addEventListener( 'keyup', function () {

	// Регулярное выражения для ввода возраста кандидата
		let regExpName = /[0-9]$/i;
	// Проверка на соответствие регулярному выражению
		if ( getCandidateAge.value.match( regExpName )) {
		// Длина строки не больше 2 символов
			if ( getCandidateAge.value.length < 3 ) {
			// Записываем значения в карточку кандидата
				ourCandidateAge.textContent = getCandidateAge.value + ' лет';
				getCandidateAge.style.border = '2px solid rgba(31, 140, 226, 0.8)';
				ageLabel.textContent = 'Возраст, лет';
			} else {
			// Удаляем последний символ, если он не соответствует условию
				getCandidateAge.value = getCandidateAge.value.substring( 0, getCandidateAge.value.length - 1 );
				ageLabel.textContent = 'Возраст должен быть от 35 до 80 лет';
			}  
		} else {
		// Удаляем последний символ, если он не соответствует условию
			getCandidateAge.value = getCandidateAge.value.substring( 0, getCandidateAge.value.length - 1 );
			ageLabel.textContent = 'Возраст должен быть от 35 до 80 лет';
		}
	});

// Биография кандидата

	getCandidateBio.addEventListener( 'keyup', function () {

	// Регулярное выражения для ввода биографии кандидата
		let regExpName = /[А-яЁё0-9\s\.\,\-\«\»]$/i;

	// Проверка на соответствие регулярному выражению
		if ( getCandidateBio.value.match( regExpName )) {
		// Длина строки не больше 250 символов
			if ( getCandidateBio.value.length < 250 ) {
			// Записываем значения в карточку кандидата
				ourCandidateBio.textContent = getCandidateBio.value;
				getCandidateBio.style.border = '2px solid rgba(31, 140, 226, 0.8)';
			} else {
			// Удаляем последний символ, если он не соответствует условию
				getCandidateBio.value = getCandidateBio.value.substring( 0, getCandidateBio.value.length - 1 );
			}  
		} else {
		// Удаляем последний символ, если он не соответствует условию
			getCandidateBio.value = getCandidateBio.value.substring( 0, getCandidateBio.value.length - 1 );
		}
	});

//////////////////////////////////////////////////////

// Тип тела ( Мужской / Женский )

	let personSkin = document.getElementsByClassName( 'person-skin' )[0],
		personHair = document.getElementsByClassName( 'person-hair' )[0],
		personClothes = document.getElementsByClassName( 'person-clothes' )[0],
		personShoes = document.getElementsByClassName( 'person-shoes' )[0],
		maleRadio = document.getElementById( 'male' ),
		femaleRadio = document.getElementById( 'female' ),
		skinSlides = document.getElementsByClassName( 'skin-color' ),
		hairSlides = document.getElementsByClassName( 'hair-style' ),
		clothesSlides = document.getElementsByClassName( 'clothes-style' ),

		skinSlideIndex = 1,
		hairSlideIndex = 1,
		clothesSlideIndex = 1,

	// Картинки для конструктора
		skinMale1 = function () {
			personSkin.style.background = 'url("img/skin/skin-1.png") center no-repeat';
			personSkin.style.backgroundSize = 'cover';
		},
		skinMale2 = function () {
			personSkin.style.background = 'url("img/skin/skin-2.png") center no-repeat';
			personSkin.style.backgroundSize = 'cover';
		},
		skinMale3 = function () {
			personSkin.style.background = 'url("img/skin/skin-3.png") center no-repeat';
			personSkin.style.backgroundSize = 'cover';
		},

		skinFemale1 = function () {
			personSkin.style.background = 'url("img/skin/skin-4.png") center no-repeat';
			personSkin.style.backgroundSize = 'cover';
		},
		skinFemale2 = function () {
			personSkin.style.background = 'url("img/skin/skin-5.png") center no-repeat';
			personSkin.style.backgroundSize = 'cover';
		},
		skinFemale3 = function () {
			personSkin.style.background = 'url("img/skin/skin-6.png") center no-repeat';
			personSkin.style.backgroundSize = 'cover';
		},

		hairMale1 = function () {
			personHair.style.background = 'url("img/hair/construct/hair-1.png") center no-repeat';
			personHair.style.backgroundSize = 'cover';
		},
		hairMale2 = function () {
			personHair.style.background = 'url("img/hair/construct/hair-2.png") center no-repeat';
			personHair.style.backgroundSize = 'cover';
		},
		hairMale3 = function () {
			personHair.style.background = 'url("img/hair/construct/hair-3.png") center no-repeat';
			personHair.style.backgroundSize = 'cover';
		},

		hairFemale1 = function () {
			personHair.style.background = 'url("img/hair/construct/hair-4.png") center no-repeat';
			personHair.style.backgroundSize = 'cover';
		},
		hairFemale2 = function () {
			personHair.style.background = 'url("img/hair/construct/hair-5.png") center no-repeat';
			personHair.style.backgroundSize = 'cover';
		},
		hairFemale3 = function () {
			personHair.style.background = 'url("img/hair/construct/hair-6.png") center no-repeat';
			personHair.style.backgroundSize = 'cover';
		},
      
		clothesMale1 = function () {
			personClothes.style.background = 'url("img/clothes/construct/clothes-1.png") center no-repeat';
			personClothes.style.backgroundSize = 'cover';
    },
		clothesMale2 = function () {
			personClothes.style.background = 'url("img/clothes/construct/clothes-2.png") center no-repeat';
			personClothes.style.backgroundSize = 'cover';
		},
		clothesMale3 = function () {
			personClothes.style.background = 'url("img/clothes/construct/clothes-3.png") center no-repeat';
			personClothes.style.backgroundSize = 'cover';
		},

		clothesFemale1 = function () {
			personClothes.style.background = 'url("img/clothes/construct/clothes-4.png") center no-repeat';
			personClothes.style.backgroundSize = 'cover';
		},
		clothesFemale2 = function () {
			personClothes.style.background = 'url("img/clothes/construct/clothes-5.png") center no-repeat';
			personClothes.style.backgroundSize = 'cover';
		},
		clothesFemale3 = function () {
			personClothes.style.background = 'url("img/clothes/construct/clothes-6.png") center no-repeat';
			personClothes.style.backgroundSize = 'cover';
		},

	// Массивы с картинками для конструктора
		skinArrMale = [skinMale1, skinMale2, skinMale3],
		skinArrFemale = [skinFemale1, skinFemale2, skinFemale3],
		hairArrMale = [hairMale1, hairMale2, hairMale3],
		hairArrFemale = [hairFemale1, hairFemale2, hairFemale3],
		clothesArrMale = [clothesMale1, clothesMale2, clothesMale3],
		clothesArrFemale = [clothesFemale1, clothesFemale2, clothesFemale3];

// Начальные настройки ботинок
	personShoes.style.background = 'url("img/shoes/shoes-1.png") center no-repeat';
	personShoes.style.backgroundSize = 'cover';

// Событие при выборе мужского пола
	maleRadio.addEventListener( 'click', function () {
		personSkin.style.background = 'url("img/skin/skin-1.png") center no-repeat';
		personSkin.style.backgroundSize = 'cover';
		personHair.style.background = 'url("img/hair/construct/hair-1.png") center no-repeat';
		personHair.style.backgroundSize = 'cover';
		personClothes.style.background = 'url("img/clothes/construct/clothes-1.png") center no-repeat';
		personClothes.style.backgroundSize = 'cover';
		personShoes.style.background = 'url("img/shoes/shoes-1.png") center no-repeat';
		personShoes.style.backgroundSize = 'cover';

	// Базовые настройки слайдера при выборе пола кандидата
		
		for ( let i = 0; i < skinSlides.length; i++ ) {
			skinSlides[i].style.display = 'none';
		}
		skinSlides[0].style.display = 'block';

		for ( let i = 0; i < hairSlides.length; i++ ) {
			hairSlides[i].style.display = 'none';
		}
		hairSlides[0].style.display = 'block';
		
		for ( let i = 0; i < clothesSlides.length; i++ ) {
			clothesSlides[i].style.display = 'none';
		}
		clothesSlides[0].style.display = 'block';

		skinSlideIndex = 1;
		hairSlideIndex = 1;
		clothesSlideIndex = 1;
	});

// Событие при выборе женского пола
	femaleRadio.addEventListener( 'click', function () {
		personSkin.style.background = 'url("img/skin/skin-4.png") center no-repeat';
		personSkin.style.backgroundSize = 'cover';
		personHair.style.background = 'url("img/hair/construct/hair-4.png") center no-repeat';
		personHair.style.backgroundSize = 'cover';
		personClothes.style.background = 'url("img/clothes/construct/clothes-4.png") center no-repeat';
		personClothes.style.backgroundSize = 'cover';
		personShoes.style.background = 'url("img/shoes/shoes-2.png") center no-repeat';
		personShoes.style.backgroundSize = 'cover';

	// Базовые настройки слайдера при выборе пола кандидата
		for ( let i = 0; i < skinSlides.length; i++ ) {
			skinSlides[i].style.display = 'none';
		}
		skinSlides[0].style.display = 'block';

		for ( let i = 0; i < hairSlides.length; i++ ) {
			hairSlides[i].style.display = 'none';
		}
		hairSlides[3].style.display = 'block';

		for ( let i = 0; i < clothesSlides.length; i++ ) {
			clothesSlides[i].style.display = 'none';
		}
		clothesSlides[3].style.display = 'block';

		skinSlideIndex = 1;
		hairSlideIndex = 4;
		clothesSlideIndex = 4;
	});


// Слайдеры

// Слайдер с выбором цвета кожи 

	let prev = document.getElementsByClassName( 'prev' ),
		next = document.getElementsByClassName( 'next' );

	showSkinSlides( skinSlideIndex );

	function showSkinSlides ( n ) {
		
	// Цвет кожи мужчин
		if ( getCandidateSex[0].checked ) {
			if ( n > skinSlides.length ) {
				skinSlideIndex = 1;
			}
			if ( n < 1 ) {
				skinSlideIndex = skinSlides.length;
			}
			for ( let i = 0; i < skinSlides.length; i++ ) {
				skinSlides[i].style.display = 'none';
			}
			skinSlides[skinSlideIndex - 1].style.display = 'block';
			skinArrMale[skinSlideIndex - 1]();
		}

	// Цвет кожи женщин
		if ( getCandidateSex[1].checked ) {
			if ( n > skinSlides.length ) {
				skinSlideIndex = 1;
			}
			if ( n < 1 ) {
				skinSlideIndex = skinSlides.length;
			}
			for ( let i = 0; i < skinSlides.length; i++ ) {
				skinSlides[i].style.display = 'none';
			}
			skinSlides[skinSlideIndex - 1].style.display = 'block';
			skinArrFemale[skinSlideIndex - 1]();
		}
	}

	function plussSkinSlides ( n ) {
		showSkinSlides( skinSlideIndex += n );
	}

	prev[0].addEventListener ('click', function () { 
		plussSkinSlides(-1);
	});
	next[0].addEventListener( 'click', function () {
		plussSkinSlides(1);
	});

// Слайдер с выбором прически	

	showHairSlides( hairSlideIndex );

	function showHairSlides ( n ) {

	// Прически мужчин
		if ( getCandidateSex[0].checked ) {
			if ( n > hairSlides.length - 3 ) {
				hairSlideIndex = 1;
			}
			if ( n < 1 ) {
				hairSlideIndex = hairSlides.length - 3;
			}
			for ( let i = 0; i < hairSlides.length; i++ ) {
				hairSlides[i].style.display = 'none';
			}
			hairSlides[hairSlideIndex - 1].style.display = 'block';
			hairArrMale[hairSlideIndex - 1]();
		}

	// Прически женщин
		if ( getCandidateSex[1].checked ) {
			if ( n > hairSlides.length ) {
				hairSlideIndex = 4;
			}
			if ( n < 4 ) {
				hairSlideIndex = hairSlides.length;
			}
			for ( let i = 0; i < hairSlides.length; i++ ) {
				hairSlides[i].style.display = 'none';
			}
			hairSlides[hairSlideIndex - 1].style.display = 'block';
			hairArrFemale[hairSlideIndex - 1 - 3]();
		}	
	}
	function plussHairSlides ( n ) {
		showHairSlides( hairSlideIndex += n );
	}
	prev[1].addEventListener ( 'click', function () {
		plussHairSlides(-1);
	});
	next[1].addEventListener( 'click', function () {
		plussHairSlides(1);
	});

// Слайдер с выбором одежды
	
	showClothesSlides( clothesSlideIndex );

	function showClothesSlides ( n ) {

	// Одежда мужчин
		if ( getCandidateSex[0].checked ) {
			if ( n > clothesSlides.length - 3 ) {
				clothesSlideIndex = 1;
			}
			if ( n < 1 ) {
				clothesSlideIndex = clothesSlides.length - 3;
			}
			for ( let i = 0; i < clothesSlides.length; i++ ) {
				clothesSlides[i].style.display = 'none';
			}
			clothesSlides[clothesSlideIndex - 1].style.display = 'block';
			clothesArrMale[clothesSlideIndex - 1]();
		}

	// Одежда женщин
		if ( getCandidateSex[1].checked ) {
			if ( n > clothesSlides.length ) {
				clothesSlideIndex = 4;
			}
			if ( n < 4 ) {
				clothesSlideIndex = clothesSlides.length;
			}
			for ( let i = 0; i < clothesSlides.length; i++ ) {
				clothesSlides[i].style.display = 'none';
			}
			clothesSlides[clothesSlideIndex - 1].style.display = 'block';
			ourCandidateClothes = clothesArrFemale[clothesSlideIndex - 1 - 3]();
		}
		
	}
	function plussClothesSlides ( n ) {
		showClothesSlides( clothesSlideIndex += n );
	}
	prev[2].addEventListener ( 'click', function () {
		plussClothesSlides(-1);
	});
	next[2].addEventListener( 'click', function () {
		plussClothesSlides(1);
	});




//////////////////////////////////////////////////////

// Обнуление результатов

	let firstCandidateResultCount = document.getElementsByClassName( 'result-count' )[0],
		secondCandidateResultCount = document.getElementsByClassName( 'result-count' )[1],
		firstCandidateProgressBar = document.getElementsByClassName( 'progress-bar-1' )[0],
		secondCandidateProgressBar = document.getElementsByClassName( 'progress-bar-2' )[0],
		firstCandidate = document.getElementsByClassName( 'main-cards-item' )[0],
		secondCandidate = document.getElementsByClassName( 'main-cards-item' )[1];

// Событие для кнопки Готово

	readyBtn.addEventListener( 'click', function () {
		
		// Пол кандидата
		if ( getCandidateSex[0].checked ) {
			ourCandidateSex.textContent = 'Мужской';
		} else if ( getCandidateSex[1].checked ) {
			ourCandidateSex.textContent = 'Женский';
		}

		// Взгляды кандидата
		if ( getCandidateViews.value === 'Либеральные' ) {
			ourCandidateViews.textContent = 'Либеральные';
		} else if ( getCandidateViews.value === 'Левые' ) {
			ourCandidateViews.textContent = 'Левые';
		} else if ( getCandidateViews.value === 'Правые' ) {
			ourCandidateViews.textContent = 'Правые';
		}

		// Контрольные проверки данных

		// Проверки на пустоту и пробел в поле имени кандидата
		if ( getCandidateName.value.length == '' || getCandidateName.value.length == ' ' ) {
			getCandidateName.style.border = '2px solid red';
		// Проверки на пустоту и границы возраста
		} else if ( getCandidateAge.value == '' || (( getCandidateAge.value - 0) < 35) || (( getCandidateAge.value - 0 ) > 80 )) {
			getCandidateAge.style.border = '2px solid red';
			ageLabel.textContent = 'Возраст должен быть от 35 до 80 лет';
		// Проверки на пустоту в поле биографии кандидата
		} else if ( getCandidateBio.value == '' ) {
			getCandidateBio.style.border = '2px solid red';
		} else {

		// Присваиваем переменным значения с конструктора
			ourCandidateSkin = personSkin;
			ourCandidateHair = personHair;
			ourCandidateClothes = personClothes;
			ourCandidateShoes = personShoes;

		// Положение кандидата на странице
			ourCandidateSkin.style.left = '81.6%';
			ourCandidateHair.style.left = '81.6%';
			ourCandidateClothes.style.left = '81.6%';
			ourCandidateShoes.style.left = '81.6%';

		// Убираем блок кастомизации
			custom.classList.remove( 'flex' );

		// Добавляем главный блок на страницу
			main.classList.remove( 'hide' );
			
		// Выводим созданные и заполненные блоки для карточки кандидата
			mainCard.appendChild( ourCandidate ) ;
			ourCandidate.appendChild( ourCandidateBlock );
			ourCandidateBlock.appendChild( ourCandidatePhoto );
			ourCandidatePhoto.appendChild( ourCandidateSkin );
			ourCandidatePhoto.appendChild( ourCandidateHair );
			ourCandidatePhoto.appendChild( ourCandidateClothes );
			ourCandidatePhoto.appendChild( ourCandidateShoes );
			ourCandidateBlock.appendChild( ourCandidateResult );
			ourCandidateResult.appendChild( ourCandidateResultCount );
			ourCandidateResult.appendChild( ourCandidateProgress );
			ourCandidateProgress.appendChild( ourCandidateProgressBar );
			ourCandidate.appendChild( ourCandidateName );
			ourCandidate.appendChild( ourCandidateAge );
			ourCandidate.appendChild( ourCandidateSex );
			ourCandidate.appendChild( ourCandidateViews );
			ourCandidate.appendChild( ourCandidateBio );

		// Выводим подписи на карточку кандидата
			ourCandidate.insertBefore( sexLabel, ourCandidateSex );
			ourCandidate.insertBefore( viewsLabel, ourCandidateViews );
			ourCandidate.insertBefore( bioLabel, ourCandidateBio );
			

		// Обнуляем значения
			firstCandidateResultCount.textContent = '0%';
			secondCandidateResultCount.textContent = '0%';
			firstCandidateProgressBar.style.height = '0px';
			secondCandidateProgressBar.style.height = '0px';
			ourCandidateResultCount.textContent = '0%';
			secondCandidate.classList.remove( 'main-cards-item-active' );
		 }
	});
////////////////////////////////////////////////////////////////////////////////////////////
// Сбросить результаты
	let reset = document.getElementById( 'reset' ),
		person = document.getElementsByClassName( 'person' )[0],
		skinMale0 = function () {
			personSkin.style.background = 'url("img/skin/skin-1.png") center no-repeat';
			personSkin.style.backgroundSize = 'cover';
		},
		hairMale0 = function () {
			personHair.style.background = 'url("img/hair/construct/hair-1.png") center no-repeat';
			personHair.style.backgroundSize = 'cover';
		},
		clothesMale0 = function () {
			personClothes.style.background = 'url("img/clothes/construct/clothes-1.png") center no-repeat';
			personClothes.style.backgroundSize = 'cover';
		},
		shoesMale0 = function () {
			personShoes.style.background = 'url("img/shoes/shoes-1.png") center no-repeat';
			personShoes.style.backgroundSize = 'cover';
		};


	reset.addEventListener( 'click', function () {

	// Убираем главный блок на страницу
		main.classList.add( 'hide' );

	// Выводим на экран блок кастомизации
		custom.classList.add( 'flex' );
		customInfo.classList.add( 'block' );
		customChar.classList.add( 'block' );
		customStyle.classList.add( 'block' );

	// Базовые данные кандидата
		getCandidateName.value = '';
		getCandidateAge.value = '';
		getCandidateSex[0].checked = true;
		getCandidateViews.value = 'Либеральные';
		getCandidateBio.value = '';

	// Базовые настройки слайдера 
		for ( let i = 0; i < skinSlides.length; i++ ) {
			skinSlides[i].style.display = 'none';
		}
		skinSlides[0].style.display = 'block';

		for ( let i = 0; i < hairSlides.length; i++ ) {
			hairSlides[i].style.display = 'none';
		}
		hairSlides[0].style.display = 'block';
		
		for ( let i = 0; i < clothesSlides.length; i++ ) {
			clothesSlides[i].style.display = 'none';
		}
		clothesSlides[0].style.display = 'block';
		skinSlideIndex = 1;
		hairSlideIndex = 1;
		clothesSlideIndex = 1;

	// Базовые настройки вида кандидата в конструкторе	
		personSkin.style.background = 'url("img/skin/skin-1.png") center no-repeat';
		personSkin.style.backgroundSize = 'cover';
		personHair.style.background = 'url("img/hair/construct/hair-1.png") center no-repeat';
		personHair.style.backgroundSize = 'cover';
		personClothes.style.background = 'url("img/clothes/construct/clothes-1.png") center no-repeat';
		personClothes.style.backgroundSize = 'cover';
		personShoes.style.background = 'url("img/shoes/shoes-1.png") center no-repeat';
		personShoes.style.backgroundSize = 'cover';

	// Базовые настройки вида кандидата
		skinMale0();
		hairMale0();
		clothesMale0();
		shoesMale0();

	// Положение кандидата на странице кастомизации
		personSkin.style.left = '50%';
		personHair.style.left = '50%';
		personClothes.style.left = '50%';
		personShoes.style.left = '50%';

	// Отображение кандидата в конструкоре
		person.appendChild( personSkin );
		person.appendChild( personHair );
		person.appendChild( personClothes );
		person.appendChild( personShoes );

		firstCandidate.classList.remove( 'main-cards-item-active' );
		secondCandidate.classList.remove( 'main-cards-item-active' );
		ourCandidate.classList.remove( 'main-cards-item-active' );
	});

////////////////////////////////////////////////////////////////////////////////////////////
	
	// Провести выборы

	let voting = document.getElementById( 'voting' ),
		resultCounts = [firstCandidateResultCount, secondCandidateResultCount, ourCandidateResultCount],
		progressBars = [firstCandidateProgressBar, secondCandidateProgressBar, ourCandidateProgressBar];
		

	voting.addEventListener( 'click', function () {

		firstCandidate.classList.remove( 'main-cards-item-active' );
		secondCandidate.classList.remove( 'main-cards-item-active' );
		ourCandidate.classList.remove( 'main-cards-item-active' );

		// Рандом

	// Определяем победителя 
		let winner = Math.floor( Math.random() * ( 3 - 1 + 1 )) + 1,
	// Ищем его рандомный процент больше 50, чтобы кандидата засчитали избранным
			persentRandWinner = Math.floor( Math.random() * ( 100 - 50 + 1 )) + 50;
	// Если победил кандидат под номером 1
		if ( winner === 1 ) {
		// То считаем кто занял второе место с двух оставшихся
			let secondPlace = Math.floor(Math.random() * ( 2 - 1 + 1 )) + 1,
		// Считаем процент для второго места
				persentRandSecondPlace = Math.floor( Math.random() * (( 100 - persentRandWinner ) - 0 + 1 )) + 0;
		// Записываем результат в карточу победителя
			resultCounts[0].textContent = persentRandWinner + '%';
			progressBars[0].style.height = persentRandWinner + '%';
			firstCandidate.classList.add( 'main-cards-item-active' );
		// Если второе место занял кандидат под номером 2
			if ( secondPlace === 1 ) {
			// Считаем оставшийся процент
				let persentThirdPlace = Math.floor(( 100 - persentRandWinner) - persentRandSecondPlace );
			// Записываем результат в карточку кандидата, занявшего второе место	
				resultCounts[1].textContent = persentRandSecondPlace + '%';
				progressBars[1].style.height = persentRandSecondPlace + '%';
			// Присваиваем кандидату под номером 3 оставшийся процент 
				resultCounts[2].textContent = persentThirdPlace + '%';
				progressBars[2].style.height = persentThirdPlace + '%';
			} else if ( secondPlace === 2 ) {
			// Считаем оставшийся процент
				let persentThirdPlace = Math.floor(( 100 - persentRandWinner) - persentRandSecondPlace );
			// Записываем результат в карточку кандидата, занявшего второе место		
				resultCounts[2].textContent = persentRandSecondPlace + '%';
				progressBars[2].style.height = persentRandSecondPlace + '%';
			// Присваиваем кандидату под номером 2 оставшийся процент 
				resultCounts[1].textContent = persentThirdPlace + '%';
				progressBars[1].style.height = persentThirdPlace + '%';
			}
	// Если победил кандидат под номером 2
		} else if ( winner === 2 ) {
		// То считаем кто занял второе место с двух оставшихся
			let secondPlace = Math.floor( Math.random() * ( 2 - 1 + 1 )) + 1,
		// Считаем процент для второго места
				persentRandSecondPlace = Math.floor( Math.random() * (( 100 - persentRandWinner ) - 0 + 1 )) + 0;
		// Записываем результат в карточу победителя
			resultCounts[1].textContent = persentRandWinner + '%';
			progressBars[1].style.height = persentRandWinner + '%';
			secondCandidate.classList.add( 'main-cards-item-active' );
		// Если второе место занял кандидат под номером 2
			if ( secondPlace === 1 ) {
			// Считаем оставшийся процент
				let persentThirdPlace = Math.floor(( 100 - persentRandWinner) - persentRandSecondPlace );
			// Записываем результат в карточку кандидата, занявшего второе место	
				resultCounts[0].textContent = persentRandSecondPlace + '%';
				progressBars[0].style.height = persentRandSecondPlace + '%';
			// Присваиваем кандидату под номером 3 оставшийся процент 
				resultCounts[2].textContent = persentThirdPlace + '%';
				progressBars[2].style.height = persentThirdPlace + '%';
			} else if ( secondPlace === 2 ) {
			// Считаем оставшийся процент
				let persentThirdPlace = Math.floor(( 100 - persentRandWinner) - persentRandSecondPlace );
			// Записываем результат в карточку кандидата, занявшего второе место		
				resultCounts[2].textContent = persentRandSecondPlace + '%';
				progressBars[2].style.height = persentRandSecondPlace + '%';
			// Присваиваем кандидату под номером 1 оставшийся процент 
				resultCounts[0].textContent = persentThirdPlace + '%';
				progressBars[0].style.height = persentThirdPlace + '%';
			}
	// Если победил кандидат под номером 3
		} else if ( winner === 3 ) {
		// То считаем кто занял второе место с двух оставшихся
			let secondPlace = Math.floor( Math.random() * ( 2 - 1 + 1 )) + 1,
		// Считаем процент для второго места
				persentRandSecondPlace = Math.floor( Math.random() * (( 100 - persentRandWinner ) - 0 + 1 )) + 0;
		// Записываем результат в карточу победителя
			resultCounts[2].textContent = persentRandWinner + '%';
			progressBars[2].style.height = persentRandWinner + '%';
			ourCandidate.classList.add( 'main-cards-item-active' );
		// Если второе место занял кандидат под номером 2
			if ( secondPlace === 1 ) {
			// Считаем оставшийся процент
				let persentThirdPlace = Math.floor(( 100 - persentRandWinner) - persentRandSecondPlace );
			// Записываем результат в карточку кандидата, занявшего второе место	
				resultCounts[0].textContent = persentRandSecondPlace + '%';
				progressBars[0].style.height = persentRandSecondPlace + '%';
			// Присваиваем кандидату под номером 3 оставшийся процент 
				resultCounts[1].textContent = persentThirdPlace + '%';
				progressBars[1].style.height = persentThirdPlace + '%';
			} else if ( secondPlace === 2 ) {
			// Считаем оставшийся процент
				let persentThirdPlace = Math.floor(( 100 - persentRandWinner) - persentRandSecondPlace );
			// Записываем результат в карточку кандидата, занявшего второе место		
				resultCounts[1].textContent = persentRandSecondPlace + '%';
				progressBars[1].style.height = persentRandSecondPlace + '%';
			// Присваиваем кандидату под номером 1 оставшийся процент 
				resultCounts[0].textContent = persentThirdPlace + '%';
				progressBars[0].style.height = persentThirdPlace + '%';
			}
		}
	});
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Вмешаться в выборы
	let crime = document.getElementById( 'crime' ),
		firstCandidateBasicPercent = 0,
		secondCandidateBasicPercent = 0,
		ourCandidateBasicPercent = 25,
		sum = 100;

	crime.addEventListener( 'click', function () {

		firstCandidate.classList.remove( 'main-cards-item-active' );
		secondCandidate.classList.remove( 'main-cards-item-active' );
		ourCandidate.classList.remove( 'main-cards-item-active' );


	// Плохой вариант - перебирать все возможные варианты, пока сумма процентов кандидатов не будет равна 100  
		while (( firstCandidateBasicPercent + secondCandidateBasicPercent + ourCandidateBasicPercent ) !== sum ) {
	// Задаем диапазон от 0 до 100
			firstCandidateBasicPercent = 0 + Math.random() * ( 100 + 1 - 0 );
    		firstCandidateBasicPercent = Math.floor( firstCandidateBasicPercent );
    		secondCandidateBasicPercent = 0 + Math.random() * ( 100 + 1 - 0 );
    		secondCandidateBasicPercent = Math.floor( secondCandidateBasicPercent );
    // Задаем диапазон от 25 до 100 для нашего кандидата
    		ourCandidateBasicPercent = 25 + Math.random() * ( 100 + 1 - 25 );
    		ourCandidateBasicPercent = Math.floor( ourCandidateBasicPercent );
		}
	// Вывод процентов
		resultCounts[0].textContent = firstCandidateBasicPercent + '%';
		progressBars[0].style.height = firstCandidateBasicPercent + '%';

		resultCounts[1].textContent = secondCandidateBasicPercent + '%';
		progressBars[1].style.height = secondCandidateBasicPercent + '%';

		resultCounts[2].textContent = ourCandidateBasicPercent + '%';
		progressBars[2].style.height = ourCandidateBasicPercent + '%';

	// Находим победителя

		if (( firstCandidateBasicPercent > secondCandidateBasicPercent ) && ( firstCandidateBasicPercent > ourCandidateBasicPercent )) {
			firstCandidate.classList.add( 'main-cards-item-active' );
		} else if ( ( secondCandidateBasicPercent > firstCandidateBasicPercent ) && ( secondCandidateBasicPercent > ourCandidateBasicPercent ) ) {
			secondCandidate.classList.add( 'main-cards-item-active' );
		} else if ( ( ourCandidateBasicPercent > firstCandidateBasicPercent ) && ( ourCandidateBasicPercent > secondCandidateBasicPercent ) ) {
			ourCandidate.classList.add( 'main-cards-item-active' );
		}

		firstCandidateBasicPercent = 0;
		secondCandidateBasicPercent = 0;
		ourCandidateBasicPercent = 25;
	});

});