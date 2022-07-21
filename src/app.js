function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `${response.data.name}, `;

  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.sys.country;

  let skyElement = document.querySelector("#sky");
  skyElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "1c6f613839ce6b71f2df6e20804a91d8";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
