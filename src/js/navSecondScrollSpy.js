const allSections = document.querySelectorAll('.section');
const navSecondBlockOffer = document.querySelector('.offerNavSecond');
const navSecondBlockContact = document.querySelector('.contactNavSecond');

const scrollSpySecondNav = () => {
	allSections.forEach(section => {
		if (section.classList.contains('contact-section')) {
			navSecondBlockContact.classList.add('nav-activeblock');
		}
	});
	allSections.forEach(section => {
		if (section.classList.contains('offer-section')) {
			navSecondBlockOffer.classList.add('nav-activeblock');
		}
	});
};

window.addEventListener('load', scrollSpySecondNav);
