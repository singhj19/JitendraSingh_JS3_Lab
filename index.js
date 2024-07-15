let searchBar = document.getElementById("search-bar");
let city ;
searchBar.addEventListener("keydown",getData)

function getData(e) {
    if (e.key === 'Enter') {
        getDataFromWeatherApi( event.target.value );        
    }
}

function getDataFromWeatherApi(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7e3f21edee540e6110af347b55eb1ab2` 
    fetch(apiUrl)
    .then(res => res.json())
    .then(res => displayResults(res));
}

function displayResults(weatherData) {
    let city = document.querySelector(".city");
    city.innerText = `${weatherData.name}, ${weatherData.sys.country}`

    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(weatherData.main.temp)} °c`

    let weather = document.querySelector(".weather");
    weather.innerText = `${weatherData.weather[0].main}`    

    let highLow = document.querySelector(".high-low");
    highLow.innerText = `${weatherData.main.temp_min} °c / ${weatherData.main.temp_max} °c`

    let date = document.querySelector(".date");
    const timestamp = weatherData.dt;

    const currentDate = new Date(timestamp * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const formattedDate = `${days[currentDate.getUTCDay()]} ${currentDate.getUTCDate()} ${months[currentDate.getUTCMonth()]} ${currentDate.getUTCFullYear()}`;
    date.innerText = formattedDate;

}

