const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

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

if (dayName == "Friday") {
  var banner = document.createElement("div");
  banner.className = "b";
  banner.innerHTML =
    "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion.";

  document.body.insertBefore(
    banner,
    document.body.childNodes[0]
  ).style.fontSize = "x-large";
  document.body.insertBefore(
    banner,
    document.body.childNodes[0]
  ).style.textAlign = "center";
  document.body.insertBefore(
    banner,
    document.body.childNodes[0]
  ).style.padding = "20px 20px 20px 20px";
  document.body.insertBefore(
    banner,
    document.body.childNodes[0]
  ).style.backgroundColor = "#f5cf87";
}

let imagesToLoad = document.querySelectorAll("img[data-src]");

const imageOptions = {
  threshold: 1.0,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"].filter((town) => {
      if (town.name === "Soda Springs") {
        return town;
      }
    });
    for (let i = 0; i < towns.length; i++) {
      let events = document.createElement("section");

      let headline = document.createElement("h2");
      headline.textContent = "Upcoming Events";
      events.appendChild(headline);

      let event1 = document.createElement("h4");
      event1.textContent = towns[i].events[0];
      events.appendChild(event1);

      let event2 = document.createElement("h4");
      event2.textContent = towns[i].events[1];
      events.appendChild(event2);

      let event3 = document.createElement("h4");
      event3.textContent = towns[i].events[2];
      events.appendChild(event3);

      let event4 = document.createElement("h4");
      event4.textContent = towns[i].events[3];
      events.appendChild(event4);

      document.querySelector("events").appendChild(events);
    }
  });
