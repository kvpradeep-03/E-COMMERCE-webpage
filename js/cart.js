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



// Load and display the cart items when the page loads
window.onload = function() {
    var cartContainer = document.getElementById("cartDisplay");
    var cart = JSON.parse(localStorage.getItem("cartItems")) || [];
        // Check if the cart is empty
    if (cart === null || cart.length === 0) {
        var purchaseGreet = document.createElement("div")
        purchaseGreet.className = "bg-body-tertiary p-5 rounded";
        purchaseGreet.innerHTML = `
            <h1>Oops Your Cart Is Empty ...</h1>
            <p class="lead">Your Cart Feels a Little Lonely!</p>
            <a class="btn btn-lg btn-warning" style="background-color: #1d232c; color: white;" href="collection.html" role="button">View Products</a>`;
        
            // Append the message to the cartContainer
        cartContainer.innerHTML = ''; // Clear any previous content
        cartContainer.appendChild(purchaseGreet);
        return; // Exit if the cart is empty
    }
    // Clear the cart display area
    cartContainer.innerHTML = "";
    // Loop through cart items and create HTML for each product
    cart.forEach(function(product, index) {
        var productElement = document.createElement("div");
        productElement.className = "cart-container d-inline-flex flex-lg-row flex-sm-column p-3 modal-body";
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <p class="product-name mt-3 p-3 mt-sm-2 w-75">${product.name}</p>
            <p class="product-price mt-3 p-3 mt-sm-2 w-50">${product.price}</p>
            <button class="remove-item mt-3 h-25 mt-sm-2 btn btn-danger" data-index="${index}">Remove</button>

        `;
        cartContainer.appendChild(productElement);
    });



// Add event listener for remove buttons
var removeButtons = document.querySelectorAll('.remove-item');
removeButtons.forEach(function(button) {
    button.addEventListener('click', removeFromCart);
});
function removeFromCart(event) {
    var index = event.target.getAttribute('data-index'); // Get the index of the item to remove
    var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (cart.length > index) {
        cart.splice(index, 1); // Remove the item at that index
    }

    localStorage.setItem("cartItems", JSON.stringify(cart)); // Update localStorage
    window.location.reload(); // Refresh the page to reflect changes
}
    

    
// Calculate the total price
var total = document.createElement('div');
total.className = "total p-3";
var totalPrice = cart.reduce((acc, product) => {
    // Convert price to number and check if it's a valid number
    let price = parseFloat(product.price.replace(/[^0-9.-]+/g,"")); // Remove any non-numeric characters
    if (isNaN(price)) {
        console.warn(`Invalid price for product ${product.name}: ${product.price}`); // Log invalid prices for debugging
        return acc; // If price is invalid, return current accumulator
    }
    return acc + price; // Add valid price to accumulator
}, 0);
    
    // Set the inner HTML for the total
    total.innerHTML = `<h1>Total: &#x20B9; ${totalPrice.toFixed(2)}</h1>            
    <div class="d-flex justify-content-center">
        <button class="btn btn-primary btn-lg w-25 w-sm-25" type="submit" onclick="window.location.href='checkout.html'">Continue to checkout</button>
    </div>`
    ;
    
    // Append the total to the cart container (assuming you have a reference to it)
    cartContainer.appendChild(total);
    

};

// function checkOut(button) {
//     // Get cart items from localStorage
//     var cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    
//     // Store the cart items into localStorage for the checkout page
//     localStorage.setItem("checkoutItems", JSON.stringify(cart));
    
//     // Redirect to the checkout page
//     window.location.href = "checkout.html";
// }










