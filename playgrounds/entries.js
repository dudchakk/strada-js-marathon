//  1

function sumSalaries(obj)
{
    let sum = 0;
    for (let value of Object.values(obj)) {
        sum += value;
    }
    return sum;
}

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};
  
// alert( sumSalaries(salaries) );


// 2

function count(obj)
{
    return Object.keys(obj).length;
}

let user = {
    name: 'Іван',
    age: 30
};
  
alert( count(user) );