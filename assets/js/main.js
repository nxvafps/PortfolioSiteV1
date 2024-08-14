document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL path
    const currentPath = window.location.pathname;

    // Function to get the relative path from the full path
    function getRelativePath(fullPath) {
        const pathArray = fullPath.split('/');
        return pathArray[pathArray.length - 1];
    }

    // Get the relative path of the current URL
    const relativeCurrentPath = getRelativePath(currentPath);

    // Get all navigation links
    const navLinks = document.querySelectorAll(".navLink");

    // Get all side menu links
    const sideMenuLinks = document.querySelectorAll(".sideMenuLink");

    // Loop through each navigation link
    navLinks.forEach(link => {
         // Get the relative path of the link's href
         const url = link.getAttribute("data-url");
         const relativeLinkPath = getRelativePath(url);
         // Check if the link's relative path matches the current relative path
         if (relativeLinkPath === relativeCurrentPath) {
             // Add the currentNavLink class to the matching link
             link.classList.add("currentNavLink");
             link.setAttribute("href", "#");
         } else {
             // Remove the currentNavLink class from non-matching links
             link.classList.remove("currentNavLink");
             link.setAttribute("href", url);
         }
    });

    // Loop through each side menu link
    sideMenuLinks.forEach(sideLink => {
        // Get the relative path of the link's href
        const url = sideLink.getAttribute("data-url");
        const relativeLinkPath = getRelativePath(url);
        // Check if the link's relative path matches the current relative path
        if (relativeLinkPath === relativeCurrentPath) {
            // Add the currentNavLink class to the matching link
            sideLink.setAttribute("href", "");
        } else {
            // Remove the currentNavLink class from non-matching links
            sideLink.setAttribute("href", url);
        }
    });

});


const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeButton = document.getElementById("closeButton")
const sideMenu = document.getElementById("sideMenu");

document.addEventListener("click", (event) =>{
    if(hamburgerMenu.contains(event.target)|| closeButton.contains(event.target))
    {
        sideMenu.classList.toggle("open");
    }
});
