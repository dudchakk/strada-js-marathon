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
    }
}

export let favoriteCities = [
    "Amur",
    "Samara",
    "Bali",
    "Dane",
    "Kilo",
    "Nur-Sultan"
];