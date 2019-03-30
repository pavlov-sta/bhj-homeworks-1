
let obj = {};
// уменьшаем количество товара
const productDec = document.querySelectorAll('.product__quantity-control_dec');
for (let product of productDec) {
    product.addEventListener('click', function () {
        for (let vaue of this.parentElement.children) {
            if (vaue.className.includes('product__quantity-value')) {
                if (vaue.textContent > 0) {
                    vaue.textContent = Number(vaue.textContent) - 1;
                }
            }
        }
    })
}
// увеличиваем количество товара
const productInc = document.querySelectorAll('.product__quantity-control_inc')
for (let product of productInc) {
    product.addEventListener('click', function () {
        for (let vaue of this.parentElement.children) {
            if (vaue.className.includes('product__quantity-value')) {
                vaue.textContent = Number(vaue.textContent) + 1;
            }
        }
    })
}

//добавляем товар
const cartProducts = document.querySelector('.cart__products');
const addCart = document.querySelectorAll('.product__add')

for (let addTo of addCart) {
    addTo.addEventListener('click', function (e) {

        let src;
        let value;
        const parent = this.closest('div.product');
        let id = parent.dataset.id;


        for (let chilProduct of parent.children) {
            if (chilProduct.className.includes('product__image')) {
                src = chilProduct.getAttribute('src');
            }
        }
        // получаем количество товара
        for (let chilProductControls of parent.lastElementChild.children) {
            if (chilProductControls.querySelector('.product__quantity-value')) {
                value = Number(chilProductControls.querySelector('.product__quantity-value').textContent);
            }
        }

        // добавляем товар
        if (cartProducts.children.length == 0) {

            const div = document.querySelector('.cart');
            div.insertBefore(document.createElement('div'), div.children[0]);
            div.children[0].className = 'cart__title';
            div.children[0].innerHTML = 'Корзина';

            cartProducts.innerHTML += `
                    <div class="cart__product" data-id= ${id}>
                        <img class="cart__product-image" src=${src}>
                        <div class="cart__product-count">${value}</div>
                        <div class="product__delet">Удалить</div>
                    </div>`;
            obj[id] = [src, value];

            cartProductsLength = cartProducts.children.length;
        } else {
            let selectProd;
            let previousId;
            for (let cart of cartProducts.children) {
                if (cart.dataset.id == id) {
                    previousId = cart.dataset.id;
                    selectProd = cart;
                }
            }

            if (previousId == id) {
                selectProd.querySelector('.cart__product-count').textContent =
                    Number(selectProd.querySelector('.cart__product-count').textContent) + value;
                obj[id] = [src, Number(selectProd.querySelector('.cart__product-count').textContent)];
            } else {

                cartProducts.innerHTML += `
                    <div class="cart__product" data-id=${id}>
                        <img class="cart__product-image" src=${src}>
                        <div class="cart__product-count">${value}</div>
                        <div class="product__delet">Удалить</div>
                    </div>`;
                obj[id] = [src, value];
            }
        }

        // записываем localStorage
        let serialObj = JSON.stringify(obj)
        localStorage.setItem('cartKey', serialObj);

    })
}


//удаляет товар
const cart = document.querySelector('.cart')
cart.onclick = function (e) {

    const cartProducts = document.querySelector('.cart__products');

    if (e.target.className.includes('product__delet')) {

        if (localStorage.cartKey.length > 0) {
            let serialObj = JSON.parse(localStorage.getItem('cartKey'))

            for (prop in serialObj) {

                if (e.target.parentElement.dataset.id == prop) {
                    delete obj[prop];
                    delete serialObj[prop]
                }

                let cartKeyObj = JSON.stringify(serialObj)
                localStorage.setItem('cartKey', cartKeyObj);
            }
            if (localStorage.cartKey.length == 2) {
                localStorage.removeItem('cartKey');
            }

        }

        if (cartProducts.children.length > 1) {
            e.target.parentElement.remove();
        } else {
            const div = document.querySelector('.cart__title')
            div.remove();
            e.target.parentElement.remove();
        }
    }
}

// выгружаем данные из localStorage
function showTask() {

    if (localStorage.cartKey) {
        const div = document.querySelector('.cart');
        div.insertBefore(document.createElement('div'), div.children[0]);
        div.children[0].className = 'cart__title';
        div.children[0].innerHTML = 'Корзина';
        let serialObj = JSON.parse(localStorage.getItem('cartKey'))
        for (prop in serialObj) {

            cartProducts.innerHTML += `
            <div class="cart__product" data-id=${prop}>
                <img class="cart__product-image" src=${serialObj[prop][0]}>
                <div class="cart__product-count">${serialObj[prop][1]}</div>
                <div class="product__delet">Удалить</div>
            </div>`;
        }
    }
}
showTask()