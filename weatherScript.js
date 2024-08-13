const serachBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=338da03454f65acba106e4fac1544b64&units=metric`
  );
  var data = await response.json();
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = parseInt(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherImages = {
      Clear: "images/clear.png",
      Clouds: "images/clouds.png",
      Drizzle: "images/drizzle.png",
      Rain: "images/rain.png",
      Mist: "images/mist.png",
      Snow: "images/snow.png",
    };

    if (data.weather[0].main in weatherImages) {
      weatherIcon.src = weatherImages[data.weather[0].main];
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

serachBtn.addEventListener("click", () => {
  checkWeather(serachBox.value);
});

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", function () {
  // Clear the text from the search bar
  searchInput.value = "";
});

document.getElementById('backButton').addEventListener('click', function() {
  window.location.href = 'index.html';  // Replace with the correct path to your original page
});
