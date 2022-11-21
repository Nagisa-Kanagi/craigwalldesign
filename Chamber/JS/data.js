const requestURL = "JS/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "Google") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector(".phone").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector(".membership").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image").appendChild(img);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "Amazon") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name2").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url2").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address2").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector(".phone2").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector(".membership2").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image2").appendChild(img);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "Disney") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name3").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url3").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address3").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector(".phone3").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector(".membership3").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image3").appendChild(img);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "Arby's") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name4").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url4").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address4").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector(".phone4").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector(".membership4").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image4").appendChild(img);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "Living Planet Aquarium") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name5").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url5").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address5").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector(".phone5").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector(".membership5").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image5").appendChild(img);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "Gardner Village") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name6").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url6").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address6").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone6").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership6").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image6").appendChild(img);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "WWF") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name7").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url7").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address7").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector(".phone7").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector(".membership7").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image7").appendChild(img);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "American Red Cross") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name8").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url8").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address8").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector(".phone8").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector(".membership8").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image8").appendChild(img);
    }
  });

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const companies = jsonObject["companies"].filter((company) => {
      if (company.name === "Boy Scouts of America") {
        return company;
      }
    });

    for (let i = 0; i < companies.length; i++) {
      let h2 = document.createElement("h2");
      h2.textContent = companies[i].name;
      document.querySelector(".name9").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector(".url9").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector(".address9").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector(".phone9").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector(".membership9").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector(".image9").appendChild(img);
    }
  });
