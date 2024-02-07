// const prompt = require("prompt-sync")();

let properties = {
    sum: "+",
    sub: "-",
    mult: "*",
    div: "/",
}

function returnErrorCalc()
{
    if(!Number.isInteger(value1) || !Number.isInteger(value2) || !oper)
    {
        return "Error: Invalid argument";
    }
    if(oper == "div" && value2 == 0)
    {
        return "Error: Division by zero";
    }
}

function Calc(value1, value2, oper)
{
    errorRes = returnErrorCalc(value1, value2, oper);
    if(errorRes != undefined)
    {
        return errorRes;
    }

    oper = properties[oper];
    switch(oper)
    {
        case "+":
            return "Sum equals " + (value1 + value2);
        case "-":
            return "Diff equals " + (value1 - value2);
        case "*":
            return "Multi equals " + (value1 * value2);
        case "/":
            return "Div equals " + (value1 / value2);
        // case "%":
        //     return "Rem equals " + (value1 % value2);
        // case "**":
        //     return "Pow equals " + (value1 ** value2);
        default:
            return "Unknown operation";
    }
}

value1 = prompt("Enter first value: ");
value1 = +value1 || undefined;

value2 = prompt("Enter second value: ");
value2 = +value2 || undefined;

oper = prompt("Enter an operation to perform (sum, sub, mult or div): ");

console.log(Calc(value1, value2, oper));