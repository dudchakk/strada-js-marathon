import {addNewTaskHigh, addNewTaskLow} from './main.js';

window.addNewTaskHigh = addNewTaskHigh;
window.addNewTaskLow = addNewTaskLow;
// document.querySelector('form[name="form-high"]').addEventListener('onsubmit', addNewTaskHigh(event));

export let formHigh = document.forms["form-high"];
export let contHigh = document.querySelector('.container-high');
export let contLow = document.querySelector('.container-low');
export let formLow = document.forms["form-low"];