//  //TODO: add to cart,remove,total cost feature 
// // Initialize shopping cart array
// let cart = [];
// var  totalCost = 0;
// var item = document.get

// // Function to add item to cart
// function addToCart(item, price) {
//   cart.push({ item, price });
//   console.log(`${item} added to cart`);
// }

// // Function to remove item from cart
// function removeFromCart(item) {
//   cart = cart.filter(cartItem => cartItem.item !== item);
//   console.log(`${item} removed from cart`);
// }

// // Function to calculate total cost
// function getTotalCost() {
//   return cart.reduce((total, cartItem) => total + cartItem.price, 0);
// }

// // Example usage
// addToCart("Apple", 0.5);
// addToCart("Banana", 0.3);
// console.log("Total cost: $" + getTotalCost());
// removeFromCart("Apple");
// console.log("Updated total cost: $" + getTotalCost());
 
// var cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from local storage

// function addToCart(button) {
//     var product = button.closest(".products-box");
//     if (product) {
//         cart.push(product.cloneNode(true)); // Clone the product
//         localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to local storage
//         alert("Product added to cart");
//     } else {
//         alert("Something went wrong.");
//     }
// }


// document.addEventListener("DOMContentLoaded", function() {
//     displayCart(); // Display cart items when the cart page is loaded
// });

// function displayCart() {
//     var cartDisplay = document.getElementById("cartDisplay");
//     cartDisplay.innerHTML = ""; // Clear previous content

//     // Load cart from local storage
//     var cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Check if the cart is empty
//     if (cart.length === 0) {
//         cartDisplay.innerHTML = "Your cart is empty.";
//         return; // Stop further execution
//     }

//     // Append each product in the cart to the cart display area
//     cart.forEach(function(product) {
//         // Create a new product div and set its inner HTML from the original product
//         var productClone = document.createElement("div");
//         productClone.className = "products-box";    // inherit any CSS styles from products section container
//         productClone.innerHTML = product.innerHTML; // Copy the inner HTML from the stored product

//         // Append the cloned product to the cart display
//         cartDisplay.appendChild(productClone);
//     });
//}
function addToCart(button) {
    var product = button.closest(".products-box");
    
    if (product) {
                
        // Extract the details from the product element
        var productImage = product.querySelector("img").src;
        var productName = product.querySelector(".product-name").textContent;
        var productPrice = product.querySelector(".product-price").textContent;
        
        // Create a product object
        var productData = {
            image: productImage,
            name: productName,
            price: productPrice
        };

        // Get the existing cart data from localStorage (if any)
        //JSON.parse converts the sting into arrays
        var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Add the new product to the cart array
        cart.push(productData);

        // Save the updated cart back to localStorage
        localStorage.setItem("cartItems", JSON.stringify(cart));
    } else {
        alert("Something went wrong.");
    }
}


// Load and display the cart items on page load
window.onload = function() {
    var cartContainer = document.getElementById("cartDisplay");
    var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Clear the cart display area
    cartContainer.innerHTML = "";

    // Loop through cart items and create HTML for each product
    cart.forEach(function(product, index) {
        var productElement = document.createElement("div");
        productElement.className = "products-box col-12 col-sm-6 col-md-4 col-lg-3 mt-4";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <p class="product-name">${product.name}</p>
            <p class="product-price">${product.price}</p>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartContainer.appendChild(productElement);
    });

    // Add event listener for remove buttons
    var removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach(function(button) {
        button.addEventListener('click', removeFromCart);
    });
};

function removeFromCart(event) {
    var index = event.target.getAttribute('data-index'); // Get the index of the item to remove
    var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cart.length > index) {
        cart.splice(index, 1); // Remove the item at that index
    }

    localStorage.setItem("cartItems", JSON.stringify(cart)); // Update localStorage
    window.location.reload(); // Refresh the page to reflect changes
}







