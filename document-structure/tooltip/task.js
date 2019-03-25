let showTitle;

document.onmouseover = function (event) {
    const target = event.target;

    const title = target.getAttribute('data-title');
    if (!title) return;
    const titleElem = document.createElement('div');
    titleElem.className = 'tooltip';
    titleElem.innerHTML = title;
    document.body.appendChild(titleElem);

    const coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - titleElem.offsetWidth) / 2;
    if (left < 0) left = 0;
    console.log(coords.top, titleElem.offsetHeight)
    let top = coords.top - titleElem.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + target.offsetHeight + 5;
        console.log(top)
    }

    titleElem.style.left = left + 'px';
    titleElem.style.top = top + 'px';

    showTitle = titleElem;
    
};

document.onmouseout = function (e) {

    if (showTitle) {
        document.body.removeChild(showTitle);
        showTitle = null;
    }

};