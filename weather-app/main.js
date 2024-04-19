import { form, currentCity, tempNow, BUTTONS, TABS } from "./view.js";

// showTabDetails();

export function chooseNewCity(event) 
{
    const city = form.input.value;
    event.preventDefault();
    form.input.value = "";
    form.input.blur();

    const serverUrl1 = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl1}?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        // .then(json => console.log(json));
        .then(json => {
            currentCity.textContent = json.name;
            tempNow.textContent = json.main.temp;
        });
}

export function showTabNow()
{
    BUTTONS.BTN_NOW.className = '';
    BUTTONS.BTN_DETAILS.className = '';
    BUTTONS.BTN_FORECAST.className = '';

    BUTTONS.BTN_NOW.classList.add('black-tab');
    BUTTONS.BTN_DETAILS.classList.add('white-tab');
    BUTTONS.BTN_FORECAST.classList.add('white-tab', 'border-left');

    TABS.NOW.classList.remove('remove-tab');
    if(!TABS.DETAILS.classList.contains('remove-tab')) {
        TABS.DETAILS.classList.add('remove-tab');
    }
    else {
        TABS.FORECAST.classList.add('remove-tab');
    }
}

export function showTabDetails()
{
    BUTTONS.BTN_NOW.className = '';
    BUTTONS.BTN_DETAILS.className = '';
    BUTTONS.BTN_FORECAST.className = '';

    BUTTONS.BTN_NOW.classList.add('white-tab');
    BUTTONS.BTN_DETAILS.classList.add('black-tab');
    BUTTONS.BTN_FORECAST.classList.add('white-tab');

    TABS.DETAILS.classList.remove('remove-tab');
    if(!TABS.NOW.classList.contains('remove-tab')) {
        TABS.NOW.classList.add('remove-tab');
    }
    else {
        TABS.FORECAST.classList.add('remove-tab');
    }
}

export function showTabForecast()
{
    BUTTONS.BTN_NOW.className = '';
    BUTTONS.BTN_DETAILS.className = '';
    BUTTONS.BTN_FORECAST.className = '';

    BUTTONS.BTN_NOW.classList.add('white-tab');
    BUTTONS.BTN_DETAILS.classList.add('white-tab', 'border-left');
    BUTTONS.BTN_FORECAST.classList.add('black-tab');

    TABS.FORECAST.classList.remove('remove-tab');
    if(!TABS.NOW.classList.contains('remove-tab')) {
        TABS.NOW.classList.add('remove-tab');
    }
    else {
        TABS.DETAILS.classList.add('remove-tab');
    }
}