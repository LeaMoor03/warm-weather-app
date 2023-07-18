function dateFormat(date) {
    let hour = date.getHours();
    if(hour <10) {
        hour = `0${hour}` ;
    }
    let minute = date.getMinutes(); 
    if(minute <10) {
        minute = `0${minute}` ;
}
let dayList = date.getDay();
let days = [
    "Sunday",
    "Monday",
    "Tuesday",
   " Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
];
let day = days[dayList];

return `${day} ${hour}:${minute}` ;
}

function displayWeather(response) {
 document.querySelector("#city-name").innerHTML = (response.data.name);
 document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
 document.querySelector("#humidity").innerHTML = (response.data.main.humidity);
document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
document.querySelector("#forcast").innerHTML = response.data.weather[0].main;
}

function search(city) {
  let apiKey = "1d86c5d4e2dfc784a979801c54b2b2f4";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(url).then(displayWeather);
}
  function searchLocation(position) {
    let apiKey = "1d86c5d4e2dfc784a979801c54b2b2f4";
    let url =  `https://api.openweathermap.org/data/2.5/weather?lat=${ position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
   axios.get(url).then(displayWeather);
  }

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
  
}

function searchCity(event) {
    event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}
  let  dateElement = document.querySelector("#date");
  let currentDay = new Date();
  dateElement.innerHTML = dateFormat(currentDay);

let form = document.querySelector("#city-form");
form.addEventListener("submit", searchCity);

let currentLocationButton = document.querySelector("#current-location-btn");
currentLocationButton.addEventListener("click", getCurrentLocation);


search("California");
