import { FavoriteCityElement } from "./view.js";
import {
    storeFavoriteCities, getFavoriteCities,
    storeCityName, getCityName,
    storeChosenTab, getChosenTab
} from './store.js';
import moment from "moment";

// console.dir(document.cookie);

export const UI_ELEMENTS = {    
    FORM: document.querySelector('form'),
    FAVORITE_LOCATIONS: document.querySelector('.locations-list'),
    BUTTONS: {
        NOW: document.querySelector('#button-now'),
        DETAILS: document.querySelector('#button-details'),
        FORECAST: document.querySelector('#button-forecast'),
    },
    TABS: {
        NOW: document.querySelector('.tab-now'),
        DETAILS: document.querySelector('.tab-details'),
        FORECAST: document.querySelector('.tab-forecast'),
    },
    TAB_NOW: {
        CITY_NAME: document.querySelector('footer').firstElementChild,
        CITY_TEMPERATURE: document.querySelector('.degrees-text'),
        ADD_ICON: document.querySelector('.heart-icon'),
        WEATHER_ICON: document.querySelector('.icon-now'),
    },
    TAB_DETAILS: {
        TITLE: document.querySelector('.title-details'),
        TEMPERATURE: document.querySelectorAll('.details-list li')[0].querySelectorAll('span')[1],
        FEELS_LIKE: document.querySelectorAll('.details-list li')[1].querySelectorAll('span')[1],
        WEATHER: document.querySelectorAll('.details-list li')[2].querySelectorAll('span')[1],
        SUNRISE: document.querySelectorAll('.details-list li')[3].querySelectorAll('span')[1],
        SUNSET: document.querySelectorAll('.details-list li')[4].querySelectorAll('span')[1],
    },
    TAB_FORECAST: {
        TITLE: document.querySelectorAll('.title-details')[1],
        LIST: document.querySelectorAll('.title-details')[1].nextElementSibling,
    }
};

export const SERVER = {
    WEATHER:'http://api.openweathermap.org/data/2.5/weather',
    FORECAST: 'http://api.openweathermap.org/data/2.5/forecast',
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
    ICON: 'https://openweathermap.org/img/wn/',
}

export let FAVORITE_CITIES = new Map();


showInfo();

function showInfo()
{
    if(getFavoriteCities()) {
        FAVORITE_CITIES.clear();
        
        getFavoriteCities().split(',')
        .forEach(el => {
            FAVORITE_CITIES.set(el, new FavoriteCityElement(el));
        });
        
        // console.dir(FAVORITE_CITIES);
    }

    UI_ELEMENTS.FAVORITE_LOCATIONS.innerHTML = "";
    FAVORITE_CITIES.values().forEach(item => {
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

    if(FAVORITE_CITIES.has(city_name)) {
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
    
        if(FAVORITE_CITIES.has(cityName)) {
            throw new SyntaxError("City is already in the list");
        }

        let newCity = new FavoriteCityElement(cityName);
        FAVORITE_CITIES.set(cityName, newCity);
        storeFavoriteCities([...FAVORITE_CITIES.keys()]);

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
    
    FAVORITE_CITIES.delete(cityName);

    // console.dir(FAVORITE_CITIES);

    storeFavoriteCities([...FAVORITE_CITIES.keys()]);

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