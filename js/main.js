const projectList = [
    [
        "./nv1/html/nv1Home.html", 
        "Overwatch Competitive Tracker", 
        "../images/nv1Logo.png", 
        "When Overwatch 2 released in late 2022, the competitive mode required you to win 5 games, or lose 15 before displaying your new rank. Between ranked displays there was no way for you to see how many you had won or lost. I designed a spreadsheet so I could track this. <br><br> Since then the development team have reworked the skill rating system so it is similar to Overwatch 1, however I still want to develop this game tracker. I feel like it could be a useful tool for coaching and VOD review, and also could help to fill the gap in analysis that cannot be done in the game.", 
        "y",
        "nv1"
    ]
];

$(function() {
    $("[data-include]").each(function() {
        const el = $(this);
        $.get(el.data("include"), function(data) {
            el.html(data);
            new DOMParser().parseFromString(data, "text/html").querySelectorAll("script").forEach(script => eval(script.text));
        }).fail(() => console.error("Error loading file:", el.data("include")));
    });

    const page = $("body").data("page");
    if (page === "home") {
        const currentProject = projectList.find(project => project[4] === "y");
        if (currentProject) {
            $("#currentProjectContainer").html(`
                <article class="projectContainer" data-url="${currentProject[0]}">
                    <figure class="projectImgContainer">
                        <img src="${currentProject[2]}" class="projectImg" alt="Project Image">
                    </figure>
                    <div class="projectTitleContainer">
                        <h2 class="projectTitle">${currentProject[1]} (Current)</h2>
                        <hr>
                    </div>
                    <div class="projectDetailsContainer">
                        <p class="projectDetails">${currentProject[3]}</p>
                    </div>
                </article>
            `);
        }
    } else if (page === "portfolio") {
        projectList.forEach(project => {
            $("#portfolioContainer").append(`
                <article class="projectContainer" data-url="${project[0]}">
                    <figure class="projectImgContainer">
                        <img src="${project[2]}" class="projectImg" alt="Project Image">
                    </figure>
                    <div class="projectTitleContainer">
                        <h2 class="projectTitle">${project[1]}</h2>
                        <hr>
                    </div>
                    <div class="projectDetailsContainer">
                        <p class="projectDetails">${project[3]}</p>
                    </div>
                </article>
            `);
        });
    }

    projectList.forEach(project => {
        if (page === `${project[5]}Home`) {
            $("#projectDetails").html(project[3]);
        }
    });
});
