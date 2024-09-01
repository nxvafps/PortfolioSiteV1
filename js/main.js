let projectList = [
    [
        "./nv1/nv1Home.html", 
        "Overwatch Competetive Tracker", 
        "../images/nv1/owLogo.png", 
        "When Overwatch 2 released in late 2022, the competetive mode required you to win 5 games, or lose 15 before displaying your new rank.Between ranked displays there was no way for you to see how many you had won or lost. I designed a spreadsheet so I could track this. <br> <br> Since then the development team have reworked the skill rating system so it is similar to Overwatch 1, however I still want to develop this game tracker. I feel like it could be a useful tool for coaching and VOD review, and also could help to fill the gap in analysis that cannot be done in the game.", 
        "y",
        "nv1"
    ]
];

function displayCurrentProject() {
    const currentProject = projectList.find(project => project[4] === "y");
    if (currentProject) {
        const container = document.getElementById('currentProjectContainer');
        container.innerHTML = `
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
        `;
    }
}

function displayAllProjects() {
    const container = document.getElementById("portfolioContainer");
    projectList.forEach(project => {
        const projectElement = document.createElement("article");
        projectElement.className = "projectContainer";
        projectElement.setAttribute("data-url", project[0]);
        projectElement.innerHTML = `
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
        `;
        container.appendChild(projectElement);
    });
}

function displayProjectDetails(details) {
    const container = document.getElementById("projectDetails");
    container.innerHTML = details;
}




document.addEventListener("DOMContentLoaded", function() {

    let elements = document.querySelectorAll("[data-include]");
    elements.forEach(el => {
        let file = el.getAttribute("data-include");
        fetch(file)
            .then(res => res.text())
            .then(data => {
                el.innerHTML = data;
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");
                const scripts = doc.querySelectorAll("script");
                scripts.forEach(script => {
                    eval(script.textContent);
                });
            })
            .catch(error => console.error("Error loading file:", error));
    });

    const page = document.body.getAttribute('data-page');
    if (page === "home") {
        displayCurrentProject();
    } else if (page === "portfolio") {
        displayAllProjects();
    }

    for(let i = 0; i < projectList.length; i++) {
        if (page === projectList[i][5] + "Home") {
            displayProjectDetails(projectList[i][3]);
        }
    }

});



