// map array and initialising variables
document.addEventListener('DOMContentLoaded', function() {
    let maps = [
        ["Antarctic Peninsula", "Control"],
        ["Blizzard World", "Hybrid"],
        ["Busan", "Control"],
        ["Circuit Royal", "Escort"],
        ["Colosseo", "Push"],
        ["Dorado", "Escort"],
        ["Eichenwalde", "Hybrid"],
        ["Esperanca", "Push"],
        ["Havana", "Escort"],
        ["Hollywood", "Hybrid"],
        ["Illios", "Control"],
        ["Junkertown", "Escort"],
        ["Kings Row", "Hybrid"],
        ["Lijang Tower", "Control"],
        ["Midtown", "Hybrid"],
        ["Nepal", "Control"],
        ["New Junk City", "Flashpoint"],
        ["New Queens Street", "Push"],
        ["Numbani", "Hybrid"],
        ["Oasis", "Control"],
        ["Paraiso", "Hybrid"],
        ["Rialto", "Escort"],
        ["Route 66", "Escort"],
        ["Runasapi", "Push"],
        ["Samoa", "Control"],
        ["Shambali Monastery", "Escort"],
        ["Suravasa", "Flashpoint"],
        ["Watchpoint: Gibraltar", "Escort"]
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
    li.innerText = maps[i][0];
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
        li[i].classList.toggle("invisible", !maps[i][0].toLowerCase().includes(filter)); //if the map name doesnt contain the user input then hide it
    }
    for (const [mapName, gameMode] of maps) { // loops through the map array 
        if (mapName.toLowerCase() === filter) { // if the user input is a complete map name
            mapSearch.blur(); // unfocuses the map search
            setMap(mapName, gameMode); // sets the map and game mode
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
        setMap(maps[index][0], maps[index][1]); // set the map to the element that was clicked on
    }
});

