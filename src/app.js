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

// Integrate sandbox API
const url = 'https://api.sandbox.blackcrow.ai/v1/events'

// Because of limited information and time I didn't add anything extra props to the data below
const data = {
    site_name: 'BLACKCROW',
    page_id: document.getElementById('items') ? 'other' : 'home',
    visitor_id: 'aid88w5jfnRdMVdwbJm4f'
}

function postData(event) {
    fetch(url + `/${event}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    // with the same reason above I only logged the response in the console and didn't use it
    .then((response) => console.log(response))
}
// Since there is only one event exist in the test scenarios I harded coded event_name as view below.
postData('view');
