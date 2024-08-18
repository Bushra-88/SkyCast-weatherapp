function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let city = response.data.city;
  let descriptionElement = document.querySelector("#description");
  let description = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  let humidity = `${response.data.temperature.humidity}%`;
  let windSpeedElement = document.querySelector("#wind-speed");
  let windSpeed = `${response.data.wind.speed} km/h`;
  console.log(response.data);
  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = city;
  descriptionElement.innerHTML = description;
  humidityElement.innerHTML = humidity;
  windSpeedElement.innerHTML = windSpeed;
}

function searchCity(city) {
  let apiKey = "6b8a7398o06094tf908737c5b44dce83";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handelSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handelSearchSubmit);
searchCity("Ghent");
