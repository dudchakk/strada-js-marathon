// import {addNewTaskHigh, addNewTaskLow, deleteTask, changeTaskStatus} from './main.js';

// document.querySelector('form[name="form-high"]').addEventListener('submit', addNewTaskHigh);
// document.querySelector('form[name="form-low"]').addEventListener('submit', addNewTaskLow);

// for(let el of document.querySelectorAll('.close-icon-image'))
// {
//     el.addEventListener('click', deleteTask);
// }

// for(let el of document.querySelectorAll('.ellipse-icon-image'))
// {
//     el.addEventListener('click', changeTaskStatus);
// }

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
    CLOSE: './assets/img/close-icon.svg',
    ELLIPSE: './assets/img/ellipse.svg',
    GRAY_ELLIPSE: './assets/img/ellipse-gray.svg',
};