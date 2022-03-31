const requestURL = "https://swapi.dev/api/people";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const results = jsonObject["results"].filter((result) => {
      if (
        result.name === "Luke Skywalker" ||
        result.name === "C-3PO" ||
        result.name === "R2-D2" ||
        result.name === "Darth Vader" ||
        result.name === "Leia Organa" ||
        result.name === "Owen Lars" ||
        result.name === "Beru Whitesun lars" ||
        result.name === "R5-D4" ||
        result.name === "Biggs Darklighter" ||
        result.name === "Obi-Wan Kenobi"
      ) {
        return result;
      }
    });
  
    for (let i = 0; i < results.length; i++) {
      let events = document.createElement("section");

      let h2 = document.createElement("h2");
      h2.textContent = result[i].name;
      card.appendChild(h2);

      let event2 = document.createElement("h4");
      event2.textContent = results[i].height;
      events.appendChild(event2);

      let event3 = document.createElement("h4");
      event3.textContent = results[i].hair_color;
      events.appendChild(event3);

      let event4 = document.createElement("h4");
      event4.textContent = results[i].eye_color;
      events.appendChild(event4);

      let event5 = document.createElement("h4");
      event5.textContent = results[i].gender;
      events.appendChild(event5);

      document.querySelector("div.events").appendChild(events);
    }
  });

const year = 2022;
document.querySelector('#year').textContent = year;
