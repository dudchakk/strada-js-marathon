// ввести два числа
// запитати, що хочемо здійснити: +, -, *, /
// вивести значення 

// const prompt = require("prompt-sync")();

const first_value = +prompt("Enter first value: ");
const second_value = +prompt("Enter second value: ");
const operation = prompt("Enter an operation to perform (+, -, *, / or **): ");

function Calc(first_value, second_value, operation)
{
    if(first_value == undefined || second_value == undefined || operation == undefined ||
        !Number.isInteger(first_value) || !Number.isInteger(second_value))
    {
        return "Error: Invalid argument";
    }

    switch(operation)
    {
        case "+":
            return "Sum equals " + (first_value + second_value);
        case "-":
            return "Difference equals " + (first_value - second_value);
        case "*":
            return "Multiplication equals " + (first_value * second_value);
        case "/":
            return "Division equals " + (first_value / second_value);
        case "**":
            return "Pow equals " + (first_value ** second_value);
        default:
            return "Unknown operation";
    }
}

alert(Calc(first_value, second_value, operation));