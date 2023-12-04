// menu
const body = document.body;
const html = document.documentElement;
const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-menu');
const navClose = document.querySelector('.burger-close');
const navItem = document.querySelectorAll('.nav-mobile__item');
const navBtnBars = document.querySelector('.fa-bars');
const allSections = document.querySelectorAll('.section');
const navLiHome = document.querySelector('.nav-home');
const navLiAboutus = document.querySelector('.nav-aboutus');
const navLiOffer = document.querySelector('.nav-offer');
const navLiContact = document.querySelector('.nav-contact');
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

const closeMobileNav = () => {
	nav.classList.remove('nav-mobile--active');
	body.classList.toggle('overf-hidden');
	navBtn.classList.toggle('dpnone');
};

//set body height

const setHeight = () => {
	let heightFromTop = window.scrollY;
	let styleRule = 'top:' + '-' + heightFromTop + 'px;';
	body.style.cssText = styleRule;
};

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

//scrollspy

const scrollSpy = () => {
	const currentSection = window.scrollY;
	allSections.forEach(section => {
		if (section.classList.contains('scrollspy-header') && section.offsetTop <= currentSection + 90) {
			navLiHome.classList.add('nav-activeblock');
		} else if (!section.classList.contains('scrollspy-header') && section.offsetTop <= currentSection + 90) {
			navLiHome.classList.remove('nav-activeblock');
		}
	});
	allSections.forEach(section => {
		if (section.classList.contains('scrollspy-aboutus') && section.offsetTop <= currentSection + 90) {
			navLiAboutus.classList.add('nav-activeblock');
		} else if (!section.classList.contains('scrollspy-aboutus') && section.offsetTop <= currentSection + 90) {
			navLiAboutus.classList.remove('nav-activeblock');
		} else if (navLiOffer.classList.contains('nav-activeblock')) {
			navLiAboutus.classList.remove('nav-activeblock');
		}
	});
	allSections.forEach(section => {
		if (section.classList.contains('scrollspy-offer') && section.offsetTop <= currentSection + 90) {
			navLiOffer.classList.add('nav-activeblock');
		} else if (!section.classList.contains('scrollspy-offer') && section.offsetTop <= currentSection + 90) {
			navLiOffer.classList.remove('nav-activeblock');
		}
	});

	allSections.forEach(section => {
		if (section.classList.contains('contact-section')) {
			navLiContact.classList.add('nav-activeblock');
			navLiHome.classList.remove('nav-activeblock');
		}
	});
	allSections.forEach(section => {
		if (section.classList.contains('contact-section')) {
			navLiContact.classList.add('nav-activeblock');
			navLiHome.classList.remove('nav-activeblock');
		}
	});
	allSections.forEach(section => {
		if (section.classList.contains('offer-section')) {
			navLiOffer.classList.add('nav-activeblock');
			navLiHome.classList.remove('nav-activeblock');
		}
	});
};

// contact form from mmcschool.pl

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

// get current year footer

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

currentYear();

navBtn.addEventListener('click', showMobileNav);
navClose.addEventListener('click', closeMobileNav);
window.addEventListener('scroll', burgerBarsColor);
window.addEventListener('load', scrollSpy);
window.addEventListener('scroll', scrollSpy);
