
function installIndeterminateFalse(elem) {
    return elem.indeterminate = false;
}
function installIndeterminateTrue(elem) {
    return elem.indeterminate = true;
}
function installCheckedTrue(elem) {
    return elem.checked = true;
}
function installCheckedFalse(elem) {
    return elem.checked = false;
}

const inputChecked = document.getElementsByTagName('input');
for (let checked of inputChecked) {
    checked.addEventListener('click', function (e) {

        // если элемент на 1 уровне.
        for (let input of e.target.parentElement.parentElement.getElementsByTagName('input')) {
            if (e.target.checked == false) {
                input.checked = false;
            } else {
                input.checked = true;
            }
        }

        // если элемент на 2 уровне.
        if (this.closest('.interests_active') != null) {
            let lengthInput = 0;
            let counterCheckedTrue = 0;
            let animalsChec = this.closest('.interests_active').parentElement.querySelector('input');

            // если элемент на 3 уровне.
            if (this.closest('.interests_active').closest('.interest').parentElement.closest('.interest') != null) {

                let animalsChec = this.closest('.interests_active')
                    .closest('.interest').parentElement.closest('.interest').querySelector('input');

                let cat = this.closest('.interests_active').closest('.interest').querySelector('input');
                
                let lengthAnimals = this.closest('.interests_active').closest('.interest').children.length;

                // получаем количество checked = true
                for (let input of this.closest('.interests_active').querySelectorAll('input')) {
                    if (input.checked == true) {
                        counterCheckedTrue++;
                    }
                }
                console.log()
                {// устанавлиеваем  checked = true/false, indeterminate = true/false
                    if (counterCheckedTrue == 0) {

                        installIndeterminateFalse(animalsChec);
                        installCheckedFalse(animalsChec);
                        installIndeterminateFalse(cat);
                        counterCheckedTrue = 0;

                    } else if (counterCheckedTrue < lengthAnimals) {

                        installIndeterminateTrue(animalsChec);
                        installIndeterminateTrue(cat);
                        installCheckedFalse(cat);

                        counterCheckedTrue = 0;

                    } else {

                        counterCheckedTrue = 0;
                        lengthInput = 0;

                        installIndeterminateFalse(cat);
                        installCheckedTrue(cat);

                        for (let input of this.closest('.interests_active').closest('.interest')
                        .parentElement.querySelectorAll('input')) {

                            lengthInput++;
                            if (input.checked == true) {
                                counterCheckedTrue++;
                            }
                        }
                        
                        if (lengthInput == counterCheckedTrue) {

                            installIndeterminateFalse(animalsChec);
                            installCheckedTrue(animalsChec);

                        } else {
                            installIndeterminateTrue(animalsChec);
                            installCheckedFalse(animalsChec);
                        }
                        counterCheckedTrue = 0;
                        lengthInput = 0;
                    }
                }
            } else {
                // получаем количество checked = true и элементов input
                for (let input of this.closest('.interests_active').querySelectorAll('input')) {
                    lengthInput++;
                    if (input.checked == true) {
                        counterCheckedTrue++;
                    }
                }
                console.log(counterCheckedTrue)
                {// устанавлиеваем  checked = true/false, indeterminate = true/false
                    if (counterCheckedTrue == 0) {
                        installIndeterminateFalse(animalsChec);
                        installCheckedFalse(animalsChec);
                        lengthInput = 0;
                    } else if (counterCheckedTrue < lengthInput) {
                        installIndeterminateTrue(animalsChec);
                        installCheckedFalse(animalsChec)
                        counterCheckedTrue = 0;
                        lengthInput = 0;
                    } else {
                        installIndeterminateFalse(animalsChec)
                        installCheckedTrue(animalsChec)
                        counterCheckedTrue = 0;
                        lengthInput = 0;
                    }
                }
            }
        }
    })
}