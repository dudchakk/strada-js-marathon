import {UI_ELEMENTS, ICON_SRC} from './view.js';
import { format } from "date-fns";


function addDeadline()
{
    let dateStr = prompt("Enter deadline:", "dd-mm-yyyy");
    alert(`Deadline: ${format(dateStr, 'do MMM yyyy')}`);
}

function addNewTask(form)
{
    try {
        if(form.input.value == "") {
            throw new SyntaxError("Task can't be empty");
        }
        
        addDeadline();

        let container = document.createElement('div');
        container.classList.add('task-cont');
        container.innerHTML = `
            <div class="img-cont-done">
                <img src=${ICON_SRC.ELLIPSE} alt="ellipse icon" class="ellipse">
                <img src=${ICON_SRC.GRAY_ELLIPSE} alt="ellipse icon" class="gray-ellipse hide">
            </div>
            <p class="task-text">
                ${form.input.value}
            </p>
            <img src=${ICON_SRC.CLOSE} alt="close icon" class="close-icon-image">
        `;
        
        container.querySelectorAll('img')[0].addEventListener('click', changeTaskStatus);
        container.querySelectorAll('img')[2].addEventListener('click', deleteTask);

        return container;
    }
    catch(err) {
        // if (err instanceof SyntaxError) 
        // {
            alert(err.message + "!");
            throw new SyntaxError("Trying to create an empty task");
        // }
        // else throw err;
    }
}

function addNewTaskHigh(event)
{
    try {
        UI_ELEMENTS.HIGH.CONTAINER.append(
            addNewTask(UI_ELEMENTS.HIGH.FORM)
        );
        
        event.preventDefault();
        UI_ELEMENTS.HIGH.FORM.input.value = "";
        UI_ELEMENTS.HIGH.FORM.input.blur();
    }
    catch(err) {
        // if (err instanceof SyntaxError) 
        // {
            return;
        // }
        // else throw err;
    }
}

function addNewTaskLow(event)
{
    try {
        UI_ELEMENTS.LOW.CONTAINER.append(
            addNewTask(UI_ELEMENTS.LOW.FORM)
        );
        
        event.preventDefault();
        UI_ELEMENTS.LOW.FORM.input.value = "";
        UI_ELEMENTS.LOW.FORM.input.blur();
    }
    catch(err) {
        if (err instanceof SyntaxError) 
        {
            return;
        }
        else throw err;
    }
}

function deleteTask(event)
{
    event.currentTarget.parentNode.remove();
}

function changeTaskStatus(event)
{
    let ellipse = event.currentTarget;

    if (ellipse.nextElementSibling.classList.contains('hide')) 
    {
        ellipse.parentNode.parentNode.classList.add('task-cont-done');
        ellipse.nextElementSibling.classList.remove('hide');
    }
    else {
        
        ellipse.parentNode.parentNode.classList.remove('task-cont-done');
        ellipse.nextElementSibling.classList.add('hide');
    }
}


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