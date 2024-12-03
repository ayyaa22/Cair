let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
let city = document.querySelector('#city-name');
let form = document.querySelector("form");
let temperature = document.querySelector('#temperature');
let description = document.querySelector('.real-feel');
let valueSearch = document.getElementById('city');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let windSpeed = document.getElementById('wind-speed');
let visibility = document.getElementById('visibility');
let sunrise = document.querySelector('.sunrise-sunset span:first-child');
let sunset = document.querySelector('.sunrise-sunset span:last-child');
let uvIndex = document.getElementById('uv-index');
let pm25 = document.getElementById('pm25');
let pm10 = document.getElementById('pm10');
let no2 = document.getElementById('no2');
let nh3 = document.getElementById('nh3');
let co = document.getElementById('co');
let co2 = document.getElementById('co2');
let so2 = document.getElementById('so2');
let voc = document.getElementById('voc');
let o3 = document.getElementById('o3');
let main = document.querySelector('#data');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valueSearch.value != '') {
        searchWeather();
    }
});

const searchWeather = () => {
    fetch(url + '&q=' + valueSearch.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                // City Info
                city.querySelector('figcaption').innerHTML = data.name;
                city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;

                // Temperature Info
                temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temperature.querySelector('span').innerText = data.main.temp;

                // Real Feel Description
                description.innerText = data.weather[0].description;

                // Clouds
                clouds.querySelector('span').innerText = data.clouds.all;

                // Humidity
                humidity.querySelector('span').innerText = data.main.humidity;

                // Pressure
                pressure.querySelector('span').innerText = data.main.pressure;

                // Wind Speed
                windSpeed.querySelector('span').innerText = data.wind.speed;

                // Visibility
                visibility.querySelector('span').innerText = data.visibility / 1000; // Convert to km

                // Sunrise and Sunset
                let sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                let sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
                sunrise.innerText = sunriseTime;
                sunset.innerText = sunsetTime;

                // UV Index (You might need a separate API for this)
                // Placeholder for UV index, assume `uvIndex` is part of the response
                uvIndex.querySelector('span').innerText = data.current.uvi || 'N/A';

                // Air Quality (For example, PM2.5, PM10, etc.)
                pm25.querySelector('span').innerText = data.air_quality.pm25 || 'N/A';
                pm10.querySelector('span').innerText = data.air_quality.pm10 || 'N/A';
                no2.querySelector('span').innerText = data.air_quality.no2 || 'N/A';
                nh3.querySelector('span').innerText = data.air_quality.nh3 || 'N/A';
                co.querySelector('span').innerText = data.air_quality.co || 'N/A';
                co2.querySelector('span').innerText = data.air_quality.co2 || 'N/A';
                so2.querySelector('span').innerText = data.air_quality.so2 || 'N/A';
                voc.querySelector('span').innerText = data.air_quality.voc || 'N/A';
                o3.querySelector('span').innerText = data.air_quality.o3 || 'N/A';

            } else {
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            valueSearch.value = '';
        });
};

// search Default
const initApp = () => {
    valueSearch.value = 'Pusan';
    searchWeather();
};
initApp();
