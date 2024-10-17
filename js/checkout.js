function checkOut(button){
        // Get the cart data from localStorage
        var checkoutItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        
        // Reference to the <ul> where the products will be appended
        var productList = document.querySelector('.list-group');
        
        // Clear existing content to avoid duplicates
        productList.innerHTML = '';
    
        // Loop through each cart item and create list elements for checkout
        checkoutItems.forEach(function(product, index) {
            var listItem = document.createElement('li');
            listItem.className = "listgroupitem d-flex justify-content-between lh-sm";
            listItem.innerHTML = `
                <div>
                    <h6 class="my-0">${product.name}</h6>
                    <small class="text-body-secondary">Product description</small>
                </div>
                <span class="text-body-secondary">${product.price}</span>
            `;
            
            // Append the list item to the product list
            productList.appendChild(listItem);
        });
    
        // Calculate and display the total price
        var totalPrice = checkoutItems.reduce((acc, product) => {
            let price = parseFloat(product.price.replace(/[^0-9.-]+/g,""));
            if (isNaN(price)) return acc;
            return acc + price;
        }, 0);
    
        // Add the total price at the bottom of the list
        var totalItem = document.createElement('li');
        totalItem.className = "listgroupitem d-flex justify-content-between";
        totalItem.innerHTML = `
            <span>Total (USD)</span>
            <strong>$${totalPrice.toFixed(2)}</strong>
        `;
        productList.appendChild(totalItem);
    };
