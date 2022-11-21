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
      let h3 = document.createElement("h3");
      h3.textContent = companies[i].name;
      document.querySelector(".name").appendChild(h3);

      let p = document.createElement("p");
      p.textContent = companies[i].url;
      document.querySelector(".url").appendChild(p);

      let p2 = document.createElement("p");
      p2.textContent = companies[i].phone;
      document.querySelector(".phone").appendChild(p2);

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
      let h3 = document.createElement("h3");
      h3.textContent = companies[i].name;
      document.querySelector(".name2").appendChild(h3);

      let p = document.createElement("p");
      p.textContent = companies[i].url;
      document.querySelector(".url2").appendChild(p);

      let p2 = document.createElement("p");
      p2.textContent = companies[i].phone;
      document.querySelector(".phone2").appendChild(p2);
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
      let h3 = document.createElement("h3");
      h3.textContent = companies[i].name;
      document.querySelector(".name3").appendChild(h3);

      let p = document.createElement("p");
      p.textContent = companies[i].url;
      document.querySelector(".url3").appendChild(p);

      let p2 = document.createElement("p");
      p2.textContent = companies[i].phone;
      document.querySelector(".phone3").appendChild(p2);
    }
  });
