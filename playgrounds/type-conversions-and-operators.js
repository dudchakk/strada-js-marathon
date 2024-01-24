let var1 = Number(" 12 23");
// alert(var1);

// alert(-1 + 2 + '0');

let cnt = 1;
let a = cnt++; //1   
let b = ++cnt; //3
// alert(a + '' + b);

let c = (1 + 1, 2 + 2);
// alert(c);

// 1:

let a1 = 1, b1 = 1;

let c1 = ++a1; // ?
let d = b1++; // ?
// alert(c1 + " " + d);

//  2:

let a2 = 2;
let x = 1 + (a2 *= 2) //5
alert(x);

// 3:

console.log("" + 1 + 0);   // 10
console.log("" - 1 + 0);   // -1
console.log(true + false); // 1
console.log(6 / "3");      // 2
console.log("2" * "3");    // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5);  // $45
console.log("4" - 2);      // 2
console.log("4px" - 2);    // NaN
console.log("  -9  " + 5); //   -9  5
console.log("  -9  " - 5); // -14
console.log(null + 1);     // 1
console.log(undefined + 1);// NaN
console.log(" \t \n" - 2); // -2