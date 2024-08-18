const SERVER_URL = 'https://api.genderize.io';
const FORM = document.querySelector('form'); // view.js


function changeUrl(name)
{
    return `${SERVER_URL}/?name=${name}`;
}

function showNameGender(event)
{
    event.preventDefault();
    
    let name = FORM.input.value;
    let url = changeUrl(name);

    FORM.input.value = "";
    FORM.input.blur();

    let promise = fetch(url);

    promise
    .then(result => result.json())
    .then(json => alert(`${name} - ${json.gender}`));
}