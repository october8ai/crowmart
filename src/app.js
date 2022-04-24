// Pull the cart from local storage if it exists
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

// Handle add to cart button
function handleAddItem(e) {
    e.preventDefault();
    const item = e.target.closest('div');
    let itemId = item.dataset.itemId;
    updateCart(itemId);
}

// Add the new item from id and update cart at local storage 
function updateCart(id) {
    let quantity = 1;
    // Check if item is already exist in the cart
    let itemInCart = cart.find(item => item.id === id);
    if (itemInCart) {
        // If exist then update quantity only
        itemInCart.quantity += 1;
    } else {
        // If not exists then add item with id and price
        const item = document.querySelector(`[data-item-id='${id}']`);
        let price = item.closest('div').querySelector('h5').textContent;
        price = Number(price.substring(1));
        let itemDetails = {id, quantity, price};
        cart.push(itemDetails);
    }
    // update the cart on the local storage
    localStorage.setItem('cart', JSON.stringify(cart));
    // inform user that item is successfully added - PS: I shouldn't use alert but used informative purposes only
    window.alert("Item successfully added to the cart!")
}
