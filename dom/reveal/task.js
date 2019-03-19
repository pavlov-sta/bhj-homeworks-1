let i = 0;
let isInViewport = function (element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect();
    let f = false;
    if (elementTop.top >= 0 || elementTop.bottom >= 0) {
        f = elementTop.top < viewportHeight ? true : false;
    }
    if (f == true) {
        element.classList.add('reveal_active');
    } else {
        element.classList.remove('reveal_active');
    }
    if (reval[0].getBoundingClientRect().top < (-viewportHeight)) {
        i = 1;
    } else {
        i = 0;
    }
};

const reval = document.querySelectorAll('.reveal')
window.onscroll = function () {
    isInViewport(reval[i]);
}
