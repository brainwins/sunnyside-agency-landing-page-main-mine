const button = document.querySelector(".hamburger-menu-container");
const menu = document.querySelector(".mobile-menu");
menu.style.display = "none"

button.addEventListener('click', function() {
    if(menu.style.display == "none") {
        
        console.log(menu.style.display)
    menu.style.display = "flex"
    }
    else {
        console.log("disappear")
    menu.style.display = "none"
    }
})