// 2

// let answer = prompt("What is an \"official\" name of JavaScript?");

// if(answer == "ECMAScript")
// {
//     alert("Correct!");
// }
// else
// {
//     alert("Don't you know? ECMAScript!");
// }


// 3

// let number = +prompt("Enter a number: ");

// if(number < 0)
// {
//     alert(-1);
// }
// else if(number > 0)
// {
//     alert(1);
// }
// else
// {
//     alert(0);
// }


// 4

// let result;

// result = (a + b < 4) ? "Нижче" : "Вище";


// 5

// let message;

// message = (login == "Працівник") ? "Привіт" :
//     (login == "Директор") ? "Вітаю" :
//     (login == "") ? "Немає логіну" :
//     "";

// -----------

// alert( alert(1) || 2 || alert(3) ); // 1, 2 - alert не повертає значення

// alert( alert(1) && alert(2) ); // 1, undefined

// 

// if(age >= 14 && age <= 90)

// if(age < 14 || age > 90)
// if(!(age >= 14 && age <= 90))

// 

let login = prompt("Enter a login: ");

if(login == "Admin") 
{
    let password = prompt("Enter a password: ");
    if(password == "TheMaster") 
    {
        alert("Welcome!");
    }
    else if (password == '' || password == null) 
    {
        alert("Canceled");
    }
    else 
    {
        alert("Wrong password");
    }
}
else if(login == '' || login == null) 
{
    alert("Canceled");
}
else 
{
    alert("I don't know you");
}