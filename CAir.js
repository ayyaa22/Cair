function showSection(sectionId) {
    const sections = [
        'login', 'register', 'pass-reset', 'acc-confirmation', 'find-acc', 
        'acc-found', 'home', 'about', 'data', 'contact', 'profile', 
        'settings', 'resources', 'pp', 'fq', 'ycair', 'reviews-id', 'member-reviews', 'non-member-reviews',  'temperature-details', 'clouds-details', 'humidity-details', 'wind-speed-details', 'air-pollution-details', 'pressure-details', 'visibility-details', 'uv-index-details', 'sunrise-sunset-details', 'PM25-details', 'PM10-details', 'NOx-details', 'NH3-details', 'CO2-details', 'SO2-details', 'VOC-details', 'CO-details', 'O3-details'
    ]

    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (id === sectionId) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        }
    });
}

function showRegister() {
    showSection('register');
}

function showLogin() {
    showSection('login');
}

function showAccConfirmation() {
    showSection('acc-confirmation');
}

function showPassReset() {
    showSection('pass-reset');
}

function showFindAcc() {
    showSection('find-acc');
}

function showAccFound() {
    showSection('acc-found');
}

function showHome() {
    showSection('home');
}

function showAbout() {
    showSection('about');
}

/*
function showData() {
    showSection('data');
}
*/

function showApp() {
    showSection('search');
}

function showDetails() {
    showSection('charts');
}

function showContact() {
    showSection('contact');
}

function showProfile() {
    showSection('profile');
}

function showPP() {
    showSection('pp');
}

function showSettings() {
    showSection('settings');
}

function showFQ() {
    showSection('fq');
}

function showyCAir() {
    showSection('ycair');
}

function showlogOut() {
    showSection('home');
}

function showReviewsId() {
    showSection('reviews-id');
}

function showMemberReviews() {
    showSection('member-reviews');
}

function showNonMemberReviews() {
    showSection('non-member-reviews');
}

/*
function showTemperature() {
    showSection('temperature-details');
}

function showClouds() {
    showSection('clouds-details');
}

function showHumidity() {
    showSection('humidity-details');
}

function showWindSpeed() {
    showSection('wind-speed-details');
}

function showAirPollution() {
    showSection('air-pollution-details');
}

function showPM25() {
    showSection('PM25-details');
}

function showPM10() {
    showSection('PM10-details');
}

function showNOx() {
    showSection('NOx-details');
}

function showNH3() {
    showSection('NH3-details');
}

function showSO2() {
    showSection('SO2-details');
}

function showCO2() {
    showSection('CO2-details');
}

function showVOC() {
    showSection('VOC-details');
}

function showCO() {
    showSection('CO-details');
}

function showO3() {
    showSection('O3-details');
}

function showPressure() {
    showSection('pressure-details');
}

function showVisibility() {
    showSection('visibility-details');
}

function showUVindex() {
    showSection('uv-index-details');
}

function showSunrise() {
    showSection('sunrise-details');
}

function showSunset() {
    showSection('sunset-details');
}

function showRealFeel() {
    showSection('real-feel-details');
}
*/

