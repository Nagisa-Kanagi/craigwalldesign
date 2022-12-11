const requestURL = "Data/fruit-data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const fruits = jsonObject["fruits"].filter((fruit) => {
      return fruit;
    });

    let dropdown = document.getElementById("Fruit1");
    let dropdown2 = document.getElementById("Fruit2");
    let dropdown3 = document.getElementById("Fruit3");

    let defaultOption1 = document.createElement("option");
    defaultOption1.text = "Choose 1st Fruit";

    dropdown.add(defaultOption1);
    dropdown.selectedIndex = 0;

    let defaultOption2 = document.createElement("option");
    defaultOption2.text = "Choose 2nd Fruit";

    dropdown2.add(defaultOption2);
    dropdown2.selectedIndex = 0;

    let defaultOption3 = document.createElement("option");
    defaultOption3.text = "Choose 3rd Fruit";

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

function show() {
  var name = document.getElementById("Name").value;
  if (document.getElementById("Email").value !== "") {
    var email = document.getElementById("Email").value;
  } else {
    var email = "None";
  }
  var phone = document.getElementById("Phone").value;
  if (document.getElementById("Fruit1").value !== "Choose 1st Fruit") {
    var fruit1 = document.getElementById("Fruit1").value;
    if (fruit1 == "Apple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Apple") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Apricot") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Apricot") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Avocado") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Avocado") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Banana") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Banana") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Blackberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Blackberry") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Blueberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Blueberry") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Cherry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Cherry") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Dragonfruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Dragonfruit") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Durian") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Durian") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Feijoa") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Feijoa") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Fig") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Fig") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Gooseberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Gooseberry") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Grape") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Grape") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Grapes") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Grapes") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "GreenApple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "GreenApple") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Guava") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Guava") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Kiwi") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Kiwi") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Kiwifruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Kiwifruit") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Lemon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lemon") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Lime") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lime") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Lingonberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lingonberry") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Lychee") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lychee") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Mango") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Mango") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Melon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Melon") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Morus") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Morus") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Orange") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Orange") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Papaya") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Papaya") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Passionfruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Passionfruit") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Pear") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pear") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Persimmon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Persimmon") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Pineapple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pineapple") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Pitahaya") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pitahaya") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Plum") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Plum") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Pomegranate") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pomegranate") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Raspberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Raspberry") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Strawberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Strawberry") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Tangerine") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Tangerine") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Tomato") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Tomato") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit1 == "Watermelon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Watermelon") {
              let carbs = fruits[i].nutritions.carbohydrates;
              let protein = fruits[i].nutritions.protein;
              let fat = fruits[i].nutritions.fat;
              let sugar = fruits[i].nutritions.sugar;
              let calories = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats1");
              td7.textContent =
                "1) Carbs: " +
                carbs +
                " |" +
                " Protein: " +
                protein +
                " |" +
                " Fat: " +
                fat +
                " |" +
                " Sugar: " +
                sugar +
                " |" +
                " Calories: " +
                calories;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    }
  } else {
    var fruit1 = "N/A";
  }
  if (document.getElementById("Fruit2").value !== "Choose 2nd Fruit") {
    var fruit2 = document.getElementById("Fruit2").value;
    if (fruit2 == "Apple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Apple") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Apricot") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Apricot") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Avocado") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Avocado") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Banana") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Banana") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Blackberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Blackberry") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Blueberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Blueberry") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Cherry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Cherry") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Dragonfruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Dragonfruit") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Durian") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Durian") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Feijoa") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Feijoa") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Fig") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Fig") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Gooseberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Gooseberry") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Grape") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Grape") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Grapes") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Grapes") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "GreenApple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "GreenApple") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Guava") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Guava") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Kiwi") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Kiwi") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Kiwifruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Kiwifruit") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Lemon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lemon") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Lime") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lime") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Lingonberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lingonberry") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Lychee") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lychee") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Mango") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Mango") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Melon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Melon") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Morus") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Morus") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Orange") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Orange") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Papaya") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Papaya") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Passionfruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Passionfruit") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Pear") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pear") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Persimmon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Persimmon") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Pineapple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pineapple") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Pitahaya") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pitahaya") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Plum") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Plum") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Pomegranate") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pomegranate") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Raspberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Raspberry") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Strawberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Strawberry") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Tangerine") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Tangerine") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Tomato") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Tomato") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit2 == "Watermelon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Watermelon") {
              let carbs2 = fruits[i].nutritions.carbohydrates;
              let protein2 = fruits[i].nutritions.protein;
              let fat2 = fruits[i].nutritions.fat;
              let sugar2 = fruits[i].nutritions.sugar;
              let calories2 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats2");
              td7.textContent =
                "2) Carbs: " +
                carbs2 +
                " |" +
                " Protein: " +
                protein2 +
                " |" +
                " Fat: " +
                fat2 +
                " |" +
                " Sugar: " +
                sugar2 +
                " |" +
                " Calories: " +
                calories2;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    }
  } else {
    var fruit2 = "N/A";
  }
  if (document.getElementById("Fruit3").value !== "Choose 3rd Fruit") {
    var fruit3 = document.getElementById("Fruit3").value;
    if (fruit3 == "Apple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Apple") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Apricot") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Apricot") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Avocado") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Avocado") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Banana") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Banana") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Blackberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Blackberry") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Blueberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Blueberry") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Cherry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Cherry") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Dragonfruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Dragonfruit") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Durian") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Durian") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Feijoa") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Feijoa") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Fig") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Fig") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Gooseberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Gooseberry") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Grape") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Grape") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Grapes") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Grapes") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "GreenApple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "GreenApple") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Guava") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Guava") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Kiwi") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Kiwi") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Kiwifruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Kiwifruit") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Lemon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lemon") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Lime") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lime") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Lingonberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lingonberry") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Lychee") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Lychee") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Mango") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Mango") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Melon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Melon") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Morus") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Morus") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Orange") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Orange") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Papaya") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Papaya") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Passionfruit") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Passionfruit") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Pear") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pear") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Persimmon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Persimmon") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Pineapple") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pineapple") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Pitahaya") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pitahaya") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Plum") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Plum") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Pomegranate") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Pomegranate") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Raspberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Raspberry") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Strawberry") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Strawberry") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Tangerine") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Tangerine") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Tomato") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Tomato") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    } else if (fruit3 == "Watermelon") {
      fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (jsonObject) {
          const fruits = jsonObject["fruits"].filter((fruit) => {
            return fruit;
          });

          for (let i = 0; i < fruits.length; i++) {
            if (fruits[i].name == "Watermelon") {
              let carbs3 = fruits[i].nutritions.carbohydrates;
              let protein3 = fruits[i].nutritions.protein;
              let fat3 = fruits[i].nutritions.fat;
              let sugar3 = fruits[i].nutritions.sugar;
              let calories3 = fruits[i].nutritions.calories;
              let td7 = document.createElement("p");
              td7.setAttribute("id", "Stats3");
              td7.textContent =
                "3) Carbs: " +
                carbs3 +
                " |" +
                " Protein: " +
                protein3 +
                " |" +
                " Fat: " +
                fat3 +
                " |" +
                " Sugar: " +
                sugar3 +
                " |" +
                " Calories: " +
                calories3;
              document.querySelector("td.stats").appendChild(td7);
            }
          }
        });
    }
  } else {
    var fruit3 = "N/A";
  }
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
    let td = document.createElement("p");
    td.textContent = name;
    document.querySelector("td.name").appendChild(td);
    let td2 = document.createElement("p");
    td2.textContent = email;
    document.querySelector("td.email").appendChild(td2);
    let td3 = document.createElement("p");
    td3.textContent = phone;
    document.querySelector("td.phone").appendChild(td3);
    let td4 = document.createElement("p");
    td4.textContent = fruit1;
    document.querySelector("td.fruit1").appendChild(td4);
    let td5 = document.createElement("p");
    td5.textContent = fruit2;
    document.querySelector("td.fruit2").appendChild(td5);
    let td6 = document.createElement("p");
    td6.textContent = fruit3;
    document.querySelector("td.fruit3").appendChild(td6);
    let td8 = document.createElement("p");
    td8.textContent = comments;
    document.querySelector("td.comments").appendChild(td8);
  }
  document.getElementById("TableH3").style.visibility = "visible";
  document.getElementById("TableHR").style.visibility = "visible";
  document.getElementById("table").style.visibility = "visible";
  document.getElementById("table").style.marginBottom = "8em";
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("display").innerHTML = "You have submitted the form " + localStorage.clickcount + " time(s).";
    document.getElementById("display2").innerHTML = "You have submitted the form " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("display").innerHTML = "Sorry, your browser does not support web storage...";
  }
  var frm = document.getElementById("form");
  frm.reset();
}
