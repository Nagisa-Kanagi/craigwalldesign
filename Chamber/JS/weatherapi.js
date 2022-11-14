const weatherApiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=b7459806cc0deb3409dbe6c09533b316";

fetch(weatherApiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const imagesrc = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    const desc = jsonObject.weather[0].description;
    const finaldesc = desc.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    if (document.querySelector("#temperature") !== null) {
      document.querySelector("#temperature").textContent = jsonObject.main.temp;
      document.querySelector("#weather-icon").textContent = imagesrc;
      document.querySelector("#weather-icon").setAttribute("src", imagesrc);
      document.querySelector("#weather-icon").setAttribute("alt", desc);
    }

    if (document.querySelector("#chill") !== null) {
      document.querySelector("#chill").textContent = jsonObject.main.feels_like;
    }

    if (document.querySelector("#speed") !== null) {
      document.querySelector("#speed").textContent = jsonObject.wind.speed;
    }
  
    if (document.querySelector("#currently") !== null) {
      const desc = jsonObject.weather[0].description;
      
      document.querySelector("#currently").textContent = finaldesc;
    }
  });
