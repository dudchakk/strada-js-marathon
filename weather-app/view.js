import {showTabNow, showTabDetails, showTabForecast, 
    inputNewCity, addFavoriteCity, chooseCityFromFavorites, deleteCityFromFavorites} from './main.js';

document.querySelector('form').addEventListener('submit', inputNewCity);
document.querySelector('.heart-icon').addEventListener('click', addFavoriteCity);

document.querySelector('#button-now').addEventListener('click', showTabNow);
document.querySelector('#button-details').addEventListener('click', showTabDetails);
document.querySelector('#button-forecast').addEventListener('click', showTabForecast);

for (let el of document.querySelectorAll('.locations-list li span'))
{
    el.addEventListener('click', chooseCityFromFavorites);
}

for (let el of document.querySelectorAll('.close-icon'))
{
    el.addEventListener('click', deleteCityFromFavorites);
}


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
}

export const SERVER = {
    WEATHER:'http://api.openweathermap.org/data/2.5/weather',
    FORECAST: 'http://api.openweathermap.org/data/2.5/forecast',
    API_KEY: 'f660a2fb1e4bad108d6160b7f58c555f',
    ICON: 'https://openweathermap.org/img/wn/',
}

export let FAVORITE_CITIES = [
    "London",
    "Kyiv",
    "Madrid",
    "Rome",
    "Berlin",
    "Rio de Janeiro"
];