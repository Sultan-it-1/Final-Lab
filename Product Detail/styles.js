document.getElementById('add-to-cart').addEventListener('click', addToCart);

function addToCart() {
    const quantity = document.getElementById('quantity').value;
    const product = {
        name: 'Product Name',
        price: 100,
        quantity: parseInt(quantity)
    };

    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart();
}

function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.quantity} x $${item.price}`;
        cartItems.appendChild(listItem);

        total += item.quantity * item.price;
    });

    totalPrice.textContent = total.toFixed(2);
}

// Initial cart update
updateCart();
