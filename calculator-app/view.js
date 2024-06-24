import {inputPush, inputDeleteAll, inputRemoveOne, Calculate} from './main.js';

window.inputPush = inputPush;
window.inputDeleteAll = inputDeleteAll;
window.inputRemoveOne = inputRemoveOne;
window.Calculate = Calculate;


let expHTML = document.querySelector(".calc-header");

export function changeExpression(exp)
{
    // console.log(exp);
    expHTML.textContent = exp;
}