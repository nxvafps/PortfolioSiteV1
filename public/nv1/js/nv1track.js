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
	name: "Hanaoka",
	mode: "Clash"
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
	name: "Throne of Annubis",
	mode: "Clash"
	},
	{
	name: "Watchpoint: Gibraltar",
	mode: "Escort",
	distances: [86.05, 82.28, 88.72]
	}
	];
	
	const mapSelect = $('#mapSelect'),
	mapList = $('#mapList'),
	mapInput = $('#mapInput'),
	mapText = $('#mapText'),
	modeContainer = $('#modeContainer'),
	modeText = $('#modeText'),
	modeImg = $('#modeImg');
	
	modeContainer.hide();
	
	function dropdownVis(a) { 
		a === 'hide' ? mapList.hide() : mapList.show();
		mapInput.toggleClass('border', a === 'hide');
	}
	
	function mapSearchVis(a) { // controls whether the map search option or the plain text value is shown
		a === 'hide' ? mapInput.hide() : mapInput.show();
		a === 'show' ? mapText.hide() : mapText.show();
	}
	
	function setMap(e, f) {
		mapInput.blur(); 
		mapInput.val(e); // sets the map input to the inputted value
		mapText.text(e); // sets the map text to the inputted value
		mapSearchVis('hide'); // shows the plain text value
		dropdownVis('hide'); // hides the map dropdown
		modeText.text(f); // sets the game mode text value to the corresponding value
		modeImg.attr('src', `../images/gameModes/${f}.png`);
		modeContainer.show(); // sets the map image and makes it visible
	}
	
	$.each(maps, function(index, map) {
		$('<li>')
			.text(map.name)
			.attr('data-index', index)
			.addClass('mapListItem')
			.appendTo('#mapList');
	});
	dropdownVis('hide');
	
	mapInput.on('keyup', function() {
		const filter = $(this).val().toLowerCase();
		const $li = $('#mapList li');
		dropdownVis('show');
	
		$li.each(function(index) { // hides the map in the list if it doesn't contain the input
			!maps[index].name.toLowerCase().includes(filter) ? $(this).hide() : $(this).show();
		});
	
		for (const map of maps) {
			if (map.name.toLowerCase() === filter) {
				
				setMap(map.name, map.mode);
				return;
			}
		}
		modeContainer.hide();
	});
	
	$(document).on('click', function(event) {
		if (!mapSelect.is(event.target) && !mapSelect.has(event.target).length) { // if nothing inside of the map select is clicked on
			dropdownVis('hide');
			return;
		}
		if (mapText.is(event.target) || mapInput.is(event.target)) { // if map text or input are clicked on
			mapSearchVis('show');
			dropdownVis('show');
			modeContainer.hide();
			mapInput.focus();
			return;
		}
		if ($(event.target).hasClass('mapListItem')) { // if a map list item is clicked on
			const index = $(event.target).data('index');
			setMap(maps[index].name, maps[index].mode);
	
		}
	});
	