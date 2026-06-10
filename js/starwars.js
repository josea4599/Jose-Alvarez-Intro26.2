const peopleButton = document.querySelector("#loadPeople");
const planetButton = document.querySelector("#loadPlanets");

const peopleList = document.querySelector("#peopleList");
const planetList = document.querySelector("#planetList");

peopleButton.addEventListener("click", function() {
  peopleList.innerHTML = "";

  fetch("https://www.swapi.tech/api/people")
    .then(response => response.json())
    .then(data => {
      const people = data.results;

      for (let i = 0; i < people.length; i++) {
        const person = document.createElement("li");
        person.textContent = people[i].name;
        peopleList.appendChild(person);
      }
    })
    .catch(error => console.error("Error loading people:", error));
});

planetButton.addEventListener("click", function() {
  planetList.innerHTML = "";

  fetch("https://www.swapi.tech/api/planets")
    .then(response => response.json())
    .then(data => {
      const planets = data.results;

      for (let i = 0; i < planets.length; i++) {
        const planet = document.createElement("li");
        planet.textContent = planets[i].name;
        planetList.appendChild(planet);
      }
    })
    .catch(error => console.error("Error loading planets:", error));
});