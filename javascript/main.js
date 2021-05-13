import {smoothScroll} from './components/scroll.js';
import {dropdownField} from './components/form.js';
import {carouselHero,carouselBrand} from './components/carousel.js';
import {createAccordion} from './components/accordion.js';

function loadJS() {
	setTimeout(function(){
		// Smooth scroll
		smoothScroll();

		// Dropdown field
		var dropdown = document.querySelectorAll(".form__dropdown");
		if (dropdown != null) {
			dropdownField(dropdown);
		}

		// Carousel - Hero
		var hero = document.querySelector(".carousel--hero");
		if (hero != null) {
			carouselHero();
		}

		// Carousel - Brand
		var brand = document.querySelector(".carousel--brand");
		if (brand != null) {
			carouselBrand();
		}

		// Accordion
		var accordion = document.querySelector(".accordion");
		if (accordion != null) {
			createAccordion(accordion);
		}
	}, 50);
}

window.addEventListener('load', loadJS, false);