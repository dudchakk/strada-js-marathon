const serverUrl1 = 'https://api.genderize.io';
const form = document.querySelector('form');


function changeUrl(name)
{
    return `${serverUrl1}/?name=${name}`;
}

function showNameGender(event)
{
    event.preventDefault();
    
    let name = form.input.value;
    let url = changeUrl(name);

    form.input.value = "";
    form.input.blur();

    let promise = fetch(url);

    promise.then(result => result.json())
        .then(function(json) {
            alert(`${name} - ${json.gender}`);
        });
}