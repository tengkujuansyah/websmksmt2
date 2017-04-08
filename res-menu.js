
var ul = document.getElementById("mytopnav");
var icon = document.querySelector('.icon');

function showMenu() {
    if (icon.style.background == "transparent") {
    	icon.style.background = "rgba(20, 20, 20, 0.5)";
    	icon.style.borderBottom = "1px solid black";
    } else {
    	icon.style.background = "transparent";
    	icon.style.borderBottom = "none";
    }
    if (ul.style.display == "none") {
    	ul.style.display = "block";
    } else {
    	ul.style.display = "none";
    }
}