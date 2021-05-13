function smoothScroll() {
	document.querySelector('.nav__btn').addEventListener('click', function(e) {
		e.preventDefault();
		document.getElementById('locations').scrollIntoView({ behavior: 'smooth' });
	});
}

export {smoothScroll};