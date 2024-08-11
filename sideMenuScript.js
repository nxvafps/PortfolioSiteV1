const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeButton = document.getElementById("closeButton")
const sideMenu = document.getElementById("sideMenu");

document.addEventListener("click", (event) =>{
    if(hamburgerMenu.contains(event.target)|| closeButton.contains(event.target))
    {
        sideMenu.classList.toggle("open");
    }
});