// ввести два числа
// запитати, що хочемо здійснити: +, -, *, /
// вивести значення 

const prompt = require("prompt-sync")();

const first_value = +prompt("Enter first value: ");
const second_value = +prompt("Enter second value: ");
const operation = prompt("Enter an operation to perform (+, -, * or /): ");

if(!Number.isInteger(first_value) || !Number.isInteger(second_value))
{
    throw("Invalid value: must be number");
}

switch(operation)
{
    case "+":
        console.log("Sum equals ", first_value + second_value);
        break;
    case "-":
        console.log("Difference equals ", first_value - second_value);
        break;
    case "*":
        console.log("Multiplication equals ", first_value * second_value);
        break;
    case "/":
        console.log("Division equals ", first_value / second_value);
        break;
    default:
        throw("Invalid operation");
}
