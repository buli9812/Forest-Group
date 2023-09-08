const allSections = document.querySelectorAll('.section');
const navLiHome = document.querySelector('.nav-home');
const navLiAboutus = document.querySelector('.nav-aboutus');
const navLiOffer = document.querySelector('.nav-offer');
const navLiContact = document.querySelector('.nav-contact');

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
		}
	});
	allSections.forEach(section => {
		if (section.classList.contains('scrollspy-offer') && section.offsetTop <= currentSection + 90) {
			navLiOffer.classList.add('nav-activeblock');
		} else if (!section.classList.contains('scrollspy-offer') && section.offsetTop <= currentSection + 90) {
			navLiOffer.classList.remove('nav-activeblock');
		}
	});
};

window.addEventListener('load', scrollSpy);
window.addEventListener('scroll', scrollSpy);
