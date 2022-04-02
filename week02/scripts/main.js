const requestURL = "https://swapi.dev/api/people";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const results = jsonObject["results"];
    for (let i = 0; i < results.length; i++) {
      let events = document.createElement("section");

      let h2 = document.createElement("h2");
      h2.textContent = "Name:" + " " + results[i].name;
      events.appendChild(h2);

      let event2 = document.createElement("h4");
      event2.textContent = "Height:" + " " + results[i].height;
      events.appendChild(event2);

      let event3 = document.createElement("h4");
      event3.textContent = "Hair Color:" + " " + results[i].hair_color;
      events.appendChild(event3);

      let event4 = document.createElement("h4");
      event4.textContent = "Eye Color:" + " " + results[i].eye_color;
      events.appendChild(event4);

      let event5 = document.createElement("h4");
      event5.textContent = "Gender:" + " " + results[i].gender;
      events.appendChild(event5);

      document.querySelector("div.card").appendChild(events);
    }
  });

const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentdate").textContent = fulldate;

const date2 = document.querySelector("#currentdate2");
