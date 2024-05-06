import { formatDistance } from 'date-fns';

const UI_ELEMENTS = {
    HTML: {
        FORM: document.querySelector('form'),
        DISTANCE: document.querySelector('.distance'),
        BTN_DETAILS: document.querySelector('.btn-more'),
        DETAILS: document.querySelector('.details'),
    },
    OUTPUT: {
        DISTANCE: document.querySelector('.distance span'),
        YEARS: document.querySelectorAll('.details span')[0],
        DAYS: document.querySelectorAll('.details span')[1],
        HOURS: document.querySelectorAll('.details span')[2],
    },
};

UI_ELEMENTS.HTML.FORM.addEventListener('submit', submitForm);
UI_ELEMENTS.HTML.BTN_DETAILS.addEventListener('click', showDetails);


function submitForm(event)
{
    countApproximateDistance(UI_ELEMENTS.HTML.FORM.input.value);
    countExactDistance(UI_ELEMENTS.HTML.FORM.input.value);

    UI_ELEMENTS.HTML.DISTANCE.classList.remove('hide');
    UI_ELEMENTS.HTML.BTN_DETAILS.classList.remove('hide');

    event.preventDefault();
    UI_ELEMENTS.HTML.FORM.input.value = "";
    UI_ELEMENTS.HTML.FORM.input.blur();
}

function countApproximateDistance(date)
{
    let inputedDate = new Date(Date.parse(date));
    let nowDate = new Date(Date.now());

    let formattedDistance = formatDistance(inputedDate, nowDate);
    
    UI_ELEMENTS.OUTPUT.DISTANCE.textContent = formattedDistance;
}

function showDetails()
{
    if (UI_ELEMENTS.HTML.BTN_DETAILS.textContent == "Show more") {
        UI_ELEMENTS.HTML.BTN_DETAILS.textContent = "Show less";
        UI_ELEMENTS.HTML.DETAILS.classList.remove('hide');
    }
    else {
        UI_ELEMENTS.HTML.BTN_DETAILS.textContent = "Show more";
        UI_ELEMENTS.HTML.DETAILS.classList.add('hide');
    }
}

const MS_PER_HOUR = 1000 * 60 * 60;
const MS_PER_DAY = 1000 * 60 * 60 * 24;

function countExactDistance(date)
{
    let inputedDate = new Date(Date.parse(date));
    let nowDate = new Date(Date.now());

    let distance = Math.abs(inputedDate - nowDate);
    let distanceDate = new Date(distance);

    // alert(distance.getFullYear());

    UI_ELEMENTS.OUTPUT.YEARS.textContent = distanceDate.getFullYear() - 1970;
    UI_ELEMENTS.OUTPUT.DAYS.textContent = Math.floor(distance / MS_PER_DAY);
    UI_ELEMENTS.OUTPUT.HOURS.textContent = Math.floor(distance / MS_PER_HOUR);
}