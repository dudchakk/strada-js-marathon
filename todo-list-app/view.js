import {addNewTaskHigh, addNewTaskLow, deleteTask} from './main.js';

window.addNewTaskHigh = addNewTaskHigh;
window.addNewTaskLow = addNewTaskLow;
window.deleteTask = deleteTask;
// document.querySelector('form[name="form-high"]').addEventListener('submit', addNewTaskHigh(event));

export let formHigh = document.forms["form-high"];
export let contHigh = document.querySelector('.container-high');
export let contLow = document.querySelector('.container-low');
export let formLow = document.forms["form-low"];