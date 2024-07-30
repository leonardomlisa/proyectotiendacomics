const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
const valorTotal = document.querySelector('.total-pagar');
const rowProduct = document.querySelector('.row-product');
const productsList = document.querySelector('.container-items');
const countProducts = document.querySelector('#contador-productos');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

let allProducts = JSON.parse(localStorage.getItem('cart')) || [];

const displayCart = () => {
    if (allProducts.length === 0) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }

    rowProduct.innerHTML = '';
    let total = 0;
    allProducts.forEach(product => {
        const { quantity, title, price } = product;
        total += price * quantity;

        const productRow = document.createElement('div');
        productRow.classList.add('cart-product');
        productRow.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${quantity}</span>
                <p class="titulo-producto-carrito">${title}</p>
                <span class="precio-producto-carrito">$${price}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
        rowProduct.appendChild(productRow);
    });

    valorTotal.textContent = `$${total.toFixed(2)}`;
    countProducts.textContent = allProducts.reduce((sum, product) => sum + product.quantity, 0);


    if (total >= 40000) {
        Swal.fire({
            icon: 'info',
            title: '¡Envío gratis!',
            text: 'Tu compra es mayor a $40,000, ¡así que te ofrecemos envío gratis!',
        });
    }
};


const updateCart = () => {
    localStorage.setItem('cart', JSON.stringify(allProducts));
    displayCart();
};


btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});


productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: parseFloat(product.querySelector('p').textContent.slice(1)),
        };

        const existingProduct = allProducts.find(p => p.title === infoProduct.title);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            allProducts.push(infoProduct);
        }

        updateCart();

        Swal.fire({
            icon: 'success',
            title: 'Producto añadido',
            text: `${infoProduct.title} ha sido añadido al carrito.`,
        });
    }
});


rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('.titulo-producto-carrito').textContent;

        allProducts = allProducts.filter(p => p.title !== title);

        updateCart();
    }
});

displayCart();
