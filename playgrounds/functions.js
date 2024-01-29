// 2

function checkAge(age)
{
    return ((age > 18) ? true : confirm("Батьки дозволили?"));

    return (age > 18) || confirm("Батьки дозволили?");
}

// 3

function min(a, b)
{
    return (a < b) ? a : b;
}

// 4

function pow(x, n)
{
    if(checkNatural(n))
    {
        return x ** n;
    }
    return "Error: n must be natural";
}

function checkNatural(n)
{
    if(n < 1)
    {
        return false;
    }
    n_rounded = Math.round(n);
    return n_rounded == n;
}

let x = +prompt("Введіть х: ", 0);
let n = +prompt("Введіть n: ", 1);

alert(pow(x, n));