$(document).ready(function() {
    const headerHTML = `
        <header id="navContainer">
            <div id="navLeft">
                <div id="navIconContainer">
                    <img src="../images/owLogo.png" id="navIcon" alt="nova icon">
                </div>
                <div id="iconNameContainer">
                    <h1 id="navText">NV1 - Overwatch Tools</h1>
                </div>
            </div>

            <nav id="navRight">
                <div class="linkContainer">
                    <a href="./nv1Home.html" id="homeLink" class="navLink" data-url="./nv1Home.html">Home</a>
                </div>
                <div class="linkContainer">
                    <a href="./nv1Track.html" id="trackLink" class="navLink" data-url="./nv1Track.html">Track</a>
                </div>
                <div class="linkContainer">
                    <a href="./nv1View.html" id="viewLink" class="navLink" data-url="./nv1View.html">View</a>
                </div>
                <div class="linkContainer">
                    <a href="./nv1Stats.html" id="statsLink" class="navLink" data-url="./nv1Stats.html">Stats</a>
                </div>
                <div class="linkContainer">
                    <a href="./nv1Wiki.html" id="wikiLink" class="navLink" data-url="./nv1Wiki.html">Wiki</a>
                </div>
                <div class="linkContainer">
                    <a href="./nv1Comp.html" id="compLink" class="navLink" data-url="./nv1Comp.html">Comp</a>
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
            <a href="./home.html" class="sideMenuLink" data-url="./home.html">Home</a>
            <a href="./portfolioProjects.html" class="sideMenuLink" data-url="./portfolioProjects.html">Portfolio</a>
            <a href="./socials.html" class="sideMenuLink" data-url="./socials.html">Socials</a>
        </div>
    `;

    // Insert the side menu HTML into the body
    $('#sideMenu').prepend(sideMenuHTML);

    // Add the JavaScript for the side menu
    $(function() {
        const $hamburgerMenu = $("#hamburgerMenu"),
              $closeButton = $("#closeButton"),
              $sideMenu = $("#sideMenuContainer");
    
        $(document).on("click", (event) => {
            if ($hamburgerMenu.is(event.target) || $closeButton.is(event.target)) {
                $sideMenu.toggleClass("open");
            }
        });
    
        const relativeCurrentPath = window.location.pathname.split('/').pop();
        console.log(relativeCurrentPath);
    
        $(".sideMenuLink").each(function() {
            const $link = $(this),
                  relativeLinkPath = $link.data("url").split('/').pop();
            $link.attr("href", relativeLinkPath === relativeCurrentPath ? "#" : $link.data("url"));
        });
    });

    const footerHTML = `
        <div id="returnButtonContainer">
            <a href="../../home.html" id="returnButton" data-url="../home.html">Click here to return to the main site</a>
        </div>
        <footer id="footerContainer">
            <a href="https://www.youtube.com/@nxvafps">
                <img src="../../../images/footerIcons/youtubeIcon.png" target="_blank" alt="Youtube Icon">
            </a>
            <a href="https://www.x.com/nxvafps">
                <img src="../../../images/footerIcons/twitterIcon.png" target="_blank" alt="Twitter Icon">
            </a>
            <a href="https://www.tiktok.com/@nxvafps">
                <img src="../../../images/footerIcons/tiktokIcon.png" target="_blank" alt="Tiktok Icon">
            </a>
            <a href="https://www.twitch.com/nxvafps">
                <img src="../../../images/footerIcons/twitchIcon.png" target="_blank" alt="Twitch Icon">
            </a>
            <a href="https://www.discord.gg/tSNujPdzAu">
                <img src="../../../images/footerIcons/discordIcon.png" target="_blank" alt="Discord Icon">
            </a>
        </footer>
    `

    $('#footer').prepend(footerHTML);
});

