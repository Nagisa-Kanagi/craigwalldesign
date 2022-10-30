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

document.querySelector(
  "#lastModified"
).textContent = `Last Modified: ${document.lastModified}`;

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

if (dayName == "Monday" || dayName == "Tuesday") {
  var banner = document.createElement("div");
  banner.className = "b";
  banner.innerHTML =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 PM";

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
  ).style.backgroundColor = "#800080";
  document.body.insertBefore(banner, document.body.childNodes[0]).style.color =
    "white";
}

const mediaQuery = window.matchMedia("(max-width: 32.5em)");
if (mediaQuery.matches) {
  document.getElementById("overlay").innerHTML = "Small";
}

const mediaQuery2 = window.matchMedia("(min-width:33em, max-width: 55em)");
if (mediaQuery2.matches) {
  document.getElementById("overlay").innerHTML = "Medium";
}

let imagesToLoad = document.querySelectorAll("img[data-src]");
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

var n = new Date();
document.getElementById("date").value = n.toDateString();
var hours = n.getHours();
var mins = n.getMinutes();
var seconds = n.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
