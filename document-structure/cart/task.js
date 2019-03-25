// уменьшаем количество товара
const productDec = document.querySelectorAll('.product__quantity-control_dec')
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
let counter = 0;
let previousId = 0;
const cartProducts = document.querySelector('.cart__products');
const addToCart = document.querySelectorAll('.product__add')
for (let addTo of addToCart) {
    addTo.addEventListener('click', function () {
        
        let obj = {
            img: 0,
            value: 0
        };
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
                    <div class="cart__product" data-id=${id}>
                        <img class="cart__product-image" src=${src}>
                        <div class="cart__product-count">${value}</div>
                        <div class="product__delet">Удалить</div>
                    </div>`;
            obj = {
                img: src,
                value: value
            };
            cartProductsLength = cartProducts.children.length;
        } else if (cartProducts.children.length == document.querySelector('.products').children.length
            || previousId == id) {
            for (let cart of cartProducts.children) {
                if (cart.dataset.id == id) {
                    cart.querySelector('.cart__product-count').textContent =
                        Number(cart.querySelector('.cart__product-count').textContent) + value;
                    obj = {
                        img: src,
                        value: Number(cart.querySelector('.cart__product-count').textContent)
                    };
                    
                }
            }
        } else {
            cartProducts.innerHTML += `
                    <div class="cart__product" data-id=${id}>
                        <img class="cart__product-image" src=${src}>
                        <div class="cart__product-count">${value}</div>
                        <div class="product__delet">Удалить</div>
                    </div>`;
            obj = {
                img: src,
                value: value
            };
        }
        // записываем localStorage
        let serialObj = JSON.stringify(obj)
        localStorage.setItem(id, serialObj);
        // записываем id последнего добавленного товара
        previousId = parent.dataset.id;
        
    })
}


//удаляет товар
const cart = document.querySelector('.cart')
cart.onclick = function (e) {

    const cartProducts = document.querySelector('.cart__products');
    if (localStorage.length > 0) {

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (e.target.parentElement.dataset.id == key) {
                localStorage.removeItem(key);
            }
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

// выгружаем данные из localStorage
function showTask() {

    if (localStorage.length > 0) {
        const div = document.querySelector('.cart');
        div.insertBefore(document.createElement('div'), div.children[0]);
        div.children[0].className = 'cart__title';
        div.children[0].innerHTML = 'Корзина';
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            var returnObj = JSON.parse(localStorage.getItem(key))
            previousId = localStorage.key(i);
            cartProducts.innerHTML += `
                    <div class="cart__product" data-id=${localStorage.key(i)}>
                        <img class="cart__product-image" src=${returnObj.img}>
                        <div class="cart__product-count">${returnObj.value}</div>
                        <div class="product__delet">Удалить</div>
                    </div>`;
        }
    }
}
showTask()