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