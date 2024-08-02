document.getElementById('place-order').addEventListener('click', placeOrder);

function placeOrder() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    if (name && address && city && zip && cardNumber && expiry && cvv) {
        alert('Order placed successfully!');
        // Simulate payment gateway integration
        // Clear cart
        localStorage.removeItem('cart');
        window.location.href = 'order-confirmation.html';
    } else {
        alert('Please fill in all fields.');
    }
}

// Load order summary
function loadOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderSummary = document.getElementById('order-summary');
    const orderTotal = document.getElementById('order-total');

    orderSummary.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.quantity} x $${item.price}`;
        orderSummary.appendChild(listItem);

        total += item.quantity * item.price;
    });

    orderTotal.textContent = total.toFixed(2);
}

// Initial order summary load
loadOrderSummary();
