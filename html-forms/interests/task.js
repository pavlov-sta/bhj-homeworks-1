const liInterest = document.querySelectorAll('li.interest');
for (const li of liInterest) {
    li.addEventListener('click', function (e) {
        for (const input of this.lastElementChild.children) {
            if (input.firstElementChild.firstElementChild.hasAttribute('checked', 'true')) {
                input.firstElementChild.firstElementChild.removeAttribute('checked');
            } else {
                input.firstElementChild.firstElementChild.setAttribute('checked', 'true')
            }
        }
    })
}