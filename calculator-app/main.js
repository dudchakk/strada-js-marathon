import { changeExpression } from "./view.js";


let operation_calc = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
};

let operation_print = {
    sum: "+",
    sub: "-",
    mult: "×",
    div: "÷",
};

// переписати input на об'єкт
let input = []; // 0 - value1, 1 - oper, 2 - value2
let number = "";
let expression = "";


function printExpression(value)
{
    if(value in operation_calc) {
        expression += operation_print[value];
    }
    else {
        expression += value;
    }
    changeExpression(expression);
}

export function inputPush(value)
{
    console.log(value);
    printExpression(value);

    if (value in operation_calc || value == "=") {
        input.push(number);
        number = "";
        input.push(value);
    }
    else {
        number += value;
    }
    console.log(input);
}

export function inputDeleteAll()
{
    changeExpression("");
    expression = "";
    input = [];
    number = "";
}

export function inputRemoveOne()
{
    console.log(input);
    changeExpression(expression.slice(0, expression.length - 1));
    expression = expression.slice(0, expression.length - 1);

    if (number == "") {
        input.pop();
        number = input.pop();
    }
    else if(number.length > 1) {
        number = number.slice(0, number.length - 1);
    }
    else {
        number = "";
    }
    console.log(input);
}

function returnError(value1, value2, oper)
{
    // написати перевірку з sum i sub через константу, бо неясно що це таке
    if ((!value1 || !value2) 
        && !(value2 && (oper == "sum" || oper == "sub"))) {
        return "Error: Invalid argument";
    }
    // тут так само константу
    if(oper == "div" && +value2 == 0)
    {
        return "Error: Division by zero";
    }
}

export function Calculate()
{
    // константа замість "="
    inputPush("=");
    
    let value1 = input[0];
    let oper = input[1];
    let value2 = input[2];

    let error = returnError(value1, value2, oper);
    if (error) {
        expHTML.textContent = "error";
        console.log(error);
        return;
    }

    value1 = +value1, value2 = +value2; 

    let res = operation_calc[oper](value1, value2);
    
    number = String(res);
    expression = String(res);
    input = [];
    
    changeExpression(res);
}