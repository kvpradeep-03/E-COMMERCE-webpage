var productContainer = document.getElementById("products") // Get the container holding the products
var search = document.getElementById("search") // Get the search input field
var productlist = productContainer.querySelectorAll("div") // Get all product divs inside the container

// Add an event listener for the search input field to detect key presses
search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase() // Get the typed value and convert it to uppercase

    // Loop through all products
    for (count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent // Get the product name from <p> tag

        // Check if the typed value is not in the product name
        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none" // Hide the product if no match is found
        } else {
            productlist[count].style.display = "block" // Show the product if a match is found
        }
    }
})

