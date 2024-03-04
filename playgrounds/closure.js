// sum(a)(b) = a + b

function sum(a)
{
    return function(b) {return a + b;};
}

// console.log(sum(1)(2));


// arr.filter(inBetween(3,6)), arr.filter(inArray([1,2,3]))

function inBetween(a, b)
{
    return function(x) { 
        return x >= a && x <= b; 
    };
}

function inArray(arr)
{ 
    return function(x) {
        return arr.includes(x); 
    };
}

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2


// users.sort(byField('name'))

function byField(field)
{
    return function(a, b) {
        a[field] > b[field] ? 1 : -1; 
    }
}

// let users = [
//     { name: "Іван", age: 20, surname: "Іванов" },
//     { name: "Петро", age: 18, surname: "Петров" },
//     { name: "Енн", age: 19, surname: "Гетевей" }
//   ];

// users.sort(byField('name'));
// console.log(users);
// users.sort(byField('age'));
// console.log(users);


// shooters

function makeArmy() {
    let shooters = [];
    let i = 0;

    while (i < 10) {
        let j = i;
        let shooter = function() { 
            alert(j);
        };
        
        shooters.push(shooter);
        i++;
    }
    
    // console.log(shooters);
    return shooters;
  }
  
  let army = makeArmy();
  

  army[0]();
  army[1]();
  army[2]();