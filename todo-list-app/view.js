import {addNewTaskHigh, addNewTaskLow, deleteTask, changeTaskStatus} from './main.js';

window.addNewTaskHigh = addNewTaskHigh;
window.addNewTaskLow = addNewTaskLow;
window.deleteTask = deleteTask;
window.changeTaskStatus = changeTaskStatus;

// document.querySelector('form[name="form-high"]').addEventListener('submit', addNewTaskHigh);

export let formHigh = document.forms["form-high"];
export let contHigh = document.querySelector('.container-high');
export let contLow = document.querySelector('.container-low');
export let formLow = document.forms["form-low"];