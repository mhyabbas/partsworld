function carouselHero() {
	var splide = new Splide('.carousel--hero', {
		keyboard: 'focused',
		perPage: 1,
		perMove: 1,
		arrows: 'slider',
		arrowPath: 'M20,0l-3.5,3.5l14,14H0v5h30.5l-14,14L20,40l20-20L20,0z'
	}).mount();

	var items = splide.length; // Amount of items
	var perPage = splide.options.perPage; // perPage value

	if (items <= perPage) {
    	splide.options = { pagination: false };
	} else {
    	splide.options = { pagination: true };
	}
}

function carouselBrand() {
	var splide = new Splide('.carousel--brand', {
		keyboard: 'focused',
		perPage: 4,
		perMove: 1,
		arrows: 'slider',
		arrowPath: 'M20,0l-3.5,3.5l14,14H0v5h30.5l-14,14L20,40l20-20L20,0z',
		breakpoints: {
			1200: {
				perPage: 3,
				perMove: 1,
			},
		}
	}).mount();

	var items = splide.length; // Amount of items
	var perPageDesktop = splide.options.perPage; // Desktop perPage value
	var perPageTablet = splide.options.breakpoints[1200].perPage; // Tablet perPage value

	var mediaQuery = window.matchMedia('(min-width: 1200px)');

	function checkPaginationInit(e) {
		if (e.matches) {
			if (items <= perPageDesktop) {
		    	splide.options = { pagination: false };
			} else {
		    	splide.options = { pagination: true };
			}
		} else {
			if (items <= perPageTablet) {
				splide.options = { pagination: false };
			} else {
				splide.options = { pagination: true };
			}
		}
	}

	function checkPaginationChange(e) {
		if (e.matches) {
			setTimeout(function(){ 
				if (items <= perPageDesktop) {
			    	splide.options = { pagination: false };
				} else {
			    	splide.options = { pagination: true };
				}
			}, 200);
		} else {
			setTimeout(function(){ 
				if (items <= perPageTablet) {
					splide.options = { pagination: false };
				} else {
					splide.options = { pagination: true };
				}
			}, 200);
		}
	}

	mediaQuery.addListener(checkPaginationChange);
	checkPaginationInit(mediaQuery);
	checkPaginationChange(mediaQuery);
}

export {carouselHero,carouselBrand};