// 4: output even values from 2 to 10, for loop

// for(let i = 2; i < 11; i++)
// {
//     if(i % 2 == 1) continue;
//     console.log(i);
// }


// // 5

// for (let i = 0; i < 3; i++) {
//     alert( `число ${i}!` );
// }

// let i = 0;
// while(i < 3)
// {
//     alert( `число ${i}!` );
//     i++;
// }

// 6

// let number;
// do {
//     number = +prompt("Enter a number > 100: ");
// } while (number <= 100 && number)


// 7: output all prime numbers in the range from 2 to n

/*
- цикл від 2 до n
- вкладений цикл: від 2 до i, якщо є якесь число, що i ділиться на нього, то break
- оптимізація: перевіряти до кореня з і
*/

// let n = 10;
// outer: for(let i = 2; i <= n; i++)
// {
//     let sqrtForCheck = Math.floor(i ** (1/2));
//     for(let j = 2; j <= sqrtForCheck; j++)
//     {
//         if(i % j == 0) continue outer;
//     }
//     console.log(i);
// }