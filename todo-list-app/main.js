import {formHigh, formLow, contHigh, contLow} from './view.js';

function addNewTask(form)
{
    let container = document.createElement('div');
    container.classList.add('task-cont');

    let ellipse = document.createElement('img');
    ellipse.src = "images/Ellipse.svg";
    ellipse.alt = "ellipse icon";
    ellipse.classList.add('ellipse-icon-image');
    ellipse.addEventListener('click', changeTaskStatus);
    container.append(ellipse);

    let paragraph = document.createElement('p');
    paragraph.textContent = form.input.value;
    paragraph.classList.add('task-text');
    container.append(paragraph);

    let close = document.createElement('img');
    close.src = "images/close-icon.svg";
    close.alt = "close icon";
    close.classList.add('close-icon-image');
    close.addEventListener('click', deleteTask);
    container.append(close);

    return container;
}

export function addNewTaskHigh(event)
{
    let container = addNewTask(formHigh);
    
    contHigh.append(container);
    event.preventDefault();
    formHigh.input.value = "";
    formHigh.input.blur();
}

export function addNewTaskLow(event)
{
    let container = addNewTask(formLow);
    
    contLow.append(container);
    event.preventDefault();
    formLow.input.value = "";
    formLow.input.blur();
}

export function deleteTask(event)
{
    event.currentTarget.parentNode.remove();
}

export function changeTaskStatus(event)
{
    if (event.currentTarget.classList.contains('ellipse-image-done')) 
    {
        event.currentTarget.parentNode.parentNode.classList.remove('task-cont-done');

        event.currentTarget.parentNode.parentNode.prepend(event.currentTarget);
        event.currentTarget.classList.remove('ellipse-image-done');
        
        event.currentTarget.nextElementSibling.firstChild.remove();
        event.currentTarget.nextElementSibling.remove();
    }
    else 
    {
        event.currentTarget.parentNode.classList.add('task-cont-done');
        
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-cont-done');
        event.currentTarget.parentNode.prepend(imgContainer);
        
        event.currentTarget.classList.add('ellipse-image-done');
        imgContainer.append(event.currentTarget);
        
        let grayEllipse = document.createElement('img');
        grayEllipse.src = "images/Ellipse-gray.svg";
        grayEllipse.alt = "gray ellipse";
        grayEllipse.classList.add('ellipse-icon-image', 'gray-ellipse');
        imgContainer.append(grayEllipse);
    }
}