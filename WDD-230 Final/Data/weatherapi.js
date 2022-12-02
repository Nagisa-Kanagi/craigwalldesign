const weatherApiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5334223&units=imperial&appid=b7459806cc0deb3409dbe6c09533b316";
const forecastApiURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=5334223&units=imperial&appid=b7459806cc0deb3409dbe6c09533b316";


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

    if (document.querySelector("#humidity") !== null) {
      document.querySelector("#humidity").textContent = jsonObject.main.humidity;
    }
  
    if (document.querySelector("#currently") !== null) {
      document.querySelector("#currently").textContent = finaldesc;
    }
  })

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
