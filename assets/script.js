apiCode =
	'https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=imperial&appid=c42089a86cad8deed9e15ba4ffa5786f';

let weather = {
	apiKey: 'c42089a86cad8deed9e15ba4ffa5786f',
	fetchWeather: function (city) {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=' +
				city +
				'&units=imperial&appid=' +
				this.apiKey
		)
			.then((res) => res.json())
			.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		document.querySelector('.city').innerText = 'Weather in ' + name;
		document.querySelector('.city-icon').src =
			'https://openweathermap.org/img/wn/' + icon + '.png';
		document.querySelector('.city-temp').innerText = temp + '℉';
		document.querySelector('.city-description').innerText = description;
	},
	search: function () {
		this.fetchWeather(document.querySelector('.searchBar').value);
	},
};
document.querySelector('.searchBtn').addEventListener('click', function () {
	weather.search();
});
