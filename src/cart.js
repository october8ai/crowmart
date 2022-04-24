// Retrive the cart and define required variables
let cart = JSON.parse(localStorage.getItem('cart'));
let totalItems = 0 ;
let totalAmount = 0.00;

// Calculate the total number of items and total amount of the items
for(let i = 0; i < cart.length; i++) {
    totalItems += cart[i].quantity;
    totalAmount += cart[i].quantity * cart[i].price;
}

// Update HTML to reflect final cart information
document.getElementById('count').textContent = `You have ${totalItems} items in cart`;
document.getElementById('total').textContent = `Total: $${totalAmount.toFixed(2)}`;
