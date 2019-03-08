(() => {
    let currentSlide = 0;
    const sliderPrev = document.body.querySelector(".slider__arrow_prev");
    sliderPrev.onclick = function () {
        const menu = document.body.querySelectorAll(".slider__item");
        if (currentSlide == 0) {
            menu[currentSlide].classList.remove('slider__item_active')
            currentSlide = 4;
            menu[currentSlide].classList.add('slider__item_active')
        } else {
            currentSlide -= 1;
            menu[currentSlide].classList.add('slider__item_active')
            let current = currentSlide + 1;
            menu[current].classList.remove('slider__item_active');
        }
    }
    const sliderNext = document.body.querySelector(".slider__arrow_next");
    sliderNext.onclick = function () {
        const menu = document.body.querySelectorAll(".slider__item");
        if (currentSlide >= 0) {
            menu[currentSlide].classList.remove('slider__item_active')
            if (currentSlide == menu.length - 1) {
                menu[4].classList.remove('slider__item_active')
                currentSlide = 0;
                menu[currentSlide].classList.add('slider__item_active')
            } else {
                currentSlide += 1;
                menu[currentSlide].classList.add('slider__item_active')
                let current = currentSlide - 1;
                menu[current].classList.remove('slider__item_active')
            }
        }
    };
})();