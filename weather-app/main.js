import { UI_ELEMENTS, favoriteCities } from "./view.js";

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

function chooseNewCity(city)
{
    const serverUrl1 = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    let url = `${serverUrl1}?q=${city}&appid=${apiKey}`;

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
}