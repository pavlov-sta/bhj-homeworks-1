const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
dropdownValue.onclick = function () {
    if (dropdownList.classList == 'dropdown__list dropdown__list_active') {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
}
const dropdownItem = document.body.querySelectorAll(".dropdown__item");
for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener("click", function (event) {
        const er = this.closest('.dropdown__list');
        if (er.classList[0] == 'dropdown__list') {
            event.target.onclick = function () {
                return false;
            }
            dropdownValue.textContent = event.target.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
}
