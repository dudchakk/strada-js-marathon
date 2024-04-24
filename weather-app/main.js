import { FAVORITE_CITIES, UI_ELEMENTS, SERVER } from "./view.js";


showInfo();

function showInfo()
{
    if(localStorage.getItem('favorite_cities')) {
        FAVORITE_CITIES.length = 0;
        FAVORITE_CITIES.push(...localStorage.getItem('favorite_cities').split(','));
        console.dir(FAVORITE_CITIES);
    }

    UI_ELEMENTS.FAVORITE_LOCATIONS.innerHTML = "";
    FAVORITE_CITIES.forEach(item => {
        UI_ELEMENTS.FAVORITE_LOCATIONS.insertAdjacentHTML('beforeend', 
        `<li>
            <span>${item}</span>
            <img src="images/close-icon.svg" alt="close" class="close-icon">
        </li>`
        );
    });

    for (let el of document.querySelectorAll('.locations-list li span'))
    {
        el.addEventListener('click', chooseCityFromFavorites);
    }

    if(localStorage.getItem('city_name')) {
        let cityName = localStorage.getItem('city_name');
        chooseNewCity(cityName);
    }
    else {
        let cityName = UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent;
        chooseNewCity(cityName);
    }

    
}

export function inputNewCity(event)
{
    let cityName = UI_ELEMENTS.FORM.input.value;
    event.preventDefault();
    UI_ELEMENTS.FORM.input.value = "";
    UI_ELEMENTS.FORM.input.blur();

    localStorage.setItem('city_name', cityName);
    chooseNewCity(cityName);
}

function chooseNewCity(cityName)
{
    if(FAVORITE_CITIES.includes(cityName)) {
        UI_ELEMENTS.TAB_NOW.ADD_ICON.src = "images/heart2.png";
    }
    else {
        UI_ELEMENTS.TAB_NOW.ADD_ICON.src = "images/heart1.png";
    }

    let url = `${SERVER.WEATHER}?q=${cityName}&appid=${SERVER.API_KEY}`;

    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(({
        name,
        main: {temp, feels_like},
        sys: {sunrise, sunset},
        timezone,
        weather: [{main: weather_info, icon}]
        } = {}) => {
        UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent = name;
        UI_ELEMENTS.TAB_NOW.CITY_TEMPERATURE.textContent = calculateTemperature(temp);
        UI_ELEMENTS.TAB_NOW.WEATHER_ICON.src = `${SERVER.ICON + icon}@2x.png`;
        // console.dir(json);

        UI_ELEMENTS.TAB_DETAILS.TITLE.textContent = name;
        UI_ELEMENTS.TAB_DETAILS.TEMPERATURE.textContent = calculateTemperature(temp);
        UI_ELEMENTS.TAB_DETAILS.FEELS_LIKE.textContent = calculateTemperature(feels_like);
        UI_ELEMENTS.TAB_DETAILS.WEATHER.textContent = weather_info;
        UI_ELEMENTS.TAB_DETAILS.SUNRISE.textContent = moment(convertUnixToDate(sunrise, timezone)).format("HH:mm");
        UI_ELEMENTS.TAB_DETAILS.SUNSET.textContent = moment(convertUnixToDate(sunset, timezone)).format("HH:mm");
    })
    .catch(error => alert(error.message));
}

function calculateTemperature(temp_k)
{
    return Math.round(temp_k - 273.15);
}

function convertUnixToDate(timestamp, shift)
{
    return new Date((timestamp + shift) * 1000);
}

export function showForecast()
{
    let cityName = UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent;

    let url = `${SERVER.FORECAST}?q=${cityName}&appid=${SERVER.API_KEY}`;

    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    })
    .then(({
        city: {name: city_name},
        list,
    } = {}) => {
        // console.dir(json);
        UI_ELEMENTS.TAB_FORECAST.TITLE.textContent = city_name;
        
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
    })
    .catch(error => alert(error.message));
}

export function chooseCityFromFavorites(event)
{
    let cityName = event.currentTarget.textContent;
    localStorage.setItem('city_name', cityName);

    chooseNewCity(cityName);
}

export function addFavoriteCity()
{
    try {
        UI_ELEMENTS.TAB_NOW.ADD_ICON.src = "images/heart2.png";

        let cityName = UI_ELEMENTS.TAB_NOW.CITY_NAME.textContent;
    
        if(FAVORITE_CITIES.includes(cityName)) {
            throw new SyntaxError("City is already in the list");
        }
        FAVORITE_CITIES.unshift(cityName);
        localStorage.setItem('favorite_cities', FAVORITE_CITIES);

        UI_ELEMENTS.FAVORITE_LOCATIONS.insertAdjacentHTML('afterbegin', 
        `<li>
            <span>${cityName}</span>
            <img src="images/close-icon.svg" alt="close" class="close-icon">
        </li>`
    );
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
    FAVORITE_CITIES.splice(FAVORITE_CITIES.indexOf(cityName));
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