//burger
const body = document.body;
const html = document.documentElement;
const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-menu');
const navItem = document.querySelectorAll('.nav-mobile__item');
//time
const footerYear = document.querySelector('.footer__year');
//bars color
const navBtnBars = document.querySelector('.fa-bars');
const allSections = document.querySelectorAll('.section');

// burger menu
const showMobileNav = () => {
	nav.classList.toggle('nav-mobile--active');
	body.classList.toggle('overf-hidden');
	navBtn.classList.toggle('dpnone');
	navItem.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active');
			body.classList.remove('overf-hidden');
			navBtn.classList.remove('dpnone');
		});
	});
};

// get current year

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

currentYear();

// mobile burger bars color

const burgerBarsColor = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 45) {
			navBtnBars.classList.add('black-bars-color');
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 45) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};
// off top burger

// function setHeight() {
// 	// Pobierz wysokość od góry strony
// 	let heightFromTop = window.scrollY || document.documentElement.scrollTop;

// 	// Ustaw styl CSS dynamicznego elementu
// 	let dynamicElement = document.body;
// 	dynamicElement.style.top = heightFromTop + 'px';
// }

const setHeight = () => {
	let heightFromTop = window.scrollY;
	let styleRule = 'top:' + '-' + heightFromTop + 'px;';
	body.style.cssText = styleRule;
};

navBtn.addEventListener('click', showMobileNav);
window.addEventListener('scroll', burgerBarsColor);
