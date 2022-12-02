const requestURL = "Data/fruit-data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const fruits = jsonObject["fruits"].filter((fruit) => {
      return fruit;
    });

    let dropdown = document.getElementById("locality-dropdown1");
    let dropdown2 = document.getElementById("locality-dropdown2");
    let dropdown3 = document.getElementById("locality-dropdown3");
    dropdown.length = 0;
    dropdown2.length = 0;
    dropdown3.length = 0;

    let defaultOption1 = document.createElement("option");
    defaultOption1.text = "Choose First Fruit";

    dropdown.add(defaultOption1);
    dropdown.selectedIndex = 0;

    let defaultOption2 = document.createElement("option");
    defaultOption2.text = "Choose Second Fruit";

    dropdown2.add(defaultOption2);
    dropdown2.selectedIndex = 0;

    let defaultOption3 = document.createElement("option");
    defaultOption3.text = "Choose Third Fruit";

    dropdown3.add(defaultOption3);
    dropdown3.selectedIndex = 0;

    for (let i = 0; i < fruits.length; i++) {
      let option = document.createElement("option");
      option.text = fruits[i].name;
      dropdown.add(option);
      let option2 = document.createElement("option");
      option2.text = fruits[i].name;
      dropdown2.add(option2);
      let option3 = document.createElement("option");
      option3.text = fruits[i].name;
      dropdown3.add(option3);
    }
  });

document.getElementById("rButton").addEventListener("click", show);

function show() {
  var name = document.getElementById("Name").value;
  var email = document.getElementById("Email").value;
  var phone = document.getElementById("Phone").value;
  var fruit1 = document.getElementById("locality-dropdown1").value;
  var fruit2 = document.getElementById("locality-dropdown2").value;
  var fruit3 = document.getElementById("locality-dropdown3").value;
  if (document.getElementById("additional").value !== "") {
    var comments = document.getElementById("additional").value;
  } else {
    var comments = "None";
  }

  const form = document.getElementById("form");
  if (!form.checkValidity()) {
    document.createElementbyId("demo");
    document.getElementById("demo").innerHTML = form.validationMessage;
  } else {
    alert(
      "Thank you for filling out our form! This is the information you gave us: \n" +
        "\nName: " +
        name +
        "\nEmail: " +
        email +
        "\nPhone: " +
        phone +
        "\nFirst Fruit: " +
        fruit1 +
        "\nSecond Fruit: " +
        fruit2 +
        "\nThird Fruit: " +
        fruit3 +
        "\nOrder Comments: " +
        comments
    );
  }
}
