const requestURL = "https://swapi.dev/api/people";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

const jsonData = {
  "name": "Luke Skywalker", 
  "name": "C-3PO",  
  "name": "R2-D2", 
  "name": "Darth Vader", 
  "name": "Leia Organa",  
  "name": "Owen Lars", 
  "name": "Beru Whitesun Lars", 
  "name": "R5-D4", 
  "name": "Biggs Darklighter", 
  "name": "Obi-Wan Kenobi"
  }
const values = Object.values(jsonData)

const randomValue = values[parseInt(Math.random() * values.length)]

console.log(randomValue)
  
for (let i = 0; i < results.length; i++) {

  let events = document.createElement("section");

  let h2 = document.createElement("h2");
  h2.textContent = results[i].name;
  events.appendChild(h2);

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
