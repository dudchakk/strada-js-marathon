/*
- type: + prompt, check ifNaN
*/

// let a = +prompt("First number", 0);
// let b = +prompt("Second number", 0);

// if(isNaN(a) || isNaN(b)) console.log("Type error");
// else console.log(a + b);


/* */

function readNumber()
{
    let a;
    do {
        a = +prompt("Enter a number");
    }
    while(isNaN(a))

    if(a == undefined) return null;

    return a;
}

// console.log(readNumber());


/* */

function random(min, max)
{
    return Math.random() * (max - min) + min;
}

// console.log( random(1, 5) );
// console.log( random(1, 5) );
// console.log( random(1, 5) );


/* from min - 0.5 to max + 0.5 */

function randomInteger(min, max)
{
    return Math.round(Math.random() * (max - min + 1) + min - 0.5);
}

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) );
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) );