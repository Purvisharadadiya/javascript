let cart = [];
let totalPrice = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));

        cart.push({ name, price });
        totalPrice += price;

        updateCart();
    });
});

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    cartList.innerHTML = ''; // Clear the cart before updating

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price} 
                        <button class="remove-item" data-index="${index}">Remove</button>`;
        cartList.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice;

    // Add remove functionality
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', event => {
            const index = event.target.getAttribute('data-index');
            totalPrice -= cart[index].price; // Deduct price
            cart.splice(index, 1); // Remove item
            updateCart();
        });
    });
}