/*
let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
let city = document.querySelector('#city');
let form = document.querySelector("form");
let temperature = document.querySelector('#temp');
let description = document.querySelector('#real-feel');
let valueSearch = document.getElementById('search-input');
let clouds = document.querySelector('a[href="#clouds"] span:nth-child(3)');
let humidity = document.querySelector('a[href="#humidity"] span:nth-child(3)');
let pressure = document.querySelector('a[href="#pressure"] span:nth-child(3)');
let windSpeed = document.querySelector('a[href="#wind-speed"] span:nth-child(3)');
let airQuality = document.querySelector('a[href="#air-quality"] span:nth-child(3)');
let visibility = document.querySelector('a[href="#visibility"] span:nth-child(3)');
let uvIndex = document.querySelector('a[href="#uv-index"] span:nth-child(3)');
let sunrise = document.querySelector('a[href="#sunrise"] span:nth-child(3)');
let sunset = document.querySelector('a[href="#sunset"] span:nth-child(3)');
let main = document.querySelector('main');

form.addEventListener("submit", (e) => {
    e.preventDefault();  
    if(valueSearch.value != ''){
        searchWeather();
    }
});

const searchWeather = () => {
    fetch(url+'&q='+ valueSearch.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.cod == 200){
                city.querySelector('figcaption').innerHTML = data.name;
                city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
                temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
                temperature.querySelector('figcaption span').innerText = data.main.temp;
                description.querySelector('span').innerText = data.weather[0].description;

                clouds.innerText = data.clouds.all + '%';
                humidity.innerText = data.main.humidity + '%';
                pressure.innerText = data.main.pressure + ' hPa';
                windSpeed.innerText = data.wind.speed + ' m/s';
                airQuality.innerText = 'N/A'; // Air Quality will be fetched separately
                visibility.innerText = data.visibility / 1000 + ' km';
                uvIndex.innerText = 'N/A'; // UV Index data needs a separate API call
                sunrise.innerText = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                sunset.innerText = new Date(data.sys.sunset * 1000).toLocaleTimeString();
            }else{
                main.classList.add('error');
                setTimeout(() => {
                    main.classList.remove('error');
                }, 1000);
            }
            valueSearch.value = '';
        })
}

// search Default
const initApp = () => {
    valueSearch.value = 'Washington';
    searchWeather();
}
initApp();
*/


/*const apiKey = '9505fd1df737e20152fbd78cdb289b6a';  // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        if (weatherData.cod !== 200) {
            alert("City not found");
            return;
        }

        const lat = weatherData.coord.lat;
        const lon = weatherData.coord.lon;

        // Fetch air pollution data
        const airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const airPollutionResponse = await fetch(airPollutionUrl);
        const airPollutionData = await airPollutionResponse.json();

        const pollutionComponents = airPollutionData.list[0].components;
        const totalPollution = 
            (pollutionComponents.pm2_5 || 0) +
            (pollutionComponents.pm10 || 0) +
            (pollutionComponents.no || 0) +
            (pollutionComponents.nh3 || 0) +
            (pollutionComponents.so2 || 0) +
            (pollutionComponents.co || 0) +
            (pollutionComponents.o3 || 0);

        const uvIndexUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const uvIndexResponse = await fetch(uvIndexUrl);
        const uvIndexData = await uvIndexResponse.json();

        const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

        document.getElementById("weatherInfo").innerHTML = `
            <div><strong>City:</strong> ${weatherData.name}, ${weatherData.sys.country}</div>
            <div><strong>Temperature:</strong> ${weatherData.main.temp}°C</div>
            <div><strong>Real Feel:</strong> ${weatherData.main.feels_like}°C</div>
            <div><strong>Weather:</strong> ${weatherData.weather[0].description}</div>
            <div><strong>Humidity:</strong> ${weatherData.main.humidity}%</div>
            <div><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</div>
            <div><strong>Pressure:</strong> ${weatherData.main.pressure} hPa</div>
            <div><strong>Visibility:</strong> ${weatherData.visibility / 1000} km</div>
            <div><strong>Total Air Pollution:</strong> ${totalPollution.toFixed(2)} µg/m³</div>
            <div><strong>UV Index:</strong> ${uvIndexData.value}</div>
            <div><strong>Sunrise:</strong> ${sunrise}</div>
            <div><strong>Sunset:</strong> ${sunset}</div>
        `;

        // Create charts
        createCharts(weatherData, totalPollution, uvIndexData);
    } catch (error) {
        alert("Error fetching weather data");
    }
}

function createCharts(weatherData, totalPollution, uvIndexData) {
    // Temperature chart
    const tempChartCtx = document.getElementById('tempChart').getContext('2d');
    new Chart(tempChartCtx, {
        type: 'line',
        data: {
            labels: ['Temperature'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [weatherData.main.temp],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Total Air Pollution chart
    const pollutionChartCtx = document.getElementById('pollutionChart').getContext('2d');
    new Chart(pollutionChartCtx, {
        type: 'bar',
        data: {
            labels: ['Total Air Pollution'],
            datasets: [{
                label: 'Total Air Pollution (µg/m³)',
                data: [totalPollution],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // UV Index chart
    const uvChartCtx = document.getElementById('uvChart').getContext('2d');
    new Chart(uvChartCtx, {
        type: 'bar',
        data: {
            labels: ['UV Index'],
            datasets: [{
                label: 'UV Index',
                data: [uvIndexData.value],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
*/




