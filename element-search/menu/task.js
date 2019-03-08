(() => {
    const menu = document.body.querySelectorAll(".menu__link");
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener("click", myFunction);
    }
    function myFunction() {
        this.nextElementSibling.onclick = function() {
            return false;
        }
        if (this.nextElementSibling.className === 'menu menu_sub menu_active') {
            this.nextElementSibling.classList.remove("menu_active");
        } else {
            this.nextElementSibling.classList.add("menu_active");
        }
    };
})();

