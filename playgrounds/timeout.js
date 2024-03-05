// printNumbers(from, to) -> prints a number every second

// function printNumbers(from, to)
// {
//     let i = from;
//     let timerId = setInterval(function() {
//         alert(i++);
//         if(i > to) clearInterval(timerId);
//     }, 1000);
// }

function printNumbers(from, to)
{
    let i = from;
    let timerId = setTimeout(function print() {
        alert(i++);
        timerId = setTimeout(print, 1000);
        if(i > to) clearTimeout(timerId);
    }, 1000);
}

printNumbers(1, 3);