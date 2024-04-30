// 1

function sumTo(n)
{
    let a1 = 1;

    return (a1 + n) * n / 2;

    // if (n == 1) {
    //     return n;
    // }
    // else {
    //     return n + sumTo(n - 1);
    // }

    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     sum += i;
    // }
    // return sum;
}

// alert( sumTo(4) );


// 2

function factorial(n)
{
    if (n == 1) return n;
    else return n * factorial(n - 1);
}

// alert( factorial(5) );


// 3

function fib(n) 
{
    if (n == 1 || n == 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}

// alert(fib(3));


// 4

function printList(list)
{
    console.log(list.value);
    
    if (!list.next) return;
    else {
        printList(list.next);
    }
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

printList(list);    