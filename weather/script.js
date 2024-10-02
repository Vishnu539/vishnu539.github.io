const apiKey = "ce58146ff0a43b0b441501bc3d89dd79";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var humidity = document.querySelector(".humidity");
var wind = document.querySelector(".wind");
var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
        var data = await response.json();

        city.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + " °C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " kmph";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }

        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        }

        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        }

        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }

        if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }

        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather")  .style.display = "block";
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
