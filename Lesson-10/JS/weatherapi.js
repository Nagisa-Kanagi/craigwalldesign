const weatherApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b7459806cc0deb3409dbe6c09533b316";
const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b7459806cc0deb3409dbe6c09533b316";
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

fetch(weatherApiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
	if(document.querySelector("#current-temp") !== null) {
		document.querySelector("#current-temp").textContent = jsonObject.main.temp;
	}
        if(document.querySelector("#weather-icon") !== null) {
		const imagesrc = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
		const desc = jsonObject.weather[0].description;
		document.querySelector("#weather-icon").textContent = imagesrc;
		document.querySelector("#weather-icon").setAttribute("src", imagesrc);
		document.querySelector("#weather-icon").setAttribute("alt", desc);
	}
  });
