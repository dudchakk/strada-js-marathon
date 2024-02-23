// 

// let styles = ["Jazz", "Blues"];
// console.log(styles);

// styles.push("Rock-n-Roll");
// console.log(styles);

// styles[(styles.length - 1) / 2] = "Classics";
// console.log(styles);

// styles.shift();
// console.log(styles);

// styles.unshift("Rap", "Reggae");
// console.log(styles);


// 

function sumInput()
{
    let arr = [], num, i = 0;

    num = prompt("Enter a number");
    while(num != null && num != '' && isFinite(num))
    {
        arr[i] = +num;
        i++;
        num = prompt("Enter a number");
    }

    let sum = 0;
    for(let el of arr)
    {
        sum += el;
    }

    return sum;
}

// console.log(sumInput());


/*
-
*/

function getMaxSubSum(arr)
{
    let maxsum = 0;
    for(let i = 0; i < arr.length - 1; i++)
    {
        let cursum = arr[i];
        for(let j = i + 1; j < arr.length; j++)
        {
            if(maxsum < cursum) maxsum = cursum;
            cursum += arr[j];
        }
    }

    return maxsum;
}

// console.log(getMaxSubSum([-1, -2, -3]));

// 

function camelize(str)
{
    let arr = str
    .split("-")
    .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1))
    .join("");

    return arr;
}

// console.log(camelize("-webkit-transition"));

// array of >= a && <= b

function filterRange(arr, a, b)
{
    return arr.filter((item) => item >= a && item <= b);
}

// let arr = [5, 3, 8, 1];
// console.log(filterRange( arr, 1, 4));

// 

function filterRangeInPlace(arr, a, b)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] < a || arr[i] > b)
        {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// 

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);


// 

function copySorted(arr)
{
    let arr1 = arr.slice();
    arr1.sort((a, b) => a.localeCompare(b));
    return arr1;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr );