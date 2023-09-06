const body = document.body;
const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-menu');
const navItem = document.querySelectorAll('.nav-mobile__item');

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

navBtn.addEventListener('click', showMobileNav);
