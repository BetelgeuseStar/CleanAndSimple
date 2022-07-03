

@@include('webpTest.js');
@@include('swiper-bundle.min.js');


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('touch');
} else {
	document.body.classList.add('pc');
}
/* swipers */

new Swiper('.resources__swiper', {
	centeredSlides: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

new Swiper('.testimonials__swiper', {
	centeredSlides: false,
	slidesPerView: 1,
	grabCursor: true,
	pagination: {
		el: '.testimonials__swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		1500: {
			slidesPerView: 1.435,
		},
	}
});

/* swipers over */

// Menu burger

const burgerIcon = document.querySelector('.burger-icon');
const inner = document.querySelector('.header__inner');
burgerIcon.addEventListener('click', function (e) {
	document.querySelector('body').classList.toggle('lock');
	burgerIcon.classList.toggle('active');
	inner.classList.toggle('active');
})

// Menu burger over

/* Head EventListener */

document.getElementById('start').style.display = 'block';
document.getElementById('startPop').style.display = 'block';
document.getElementById('startPop').style.opacity = '1';
if (isMobile.any()) {
	CheckClickUnfade('start');
} else {
	checkUnfade('start');
}

function CheckClickUnfade(checkFadeId) {
	document.querySelector('.head__inner')
		.addEventListener('click', function (event) {
			if (event.target.getAttribute('data-connection') === 'start') {
				if (checkFadeId === 'start') { checkUnfade('start'); return }
				document.getElementById(checkFadeId).style.display = 'none';
				document.getElementById(checkFadeId + 'Pop').style.display = 'none';
				unfade('start');
				unfade('startPop');
				checkFadeId = 'start';
				checkUnfade(checkFadeId);
				event.preventDefault();
			}
			if (event.target.getAttribute('data-connection') === 'increase') {
				if (checkFadeId === 'increase') { checkUnfade('increase'); return }
				document.getElementById(checkFadeId).style.display = 'none';
				document.getElementById(checkFadeId + 'Pop').style.display = 'none';
				unfade('increase');
				unfade('increasePop');
				checkFadeId = 'increase';
				checkUnfade(checkFadeId);
				event.preventDefault();
			}
			if (event.target.getAttribute('data-connection') === 'become') {
				if (checkFadeId === 'become') { checkUnfade('become'); return }
				document.getElementById(checkFadeId).style.display = 'none';
				document.getElementById(checkFadeId + 'Pop').style.display = 'none';
				unfade('become');
				unfade('becomePop');
				checkFadeId = 'become';
				checkUnfade(checkFadeId);
				event.preventDefault();
			}
			if (event.target.getAttribute('data-connection') === 'fulfill') {
				if (checkFadeId === 'fulfill') { checkUnfade('fulfill'); return }
				document.getElementById(checkFadeId).style.display = 'none';
				document.getElementById(checkFadeId + 'Pop').style.display = 'none';
				unfade('fulfill');
				unfade('fulfillPop');
				checkFadeId = 'fulfill';
				checkUnfade(checkFadeId);
				event.preventDefault();
			}
		})
}

function checkUnfade(checkFadeId) {
	let hovered = false;
	document.querySelector('.head__inner')
		.addEventListener('mouseover', function (event) {
			if (event.target.className !== 'head__area') {
				return;
			}
			if (event.relatedTarget.className == 'head__inner') {
				if (hovered === false) {
					hovered = true;
					if (event.target.getAttribute('data-connection') === 'start') {
						if (checkFadeId === 'start') { checkUnfade('start'); return }
						document.getElementById(checkFadeId).style.display = 'none';
						document.getElementById(checkFadeId + 'Pop').style.display = 'none';
						unfade('start');
						unfade('startPop');
						checkFadeId = 'start';
						checkUnfade(checkFadeId);
					}
					if (event.target.getAttribute('data-connection') === 'increase') {
						if (checkFadeId === 'increase') { checkUnfade('increase'); return }
						document.getElementById(checkFadeId).style.display = 'none';
						document.getElementById(checkFadeId + 'Pop').style.display = 'none';
						unfade('increase');
						unfade('increasePop');
						checkFadeId = 'increase';
						checkUnfade(checkFadeId);
					}
					if (event.target.getAttribute('data-connection') === 'become') {
						if (checkFadeId === 'become') { checkUnfade('become'); return }
						document.getElementById(checkFadeId).style.display = 'none';
						document.getElementById(checkFadeId + 'Pop').style.display = 'none';
						unfade('become');
						unfade('becomePop');
						checkFadeId = 'become';
						checkUnfade(checkFadeId);
					}
					if (event.target.getAttribute('data-connection') === 'fulfill') {
						if (checkFadeId === 'fulfill') { checkUnfade('fulfill'); return }
						document.getElementById(checkFadeId).style.display = 'none';
						document.getElementById(checkFadeId + 'Pop').style.display = 'none';
						unfade('fulfill');
						unfade('fulfillPop');
						checkFadeId = 'fulfill';
						checkUnfade(checkFadeId);
					}
				}
			}
		});
}

function unfade(blockId) {
	let block = document.getElementById(blockId);
	let op = 0.1;
	block.style.opacity = '0';
	block.style.display = 'block';
	var timer = setInterval(function () {
		if (op >= 1) {
			clearInterval(timer);
		}
		block.style.opacity = op;
		block.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 11);
}
/* head EventListener over */

/* resources pop up */

document.querySelector('.resources')
	.addEventListener('click', function (event) {
		if (event.target.className === 'article__big-img' || event.target.className === 'article__img-up' || event.target.className === 'article__img-down' || event.target.classList.contains('article__loupe')) {
			if (event.target.classList.contains('article__loupe')) {
				event.target.closest('.article__big-img').querySelector('.article__img').classList.add('active');
			}
			else {
				event.target.querySelector('.article__img').classList.add('active');
			}
			let imgList = event.target.closest('.article__illustrarion').querySelectorAll('img');
			const swiperWrapper = document.querySelector('.resources__pop-up-swiper>.swiper-wrapper');
			swiperWrapper.insertAdjacentHTML(
				'afterbegin',
				'<div class="swiper-slide"></div> <div class="swiper-slide"></div> <div class="swiper-slide"></div>'
			);
			let elmList = document.querySelectorAll('.resources__pop-up-swiper .swiper-slide');
			for (let i = 0; i < 3; i++) {
				elmList[i].insertAdjacentHTML('afterbegin', '<div class="resources__pop-up-img-wrapper"></div>');
			}
			elmList = document.querySelectorAll('.resources__pop-up-img-wrapper')
			let startSlide
			for (let i = 0; i < 3; i++) {
				elmList[i].insertAdjacentElement('afterbegin', imgList[i].cloneNode(true));
				if (imgList[i].classList.contains('active')) {
					startSlide = i;
				}
			}
			imgList = document.querySelector('.resources__pop-up-swiper').querySelectorAll('img');
			for (let i = 0; i < 3; i++) {
				imgList[i].classList.remove('article__img', 'article__img_yellow', 'article__img_red', 'article__img_blue');
				imgList[i].classList.add('resources__pop-up-img');
			}
			new Swiper('.resources__pop-up-swiper', {
				centeredSlides: true,
				observeParents: true,
				observer: true,
				observeSlideChildren: true,
				initialSlide: startSlide,
			});
			bodyLock();
			document.querySelector('.resources__pop-up').style.display = 'block';
			document.querySelector('.resources__pop-up')
				.addEventListener('click', function (event) {
					if (event.target.className === 'resources__pop-up-img-wrapper') {
						document.querySelector('.resources__pop-up-swiper .swiper-wrapper').innerHTML = '';
						if (document.querySelector('.resources__pop-up-swiper .swiper-notification')) {
							document.querySelector('.resources__pop-up-swiper .swiper-notification').remove();
						}
						imgList = document.querySelectorAll('.article__img');
						for (let i = 0; i < imgList.length; i++) {
							imgList[i].classList.remove('active');
						}
						document.querySelector('.resources__pop-up').style.display = 'none';
						bodyUnlock();
					}
				})
		}
	});

function bodyLock() {
	body = document.querySelector('body');
	body.style.overflow = 'hidden';
	body.style.width = '100%';
	body.style.paddingRight = '17px';
	document.querySelector('.resources__pop-up').style.overflowY = 'scroll';
}

function bodyUnlock() {
	body = document.querySelector('body');
	body.style.overflow = '';
	body.style.width = '';
	body.style.paddingRight = '';
	document.querySelector('.resources__pop-up').style.overflowY = '';
}
/* resources pop up over */

/* spoiler */

document.querySelector('.faq__questions-list')
	.addEventListener('click', function (event) {

		let questionItemsList = document.querySelectorAll('.faq__question-item')
		for (let i = 0; i < questionItemsList.length; i++) {
			if (questionItemsList[i].classList.contains('active')) {
				let el = questionItemsList[i].querySelector('.faq__answer');
				slideUp(el, el.offsetHeight);
			}
		}

		let questionItem = event.target.closest('.faq__question-item');
		if (questionItem.classList.contains('active') === false) {
			let answer = questionItem.querySelector('.faq__answer');
			questionItem.classList.add('active');
			answer.style.height = '';
			let answerHeight = answer.offsetHeight;
			slideDown(answer, answerHeight);
		}
	});

function slideDown(target, endHeight) {
	target.style.height = '0px'
	animate({
		duration: 300,
		timing(timeFraction) {
			return timeFraction;
		},
		draw(progress) {
			target.style.height = progress * endHeight + 'px';
		}
	});
}

function slideUp(target, startHeight) {
	let h = startHeight;
	animate({
		duration: 300,
		timing(timeFraction) {
			return timeFraction;
		},
		draw(progress) {
			target.style.height = h - (progress * h) + 'px';
			if (progress === 1) {
				target.closest('.faq__question-item').classList.remove('active');
			}
		}
	});

}

function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;
		let progress = timing(timeFraction);
		draw(progress);
		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}

/* spoiler over */