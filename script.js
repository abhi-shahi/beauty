document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            const li = document.createElement('li');
            li.textContent = productName;
            cartItems.appendChild(li);
        });
    });
});
