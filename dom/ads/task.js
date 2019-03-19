const rotatorCase = document.querySelector('.rotator');
let i = 0;
let teame = 2000
let tabContentActive = 0;
const addText = function (teame) {
    if (i >= 0) {
        if (rotatorCase.children[i].style.color != rotatorCase.children[i].dataset.color) {
            rotatorCase.children[i].style.color = rotatorCase.children[i].dataset.color;
        }
        rotatorCase.children[i].classList.remove('rotator__case_active');
        if (i == rotatorCase.children.length - 1) {
            i = 0;
            rotatorCase.children[i].classList.add('rotator__case_active');
        } else {
            i += 1;
            rotatorCase.children[i].classList.add('rotator__case_active');
            let index = i - 1;
            rotatorCase.children[index].classList.remove('rotator__case_active');
        }
        teame = rotatorCase.children[i].dataset.speed;
    }
}
const inervalID = setInterval(addText, 1000);