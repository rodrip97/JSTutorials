let weatherApi = "de24489e3e394ecfa07139c88a151fa6";

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

let cities = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${weatherApi}&units=metric`;

  // Check if city is already in the list
  if (cities.includes(inputVal.toLowerCase())) {
    msg.textContent = "City is already in the list";
    return;
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <span class="close-btn">&times;</span>
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);

      // Add city to array
      cities.push(inputVal.toLowerCase());
    })
    .catch(() => {
      msg.textContent = "Please check input, city not found";
    });
});
