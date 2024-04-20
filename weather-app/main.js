import { UI_ELEMENTS, favoriteCities } from "./view.js";
// import {format} from "./node_modules/date-fns";

// const SERVER = {
// 	URL: {
// 		WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
// 		FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
// 	},
// 	API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
// 	STORAGE_KEY: 'forecast_store',
// 	ICON: 'https://openweathermap.org/img/wn/',
// };

// showTabDetails();

export function inputNewCity(event)
{
    let city = UI_ELEMENTS.FORM.input.value;
    event.preventDefault();
    UI_ELEMENTS.FORM.input.value = "";
    UI_ELEMENTS.FORM.input.blur();

    chooseNewCity(city);
}

function calculateTemperature(temp_k)
{
    return Math.round(temp_k - 273.15);
}

function convertUnixToDate(timestamp, shift)
{
    var date = new Date((timestamp + shift) * 1000);
    var hours = "0" + date.getHours();
    var minutes = "0" + date.getMinutes();
    return hours.slice(-2) + ':' + minutes.slice(-2);
}

function formatDate(timestamp, shift)
{
    var date = new Date((timestamp + shift) * 1000);
    const month = date.toLocaleString('default', { month: 'long' });
    return date.getDay() + " " + month;
}

function chooseNewCity(city)
{
    const serverUrlWeather = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    let url = `${serverUrlWeather}?q=${city}&appid=${apiKey}`;

    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    // .then(json => console.log(json));
    .then(json => {
        UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent = json.name;
        UI_ELEMENTS.TAB_NOW.CITY_TEMPERATURE.textContent = calculateTemperature(json.main.temp);
        console.dir(json);

        UI_ELEMENTS.TAB_DETAILS.TITLE.textContent = json.name;
        UI_ELEMENTS.TAB_DETAILS.TEMPERATURE.textContent = calculateTemperature(json.main.temp);
        UI_ELEMENTS.TAB_DETAILS.FEELS_LIKE.textContent = calculateTemperature(json.main.feels_like);
        UI_ELEMENTS.TAB_DETAILS.WEATHER.textContent = json.weather[0].main;
        UI_ELEMENTS.TAB_DETAILS.SUNRISE.textContent = convertUnixToDate(json.sys.sunrise, json.timezone);
        UI_ELEMENTS.TAB_DETAILS.SUNSET.textContent = convertUnixToDate(json.sys.sunset, json.timezone);
    })
    .catch(error => alert(error.message));
}

