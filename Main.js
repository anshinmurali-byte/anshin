// js/script.js
// Dynamic Greeting
window.onload = () => {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  if (hour < 12) greeting.textContent = "Good Morning!";
  else if (hour < 18) greeting.textContent = "Good Afternoon!";
  else greeting.textContent = "Good Evening!";
};

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting me!");
  contactForm.reset();
});

// jQuery Project Gallery
$(".project-thumb").on("click", function() {
  const title = $(this).data("title");
  const desc = $(this).data("desc");
  const img = $(this).data("img");
  $("#project-display").html(`<h3>${title}</h3><p>${desc}</p><img src="${img}" alt="${title}">`);
});

// Dev.to RSS Feed
fetch("https://dev.to/api/articles?username=devteam")
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById("articles-list");
    data.slice(0,5).forEach(article => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
      list.appendChild(li);
    });
  });

// Weather API
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your key

document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name");
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").innerHTML = "City not found.";
      } else {
        document.getElementById("weatherResult").innerHTML = `
          <h3>${data.name}</h3>
          <p>${data.main.temp}°C - ${data.weather[0].description}</p>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="weather icon">
        `;
      }
    })
    .catch(() => document.getElementById("weatherResult").innerHTML = "Error fetching data");
});