import {addNewTaskHigh, addNewTaskLow, deleteTask, changeTaskStatus} from './main.js';


export const UI_ELEMENTS = {
    HIGH: {
        FORM: document.forms["form-high"],
        CONTAINER: document.querySelector('.container-high'),
    },
    LOW: {
        FORM: document.forms["form-low"],
        CONTAINER: document.querySelector('.container-low'),
    },
};

export const ICON_SRC = {
    CLOSE: 'images/close-icon.svg',
    ELLIPSE: 'images/Ellipse.svg',
    GRAY_ELLIPSE: 'images/Ellipse-gray.svg',
};


UI_ELEMENTS.HIGH.FORM.addEventListener('submit', addNewTaskHigh);
UI_ELEMENTS.LOW.FORM.addEventListener('submit', addNewTaskLow);

for(let el of document.querySelectorAll('.close-icon-image'))
{
    el.addEventListener('click', deleteTask);
}

for(let el of document.querySelectorAll('.ellipse'))
{
    el.addEventListener('click', changeTaskStatus);
}
