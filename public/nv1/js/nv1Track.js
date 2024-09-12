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
	
	$(document).ready(() => {
		modeContainer.hide();
		maps.forEach((map, index) => {
			$('<li>')
				.text(map.name)
				.attr('data-index', index)
				.addClass('mapListItem')
				.appendTo(mapList);
		});
		mapList.hide();
	});

	const setMap = (map, mode) => {
		mapInput.blur().val(map).hide(); 
		mapText.text(map).show(); // sets the map text to the inputted value
		mapList.hide(); // hides the map dropdown
		modeText.text(mode); // sets the game mode text value to the corresponding value
		modeImg.attr('src', `../images/gameModes/${mode}.png`);
		modeContainer.show(); // sets the map image and makes it visible
	};
	
	mapInput.on('keyup', () => {
		const filter = $(this).val().toLowerCase();
		const $li = $('#mapList li');
		mapList.show();
	
		$li.each((index, element) => { // hides the map in the list if it doesn't contain the input
			$(element).toggle(maps[index].name.toLowerCase().includes(filter));
		});
	
		const map = maps.find(map => map.name.toLowerCase() === filter);
		if (map) {
			setMap(map.name, map.mode);
		} else {
			modeContainer.hide();
		}
	});
	
	$(document).on('click', (event) => {
		if (!mapSelect.is(event.target) && !mapSelect.has(event.target).length) { // if nothing inside of the map select is clicked on
			mapList.hide();
			return;
		}
		if (mapText.is(event.target) || mapInput.is(event.target)) { // if map text or input are clicked on
			mapInput.show().focus();
			mapList.show();
			mapText.hide();
			modeContainer.hide();
			return;
		}
		if ($(event.target).hasClass('mapListItem')) { // if a map list item is clicked on
			const index = $(event.target).data('index');
			setMap(maps[index].name, maps[index].mode);
	
		}
	});