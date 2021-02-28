//color setup
const primaryColor = '#005288'
const warningColor = '#0F1112'
const successColor = '#A7A9AC'
const dangerColor = '#181C1F'

const themeCookieName = 'theme'
const themeLight = 'light'

const body = document.getElementsByTagName('body')[0]

function setCookie(cname, cvalue, exdays) {
	var d = new Date()
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
	var expires = "expires=" + d.toUTCString()
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
	var name = cname + "="
	var ca = document.cookie.split(';')
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1)
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length)
		}
	}
	return ""
}

loadTheme()

function loadTheme() {
	var theme = getCookie(themeCookieName)
	body.classList.add(theme === "" ? themeLight : theme)
}

function collapseSidebar() {
	body.classList.toggle('sidebar-expand')
}

window.onclick = function (event) {
	openCloseDropdown(event)
}

function closeAllDropdown() {
	var dropdowns = document.getElementsByClassName('dropdown-expand')
	for (var i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove('dropdown-expand')
	}
}

function openCloseDropdown(event) {
	if (!event.target.matches('.dropdown-toggle')) {
		// 
		// Close dropdown when click out of dropdown menu
		// 
		closeAllDropdown()
	} else {
		var toggle = event.target.dataset.toggle
		var content = document.getElementById(toggle)
		if (content.classList.contains('dropdown-expand')) {
			closeAllDropdown()
		} else {
			closeAllDropdown()
			content.classList.add('dropdown-expand')
		}
	}
}

var ctx = document.getElementById('myChart')
ctx.height = 500
ctx.width = 500
var data = {
	labels: ['January', 'February', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	datasets: [{
		fill: false,
		label: 'Completed',
		borderColor: successColor,
		data: [120, 115, 130, 100, 123, 88, 99, 66, 120, 52, 59],
		borderWidth: 2,
		lineTension: 0,
	}, {
		fill: false,
		label: 'Issues',
		borderColor: dangerColor,
		data: [66, 44, 12, 48, 99, 56, 78, 23, 100, 22, 47],
		borderWidth: 2,
		lineTension: 0,
	}]
}

var lineChart = new Chart(ctx, {
	type: 'line',
	data: data,
	options: {
		maintainAspectRatio: false,
		bezierCurve: false,
	}
})


//diagram

//diagram 2
google.charts.load('current', { 'packages': ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

	var data = google.visualization.arrayToDataTable([
		['Label', 'Value'],
		['Fuel', 80],
		['Speed', 55],
		['Acceleration', 68],
		['G-force', 92]
	]);

	var options = {
		width: 400, height: 120,
		redFrom: 90, redTo: 100,
		yellowFrom: 75, yellowTo: 90,
		minorTicks: 5
	};

	var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

	chart.draw(data, options);

	setInterval(function () {
		data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
		chart.draw(data, options);
	}, 13000);
	setInterval(function () {
		data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
		chart.draw(data, options);
	}, 5000);
	setInterval(function () {
		data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
		chart.draw(data, options);
	}, 26000);
	setInterval(function () {
		data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
		chart.draw(data, options);
	}, 16000);
}

//map 
// Initialize and add the map
function initMap() {
	// The location of Uluru
	const uluru = { lat: 52.108703, lng: 5.121527 };
	// The map, centered at Uluru
	const map = new google.maps.Map(document.getElementById("map"), {
	  zoom: 4,
	  center: uluru,
	});
	// The marker, positioned at Uluru
	const marker = new google.maps.Marker({
	  position: uluru,
	  map: map,
	});
  }