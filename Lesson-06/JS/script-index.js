const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject); const towns = jsonObject['towns'];
        for(let t=0; t<towns.length; t++) {
            let card = document.createElement('section');
            
            let h2 =document.createElement('h2');
            h2.textContent = towns[t].name;
            card.appendChild(h2);
            
            let averageRainfall = document.createElement('p');
            averageRainfall.textContent = "Average Rainfall:" + ' ' + towns[t].averageRainfall;
            card.append(averageRainfall);
            
            let motto = document.createElement('p');
            motto.textContent = towns[t].motto;
            card.appendChild(motto);
            
            let events = document.createElement('p');
            events.textContent = "Events:" + ' ' + towns[t].events;
            card.append(events);
            
            let yearFounded = document.createElement('p');
            yearFounded.textContent = "Year Founded:" + ' ' + towns[t].yearFounded;
            card.appendChild(yearFounded);
            
            let currentPopulation = document.createElement('p');
            currentPopulation = "Current Population:" + ' ' + towns[t].currentPopulation;
            card.append(currentPopulation);
            
            document.querySelector('div.data').appendChild(card);
        }
    })
