const requestURL = "Data/rentdata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const rides = jsonObject["rides"].filter((ride) => {
      if (
        ride.name === "Honda Metro Scooter"
      ) {
        return ride;
      }
    });

    for (let i = 0; i < rides.length; i++) {

      let td = document.createElement("p");
      td.textContent = rides[i].name;
      document.querySelector("td.name").appendChild(td);

      let td2 = document.createElement("p");
      td2.textContent = rides[i].maximumPersons;
      document.querySelector("td.persons").appendChild(td2);

      let td3 = document.createElement("p");
      td3.textContent = rides[i].reservePrice;
      document.querySelector("td.reserve").appendChild(td3);

      let td4 = document.createElement("p");
      td4.textContent = rides[i].walkInPrice;
      document.querySelector("td.walkIn").appendChild(td4);
      
      
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const rides = jsonObject["rides"].filter((ride) => {
      if (
        ride.name === "Honda Dio Scooter"
      ) {
        return ride;
      }
    });

    for (let i = 0; i < rides.length; i++) {

      let td = document.createElement("p");
      td.textContent = rides[i].name;
      document.querySelector("td.name2").appendChild(td);

      let td2 = document.createElement("p");
      td2.textContent = rides[i].maximumPersons;
      document.querySelector("td.persons2").appendChild(td2);

      let td3 = document.createElement("p");
      td3.textContent = rides[i].reservePrice;
      document.querySelector("td.reserve2").appendChild(td3);

      let td4 = document.createElement("p");
      td4.textContent = rides[i].walkInPrice;
      document.querySelector("td.walkIn2").appendChild(td4);
      
      
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const rides = jsonObject["rides"].filter((ride) => {
      if (
        ride.name === "Honda PCX150 Scooter"
      ) {
        return ride;
      }
    });

    for (let i = 0; i < rides.length; i++) {

      let td = document.createElement("p");
      td.textContent = rides[i].name;
      document.querySelector("td.name3").appendChild(td);

      let td2 = document.createElement("p");
      td2.textContent = rides[i].maximumPersons;
      document.querySelector("td.persons3").appendChild(td2);

      let td3 = document.createElement("p");
      td3.textContent = rides[i].reservePrice;
      document.querySelector("td.reserve3").appendChild(td3);

      let td4 = document.createElement("p");
      td4.textContent = rides[i].walkInPrice;
      document.querySelector("td.walkIn3").appendChild(td4);
      
      
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const rides = jsonObject["rides"].filter((ride) => {
      if (
        ride.name === "Honda Pioneer ATV"
      ) {
        return ride;
      }
    });

    for (let i = 0; i < rides.length; i++) {

      let td = document.createElement("p");
      td.textContent = rides[i].name;
      document.querySelector("td.name4").appendChild(td);

      let td2 = document.createElement("p");
      td2.textContent = rides[i].maximumPersons;
      document.querySelector("td.persons4").appendChild(td2);

      let td3 = document.createElement("p");
      td3.textContent = rides[i].reservePrice;
      document.querySelector("td.reserve4").appendChild(td3);

      let td4 = document.createElement("p");
      td4.textContent = rides[i].walkInPrice;
      document.querySelector("td.walkIn4").appendChild(td4);
      
      
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const rides = jsonObject["rides"].filter((ride) => {
      if (
        ride.name === "Jeep Wrangler—4 door with A/C"
      ) {
        return ride;
      }
    });

    for (let i = 0; i < rides.length; i++) {

      let td = document.createElement("p");
      td.textContent = rides[i].name;
      document.querySelector("td.name5").appendChild(td);

      let td2 = document.createElement("p");
      td2.textContent = rides[i].maximumPersons;
      document.querySelector("td.persons5").appendChild(td2);

      let td3 = document.createElement("p");
      td3.textContent = rides[i].reservePrice;
      document.querySelector("td.reserve5").appendChild(td3);

      let td4 = document.createElement("p");
      td4.textContent = rides[i].walkInPrice;
      document.querySelector("td.walkIn5").appendChild(td4);
      
      
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const rides = jsonObject["rides"].filter((ride) => {
      if (
        ride.name === "Jeep Wrangler—2 door"
      ) {
        return ride;
      }
    });

    for (let i = 0; i < rides.length; i++) {

      let td = document.createElement("p");
      td.textContent = rides[i].name;
      document.querySelector("td.name6").appendChild(td);

      let td2 = document.createElement("p");
      td2.textContent = rides[i].maximumPersons;
      document.querySelector("td.persons6").appendChild(td2);

      let td3 = document.createElement("p");
      td3.textContent = rides[i].reservePrice;
      document.querySelector("td.reserve6").appendChild(td3);

      let td4 = document.createElement("p");
      td4.textContent = rides[i].walkInPrice;
      document.querySelector("td.walkIn6").appendChild(td4);
      
      
    }
  });
