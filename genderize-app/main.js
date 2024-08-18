import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

import { SERVER_URL, FORM } from './view';

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
    let jsx = <div />

    promise
    .then(result => result.json())
    .then(json => alert(`${name} - ${json.gender}`));
}