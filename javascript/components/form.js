function dropdownField(target) {
    target.forEach(function(el) {
        var sort = false;
        if (el.hasAttribute("data-sort")) {
            sort = true;
        }
        if (el.classList.contains('form--half')) {
            var choices = new Choices(el, {
                shouldSort: sort,
                classNames: {
                    containerOuter: 'choices form--half',
                }
            });
        } else {
            var choices = new Choices(el, {
                shouldSort: sort,
            });
        }
    });
}

export {dropdownField};