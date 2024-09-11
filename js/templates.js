$(document).ready(function() {
    const headerHTML = `
        <header id="navContainer">
            <div id="navLeft">
                <div id="navIconContainer">
                    <img src="../assets/icons/logo.png" id="navIcon" alt="nova icon">
                </div>
                <div id="iconNameContainer">
                    <h1 id="navText">novaFPS</h1>
                </div>
            </div>

            <nav id="navRight">
                <div class="linkContainer">
                    <a href="./home.html" id="homeLink" class="navLink" data-url="./home.html">Home</a>
                </div>
                <div class="linkContainer">
                    <a href="./portfolioProjects.html" id="projectsLink" class="navLink" data-url="./portfolioProjects.html">Portfolio</a>
                </div>
                <div class="linkContainer">
                    <a href="./socials.html" id="socialsLink" class="navLink" data-url="./socials.html">Socials</a>
                </div>
            </nav>
            <button id="hamburgerMenu">&#9776;</button>
        </header>
    `

    $('#header').prepend(headerHTML);

    $(document).ready(function() {
        const currentPath = window.location.pathname.split('/').pop();
    
        $(".navLink").each(function() {
            const $link = $(this);
            const relativeLinkPath = $link.data("url").split('/').pop();
    
            if (relativeLinkPath === currentPath) {
                $link.addClass("currentNavLink").attr("href", "#");
            } else {
                $link.removeClass("currentNavLink").attr("href", $link.data("url"));
            }
        });
    });

    // Side Menu HTML Template
    const sideMenuHTML = `
        <div id="sideMenuContainer">
            <a href="javascript:void(0)" id="closeButton">&times;</a>
            <a href="./nv1Home.html" class="sideMenuLink" data-url="./nv1Home.html">Home</a>
            <a href="./nv1Track.html" class="sideMenuLink" data-url="./nv1Track.html">Track</a>
            <a href="./nv1View.html" class="sideMenuLink" data-url="./nv1View.html">View</a>
            <a href="./nv1Stats.html" class="sideMenuLink" data-url="./nv1Stats.html">Stats</a>
            <a href="./nv1Wiki.html" class="sideMenuLink" data-url="./nv1Wiki.html">Wiki</a>
            <a href="./nv1Comp.html" class="sideMenuLink" data-url="./nv1Comp.html">Comp</a>
        </div>
    `;

    // Insert the side menu HTML into the body
    $('#sideMenu').prepend(sideMenuHTML);

    // Add the JavaScript for the side menu
    const $hamburgerMenu = $("#hamburgerMenu"),
          $closeButton = $("#closeButton"),
          $sideMenu = $("#sideMenuContainer");

    $(document).on("click", (event) => {
        if ($hamburgerMenu.is(event.target) || $closeButton.is(event.target)) {
            $sideMenu.toggleClass("open");
        }
    });

    $(".sideMenuLink").each(function() {
        const $link = $(this)
        $link.attr("href", $link.data("url").split('/').pop() === window.location.pathname.split('/').pop() ? "#" : $link.data("url"));
    });

    const footerHTML = `
        <footer id="footerContainer">
            <a href="https://www.youtube.com/@nxvafps">
                <img src="../images/footerIcons/youtubeIcon.png" target="_blank" alt="Youtube Icon">
            </a>
            <a href="https://www.x.com/nxvafps">
                <img src="../images/footerIcons/twitterIcon.png" target="_blank" alt="Twitter Icon">
            </a>
            <a href="https://www.tiktok.com/@nxvafps">
                <img src="../images/footerIcons/tiktokIcon.png" target="_blank" alt="Tiktok Icon">
            </a>
            <a href="https://www.twitch.com/nxvafps">
                <img src="../images/footerIcons/twitchIcon.png" target="_blank" alt="Twitch Icon">
            </a>
            <a href="https://www.discord.gg/tSNujPdzAu">
                <img src="../images/footerIcons/discordIcon.png" target="_blank" alt="Discord Icon">
            </a>
        </footer>
    `

    $('#footer').prepend(footerHTML);
});

