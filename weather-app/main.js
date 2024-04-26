import { FAVORITE_CITIES, FAVORITE_CITY_NAMES, UI_ELEMENTS, SERVER, FavoriteCity } from "./view.js";
import {
    storeFavoriteCities, getFavoriteCities,
    storeCityName, getCityName,
    storeChosenTab, getChosenTab
} from './store.js';


showInfo();

function showInfo()
{
    if(getFavoriteCities()) {
        FAVORITE_CITY_NAMES.length = 0;
        FAVORITE_CITIES.clear();
        
        getFavoriteCities().split(',')
        .forEach(el => {
            FAVORITE_CITY_NAMES.push(el);
            FAVORITE_CITIES.add(new FavoriteCity(el));
        });
        
        // console.dir(FAVORITE_CITIES);
    }

    UI_ELEMENTS.FAVORITE_LOCATIONS.innerHTML = "";
    FAVORITE_CITIES.forEach(item => {
        UI_ELEMENTS.FAVORITE_LOCATIONS.prepend(item.element);
    });


    if(getCityName()) {
        let cityName = getCityName();
        chooseNewCity(cityName);
    }
    else {
        let cityName = UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent;
        chooseNewCity(cityName);
    }

    if(getChosenTab()) {
        switch(getChosenTab()) {
            case 'NOW':
                break;
            case 'DETAILS':
                showTabDetails();
                break;
            case 'FORECAST':
                showTabForecast();
                break;
            default:
                showTabNow();
        }
    }
}

async function getJSON(url)
{
    let response = await fetch(url);
    if(response.ok) {
        return response.json();
    }
    throw new Error(`Error ${response.status}: ${response.statusText}`);
}

async function chooseNewCity(cityName)
{
    try {
        let urlWeather = `${SERVER.WEATHER}?q=${cityName}&appid=${SERVER.API_KEY}`;
        let jsonWeather = await getJSON(urlWeather);
        // console.dir(jsonWeather);

        showNOW(jsonWeather);
        showDETAILS(jsonWeather);

        let urlForecast = `${SERVER.FORECAST}?q=${cityName}&appid=${SERVER.API_KEY}`;
        let jsonForecast = await getJSON(urlForecast);
        // console.dir(jsonForecast);

        showFORECAST(jsonForecast);
    }  
    catch(error) {
        alert(error.message);
    }
}

function showNOW({
    name: city_name,
    main: {temp},
    weather: [{icon}]
    } = {})
{
    UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent = city_name;
    UI_ELEMENTS.TAB_NOW.CITY_TEMPERATURE.textContent = calculateTemperature(temp);
    UI_ELEMENTS.TAB_NOW.WEATHER_ICON.src = `${SERVER.ICON + icon}@2x.png`;

    if(FAVORITE_CITY_NAMES.includes(city_name)) {
        UI_ELEMENTS.TAB_NOW.ADD_ICON.src = "images/heart2.png";
    }
    else {
        UI_ELEMENTS.TAB_NOW.ADD_ICON.src = "images/heart1.png";
    }
}

function showDETAILS({
    name,
    main: {temp, feels_like},
    sys: {sunrise, sunset},
    timezone,
    weather: [{main: weather_info}]
    } = {})
{
    UI_ELEMENTS.TAB_DETAILS.TITLE.textContent = name;
    UI_ELEMENTS.TAB_DETAILS.TEMPERATURE.textContent = calculateTemperature(temp);
    UI_ELEMENTS.TAB_DETAILS.FEELS_LIKE.textContent = calculateTemperature(feels_like);
    UI_ELEMENTS.TAB_DETAILS.WEATHER.textContent = weather_info;
    UI_ELEMENTS.TAB_DETAILS.SUNRISE.textContent = moment(convertUnixToDate(sunrise, timezone)).format("HH:mm");
    UI_ELEMENTS.TAB_DETAILS.SUNSET.textContent = moment(convertUnixToDate(sunset, timezone)).format("HH:mm");
}

function showFORECAST({
    city: {name: city_name},
    list} = {})
{
    UI_ELEMENTS.TAB_FORECAST.TITLE.textContent = city_name;
    UI_ELEMENTS.TAB_FORECAST.LIST.innerHTML = "";
        
    list.forEach(({
        dt_txt: date_text,
        main: {temp, feels_like},
        weather: [{main: weather_info, icon}]
    } = {}) => {
        UI_ELEMENTS.TAB_FORECAST.LIST.insertAdjacentHTML('beforeend',
        `<li class="forecast-container">
            <span class="forecast-date">${moment(date_text).format("MMM Do")}</span>
            <span class="forecast-time">${moment(date_text).format("HH:mm")}</span>
            <div class="forecast-details">
                <div>
                    <span>Temperature:</span>
                    <span class="degrees-text-span">${calculateTemperature(temp)}</span>
                    <span class="degree-img-container">
                        <img src="images/degree.svg" alt="degree" class="degree-img">
                    </span>
                </div>
                <div>
                    <span>Feels like:</span>
                    <span class="degrees-text-span">${calculateTemperature(feels_like)}</span>
                    <span class="degree-img-container">
                        <img src="images/degree.svg" alt="degree" class="degree-img">
                    </span>
                </div>
            </div>
            <span class="forecast-weather">${weather_info}</span>
            <img src="${SERVER.ICON + icon}@2x.png" alt="rain" class="forecast-icon">
        </li>`
    )
    });
}

function calculateTemperature(temp_k)
{
    return Math.round(temp_k - 273.15);
}

function convertUnixToDate(timestamp, shift)
{
    return new Date((timestamp + shift) * 1000);
}

export function inputNewCity(event)
{
    let cityName = UI_ELEMENTS.FORM.input.value;
    event.preventDefault();
    UI_ELEMENTS.FORM.input.value = "";
    UI_ELEMENTS.FORM.input.blur();

    storeCityName(cityName);
    chooseNewCity(cityName);
}

export function chooseCityFromFavorites(event)
{
    let cityName = event.currentTarget.textContent;
    storeCityName(cityName);

    chooseNewCity(cityName);
}

export function addCityToFavorites()
{
    try {
        UI_ELEMENTS.TAB_NOW.ADD_ICON.src = "images/heart2.png";

        let cityName = UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent;
    
        if(FAVORITE_CITY_NAMES.includes(cityName)) {
            throw new SyntaxError("City is already in the list");
        }

        FAVORITE_CITY_NAMES.push(cityName);
        let newCity = new FavoriteCity(cityName);
        FAVORITE_CITIES.add(newCity);
        storeFavoriteCities(FAVORITE_CITY_NAMES);

        UI_ELEMENTS.FAVORITE_LOCATIONS.prepend(newCity.element);
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
    
    FAVORITE_CITY_NAMES.splice(
        FAVORITE_CITY_NAMES.indexOf(cityName), 1
    );
    for (let el of FAVORITE_CITIES) {
        if(el.cityName == cityName) {
            FAVORITE_CITIES.delete(el);
            break;
        }
    }

    // console.dir(FAVORITE_CITIES);
    // console.dir(FAVORITE_CITY_NAMES);

    storeFavoriteCities(FAVORITE_CITY_NAMES);

    event.currentTarget.parentNode.remove();

    if(UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent == cityName) {
        UI_ELEMENTS.TAB_NOW.ADD_ICON.src = "images/heart1.png";
    }
}

export function showTabNow()
{
    storeChosenTab('NOW');
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
    storeChosenTab('DETAILS');
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
    storeChosenTab('FORECAST');
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
}