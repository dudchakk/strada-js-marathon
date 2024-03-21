let operation_calc = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mult: (a, b) => a * b,
    div: (a, b) => a / b,
}

let operation_print = {
    sum: "+",
    sub: "-",
    mult: "×",
    div: "÷",
}

let expHTML = document.querySelector(".numbers-expression");
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
    expHTML.textContent = expression;
}

function inputPush(value)
{
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

function inputDeleteAll()
{
    expHTML.textContent = "";
    expression = "";
    input = [];
    number = "";
}

function inputRemoveOne()
{
    console.log(input);
    expHTML.textContent = expHTML.textContent.slice(0, expHTML.textContent.length - 1);
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
    if ((!value1 || !value2) 
        && !(value2 && (oper == "sum" || oper == "sub"))) {
        return "Error: Invalid argument";
    }
    if(oper == "div" && +value2 == 0)
    {
        return "Error: Division by zero";
    }
}

function Calculate(value1, value2)
{
    inputPush("=");
    
    value1 = input[0];
    oper = input[1];
    value2 = input[2];

    error = returnError(value1, value2, oper);
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
    
    expHTML.textContent = res;
}