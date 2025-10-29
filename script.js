

function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive"; // Make sure there is a space before 'responsive'
            } else {
                x.className = "topnav";
            }
        }

  

/*
 * Add-to-Cart Functionality
 * Handles adding items to a shopping cart stored in localStorage.
 */
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const button = event.target;
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);

      if (name && !isNaN(price)) {
        const item = {
          name: name,
          price: price,
          quantity: 1,
        };
        addItemToCart(item);
        alert(`"${name}" has been added to your cart!`);
      }
    });
  });
});

/**
 * Adds an item to the cart in localStorage.
 * If the item already exists, it increments the quantity.
 * @param {object} newItem - The item to add to the cart.
 */
function addItemToCart(newItem) {
  // Get the current cart from localStorage or initialize an empty array
  let cart = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];

  // Check if the item already exists in the cart
  const existingItem = cart.find(item => item.name === newItem.name);

  if (existingItem) {
    // If it exists, just increase the quantity
    existingItem.quantity += 1;
  } else {
    // If it's a new item, add it to the cart
    cart.push(newItem);
  }

  // Save the updated cart back to localStorage
  sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
}


      