function createAccordion(target) {
	var titles = Array.prototype.slice.call(target.querySelectorAll(".accordion__title"));
	var panels = Array.prototype.slice.call(target.querySelectorAll(".accordion__panel"));
	var panelsmap = Array.prototype.slice.call(target.querySelectorAll(".accordion__panel-map"));

	titles.forEach(function(el, i) {
		el.addEventListener("click", function() {
			titles.forEach(function(el) { el.classList.remove("active"); });
			panels.forEach(function(el) { el.classList.remove("active"); });
			panelsmap.forEach(function(el) { el.classList.remove("active"); });
			this.classList.add("active");
			panels[i].classList.add("active");
			panelsmap[i].classList.add("active");
		});
	});
}

export {createAccordion};