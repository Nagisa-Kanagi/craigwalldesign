const requestURL = "data.json";

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
      document.querySelector("h2.name").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image").appendChild(img);
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
      document.querySelector("h2.name2").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url2").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address2").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone2").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership2").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image2").appendChild(img);
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
      document.querySelector("h2.name3").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url3").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address3").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone3").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership3").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image3").appendChild(img);
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
      document.querySelector("h2.name4").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url4").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address4").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone4").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership4").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image4").appendChild(img);
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
      document.querySelector("h2.name5").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url5").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address5").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone5").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership5").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image5").appendChild(img);
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
      document.querySelector("h2.name6").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url6").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address6").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone6").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership6").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image6").appendChild(img);
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
      document.querySelector("h2.name7").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url7").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address7").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone7").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership7").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image7").appendChild(img);
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
      document.querySelector("h2.name8").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url8").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address8").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone8").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership8").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image8").appendChild(img);
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
      document.querySelector("h2.name9").appendChild(h2);

      let h3 = document.createElement("h3");
      h3.textContent = companies[i].url;
      document.querySelector("h3.url9").appendChild(h3);

      let h32 = document.createElement("h3");
      h32.textContent = companies[i].address;
      document.querySelector("h3.address9").appendChild(h32);

      let h33 = document.createElement("h3");
      h33.textContent = companies[i].phone;
      document.querySelector("h3.phone9").appendChild(h33);

      let h34 = document.createElement("h3");
      h34.textContent = companies[i].membership;
      document.querySelector("h3.membership9").appendChild(h34);

      let img = document.createElement("img");
      img.setAttribute("src", companies[i].imageurl);
      img.setAttribute("alt", companies[i].name);
      document.querySelector("img.image9").appendChild(img);
    }
  });
