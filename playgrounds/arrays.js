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
    let arr = [];
    let num = prompt("Enter a number");
    
    while(num != null && num != '' && isFinite(num))
    {
        arr.push(+num);
        num = prompt("Enter a number");
    }

    let sum = 0;
    for(let el of arr)
    {
        sum += el;
    }

    return sum;
}

console.log(sumInput());


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

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr );

// 


function Calculator(str)
{
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = function(str) {
        let arr = str.split(" ");
        let num1 = +arr[0];
        let op = arr[1];
        let num2 = +arr[2];

        return this.methods[op](num1, num2);
    }

    this.addMethod = function(op, func) {
        this.methods[op] = func;
    }
}

// let calc = new Calculator;
// console.log(calc.calculate("1 - 2"));
// calc.addMethod("*", (a, b) => a * b);
// console.log(calc.calculate("2 * 3"));


// names

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let users = [ ivan, petro, mariya ];

// let names = users.map((item) => item.name);

// console.log( names ); // Іван, Петро, Марія


// surnames

// let ivan = { name: "Іван", surname: "Іванко", id: 1 };
// let petro = { name: "Петро", surname: "Петренко", id: 2 };
// let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

// let users = [ ivan, petro, mariya ];

// let usersMapped = users.map((item) => ({
//     fullName: item.name + " " + item.surname,
//     id: item.id,
// }));

// console.log(usersMapped);

/*
usersMapped = [
  { fullName: "Іван Іванко", id: 1 },
  { fullName: "Петро Петренко", id: 2 },
  { fullName: "Марія Мрійко", id: 3 }
]
*/

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // Іван Іванко

// 

function sortByAge(users)
{
    users.sort((a, b) => a.age - b.age);
}

// let ivan = { name: "Іван", age: 25 };
// let petro = { name: "Петро", age: 30 };
// let mariya = { name: "Марія", age: 28 };

// let arr = [ petro, ivan, mariya ];

// sortByAge(arr);

// // now: [ivan, mariya, petro]
// alert(arr[0].name); // Іван
// alert(arr[1].name); // Марія
// alert(arr[2].name); // Петро


// 

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) 
    {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

// 

function getAverageAge(users)
{
    let sum = users.reduce((accumulator, item) => accumulator + item.age, 0);
    return sum / users.length;
}

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// 

function unique(arr)
{
    let uniqueArr = [];
    arr.map((item) => {
        if(!uniqueArr.includes(item))
        {
            uniqueArr.push(item);
            return;
        }
    });
    return uniqueArr;
}

// let strings = ["Привіт", "Світ", "Привіт", "Світ",
//   "Привіт", "Привіт", "Світ", "Світ", ":-O"
// ];

// console.log( unique(strings) ); // Привіт, Світ, :-O


// 

function groupById(arr)
{
    let usersById = arr.reduce((usersById, item) => {
        usersById[item.id] = item;
        return usersById;
    }, {});
    return usersById;
}

// let users = [
//     {id: 'іван', name: "Іван Іванко", age: 20},
//     {id: 'ганна', name: "Ганна Іванко", age: 24},
//     {id: 'петро', name: "Петро Петренко", age: 31},
//   ];
  
// let usersById = groupById(users);
// console.log(usersById); 