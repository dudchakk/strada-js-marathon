import {chooseNewCity, showTabNow, showTabDetails, showTabForecast} from './main.js';

document.querySelector('form').addEventListener('submit', chooseNewCity);

document.querySelector('#button-now').addEventListener('click', showTabNow);
document.querySelector('#button-details').addEventListener('click', showTabDetails);
document.querySelector('#button-forecast').addEventListener('click', showTabForecast);

export let form = document.querySelector('form');
export let currentCity = document.querySelector('footer').firstElementChild;
export let tempNow = document.querySelector('.degrees-text');

export const BUTTONS = {
    BTN_NOW: document.querySelector('#button-now'),
    BTN_DETAILS: document.querySelector('#button-details'),
    BTN_FORECAST: document.querySelector('#button-forecast'),
}

export const TABS = {
    NOW: document.querySelector('.tab-now'),
    DETAILS: document.querySelector('.tab-details'),
    FORECAST: document.querySelector('.tab-forecast'),
}