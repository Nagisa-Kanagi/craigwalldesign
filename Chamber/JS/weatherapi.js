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
      document.querySelector("#chill").textContent = jsonObject.main.feels_like;
    }

    if (document.querySelector("#speed") !== null) {
      document.querySelector("#speed").textContent = jsonObject.wind.speed;
    }
  });
