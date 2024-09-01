// map array and initialising variables
document.addEventListener('DOMContentLoaded', function() {
    let maps = [
        {
          name: "Antarctic Peninsula",
          mode: "Control",
          submaps: ["Icebreaker", "Labs", "Sublevel"]
        },
        {
          name: "Blizzard World",
          mode: "Hybrid",
          distances: [113.67, 111.54]
        },
        {
          name: "Busan",
          mode: "Control",
          submaps: ["Downtown", "Meka Base", "Sanctuary"]
        },
        {
          name: "Circuit Royal",
          mode: "Escort",
          distances: [96.59, 90.83, 93.94]
        },
        {
          name: "Colosseo",
          mode: "Push",
          distance: 139.49
        },
        {
          name: "Dorado",
          mode: "Escort",
          distances: [84.99, 96.22, 85.87]
        },
        {
          name: "Eichenwalde",
          mode: "Hybrid",
          distances: [128.10, 67.63]
        },
        {
          name: "Esperanca",
          mode: "Push",
          distance: 142.41
        },
        {
          name: "Havana",
          mode: "Escort",
          distances: [89.33, 92.73, 103.31]
        },
        {
          name: "Hollywood",
          mode: "Hybrid",
          distances: [119.10, 79.02]
        },
        {
          name: "Illios",
          mode: "Control",
          submaps: ["Lighthouse", "Ruins", "Well"]
        },
        {
          name: "Junkertown",
          mode: "Escort",
          distances: [90.92, 86.55, 101.88]
        },
        {
          name: "Kings Row",
          mode: "Hybrid",
          distances: [114.67, 70.24]
        },
        {
          name: "Lijang Tower",
          mode: "Control",
          submaps: ["Control Center", "Garden", "Night Market"]
        },
        {
          name: "Midtown",
          mode: "Hybrid",
          distances: [113.46, 95.26]
        },
        {
          name: "Nepal",
          mode: "Control",
          submaps: ["Sanctum", "Shrine", "Village"]
        },
        {
          name: "New Junk City",
          mode: "Flashpoint"
        },
        {
          name: "New Queens Street",
          mode: "Push",
          distance: 128.11
        },
        {
          name: "Numbani",
          mode: "Hybrid",
          distances: [96.88, 71.71]
        },
        {
          name: "Oasis",
          mode: "Control",
          submaps: ["City Center", "Gardens", "University"]
        },
        {
          name: "Paraiso",
          mode: "Hybrid",
          distances: [123.73, 92.38]
        },
        {
          name: "Rialto",
          mode: "Escort",
          distances: [97.08, 104.64, 88.03]
        },
        {
          name: "Route 66",
          mode: "Escort",
          distances: [84.77, 91.25, 74.57]
        },
        {
          name: "Runasapi",
          mode: "Push",
          distance: 144.85
        },
        {
          name: "Samoa",
          mode: "Control",
          submaps: ["Beach", "Downtown", "Volcano"]
        },
        {
          name: "Shambali Monastery",
          mode: "Escort",
          distances: [104.13, 104.61, 87.13]
        },
        {
          name: "Suravasa",
          mode: "Flashpoint"
        },
        {
          name: "Watchpoint: Gibraltar",
          mode: "Escort",
          distances: [86.05, 82.28, 88.72]
        }
      ];
      

    const mapContainer = document.querySelector("#mapContainer"),
    mapList = document.querySelector("#mapList"),
    mapSearch = document.querySelector("#mapSearch"),
    mapText = document.querySelector("#mapText"),
    gameModeContainer = document.querySelector("#gameModeContainer"),
    gameModeText = document.querySelector("#gameModeText"),
    gameModeImg = document.querySelector("#gameModeImg");

});

// creates the map list
for (let i = 0; i < maps.length; i++) {
    let li = document.createElement("li");
    li.innerText = maps[i].name;
    li.setAttribute("data-index", i);
    li.classList.add("mapListItem");
    mapList.appendChild(li);
    dropdownVis("hide");
}

// controls whether the map dropdown is shown or hidden
function dropdownVis(a) {
    mapList.classList.toggle("invisible", a === "hide");
    mapSearch.classList.toggle("border", a === "show");
}

// controls whether the map search option or the plain text value is shown
function mapSearchVis(a) {
    mapSearch.classList.toggle("invisible", a === "hide");
    mapText.classList.toggle("invisible", a === "show");
}

// sets the map text and map select values equal to the user input and the game mode text and image values equal to their respective value if the user input is a valid map
function setMap(e, f) {
    mapSearch.value = e;
    mapText.innerText = e;
    mapSearchVis("hide");
    dropdownVis("hide");
    gameModeText.innerText = f;
    gameModeImg.setAttribute("src", "../assets/Images/gameModes/" + f + ".png");
    gameModeImg.classList.remove("invisible")
}

mapSearch.addEventListener("keyup", () => { // a function that is called everytime the user types in the input field
    const filter = mapSearch.value.toLowerCase(); // converts the user input to lower case
    const li = mapList.querySelectorAll("li"); // stores the current list values in a variable
    dropdownVis("show"); // shows the dropdown list
    for (let i = 0; i < li.length; i++) { // for loop to chedk user input against the map list
        li[i].classList.toggle("invisible", !maps[i].name.toLowerCase().includes(filter)); //if the map name doesnt contain the user input then hide it
    }
    for (const map of maps) { // loops through the map array 
        if (mapName.toLowerCase() === filter) { // if the user input is a complete map name
            mapSearch.blur(); // unfocuses the map search
            setMap(map.name, map.mode); // sets the map and game mode
            return; 
        }
    }
    gameModeImg.classList.add("invisible");
    gameModeImg.setAttribute("src", "");
    gameModeText.innerText = "";
});

// Listener for clicks on the page 
document.addEventListener("click", (event) => {
    if (!(mapContainer.contains(event.target))) { // if the click was not on an element inside of the map selection container
        dropdownVis("hide"); // hide the dropdown menu
        return;
    }
    if (mapText.contains(event.target) || mapSearch.contains(event.target)) { // if the click was inside of the map text or map search element 
        mapSearchVis("show"); // show the map input element and hide the map text element
        dropdownVis("show"); // show the map dropdown list
        mapSearch.focus(); // focus on the map input element
        return;
    }
    if (event.target.classList.contains("mapListItem")) { // if the click was on a map list element
        const index = event.target.getAttribute("data-index"); // get the index value of the map in the original array
        setMap(maps[index].name, maps[index].mode); // set the map to the element that was clicked on
    }
});

