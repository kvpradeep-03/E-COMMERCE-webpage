var sidenav = document.querySelector(".side-navbar")
 

function showNavbar(event){
    sidenav.style.left = "0"
    
}

function closeNavbar(event){
    sidenav.style.left = "-80%"

}

// Select all buttons with the class 'shopnow'
var buttons = document.querySelectorAll(".shopnow");

// Loop through each button and add a click event listener
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        window.location.href = "collection.html"; // Replace with the actual page URL
    });
});
