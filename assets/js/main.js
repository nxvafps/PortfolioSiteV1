const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeButton = document.getElementById("closeButton")
const sideMenu = document.getElementById("sideMenu");

document.addEventListener("click", (event) =>{
    console.log("Clicked element:", event.target);
    if(hamburgerMenu.contains(event.target)|| closeButton.contains(event.target))
    {
        console.log("Toggling side menu");
        sideMenu.classList.toggle("open");
    }
});