export function showForecast()
{
    let cityName = UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent;
    UI_ELEMENTS.TAB_FORECAST.TITLE.textContent = cityName;
    UI_ELEMENTS.TAB_FORECAST.TITLE.nextElementSibling.remove();

    const serverUrlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    let url = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}`;

    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(json => {
        console.dir(json);
        let timezone = json.city.timezone;
        json.list.forEach(element => {
            UI_ELEMENTS.TAB_FORECAST.TITLE.insertAdjacentHTML('afterend',
            `<li class="forecast-container">
                <span class="forecast-date">${formatDate(element.dt, timezone)}</span>
                <span class="forecast-time">${convertUnixToDate(element.dt, timezone)}</span>
                <div class="forecast-details">
                    <div>
                        <span>Temperature:</span>
                        <span class="degrees-text-span">${calculateTemperature(element.main.temp)}</span>
                        <span class="degree-img-container">
                            <img src="images/degree.svg" alt="degree" class="degree-img">
                        </span>
                    </div>
                    <div>
                        <span>Feels like:</span>
                        <span class="degrees-text-span">${calculateTemperature(element.main.feels_like)}</span>
                        <span class="degree-img-container">
                            <img src="images/degree.svg" alt="degree" class="degree-img">
                        </span>
                    </div>
                </div>
                <span class="forecast-weather">${element.weather[0].main}</span>
                <img src="images/rain.svg" alt="rain" class="forecast-icon">
            </li>`
        )
        });
    })
    .catch(error => alert(error.message));
}

export function chooseCityFromFavorites(event)
{
    let cityName = event.currentTarget.textContent;
    chooseNewCity(cityName);
}

export function addFavoriteCity()
{
    try {
        let cityName = UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent;
        if(favoriteCities.includes(cityName)) {
            throw new SyntaxError("City is already in the list");
        }
        favoriteCities.push(cityName);

        let listElement = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = cityName;
        let img = document.createElement('img');
        img.src = "images/close-icon.svg";
        img.alt = "close";
        img.classList.add('close-icon');
        
        listElement.append(span);
        listElement.append(img);

        UI_ELEMENTS.FAVORITE_LOCATIONS.prepend(listElement);
    }
    catch(error) {
        if(error instanceof SyntaxError) {
            alert(error.message);
        }
        else {
            throw error;
        }
    }
}

export function deleteCityFromFavorites(event)
{
    let cityName = event.currentTarget.previousElementSibling.textContent;
    favoriteCities.splice(favoriteCities.indexOf(cityName));
    event.currentTarget.parentNode.remove();
}

export function showTabNow()
{
    UI_ELEMENTS.BUTTONS.NOW.className = '';
    UI_ELEMENTS.BUTTONS.DETAILS.className = '';
    UI_ELEMENTS.BUTTONS.FORECAST.className = '';

    UI_ELEMENTS.BUTTONS.NOW.classList.add('black-tab');
    UI_ELEMENTS.BUTTONS.DETAILS.classList.add('white-tab');
    UI_ELEMENTS.BUTTONS.FORECAST.classList.add('white-tab', 'border-left');

    UI_ELEMENTS.TABS.NOW.classList.remove('remove-tab');
    if(!UI_ELEMENTS.TABS.DETAILS.classList.contains('remove-tab')) {
        UI_ELEMENTS.TABS.DETAILS.classList.add('remove-tab');
    }
    else {
        UI_ELEMENTS.TABS.FORECAST.classList.add('remove-tab');
    }
}

export function showTabDetails()
{
    UI_ELEMENTS.BUTTONS.NOW.className = '';
    UI_ELEMENTS.BUTTONS.DETAILS.className = '';
    UI_ELEMENTS.BUTTONS.FORECAST.className = '';

    UI_ELEMENTS.BUTTONS.NOW.classList.add('white-tab');
    UI_ELEMENTS.BUTTONS.DETAILS.classList.add('black-tab');
    UI_ELEMENTS.BUTTONS.FORECAST.classList.add('white-tab');

    UI_ELEMENTS.TABS.DETAILS.classList.remove('remove-tab');
    if(!UI_ELEMENTS.TABS.NOW.classList.contains('remove-tab')) {
        UI_ELEMENTS.TABS.NOW.classList.add('remove-tab');
    }
    else {
        UI_ELEMENTS.TABS.FORECAST.classList.add('remove-tab');
    }
}

export function showTabForecast()
{
    UI_ELEMENTS.BUTTONS.NOW.className = '';
    UI_ELEMENTS.BUTTONS.DETAILS.className = '';
    UI_ELEMENTS.BUTTONS.FORECAST.className = '';

    UI_ELEMENTS.BUTTONS.NOW.classList.add('white-tab');
    UI_ELEMENTS.BUTTONS.DETAILS.classList.add('white-tab', 'border-left');
    UI_ELEMENTS.BUTTONS.FORECAST.classList.add('black-tab');

    UI_ELEMENTS.TABS.FORECAST.classList.remove('remove-tab');
    if(!UI_ELEMENTS.TABS.NOW.classList.contains('remove-tab')) {
        UI_ELEMENTS.TABS.NOW.classList.add('remove-tab');
    }
    else {
        UI_ELEMENTS.TABS.DETAILS.classList.add('remove-tab');
    }

    showForecast();
}