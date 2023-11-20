//burger menu
const body = document.body;
const html = document.documentElement;
const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-menu');
const navItem = document.querySelectorAll('.nav-mobile__item');
const navBtnBars = document.querySelector('.fa-bars');
const allSections = document.querySelectorAll('.section');
//get current year footer
const footerYear = document.querySelector('.footer__year');
// contact form from mmcschool.pl
const msgStatus = document.querySelector('.msg-status');

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

// get current year footer

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

// navbar still same height

const setHeight = () => {
	let heightFromTop = window.scrollY;
	let styleRule = 'top:' + '-' + heightFromTop + 'px;';
	body.style.cssText = styleRule;
};

// contact form from mmcschool.pl

console.log(document.location.search);

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Wiadomość wysłana!';

	setTimeout(() => {
		msgStatus.classList.remove('success');
	}, 3000);
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error');
	msgStatus.textContent = 'Wystąpił błąd.';

	setTimeout(() => {
		msgStatus.classList.remove('error');
	}, 3000);
}

navBtn.addEventListener('click', showMobileNav);
window.addEventListener('scroll', burgerBarsColor);
