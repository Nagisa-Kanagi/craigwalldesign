const weatherApiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&appid=b7459806cc0deb3409dbe6c09533b316";
const forecastApiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&appid=b7459806cc0deb3409dbe6c09533b316";

fetch(weatherApiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    if (document.querySelector("#currently") !== null) {
      document.querySelector("#currently").textContent =
        jsonObject.weather[0].main;
      document.querySelector("#temperature").textContent = jsonObject.main.temp;
      document.querySelector("#humidity").textContent =
        jsonObject.main.humidity;
      document.querySelector("#speed").textContent = jsonObject.wind.speed;
    }

    if (document.querySelector("#imagesrc") !== null) {
      const imagesrc =
        "https://openweathermap.org/img/w/" +
        jsonObject.weather[0].icon +
        ".png";
      const desc = jsonObject.weather[0].description;
      document.querySelector("#imagesrc").textContent = imagesrc;
      document.querySelector("#icon").setAttribute("src", imagesrc);
      document.querySelector("#icon").setAttribute("alt", desc);
    }
  });

fetch(forecastApiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const forecasts = jsonObject["list"].filter((forecast) => {
      if (forecast.dt_txt.includes(" 12:00:00")) {
        return forecast;
      }
    });

    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    for (let i = 0; i < forecasts.length; i++) {
      let card = document.createElement("div");
      card.setAttribute("class", "flex-col");

      let spanDay = document.createElement("span");
      spanDay.setAttribute("class", "col-head");
      const d = new Date(forecasts[i].dt_txt);
      spanDay.textContent = weekday[d.getDay()];
      card.appendChild(spanDay);

      let image = document.createElement("img");
      let imagesrc =
        "https://openweathermap.org/img/w/" +
        forecasts[i].weather[0].icon +
        ".png";
      let desc = forecasts[i].weather[0].description;
      image.setAttribute("class", "image-day");
      image.setAttribute("src", imagesrc);
      image.setAttribute("alt", desc);
      card.appendChild(image);

      let spanTemp = document.createElement("span");
      spanTemp.setAttribute("class", "data");
      let floatTemp = parseFloat(forecasts[i].main.temp);
      let roundTemp = Math.round(floatTemp);
      spanTemp.textContent = roundTemp + "°F";
      card.appendChild(spanTemp);

      document.querySelector("div.flex").appendChild(card);
    }
  });