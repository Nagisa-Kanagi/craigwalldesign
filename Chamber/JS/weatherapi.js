//OpenWeatherMap: API Key (AppId) - 3269efc82e03c378edf3680c194b11a1
const weatherApiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=b7459806cc0deb3409dbe6c09533b316";

fetch(weatherApiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    if (document.querySelector("#temperature") !== null) {
      document.querySelector("#temperature").textContent = jsonObject.main.temp;
    }

    if (document.querySelector("#chill") !== null) {
      document.querySelector("#chill").textContent = jsonObject.wind.deg;
    }

    if (document.querySelector("#speed") !== null) {
      document.querySelector("#speed").textContent = jsonObject.wind.speed;
    }
  });
