import {addNewTaskHigh, addNewTaskLow, deleteTask, changeTaskStatus} from './main.js';

// window.addNewTaskHigh = addNewTaskHigh;
// window.addNewTaskLow = addNewTaskLow;
// window.deleteTask = deleteTask;
// window.changeTaskStatus = changeTaskStatus;

document.querySelector('form[name="form-high"]').addEventListener('submit', addNewTaskHigh);
document.querySelector('form[name="form-low"]').addEventListener('submit', addNewTaskLow);

for(let el of document.querySelectorAll('.close-icon-image'))
{
    el.addEventListener('click', deleteTask);
}

for(let el of document.querySelectorAll('.ellipse-icon-image'))
{
    el.addEventListener('click', changeTaskStatus);
}

export let formHigh = document.forms["form-high"];
export let contHigh = document.querySelector('.container-high');
export let contLow = document.querySelector('.container-low');
export let formLow = document.forms["form-low"];