const apiKey = '9505fd1df737e20152fbd78cdb289b6a';  // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById("city").value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        if (weatherData.cod !== 200) {
            alert("City not found");
            return;
        }

        const lat = weatherData.coord.lat;
        const lon = weatherData.coord.lon;

        // Fetch air pollution data
        const airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const airPollutionResponse = await fetch(airPollutionUrl);
        const airPollutionData = await airPollutionResponse.json();

        const pollutionComponents = airPollutionData.list[0].components;
        const totalPollution = 
            (pollutionComponents.pm2_5 || 0) +
            (pollutionComponents.pm10 || 0) +
            (pollutionComponents.no || 0) +
            (pollutionComponents.nh3 || 0) +
            (pollutionComponents.so2 || 0) +
            (pollutionComponents.co || 0) +
            (pollutionComponents.o3 || 0);

        const uvIndexUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const uvIndexResponse = await fetch(uvIndexUrl);
        const uvIndexData = await uvIndexResponse.json();

        const sunrise = new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(weatherData.sys.sunset * 1000).toLocaleTimeString();

        document.getElementById("weatherInfo").innerHTML = `
            <div><strong>City:</strong> ${weatherData.name}, ${weatherData.sys.country}</div>
            <div><strong>Temperature:</strong> ${weatherData.main.temp}°C</div>
            <div><strong>Real Feel:</strong> ${weatherData.main.feels_like}°C</div>
            <div><strong>Weather:</strong> ${weatherData.weather[0].description}</div>
            <div><strong>Humidity:</strong> ${weatherData.main.humidity}%</div>
            <div><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</div>
            <div><strong>Pressure:</strong> ${weatherData.main.pressure} hPa</div>
            <div><strong>Visibility:</strong> ${weatherData.visibility / 1000} km</div>
            <div><strong>Total Air Pollution:</strong> ${totalPollution.toFixed(2)} µg/m³</div>
            <div><strong>UV Index:</strong> ${uvIndexData.value}</div>
            <div><strong>Sunrise:</strong> ${sunrise}</div>
            <div><strong>Sunset:</strong> ${sunset}</div>
        `;

        // Create charts
        createCharts(weatherData, pollutionComponents, uvIndexData);
    } catch (error) {
        alert("Error fetching weather data");
    }
}

function createCharts(weatherData, pollutionComponents, uvIndexData) {
    // Line Chart: Trends for temperature, real feel, humidity, pressure, visibility, UV index
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    new Chart(lineChartCtx, {
        type: 'line',
        data: {
            labels: ['Temperature', 'Real Feel', 'Humidity', 'Pressure', 'Visibility', 'UV Index'],
            datasets: [{
                label: 'Weather Trends',
                data: [
                    weatherData.main.temp,
                    weatherData.main.feels_like,
                    weatherData.main.humidity,
                    weatherData.main.pressure,
                    weatherData.visibility / 1000,
                    uvIndexData.value
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Bar Charts: Levels of individual pollutants
    const barChartCtx = document.getElementById('barChart').getContext('2d');
    new Chart(barChartCtx, {
        type: 'bar',
        data: {
            labels: ['PM2.5', 'PM10', 'NOx', 'NH3', 'CO2', 'SO2', 'VOC'],
            datasets: [{
                label: 'Pollutant Levels (µg/m³)',
                data: [
                    pollutionComponents.pm2_5,
                    pollutionComponents.pm10,
                    pollutionComponents.no,
                    pollutionComponents.nh3,
                    pollutionComponents.co,
                    pollutionComponents.so2,
                    pollutionComponents.o3
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(99, 255, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(99, 255, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Doughnut Chart: Distribution of pollutants
    const doughnutChartCtx = document.getElementById('doughnutChart').getContext('2d');
    new Chart(doughnutChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['PM2.5', 'PM10', 'NOx', 'NH3', 'CO2', 'SO2', 'VOC'],
            datasets: [{
                label: 'Pollutant Distribution',
                data: [
                    pollutionComponents.pm2_5,
                    pollutionComponents.pm10,
                    pollutionComponents.no,
                    pollutionComponents.nh3,
                    pollutionComponents.co,
                    pollutionComponents.so2,
                    pollutionComponents.o3
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(99, 255, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(99, 255, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}
