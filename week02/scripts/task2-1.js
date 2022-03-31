const requestURL = "https://swapi.dev/api/people";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const results = jsonObject["results"].filter((result) => {
        return result;
      
    });
  
    for (let i = 0; i < results.length; i++) {
      let events = document.createElement("section");

      let event1 = document.createElement("h4")
      event1.textContent = results[i].name;
      events.appendChild(event1)

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
